import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Seo from '@/components/Seo';
import WorkWithMe from '@/components/sections/WorkWithMe';
import NotFound from '@/pages/NotFound';
import { getCaseStudy } from '@/lib/work';
import { caseStudyGraph, breadcrumbGraph } from '@/lib/seo';

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = getCaseStudy(slug);
  if (!cs) return <NotFound />;

  const path = `/work/${cs.slug}`;

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
          caseStudyGraph({ path, name: cs.name, description: cs.metaDescription, image: cs.cover }),
          breadcrumbGraph([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
            { name: cs.name, path },
          ]),
        ]}
      />

      <article>
        <header className="px-5 pt-32 md:pt-40 pb-8">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--sage-deep)] transition-colors"
            >
              <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              All work
            </Link>
            <span className="eyebrow block mt-6">{cs.tag}</span>
            <h1 className="heading-brutal heading-xl mt-3">{cs.name}</h1>
            <p className="lead mt-5">{cs.oneLiner}</p>
            {cs.live && (
              <a
                href={cs.live.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[var(--sage-deep)] font-medium mt-5"
              >
                {cs.live.label}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
          </div>
        </header>

        {cs.cover && (
          <div className="px-5 mb-4">
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--white)] shadow-[0_24px_60px_rgba(40,44,32,0.14)]">
              <img src={cs.cover} alt={`${cs.name}, ${cs.tag}`} className="w-full h-auto" loading="eager" />
            </div>
          </div>
        )}

        <div className="px-5 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-12">
              {cs.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>

            {cs.sections.map((sec) => (
              <section key={sec.heading} className="mb-12">
                <h2 className="heading-brutal heading-md mb-4">{sec.heading}</h2>
                {sec.body.map((p, i) => (
                  <p key={i} className="text-[var(--warm-gray)] leading-relaxed mb-4 text-[1.05rem]">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>

      <WorkWithMe />
    </>
  );
}
