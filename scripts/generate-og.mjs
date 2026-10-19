// Per-case-study OG share images (1200x630) in the Blueprint style: grid paper, a ruled
// panel and the case study's own system diagram, read from src/lib/work.ts.
//   node scripts/generate-og.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { C, gridPaper, diagramSvg, text, wrapText, loadSharp } from './blueprint-svg.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'og');
const sharp = await loadSharp();
// Node strips the types from work.ts on import (Node 23.6+).
const { caseStudies } = await import('../src/lib/work.ts');

function svg(cs) {
  const nameSize = cs.name.length > 14 ? 76 : 92;
  const lines = wrapText(cs.shortLine, 900, 2, 'regular', 30);
  const desc = lines.map((l, i) => text(l, 96, 256 + i * 40, { size: 30, fill: C.ink2 })).join('');
  // Shrink until the diagram fits on one row; fall back to the smallest size and let it wrap.
  const sizes = [{ fontSize: 22, padX: 20, gap: 18 }, { fontSize: 20, padX: 14, gap: 12 }, { fontSize: 18, padX: 12, gap: 8 }];
  let d;
  for (const o of sizes) {
    d = diagramSvg(cs.diagram.nodes, 96, 392, 1008, { ...o, boxH: 52 });
    if (d.height <= 52) break;
  }
  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  ${gridPaper(1200, 630)}
  <rect x="48" y="48" width="1104" height="534" fill="${C.surface}" fill-opacity="0.78" stroke="${C.ink}" stroke-width="3"/>
  ${text(`${cs.tag.toUpperCase()} · CASE STUDY`, 96, 112, { font: 'mono', size: 20, fill: C.muted, letterSpacing: 1 })}
  ${text(cs.name, 96, 204, { font: 'bold', size: nameSize, letterSpacing: -2 })}
  ${desc}
  ${text(cs.diagram.caption, 96, 368, { font: 'hand', size: 32, fill: C.note })}
  ${d.svg}
  <line x1="96" y1="520" x2="1104" y2="520" stroke="${C.ruleDash}" stroke-width="2" stroke-dasharray="6 5"/>
  ${text('Zeeshan Hameed · Full-Stack AI Engineer · r-zeeshan.dev', 96, 556, { font: 'mono', size: 20, fill: C.muted })}
</svg>`;
}

await mkdir(outDir, { recursive: true });
for (const cs of caseStudies) {
  const buf = await sharp(Buffer.from(svg(cs))).png().toBuffer();
  await writeFile(join(outDir, `work-${cs.slug}.png`), buf);
  console.log(`og/work-${cs.slug}.png`);
}
console.log('done');
