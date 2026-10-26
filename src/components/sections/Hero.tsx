import type { CSSProperties } from 'react';
import { Button, Note, WorkDiagram } from '@/components/blueprint';
import { CREDENTIALS, LAUNCH_LABEL, LAUNCH_URL, LINKS, UPWORK_BADGE, UPWORK_STATS } from '@/lib/site';
import { getCaseStudy } from '@/lib/work';

// The one orchestrated entrance on the site (DESIGN.md §5): a CSS stagger in reading order.
const step = (i: number): CSSProperties => ({ ['--i' as string]: i });

const STATS = [
  { key: 'jobs', label: 'jobs', value: UPWORK_STATS.jobs },
  { key: 'hours', label: 'hours', value: UPWORK_STATS.hours },
  { key: 'reviews', label: 'reviews', value: UPWORK_STATS.reviews },
] as const;

export default function Hero() {
  const jema = getCaseStudy('jema')!;
  return (
    <section id="top" className="mx-auto flex w-full max-w-wrap flex-wrap items-center gap-14 px-6 pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[26px]">
        <h1 className="t-display enter" style={step(0)}>
          The demo is the easy part.
        </h1>
        <p className="enter max-w-[520px] text-[19px] leading-[1.55] text-ink-2" style={step(1)}>
          I build AI products from idea to production, the AI layer, backend, web and mobile, and
          stay to run them after launch.
        </p>
        <div className="enter flex flex-wrap items-center gap-x-3 gap-y-1" style={step(2)}>
          <Button to="/work">See the work</Button>
          <Button to="/work/jema" variant="link">
            Read the Jema AIgent case study
          </Button>
        </div>
        <div className="enter" style={step(3)}>
          <Button href={LAUNCH_URL} external variant="outline">
            {LAUNCH_LABEL} →
          </Button>
        </div>
        <div className="enter flex flex-col gap-1 border-t-[1.5px] border-dashed border-rule-dash pt-3" style={step(4)}>
          <a
            href={LINKS.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex min-h-[44px] flex-wrap items-center gap-x-2 text-base font-semibold"
          >
            {UPWORK_BADGE.join(' · ')} on Upwork ↗
          </a>
          <ul aria-label="Upwork track record" className="mono-label flex flex-wrap gap-x-5 gap-y-1.5">
            {STATS.map((st) => (
              <li key={st.key}>
                {/* PLACEHOLDER until UPWORK_STATS in src/lib/site.ts is filled. */}
                {st.value ? (
                  <>
                    {st.value} {st.label}
                  </>
                ) : (
                  <span className="border border-dashed border-note px-1.5 text-note">[add {st.label}]</span>
                )}
              </li>
            ))}
          </ul>
          <ul aria-label="Credentials" className="mono-label mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
            {CREDENTIALS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <figure
        className="enter m-0 flex min-w-0 flex-[1.3_1_520px] flex-col gap-4 border-2 border-ink bg-[rgba(255,255,255,0.72)] p-5 sm:p-7"
        style={step(1)}
      >
        <figcaption>
          <Note size={28}>{jema.diagram.caption}</Note>
        </figcaption>
        <WorkDiagram diagram={jema.diagram} size="md" enter />
        {jema.diagram.asides && (
          <div className="flex flex-wrap items-center gap-x-[22px] gap-y-1 border-t-[1.5px] border-dashed border-rule-dash pt-3">
            {jema.diagram.asides.map((a) => (
              <Note key={a} size={21} className="!text-ink">
                {a}
              </Note>
            ))}
            <span className="mono-label self-center">{jema.stack.filter((s) => ['Next.js', 'FastAPI', 'Firebase', 'AWS'].includes(s)).join(' · ')}</span>
          </div>
        )}
      </figure>
    </section>
  );
}
