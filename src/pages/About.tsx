import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import EditorialRow from '@/components/EditorialRow';
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

      <section className="px-5 sm:px-8 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <header className="max-w-3xl">
            <h1 className="t-h1">I build AI products and stay to run them.</h1>
            <p className="lead mt-6">
              I&apos;m Zeeshan Hameed, a full-stack AI engineer with a B.S. in Artificial
              Intelligence. I take AI products from idea to production: the AI layer, the backend,
              the web app and the mobile app, with one person accountable for how it all fits
              together.
            </p>
          </header>

          <div className="mt-14 md:mt-20">
            <EditorialRow id="hired" label="What I get hired for">
              <p className="prose-body">
                <strong className="font-semibold text-[var(--ink)]">Adding AI to a product that already exists.</strong>{' '}
                LLM features, chat, document AI and agents, built into the product your users already
                have.
              </p>
              <p className="prose-body">
                <strong className="font-semibold text-[var(--ink)]">Building a SaaS or MVP end to end.</strong>{' '}
                Auth, payments and deployment done properly, so the first real users are not the ones
                who find the gaps.
              </p>
              <p className="prose-body">
                <strong className="font-semibold text-[var(--ink)]">Taking over an app that keeps breaking.</strong>{' '}
                Finding why it falls over, fixing the causes instead of the symptoms, and leaving it
                stable.
              </p>
            </EditorialRow>

            <EditorialRow id="production" label="Demo and production">
              <p className="prose-body">
                A prototype shows that an idea can work. A product has to keep working when real
                users arrive, the data is messy, and a provider is down at an inconvenient moment.
              </p>
              <p className="prose-body">
                That second part is where most of my time goes: auth, payments, security, edge cases,
                and what the system does when something fails. It is the difference between
                something that demos well and something a team can rely on.
              </p>
            </EditorialRow>

            <EditorialRow id="accountable" label="Who is accountable">
              <p className="prose-body">
                When you work with me there is a named person accountable for what ships, not a
                rotating cast and not a black box. I tell you what is hard, what is risky, and what I
                would not do. If something needs a specialist I am not, I say so.
              </p>
            </EditorialRow>

            <EditorialRow id="stack" label="What I work with">
              <dl className="max-w-[38rem]">
                {stack.map((s, i) => (
                  <div
                    key={s.layer}
                    className={`grid sm:grid-cols-[11rem_minmax(0,1fr)] gap-x-6 gap-y-0.5 py-3 ${i > 0 ? 'rule-top' : ''}`}
                  >
                    <dt className="meta pt-0.5">{s.layer}</dt>
                    <dd className="text-[1rem] text-[var(--ink)]">{s.items}</dd>
                  </div>
                ))}
              </dl>
            </EditorialRow>

            <EditorialRow id="background" label="Background">
              <p className="prose-body">
                B.S. in Artificial Intelligence. Top Rated Plus on Upwork with a 100% Job Success
                score. Founder of Auxon AI. I am based in Pakistan and work remotely.
              </p>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-3">
                <Link to="/work" className="link inline-flex items-center gap-1.5">
                  See the work
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className="link">
                  {RESUME_LABEL}
                </a>
              </p>
            </EditorialRow>
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
