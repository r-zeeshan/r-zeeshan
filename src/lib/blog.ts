// Blog content model. Posts are Zeeshan's own expertise-driven writing and are
// added here by hand. Never auto-generate posts. The array is intentionally empty
// until real posts exist; the index shows a "writing soon" state.

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-07-12". */
  date: string;
  /** Estimated reading time in minutes. */
  readingMinutes: number;
  /** Body paragraphs (simple model; swap for MDX later if needed). */
  body: string[];
}

export const posts: BlogPost[] = [];

export const blogSlugs = posts.map((p) => p.slug);
export const blogPaths = blogSlugs.map((s) => `/blog/${s}`);

export function getPost(slug?: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
