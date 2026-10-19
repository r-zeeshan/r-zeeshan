import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { Button, Card, Container } from '@/components/blueprint';
import { posts } from '@/lib/blog';
import { absUrl, DEFAULT_OG_ALT } from '@/lib/seo';

const blogGraph = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${absUrl('/blog')}#blog`,
  name: 'Notes by Zeeshan Hameed',
  description: 'Engineering notes on building AI products that ship and keep working, by Zeeshan Hameed.',
  url: absUrl('/blog'),
};

export default function BlogIndex() {
  const hasPosts = posts.length > 0;

  return (
    <>
      <Seo
        title="Notes | Zeeshan Hameed, Full-Stack AI Engineer"
        description="Engineering notes on building AI products that ship and keep working: multi-model LLM systems, shipping real products, and the hard parts most demos skip."
        path="/blog"
        ogImageAlt={DEFAULT_OG_ALT}
        jsonLd={blogGraph}
      />

      <Container className="min-h-[70vh] pb-24 pt-10 md:pt-14">
        <header className="max-w-3xl">
          <h1 className="t-display">Notes</h1>
          <p className="lead mt-5">
            Engineering notes on building AI products that ship and keep working. The hard parts,
            the tradeoffs, the things demos skip.
          </p>
        </header>

        {hasPosts ? (
          <ul className="mt-12 flex max-w-3xl flex-col gap-6">
            {posts.map((p) => (
              <li key={p.slug}>
                <Card as={Link} to={`/blog/${p.slug}`} interactive padding="lg">
                  <time dateTime={p.date} className="mono-label">
                    {new Date(p.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2 className="t-h3 mt-1 text-[24px] group-hov:underline underline-offset-4">{p.title}</h2>
                  <p className="mt-2 text-base leading-[1.55] text-ink-2">{p.description}</p>
                  <span className="mono-label mt-3 block">{p.readingMinutes} min read</span>
                </Card>
              </li>
            ))}
          </ul>
        ) : (
          <Card padding="lg" className="mt-12 max-w-xl">
            <p className="t-h3">Writing soon.</p>
            <p className="mt-2 text-base leading-[1.55] text-ink-2">
              The first posts are in the works. In the meantime, the case studies are where the
              engineering lives.
            </p>
            <Button to="/work" variant="link" className="mt-3">
              See the work →
            </Button>
          </Card>
        )}
      </Container>
    </>
  );
}
