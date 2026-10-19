// Generates favicons, app icons and the default OG image from the Blueprint Z mark.
//   node scripts/generate-icons.mjs
// Deps: sharp, png-to-ico, opentype.js (devDependencies). Mark geometry matches
// docs/design/blueprint/assets/zeeshan-logo-z.svg.
import pngToIco from 'png-to-ico';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { C, gridPaper, logoMark, diagramSvg, text, wrapText, loadSharp } from './blueprint-svg.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const sharp = await loadSharp();
const { getCaseStudy } = await import('../src/lib/work.ts');

// The mark on its paper ground, full-bleed (viewBox is the 1024 design square).
const markSvg = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <rect width="1024" height="1024" fill="${C.bg}"/>
  <rect x="232" y="232" width="560" height="560" fill="#FFFFFF" stroke="${C.ink}" stroke-width="40"/>
  <path d="M388 360 H636 L388 664 H636" fill="none" stroke="${C.ink}" stroke-width="60" stroke-linecap="square" stroke-linejoin="miter"/>
  <path d="M772 172 H852 V252" fill="none" stroke="${C.note}" stroke-width="36" stroke-linecap="square"/>
  <path d="M252 852 H172 V772" fill="none" stroke="${C.note}" stroke-width="36" stroke-linecap="square"/>
</svg>`;

const png = (size) => sharp(Buffer.from(markSvg(size))).resize(size, size).png().toBuffer();

// Favicons
const f16 = await png(16);
const f32 = await png(32);
const f48 = await png(48);
await writeFile(join(pub, 'favicon.svg'), markSvg(64).trim() + '\n');
await writeFile(join(pub, 'favicon-16x16.png'), f16);
await writeFile(join(pub, 'favicon-32x32.png'), f32);
await writeFile(join(pub, 'favicon.ico'), await pngToIco([f16, f32, f48]));
await writeFile(join(pub, 'apple-touch-icon.png'), await png(180));
await writeFile(join(pub, 'icon-192.png'), await png(192));
await writeFile(join(pub, 'icon-512.png'), await png(512));

// Default OG / social share image, 1200x630: the hero line and the Jema AIgent diagram.
const jema = getCaseStudy('jema');
const sizes = [{ fontSize: 22, padX: 20, gap: 18 }, { fontSize: 20, padX: 14, gap: 12 }, { fontSize: 18, padX: 12, gap: 8 }];
let d;
for (const o of sizes) {
  d = diagramSvg(jema.diagram.nodes, 96, 436, 1008, { ...o, boxH: 52 });
  if (d.height <= 52) break;
}
const sub = wrapText('I build AI products from idea to production, the AI layer, backend, web and mobile, and stay to run them after launch.', 940, 2, 'regular', 28)
  .map((l, i) => text(l, 96, 318 + i * 38, { size: 28, fill: C.ink2 }))
  .join('');
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  ${gridPaper(1200, 630)}
  <rect x="48" y="48" width="1104" height="534" fill="${C.surface}" fill-opacity="0.78" stroke="${C.ink}" stroke-width="3"/>
  ${logoMark(96, 88, 56)}
  ${text('Zeeshan Hameed', 170, 116, { font: 'bold', size: 26 })}
  ${text('full-stack AI engineer', 170, 142, { font: 'hand', size: 26, fill: C.note })}
  ${text('The demo is the easy part.', 96, 250, { font: 'bold', size: 72, letterSpacing: -2 })}
  ${sub}
  ${text(jema.diagram.caption, 96, 418, { font: 'hand', size: 30, fill: C.note })}
  ${d.svg}
  <line x1="96" y1="520" x2="1104" y2="520" stroke="${C.ruleDash}" stroke-width="2" stroke-dasharray="6 5"/>
  ${text('r-zeeshan.dev', 96, 556, { font: 'mono', size: 20, fill: C.muted })}
</svg>`;
await sharp(Buffer.from(ogSvg)).png().toFile(join(pub, 'og-image.png'));

console.log('Icons + OG image generated in /public');
