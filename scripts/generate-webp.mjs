// Convert the heavy PNG covers in public/work to optimized WebP.
// r-zeeshan serves covers via plain <img> (no framework image optimization),
// so raw 1.4MB PNGs would ship as-is. This produces ~150-250KB WebP instead.
// Originals are ~1448px wide; we cap at 1600 and never upscale.

import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIR = join(ROOT, 'public', 'work');

const pngs = readdirSync(DIR).filter((f) => f.toLowerCase().endsWith('.png'));

for (const png of pngs) {
  const src = join(DIR, png);
  const out = src.replace(/\.png$/i, '.webp');
  const before = statSync(src).size;
  await sharp(src)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);
  const after = statSync(out).size;
  console.log(
    `${png} -> ${png.replace(/\.png$/i, '.webp')}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`,
  );
}
console.log('done');
