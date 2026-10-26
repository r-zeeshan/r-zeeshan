import { useParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import Quote from '@/components/Quote';
import GetInTouch from '@/components/sections/GetInTouch';
import { Button, Card, Container, Note, ScreenshotSlot, SectionHeader, WorkDiagram } from '@/components/blueprint';
import NotFound from '@/pages/NotFound';
import { caseStudies, getCaseStudy } from '@/lib/work';
import type { HardPart } from '@/lib/work';
import { quotes } from '@/lib/testimonials';
import { caseStudyGraph, breadcrumbGraph } from '@/lib/seo';

/** Hard parts as small cards, grouped under a label when the study has groups. */
function HardParts({ parts }: { parts: HardPart[] }) {
  const grouped = parts.some((p) => p.group);
  const groups: { label?: string; items: HardPart[] }[] = [];
  parts.forEach((p) => {
    const last = groups[groups.length - 1];
    if (last && last.label === p.group) last.items.push(p);
    else groups.push({ label: p.group, items: [p] });
  });

  return (
    <div className="flex flex-col gap-10">
      {groups.map((g, gi) => (
        <div key={g.label ?? gi} className="flex flex-col gap-5">
          {g.label && <h3 className="t-h3 text-[24px]">{g.label}</h3>}
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]">
            {g.items.map((h) => {
              const Title = grouped ? 'h4' : 'h3';
              return (
                <Card as="article" key={h.title} className="flex flex-col gap-2.5">
                  <Title className="t-h3">{h.title}</Title>
                  {h.body.map((p, j) => (
                    <p key={j} className="text-base leading-[1.6] text-ink-2">
                      {p}
                    </p>
                  ))}
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function Section({ number, id, title, children }: { number: string; id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`${id}-heading`} className="flex flex-col gap-6">
      <SectionHeader number={number} id={`${id}-heading`}>
        {title}
      </SectionHeader>
      {children}
    </section>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = getCaseStudy(slug);
  if (!cs) return <NotFound />;

  const path = `/work/${cs.slug}`;
  const index = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const review = cs.testimonial ? quotes.find((q) => q.author === cs.testimonial) : undefined;

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
        <Container className="pb-12 pt-6 md:pt-10">
          <Button to="/work" variant="link">
            ← All work
          </Button>

          <span className="mono-label-caps mt-6 block">{cs.tag}</span>
          <h1 className="t-display mt-2">{cs.name}</h1>
          <p className="lead mt-5">{cs.oneLiner}</p>

          <figure className="m-0 mt-10 flex flex-col gap-5 border-2 border-ink bg-[rgba(255,255,255,0.72)] p-5 sm:p-7">
            <figcaption>
              <Note size={28}>{cs.diagram.caption}</Note>
            </figcaption>
            <WorkDiagram diagram={cs.diagram} size="md" />
            {cs.diagram.asides && (
              <div className="flex flex-wrap gap-x-[22px] gap-y-1 border-t-[1.5px] border-dashed border-rule-dash pt-3">
                {cs.diagram.asides.map((a) => (
                  <Note key={a} size={21} className="!text-ink">
                    {a}
                  </Note>
                ))}
              </div>
            )}
          </figure>

          <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-5">
            <div>
              <dt className="mono-label-caps">Role</dt>
              <dd className="mt-1 text-base">{cs.role}</dd>
            </div>
            {cs.timeline && (
              <div>
                <dt className="mono-label-caps">Timeline</dt>
                <dd className="mt-1 text-base">{cs.timeline}</dd>
              </div>
            )}
            {cs.live && (
              <div>
                <dt className="mono-label-caps">Live</dt>
                <dd className="mt-1 flex flex-wrap gap-x-5 text-base">
                  {cs.live.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link inline-flex min-h-[44px] items-center"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </dd>
              </div>
            )}
          </dl>
          <p className="mono-label mt-2 border-t-[1.5px] border-dashed border-rule-dash pt-4">
            <span className="sr-only">Stack: </span>
            {cs.stack.join(' · ')}
          </p>

          {cs.screenshots && cs.screenshots.length > 0 && (
            <section aria-label={`${cs.name} screenshots`} className="mt-10 flex flex-col gap-4">
              <span className="mono-label-caps">In the product</span>
              <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(420px,100%),1fr))]">
                {cs.screenshots.map((sh) => (
                  <ScreenshotSlot key={sh.slot} shot={sh} />
                ))}
              </div>
            </section>
          )}
        </Container>

        <Container className="flex flex-col gap-14 pb-12 pt-4 md:gap-[72px]">
          <Section number="01" id="problem" title="The problem">
            <div className="flex flex-col gap-4">
              {cs.problem.map((p, i) => (
                <p key={i} className="prose-body">
                  {p}
                </p>
              ))}
            </div>
          </Section>

          <Section number="02" id="built" title="What I built">
            <div className="flex flex-col gap-4">
              {cs.built.map((p, i) => (
                <p key={i} className="prose-body">
                  {p}
                </p>
              ))}
            </div>
          </Section>

          {cs.hardParts && cs.hardParts.length > 0 && (
            <Section number="03" id="hard-parts" title="The hard parts">
              <HardParts parts={cs.hardParts} />
            </Section>
          )}

          {(cs.now || review) && (
            <Section number={cs.hardParts && cs.hardParts.length > 0 ? '04' : '03'} id="now" title="Where it is now">
              {cs.now && (
                <div className="flex flex-col gap-4">
                  {cs.now.map((p, i) => (
                    <p key={i} className="prose-body">
                      {p}
                    </p>
                  ))}
                </div>
              )}
              {review && (
                <div className="max-w-3xl">
                  <Quote q={review} />
                </div>
              )}
            </Section>
          )}

          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-1 border-t-2 border-ink pt-4">
            <Button to="/work" variant="link">
              ← All work
            </Button>
            {next && next.slug !== cs.slug && (
              <Button to={`/work/${next.slug}`} variant="link">
                Next: {next.name} →
              </Button>
            )}
          </div>
        </Container>
      </article>

      <GetInTouch />
    </>
  );
}
