// Per-case-study OG share images (1200x630), branded to match the site.
//   node scripts/generate-og.mjs
// Uses SVG + system fonts via sharp, same style as generate-icons.mjs.
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'og');

const SAGE = '#5C7A5C';
const CREAM = '#FBF8F2';
const INK = '#262B20';
const MUTED = '#8C8C7E';

// Case studies (name, tag, line) — keep in sync with src/lib/work.ts.
const items = [
  { slug: 'jema', name: 'Jema', tag: 'Clinical AI', line: 'A clinical AI platform for Korean medicine, in daily use by doctors.' },
  { slug: 'dr-aigent', name: 'Dr. Aigent', tag: 'Clinical AI', line: 'Multi-model clinical AI that turns doctors’ notes into structured SOAP reports.' },
  { slug: 'cuepilates', name: 'CuePilates', tag: 'Fitness SaaS', line: 'An AI Pilates class-planning SaaS, taken from idea to launch in under a month.' },
  { slug: 'diettalk', name: 'DietTalk', tag: 'Health app', line: 'A doctor-supervised diet app, live on the App Store and Google Play.' },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Naive word wrap to <= maxChars per line, up to maxLines.
function wrap(text, maxChars, maxLines) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars) {
      lines.push(cur.trim());
      cur = w;
    } else {
      cur = (cur + ' ' + w).trim();
    }
    if (lines.length === maxLines) break;
  }
  if (cur && lines.length < maxLines) lines.push(cur.trim());
  return lines.slice(0, maxLines);
}

function svg({ name, tag, line }) {
  const nameSize = name.length > 10 ? 88 : 104;
  const descLines = wrap(line, 50, 2);
  const descTspans = descLines
    .map((l, i) => `<tspan x="96" dy="${i === 0 ? 0 : 48}">${esc(l)}</tspan>`)
    .join('');
  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="wash" cx="82%" cy="8%" r="70%">
      <stop offset="0%" stop-color="${SAGE}" stop-opacity="0.16"/>
      <stop offset="70%" stop-color="${SAGE}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${CREAM}"/>
  <rect width="1200" height="630" fill="url(#wash)"/>
  <rect x="0" y="0" width="1200" height="10" fill="${SAGE}"/>
  <g transform="translate(96, 132)">
    <rect width="72" height="72" rx="16" fill="${SAGE}"/>
    <g transform="translate(16,16) scale(1.28)">
      <path d="M18 18 L46 18 L18 46 L46 46" stroke="${CREAM}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>
    <text x="96" y="46" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="600" letter-spacing="2" fill="${SAGE}">CASE STUDY &#183; ${esc(tag.toUpperCase())}</text>
  </g>
  <text x="96" y="356" font-family="Georgia, 'Times New Roman', serif" font-size="${nameSize}" font-weight="600" fill="${INK}">${esc(name)}</text>
  <text y="430" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="${INK}" opacity="0.82">${descTspans}</text>
  <text x="96" y="560" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="${MUTED}">Zeeshan Hameed &#160;&#8226;&#160; r-zeeshan.dev</text>
</svg>`;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  for (const item of items) {
    const buf = await sharp(Buffer.from(svg(item))).png().toBuffer();
    await writeFile(join(outDir, `work-${item.slug}.png`), buf);
    console.log(`og/work-${item.slug}.png`);
  }
  console.log('done');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
