// Generates favicons + OG image from the brand mark, programmatically.
//   node scripts/generate-icons.mjs
// Deps: sharp, png-to-ico (installed as devDependencies).
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');

// Brand colors
const SAGE = '#5C7A5C';
const CREAM = '#FBF8F2';
const CREAM_DEEP = '#F2EDE2';
const INK = '#262B20';
const MUTED = '#8C8C7E';

// The "Z" mark as an SVG at a given size, with an optional rounded background.
const markSvg = (size, radius = size * 0.22) => `
<svg width="${size}" height="${size}" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="${(radius / size) * 64}" fill="${SAGE}"/>
  <path d="M18 18 L46 18 L18 46 L46 46" stroke="${CREAM}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

async function png(size, radius) {
  return sharp(Buffer.from(markSvg(size, radius))).resize(size, size).png().toBuffer();
}

async function main() {
  // Favicons
  const f16 = await png(16);
  const f32 = await png(32);
  const f48 = await png(48);
  await writeFile(join(pub, 'favicon-16x16.png'), f16);
  await writeFile(join(pub, 'favicon-32x32.png'), f32);

  // Multi-resolution .ico
  const ico = await pngToIco([f16, f32, f48]);
  await writeFile(join(pub, 'favicon.ico'), ico);

  // Apple touch icon (180, solid mark on its own bg, no transparency)
  await writeFile(join(pub, 'apple-touch-icon.png'), await png(180, 40));

  // Android / PWA icons
  await writeFile(join(pub, 'icon-192.png'), await png(192, 42));
  await writeFile(join(pub, 'icon-512.png'), await png(512, 112));

  // OG / social share image, 1200x630
  const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="wash" cx="82%" cy="8%" r="70%">
      <stop offset="0%" stop-color="#5C7A5C" stop-opacity="0.16"/>
      <stop offset="70%" stop-color="#5C7A5C" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${CREAM}"/>
  <rect width="1200" height="630" fill="url(#wash)"/>
  <rect x="0" y="0" width="1200" height="10" fill="${SAGE}"/>
  <g transform="translate(96, 140)">
    <rect width="84" height="84" rx="19" fill="${SAGE}"/>
    <g transform="scale(1.3125)">
      <path d="M18 18 L46 18 L18 46 L46 46" stroke="${CREAM}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>
    <text x="108" y="58" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="600" letter-spacing="1" fill="${SAGE}">SENIOR AI ENGINEER</text>
  </g>
  <text x="96" y="360" font-family="Georgia, 'Times New Roman', serif" font-size="82" font-weight="600" fill="${INK}">Zeeshan Hameed</text>
  <text x="96" y="428" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="${INK}" opacity="0.82">I turn ideas and stuck MVPs into production AI that holds up.</text>
  <text x="96" y="540" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="${MUTED}">Jema &#183; CuePilates &#183; DietTalk &#160;&#8226;&#160; Top Rated Plus on Upwork</text>
</svg>`;
  await sharp(Buffer.from(ogSvg)).png().toFile(join(pub, 'og-image.png'));

  console.log('Icons + OG image generated in /public');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
