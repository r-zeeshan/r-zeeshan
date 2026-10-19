// Generate sitemap.xml from the prerendered output in dist/.
// Runs after `vite-react-ssg build`. Walks dist for index.html files (nested
// dirStyle), maps each to a route, and writes dist/sitemap.xml.

import { readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const SITE_URL = 'https://r-zeeshan.dev';

// Routes we never want in the sitemap (404 / dynamic fallbacks).
const EXCLUDE = new Set(['/404']);

if (!existsSync(DIST)) {
  console.error('[sitemap] dist/ not found; run the build first.');
  process.exit(1);
}

/** Recursively collect every index.html under dist. */
function collect(dir, found = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const s = statSync(full);
    if (s.isDirectory()) collect(full, found);
    else if (name === 'index.html') found.push(full);
  }
  return found;
}

const routes = collect(DIST)
  .map((file) => {
    const rel = relative(DIST, file).split(sep).slice(0, -1).join('/'); // drop index.html
    return rel === '' ? '/' : `/${rel}`;
  })
  .filter((route) => !EXCLUDE.has(route))
  // Skip any leftover wildcard/star artifacts.
  .filter((route) => !route.includes('*') && !route.includes('['))
  .sort((a, b) => a.localeCompare(b));

const today = new Date().toISOString().slice(0, 10);

const body = routes
  .map((route) => {
    const priority = route === '/' ? '1.0' : route.startsWith('/work') ? '0.8' : '0.6';
    return `  <url>
    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(join(DIST, 'sitemap.xml'), xml);
console.log(`[sitemap] wrote ${routes.length} urls:\n${routes.map((r) => `  ${r}`).join('\n')}`);
