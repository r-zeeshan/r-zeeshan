import { Head } from 'vite-react-ssg';
import { absUrl, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/seo';

type JsonLd = Record<string, unknown>;

interface SeoProps {
  /** Full <title> text. */
  title: string;
  /** Meta + OG + Twitter description. */
  description: string;
  /** Site-relative path of this page, e.g. "/work/jema". Used for canonical + og:url. */
  path: string;
  /** Override the canonical (e.g. point offer content at auxonai.com). Defaults to this page. */
  canonical?: string;
  /** Site-relative OG image path. Defaults to the shared share image. */
  ogImage?: string;
  ogImageAlt?: string;
  /** og:type. "website" for pages, "article" for case studies / posts. */
  ogType?: 'website' | 'article' | 'profile';
  /** One or more JSON-LD graphs to embed. */
  jsonLd?: JsonLd | JsonLd[];
  /** Keep this page out of the index. */
  noindex?: boolean;
}

export default function Seo({
  title,
  description,
  path,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt,
  ogType = 'website',
  jsonLd,
  noindex,
}: SeoProps) {
  const url = absUrl(path);
  const image = absUrl(ogImage);
  const graphs = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical ?? url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {graphs.map((g, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(g)}
        </script>
      ))}
    </Head>
  );
}
