// Central SEO config. One source of truth for URLs, defaults, and shared JSON-LD.
import { AUXON_URL, LINKS } from '@/lib/site';

export const SITE_URL = 'https://r-zeeshan.dev';
export const SITE_NAME = 'Zeeshan Hameed';
export const DEFAULT_OG_IMAGE = '/og-image.png';
export const DEFAULT_OG_ALT =
  'Zeeshan Hameed, senior AI engineer, production AI for health and fitness.';

/** Absolute URL for a site-relative path. */
export function absUrl(path = '/'): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** The Person + Organization + WebSite graph. Reused on home and about. */
export function personGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Zeeshan Hameed',
        url: SITE_URL,
        jobTitle: 'Senior AI Engineer',
        description:
          'Senior AI engineer building production-grade AI products for health and fitness founders, from idea to launch.',
        image: absUrl(DEFAULT_OG_IMAGE),
        worksFor: { '@id': `${AUXON_URL}/#organization` },
        knowsAbout: [
          'Artificial Intelligence',
          'Clinical AI',
          'Large Language Models',
          'Retrieval-Augmented Generation',
          'Multi-Model LLM Routing',
          'Full-Stack Development',
          'Next.js',
          'FastAPI',
          'Flutter',
          'Health Technology',
          'Fitness Software',
        ],
        alumniOf: 'B.S. in Artificial Intelligence',
        sameAs: [LINKS.github, LINKS.linkedin, LINKS.upwork, AUXON_URL],
      },
      {
        '@type': 'Organization',
        '@id': `${AUXON_URL}/#organization`,
        name: 'Auxon AI',
        url: AUXON_URL,
        founder: { '@id': `${SITE_URL}/#person` },
        description:
          'Auxon AI builds production-grade AI products for health and fitness founders, from idea to launch.',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { '@id': `${SITE_URL}/#person` },
      },
    ],
  };
}

/** A CreativeWork node for a case study. */
export function caseStudyGraph(opts: {
  path: string;
  name: string;
  description: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${absUrl(opts.path)}#work`,
    name: opts.name,
    headline: opts.name,
    description: opts.description,
    url: absUrl(opts.path),
    image: absUrl(opts.image ?? DEFAULT_OG_IMAGE),
    author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: 'Zeeshan Hameed' },
    creator: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: 'Zeeshan Hameed' },
  };
}

/** A BreadcrumbList node. items: [{name, path}] in order. */
export function breadcrumbGraph(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}
