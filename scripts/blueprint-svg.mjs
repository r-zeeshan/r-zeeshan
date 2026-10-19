// Shared SVG pieces for the Blueprint share images and icons (docs/design/blueprint/DESIGN.md).
// Fonts: Work Sans, Caveat and IBM Plex Mono are bundled in scripts/fonts (SIL OFL).
import { readFileSync } from 'node:fs';
import opentype from 'opentype.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const C = {
  bg: '#F7F8F5',
  grid: '#DFE6EE',
  ink: '#1B2A4A',
  ink2: '#3A4865',
  muted: '#5E6B84',
  ruleDash: '#9AA6BA',
  surface: '#FFFFFF',
  note: '#C2412D',
  noteBg: '#FFF6F2',
};

export const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const loadSharp = async () => (await import('sharp')).default;

// librsvg on macOS ignores bundled fonts, so text is converted to outlines with opentype.js.
// That also gives exact text widths for the diagram boxes.
const fontDir = join(dirname(fileURLToPath(import.meta.url)), 'fonts');
const load = (f) => {
  const b = readFileSync(join(fontDir, f));
  return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength));
};
const fonts = {
  regular: load('WorkSans-Regular.ttf'),
  semibold: load('WorkSans-SemiBold.ttf'),
  bold: load('WorkSans-Bold.ttf'),
  hand: load('Caveat-Medium.ttf'),
  mono: load('IBMPlexMono-Regular.ttf'),
};

/** Width in px of `text` set in `font` at `size`. */
export const measure = (str, font, size, letterSpacing = 0) =>
  fonts[font].getAdvanceWidth(str, size) + letterSpacing * str.length;

// opentype.js 2.0's toPathData can emit NaN, so the commands are serialised here.
const n = (v) => (Math.round(v * 100) / 100).toString();
const pathData = (cmds) =>
  cmds
    .map((c) => {
      switch (c.type) {
        case 'M': case 'L': return `${c.type}${n(c.x)} ${n(c.y)}`;
        case 'Q': return `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`;
        case 'C': return `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`;
        default: return 'Z';
      }
    })
    .join('');

/** Text as an outlined <path>. `y` is the baseline. */
export function text(str, x, y, { font = 'regular', size = 24, fill = C.ink, letterSpacing = 0 } = {}) {
  const f = fonts[font];
  let cx = x;
  let d = '';
  for (const ch of str) {
    const g = f.charToGlyph(ch);
    d += pathData(g.getPath(cx, y, size).commands);
    cx += g.advanceWidth * (size / f.unitsPerEm) + letterSpacing;
  }
  return `<path d="${d}" fill="${fill}"/>`;
}

/** Fits `str` on lines of at most maxWidth px. */
export function wrapText(str, maxWidth, maxLines, font, size) {
  const lines = [];
  let cur = '';
  for (const w of str.split(' ')) {
    const next = cur ? cur + ' ' + w : w;
    if (measure(next, font, size) > maxWidth && cur) {
      lines.push(cur);
      cur = w;
    } else cur = next;
  }
  if (cur) lines.push(cur);
  return lines.slice(0, maxLines);
}

/** 24px grid paper, as a full-bleed SVG fragment. */
export const gridPaper = (w, h) => `
  <defs>
    <pattern id="g" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" fill="none" stroke="${C.grid}" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="${C.bg}"/>
  <rect width="${w}" height="${h}" fill="url(#g)"/>`;

/** The Z mark (docs/design/blueprint/assets/zeeshan-logo-z.svg), at x,y with the given pixel size. */
export const logoMark = (x, y, size, fill = '#FFFFFF') => `
  <svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="140 140 744 744">
    <rect x="232" y="232" width="560" height="560" fill="${fill}" stroke="${C.ink}" stroke-width="40"/>
    <path d="M388 360 H636 L388 664 H636" fill="none" stroke="${C.ink}" stroke-width="60" stroke-linecap="square"/>
    <path d="M772 172 H852 V252" fill="none" stroke="${C.note}" stroke-width="36" stroke-linecap="square"/>
    <path d="M252 852 H172 V772" fill="none" stroke="${C.note}" stroke-width="36" stroke-linecap="square"/>
  </svg>`;

/**
 * Draws a diagram (nodes: {label, ai?, alert?, join?}) as boxes and arrows, wrapping rows to
 * maxWidth. Returns { svg, height }.
 */
export function diagramSvg(nodes, x, y, maxWidth, { fontSize = 24, padX = 20, boxH = 56, gap = 18, rowGap = 22 } = {}) {
  const glyph = { to: '→', both: '↔', plus: '+' };
  let cx = x;
  let cy = y;
  let out = '';
  nodes.forEach((n, i) => {
    const w = Math.ceil(measure(n.label, 'semibold', fontSize)) + padX * 2;
    const arrowW = i > 0 ? 28 + gap * 2 : 0;
    if (i > 0 && cx + arrowW + w > x + maxWidth) {
      cx = x;
      cy += boxH + rowGap;
    } else if (i > 0) {
      out += arrow(glyph[n.join ?? 'to'], cx + gap, cy + boxH / 2);
      cx += arrowW;
    }
    const color = n.ai || n.alert ? C.note : C.ink;
    out += `<rect x="${cx}" y="${cy}" width="${w}" height="${boxH}" fill="${n.ai ? C.noteBg : C.surface}" stroke="${color}" stroke-width="2.5"${n.ai ? ' stroke-dasharray="7 5"' : ''}/>`;
    out += text(n.label, cx + padX, cy + boxH / 2 + fontSize * 0.35, { font: 'semibold', size: fontSize, fill: color });
    cx += w;
  });
  return { svg: out, height: cy + boxH - y };
}

/** Arrow glyphs drawn as lines, so no font needs the arrow code points. */
function arrow(kind, x, cy) {
  const w = 28;
  const st = `stroke="${C.ink}" stroke-width="2.5" fill="none"`;
  if (kind === '+') return `<path d="M${x + 14} ${cy - 9}V${cy + 9}M${x + 5} ${cy}H${x + 23}" ${st}/>`;
  const right = `<path d="M${x + w - 8} ${cy - 7}L${x + w} ${cy}L${x + w - 8} ${cy + 7}" ${st}/>`;
  const left = `<path d="M${x + 8} ${cy - 7}L${x} ${cy}L${x + 8} ${cy + 7}" ${st}/>`;
  return `<path d="M${x} ${cy}H${x + w}" ${st}/>` + right + (kind === '↔' ? left : '');
}
