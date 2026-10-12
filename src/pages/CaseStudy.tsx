import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Seo from '@/components/Seo';
import EditorialRow from '@/components/EditorialRow';
import Quote from '@/components/Quote';
import GetInTouch from '@/components/sections/GetInTouch';
import NotFound from '@/pages/NotFound';
import { caseStudies, getCaseStudy } from '@/lib/work';
import { quotes } from '@/lib/testimonials';
import { caseStudyGraph, breadcrumbGraph } from '@/lib/seo';

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = getCaseStudy(slug);
  if (!cs) return <NotFound />;

  const path = `/work/${cs.slug}`;
  const index = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const review = cs.testimonial ? quotes.find((q) => q.author === cs.testimonial) : undefined;

  const glance: { label: string; value: React.ReactNode }[] = [
    { label: 'Role', value: cs.role },
    ...(cs.timeline ? [{ label: 'Timeline', value: cs.timeline }] : []),
    { label: 'Stack', value: cs.stack.join(', ') },
    ...(cs.live
      ? [
          {
            label: 'Live',
            value: (
              <a
                href={cs.live.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link inline-flex items-center gap-1"
              >
                {cs.live.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ),
          },
        ]
      : []),
  ];

  return (
    <>
      <Seo
        title={cs.metaTitle}
        description={cs.metaDescription}
        path={path}
        ogType="article"
        ogImage={cs.ogImage}
        ogImageAlt={`${cs.name}, ${cs.tag} case study by Zeeshan Hameed`}
        jsonLd={[
          caseStudyGraph({ path, name: cs.name, description: cs.metaDescription, image: cs.ogImage }),
          breadcrumbGraph([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
            { name: cs.name, path },
          ]),
        ]}
      />

      <article>
        <header className="px-5 sm:px-8 pt-28 md:pt-36">
          <div className="max-w-6xl mx-auto">
            <Link to="/work" className="inline-flex items-center gap-2 meta hover:text-[var(--ink)] transition-colors rounded-md">
              <ArrowLeft size={15} aria-hidden="true" />
              All work
            </Link>

            <h1 className="t-display mt-8 max-w-[16ch]">{cs.name}</h1>
            <p className="lead mt-6">{cs.oneLiner}</p>

            <dl className="mt-12 pt-6 rule-top flex flex-wrap gap-x-12 gap-y-6">
              {glance.map((g) => (
                <div key={g.label} className={g.label === 'Stack' ? 'basis-full md:basis-auto md:max-w-[26rem]' : undefined}>
                  <dt className="meta">{g.label}</dt>
                  <dd className="mt-1 text-[1rem] leading-snug text-[var(--ink)]">{g.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        {cs.cover && (
          <div className="px-5 sm:px-8 mt-12">
            <div className="max-w-6xl mx-auto">
              <div className="frame max-w-4xl">
                <img
                  src={cs.cover}
                  alt={`${cs.name}, ${cs.tag}`}
                  width={1448}
                  height={1086}
                  loading="eager"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}

        <div className="px-5 sm:px-8 mt-14 md:mt-20">
          <div className="max-w-6xl mx-auto">
            <EditorialRow id="problem" label="The problem">
              {cs.problem.map((p, i) => (
                <p key={i} className="prose-body">
                  {p}
                </p>
              ))}
            </EditorialRow>

            <EditorialRow id="built" label="What I built">
              {cs.built.map((p, i) => (
                <p key={i} className="prose-body">
                  {p}
                </p>
              ))}
            </EditorialRow>

            {cs.hardParts && cs.hardParts.length > 0 && (
              <EditorialRow id="hard-parts" label="The hard parts">
                <div className="space-y-9">
                  {cs.hardParts.map((h, i) => {
                    const grouped = cs.hardParts!.some((x) => x.group);
                    const newGroup = h.group && h.group !== cs.hardParts![i - 1]?.group;
                    const Title = grouped ? 'h4' : 'h3';
                    return (
                      <div key={h.title}>
                        {newGroup && (
                          <h3 className={`t-h3 ${i > 0 ? 'pt-6 mt-3 rule-top' : ''} mb-7`}>{h.group}</h3>
                        )}
                        <Title className="font-display text-[1.25rem] leading-snug font-medium text-[var(--ink)]">
                          {h.title}
                        </Title>
                        {h.body.map((p, j) => (
                          <p key={j} className="prose-body mt-2">
                            {p}
                          </p>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </EditorialRow>
            )}

            <EditorialRow id="now" label="Where it is now">
              {cs.now.map((p, i) => (
                <p key={i} className="prose-body">
                  {p}
                </p>
              ))}
              {review && (
                <div className="mt-10">
                  <Quote q={review} />
                </div>
              )}
            </EditorialRow>

            <div className="rule-top py-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
              <Link to="/work" className="link inline-flex items-center gap-2">
                <ArrowLeft size={16} aria-hidden="true" />
                All work
              </Link>
              {next && next.slug !== cs.slug && (
                <Link to={`/work/${next.slug}`} className="link inline-flex items-center gap-2">
                  Next: {next.name}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>

      <GetInTouch />
    </>
  );
}
