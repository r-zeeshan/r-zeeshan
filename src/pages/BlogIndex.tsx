import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
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

      <section className="px-5 sm:px-8 pt-32 md:pt-40 pb-24 min-h-[70vh]">
        <div className="max-w-6xl mx-auto">
          <header className="max-w-3xl">
            <h1 className="t-h1">Notes</h1>
            <p className="lead mt-5">
              Engineering notes on building AI products that ship and keep working. The hard parts,
              the tradeoffs, the things demos skip.
            </p>
          </header>

          {hasPosts ? (
            <ul className="mt-14 border-b border-[var(--line)] max-w-3xl">
              {posts.map((p) => (
                <li key={p.slug} className="rule-top">
                  <Link to={`/blog/${p.slug}`} className="group block py-7 rounded-md">
                    <time dateTime={p.date} className="meta">
                      {new Date(p.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h2 className="t-h3 mt-1 group-hover:underline decoration-1 underline-offset-[0.2em] decoration-[var(--sage)]">
                      {p.title}
                    </h2>
                    <p className="prose-body mt-2">{p.description}</p>
                    <span className="meta mt-3 block">{p.readingMinutes} min read</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-14 rule-top pt-8 max-w-xl">
              <p className="t-h3">Writing soon.</p>
              <p className="prose-body mt-2">
                The first posts are in the works. In the meantime, the case studies are where the
                engineering lives.
              </p>
              <Link to="/work" className="link inline-flex items-center gap-1.5 mt-5">
                See the work
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
