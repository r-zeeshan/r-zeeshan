import { Card, Diagram, DiagramArrow, DiagramNode, DiagramStep, SectionHeader } from '@/components/blueprint';
import type { Join } from '@/components/blueprint';

interface Step {
  label: string;
  ai?: boolean;
  alert?: boolean;
  join?: Join;
}

// The three kinds of work I get hired for, each with a tiny diagram of what changes.
const kinds: { title: string; body: string; steps: Step[] }[] = [
  {
    title: 'Adding AI to a product that already exists',
    body: 'LLM features, chat, document AI and agents, built into the product your users already have rather than bolted on beside it.',
    steps: [{ label: 'your app' }, { label: 'AI', ai: true, join: 'plus' }],
  },
  {
    title: 'Building a SaaS or MVP end to end',
    body: 'Auth, payments and deployment done properly, so the first real users are not the ones who find the gaps.',
    steps: [{ label: 'idea' }, { label: 'MVP' }, { label: 'paying users', ai: true }],
  },
  {
    title: 'Taking over an app that keeps breaking',
    body: 'Finding why it falls over, fixing the causes instead of the symptoms, and leaving it stable.',
    steps: [{ label: 'breaks', alert: true }, { label: 'root cause' }, { label: 'stable' }],
  },
];

export default function HiredFor() {
  return (
    <section aria-labelledby="hired-heading" className="mx-auto flex w-full max-w-wrap flex-col gap-8 px-6 pb-16 md:pb-[104px]">
      <SectionHeader number="01" id="hired-heading">
        What I get hired for
      </SectionHeader>
      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]">
        {kinds.map((k) => (
          <Card as="article" key={k.title} className="flex flex-col gap-3.5">
            <div aria-hidden="true">
              <Diagram size="sm">
                {k.steps.map((s, i) => (
                  <DiagramStep key={s.label} size="sm">
                    {i > 0 && <DiagramArrow kind={s.join} size="sm" />}
                    <DiagramNode size="sm" ai={s.ai} alert={s.alert} className={s.alert ? 'line-through' : undefined}>
                      {s.label}
                    </DiagramNode>
                  </DiagramStep>
                ))}
              </Diagram>
            </div>
            <h3 className="t-h3">{k.title}</h3>
            <p className="text-base leading-[1.55] text-ink-2">{k.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
