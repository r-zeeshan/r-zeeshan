import type { CaseStudy } from '@/lib/work';
import { Card, Note, WorkDiagram } from '@/components/blueprint';
import { Link } from 'react-router-dom';

/** A small work card: tag, name, the product's own diagram, one line. The whole card is the link. */
export function WorkCard({ cs, className }: { cs: CaseStudy; className?: string }) {
  return (
    <Card as={Link} to={`/work/${cs.slug}`} interactive className={`flex flex-col gap-3.5 ${className ?? ''}`}>
      <span className="mono-label-caps">{cs.tag}</span>
      <h3 className="t-h3 text-[24px] group-hov:underline underline-offset-4">{cs.name}</h3>
      <WorkDiagram diagram={cs.diagram} size="sm" />
      <p className="text-[15px] leading-[1.55] text-ink-2">{cs.shortLine}</p>
    </Card>
  );
}

/** The wide card for the flagship product, with its hard parts as small callouts. */
export function LeadWorkCard({ cs }: { cs: CaseStudy }) {
  const meta = [cs.tag, cs.role, cs.timeline].filter(Boolean).join(' · ');
  return (
    <Card as={Link} to={`/work/${cs.slug}`} interactive padding="lg" className="flex flex-wrap gap-8">
      <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-3">
        <span className="mono-label-caps">{meta}</span>
        <h3 className="t-h3-lg group-hov:underline underline-offset-4">{cs.name}</h3>
        <p className="text-[17px] leading-[1.55] text-ink-2">{cs.cardBlurb}</p>
        <span className="link">Read the case study →</span>
      </div>
      {cs.cardParts && (
        <ul
          aria-label="Hard parts"
          className="grid min-w-0 flex-[1_1_420px] content-center gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(180px,100%),1fr))]"
        >
          {cs.cardParts.map((p) => (
            <li
              key={p.text}
              className={
                p.inProgress
                  ? 'flex flex-col gap-1 border-[1.5px] border-dashed border-rule-dash p-3.5'
                  : 'flex flex-col gap-1 border-[1.5px] border-ink p-3.5'
              }
            >
              <Note size={20} tone={p.inProgress ? 'muted' : 'paper'}>
                {p.inProgress ? 'in progress' : 'the hard part'}
              </Note>
              <span className={`text-[15px] font-semibold leading-snug ${p.inProgress ? 'text-ink-2' : ''}`}>{p.text}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
