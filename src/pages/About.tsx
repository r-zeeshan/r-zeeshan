import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import WorkWithMe from '@/components/sections/WorkWithMe';
import { personGraph, DEFAULT_OG_ALT } from '@/lib/seo';

const credentials = [
  'B.S. in Artificial Intelligence',
  'Top Rated Plus on Upwork',
  '100% Job Success',
  '20+ five-star projects',
  'Founder of Auxon AI',
  'Based in Pakistan',
];

const stack = [
  'React',
  'Next.js',
  'Python',
  'FastAPI',
  'Flutter',
  'PostgreSQL',
  'Supabase',
  'Firebase',
  'OpenAI',
  'Claude',
  'Gemini',
  'LangChain',
  'Stripe',
  'AWS',
  'Docker',
];

export default function About() {
  return (
    <>
      <Seo
        title="About Zeeshan Hameed | Senior AI engineer, production health & fitness AI"
        description="I'm Zeeshan Hameed, a senior AI engineer with a B.S. in Artificial Intelligence. I build production health and fitness AI, clinical platforms, multi-model LLM systems, and cross-platform apps, and I'm the named person accountable for what ships."
        path="/about"
        ogType="profile"
        ogImageAlt={DEFAULT_OG_ALT}
        jsonLd={personGraph()}
      />

      <section className="px-5 pt-32 md:pt-40 pb-16">
        <div className="max-w-3xl mx-auto">
          <span className="eyebrow">About me</span>
          <h1 className="heading-brutal heading-xl mt-3">
            I build health and fitness AI that <span className="accent-italic">holds up</span>.
          </h1>

          <div className="mt-10 space-y-5 text-[1.05rem] text-[var(--warm-gray)] leading-relaxed">
            <p>
              I&apos;m Zeeshan, a senior AI engineer with a B.S. in Artificial Intelligence. I build
              production-grade AI products for health and fitness founders, and I run my studio,
              Auxon AI. Most of my work is the kind you don&apos;t get to fake: clinical tools
              doctors rely on, apps that live on the app stores, products with real users and real
              money moving through them.
            </p>
            {/* TODO(zeeshan): if you want a personal origin paragraph (how you got into health/fitness AI specifically), add it here. */}
            <p>
              My whole thing is the gap between a demo and a product. Anyone can get a prototype
              working now. The hard part is the other 80%: auth, payments, security, edge cases, real
              data, the failure modes that only show up under load at 2am. That&apos;s the work I
              care about, and it&apos;s where most builds quietly fall apart.
            </p>
            <p>
              I&apos;ve built a clinical AI platform for Korean medicine that doctors use in their
              day-to-day, a multi-model system that turns doctors&apos; notes into structured
              reports, an AI Pilates SaaS taken from idea to a live, paying product in under a month,
              and a doctor-supervised diet app that&apos;s live on both the App Store and Google
              Play. Across those, I work end to end: web, backend, mobile, and the AI itself.
            </p>
            <p>
              When you work with me there&apos;s a named person accountable for what ships, not a
              rotating cast and not a black box. I tell you what&apos;s hard, what&apos;s risky, and
              what I wouldn&apos;t do. If something needs a specialist I don&apos;t have, I say so.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="mono-label !text-[var(--muted)] mb-4">Credentials</h2>
            <div className="flex flex-wrap gap-2">
              {credentials.map((c) => (
                <span key={c} className="tag">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="mono-label !text-[var(--muted)] mb-4">What I work across</h2>
            <div className="flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-[var(--sage-deep)] font-medium mt-10"
          >
            See the work
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <WorkWithMe />
    </>
  );
}
