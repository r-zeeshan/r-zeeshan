import Seo from '@/components/Seo';
import { Button, Container, SectionHeader } from '@/components/blueprint';
import GetInTouch from '@/components/sections/GetInTouch';
import { personGraph, DEFAULT_OG_ALT } from '@/lib/seo';
import { RESUME_HREF, RESUME_LABEL } from '@/lib/site';

// Grouped by layer, from the stack Zeeshan works across.
const stack = [
  { layer: 'AI layer', items: 'OpenAI, Claude, Gemini, LangChain' },
  { layer: 'Backend', items: 'Python, FastAPI, PostgreSQL, Supabase, Firebase' },
  { layer: 'Web', items: 'React, Next.js' },
  { layer: 'Mobile', items: 'Flutter' },
  { layer: 'Payments and infrastructure', items: 'Stripe, AWS, Docker' },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Zeeshan Hameed | Full-Stack AI Engineer"
        description="I'm Zeeshan Hameed, a full-stack AI engineer with a B.S. in Artificial Intelligence. I build AI products from idea to production and stay to run them after launch: the AI layer, backend, web and mobile."
        path="/about"
        ogType="profile"
        ogImageAlt={DEFAULT_OG_ALT}
        jsonLd={personGraph()}
      />

      <Container className="pb-4 pt-10 md:pt-14">
        <header className="max-w-3xl">
          <h1 className="t-display">I build AI products and stay to run them.</h1>
          <p className="lead mt-6">
            I&apos;m Zeeshan Hameed, a full-stack AI engineer with a B.S. in Artificial
            Intelligence. I take AI products from idea to production: the AI layer, the backend,
            the web app and the mobile app, with one person accountable for how it all fits
            together.
          </p>
        </header>
      </Container>

      <Container className="flex flex-col gap-14 pb-16 pt-12 md:gap-[72px] md:pb-[104px] md:pt-16">
        <Block number="01" id="hired" title="What I get hired for">
          <p className="prose-body">
            <strong className="font-semibold text-ink">Adding AI to a product that already exists.</strong>{' '}
            LLM features, chat, document AI and agents, built into the product your users already
            have.
          </p>
          <p className="prose-body">
            <strong className="font-semibold text-ink">Building a SaaS or MVP end to end.</strong>{' '}
            Auth, payments and deployment done properly, so the first real users are not the ones
            who find the gaps.
          </p>
          <p className="prose-body">
            <strong className="font-semibold text-ink">Taking over an app that keeps breaking.</strong>{' '}
            Finding why it falls over, fixing the causes instead of the symptoms, and leaving it
            stable.
          </p>
        </Block>

        <Block number="02" id="production" title="Demo and production">
          <p className="prose-body">
            A prototype shows that an idea can work. A product has to keep working when real
            users arrive, the data is messy, and a provider is down at an inconvenient moment.
          </p>
          <p className="prose-body">
            That second part is where most of my time goes: auth, payments, security, edge cases,
            and what the system does when something fails. It is the difference between
            something that demos well and something a team can rely on.
          </p>
        </Block>

        <Block number="03" id="accountable" title="Who is accountable">
          <p className="prose-body">
            When you work with me there is a named person accountable for what ships, not a
            rotating cast and not a black box. I tell you what is hard, what is risky, and what I
            would not do. If something needs a specialist I am not, I say so.
          </p>
        </Block>

        <Block number="04" id="stack" title="What I work with">
          <dl className="max-w-[44rem] border-2 border-ink bg-surface">
            {stack.map((s, i) => (
              <div
                key={s.layer}
                className={`grid gap-x-6 gap-y-0.5 px-5 py-3.5 sm:grid-cols-[13rem_minmax(0,1fr)] ${i > 0 ? 'border-t-[1.5px] border-dashed border-rule-dash' : ''}`}
              >
                <dt className="mono-label-caps pt-0.5">{s.layer}</dt>
                <dd className="font-mono text-[14px] text-ink">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block number="05" id="background" title="Background">
          <p className="prose-body">
            B.S. in Artificial Intelligence. Top Rated Plus on Upwork with a 100% Job Success
            score. Founder of Auxon AI. I am based in Pakistan and work remotely.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <Button to="/work">See the work</Button>
            <Button href={RESUME_HREF} external variant="link">
              {RESUME_LABEL}
            </Button>
          </div>
        </Block>
      </Container>

      <GetInTouch />
    </>
  );
}

function Block({ number, id, title, children }: { number: string; id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`${id}-heading`} className="flex flex-col gap-6">
      <SectionHeader number={number} id={`${id}-heading`}>
        {title}
      </SectionHeader>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}
