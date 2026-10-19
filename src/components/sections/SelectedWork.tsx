import { Button, SectionHeader } from '@/components/blueprint';
import { LeadWorkCard, WorkCard } from '@/components/WorkCards';
import { caseStudies, getCaseStudy } from '@/lib/work';

const GRID = ['dr-aigent', 'diettalk', 'cuepilates', 'production-rescue'];

export default function SelectedWork() {
  const lead = getCaseStudy('jema')!;
  const grid = GRID.map((s) => getCaseStudy(s)!);
  const others = caseStudies.filter((c) => c.slug !== lead.slug && !GRID.includes(c.slug)).map((c) => c.name);

  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto flex w-full max-w-wrap flex-col gap-8 px-6 pb-16 md:pb-[104px]">
      <SectionHeader number="02" id="work-heading" note="each one drawn as it actually works">
        Products I&apos;ve built and shipped
      </SectionHeader>
      <LeadWorkCard cs={lead} />
      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(520px,100%),1fr))]">
        {grid.map((cs) => (
          <WorkCard key={cs.slug} cs={cs} />
        ))}
      </div>
      <Button to="/work" variant="link" className="self-start">
        All work{others.length > 0 ? `, including ${others.join(', ')}` : ''} →
      </Button>
    </section>
  );
}
