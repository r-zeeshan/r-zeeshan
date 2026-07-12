import { Link } from 'react-router-dom';
import { ArrowRight, PenLine } from 'lucide-react';
import Seo from '@/components/Seo';
import { posts } from '@/lib/blog';
import { absUrl, DEFAULT_OG_ALT } from '@/lib/seo';

const blogGraph = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${absUrl('/blog')}#blog`,
  name: 'Notes by Zeeshan Hameed',
  description: 'Writing on production AI engineering for health and fitness by Zeeshan Hameed.',
  url: absUrl('/blog'),
};

export default function BlogIndex() {
  const hasPosts = posts.length > 0;

  return (
    <>
      <Seo
        title="Notes | Zeeshan Hameed on production AI engineering"
        description="Writing on production AI engineering for health and fitness: multi-model LLM systems, shipping real products, and the hard parts most demos skip."
        path="/blog"
        ogImageAlt={DEFAULT_OG_ALT}
        jsonLd={blogGraph}
      />

      <section className="px-5 pt-32 md:pt-40 pb-24 min-h-[70vh]">
        <div className="max-w-3xl mx-auto">
          <span className="eyebrow">Notes</span>
          <h1 className="heading-brutal heading-xl mt-3">
            Writing on <span className="accent-italic">production AI</span>.
          </h1>
          <p className="lead mt-5">
            Engineering notes on building health and fitness AI that ships and holds up. The hard
            parts, the tradeoffs, the things demos skip.
          </p>

          {hasPosts ? (
            <div className="mt-12 space-y-6">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group block card card-hover p-6"
                >
                  <div className="text-xs text-[var(--muted)] flex items-center gap-2">
                    <time dateTime={p.date}>
                      {new Date(p.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{p.readingMinutes} min read</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-[var(--ink)] mt-2">
                    {p.title}
                  </h2>
                  <p className="text-sm text-[var(--warm-gray)] mt-2 leading-relaxed">
                    {p.description}
                  </p>
                  <span className="group inline-flex items-center gap-1.5 text-sm text-[var(--sage-deep)] font-medium mt-4">
                    Read
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-14 card p-10 flex flex-col items-center text-center">
              <span className="w-12 h-12 rounded-full bg-[var(--sage-wash)] text-[var(--sage-deep)] flex items-center justify-center">
                <PenLine size={20} strokeWidth={1.75} />
              </span>
              <p className="font-display text-xl text-[var(--ink)] mt-4">Writing soon.</p>
              <p className="text-[var(--warm-gray)] mt-2 max-w-sm">
                First posts are in the works. In the meantime, the case studies are where the real
                engineering lives.
              </p>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 text-[var(--sage-deep)] font-medium mt-6"
              >
                See the work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
