// Case study content model. One entry per project, authored in this file (no CMS).
// Guardrails: never name the Korean client company or the rescue client; no client
// numbers; architecture is framed as Zeeshan's engineering approach; EMR integration
// is in progress. Unknowns are TODO(zeeshan) comments and are omitted from the page.

export interface HardPart {
  title: string;
  body: string[];
}

export interface CaseStudy {
  slug: string;
  /** Product name. */
  name: string;
  /** Short category label, sentence case. */
  tag: string;
  /** Cover image in /public/work. Optional: text-only entry when absent. */
  cover?: string;
  /** Branded 1200x630 OG/Twitter share image in /public/og. */
  ogImage: string;
  /** Leads the work index with a large cover. */
  lead?: boolean;
  /** One-line summary for the index and the title block. */
  oneLiner: string;
  /** Slightly longer blurb for lead entries on the index. */
  cardBlurb: string;
  /** "At a glance": Zeeshan's role. */
  role: string;
  /** "At a glance": timeline. Omitted from the page when unknown. */
  timeline?: string;
  /** "At a glance": live link, if any. */
  live?: { label: string; href: string };
  /** Tech used. */
  stack: string[];
  /** Author of a real review in testimonials.ts to show under this study. */
  testimonial?: string;
  /** Per-page SEO. */
  metaTitle: string;
  metaDescription: string;
  /** The problem. */
  problem: string[];
  /** What I built. */
  built: string[];
  /** The hard parts, each with a short title. */
  hardParts: HardPart[];
  /** Where it is now. */
  now: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'jema',
    name: 'Jema',
    tag: 'Clinical AI',
    cover: '/work/jema.webp',
    ogImage: '/og/work-jema.png',
    lead: true,
    oneLiner: 'A clinical AI platform for Korean medicine, used by doctors in Korea.',
    cardBlurb:
      'An end-to-end clinical AI platform for Korean medicine: AI clinical reports, patient records, scheduling, and herbal-formulation tracking. Live and used by doctors in Korea.',
    role: 'Lead AI engineer, end to end',
    timeline: 'June 2025 to present',
    stack: ['React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'Multi-model LLM routing', 'AWS', 'Docker'],
    metaTitle: 'Jema clinical AI case study | Zeeshan Hameed',
    metaDescription:
      'How I built Jema, a production clinical AI platform for Korean medicine: multi-model AI reports with fallback, a unified patient index, SSO across the product suite, and encrypted patient-data handling with access controls.',
    problem: [
      'The founders had a clear vision for a clinical AI platform for Korean medicine, the traditional and herbal side of care, but no engineering team to build it. They needed a real product doctors could use in a live clinic, not a demo that falls over the first time a report has to generate under pressure.',
      'That meant building the whole thing end to end: the web app doctors work in, the backend and data model behind it, and the AI itself. And it had to work in Korean, for real clinical workflows, from day one.',
    ],
    built: [
      'Jema is a clinical AI platform used by doctors in Korea. It generates clinical reports with AI, keeps patient records, handles scheduling, tracks herbal formulations, and supports doctor verification and multi-clinic use, in a multilingual product built for Korean-medicine practice.',
      'I built and own it end to end: the React and Next.js front end, a Python and FastAPI backend, the PostgreSQL data layer on Supabase, the multi-model AI, and the infrastructure it runs on. It is my flagship build, and it is live.',
    ],
    hardParts: [
      {
        title: 'Reports that survive a provider outage',
        body: [
          'Report generation runs across multiple models, GPT, Claude, and Gemini, behind an automatic fallback and cost-aware routing layer I built. If one provider is down, slow, or expensive, a report still generates from another. A doctor mid-consult never sees the plumbing; they just get their report.',
        ],
      },
      {
        title: 'One patient record everywhere',
        body: [
          'The products in the suite share a unified patient index, so a patient is one record everywhere rather than a copy per app.',
        ],
      },
      {
        title: 'Single sign-on across the suite',
        body: [
          'SSO lets a doctor move between the products without re-verifying, while access stays controlled.',
        ],
      },
      {
        title: 'Patient data',
        body: [
          'Encrypted patient-data handling with access controls was built in from the start rather than bolted on later.',
        ],
      },
      {
        title: 'EMR integration (in progress)',
        body: [
          'I am architecting the integration layer that will let Jema sit alongside the systems clinics already run. It is in progress, not shipped.',
        ],
      },
    ],
    now: [
      'Jema is live and used by doctors in Korea. It is the kind of product where reliability is not a nice-to-have: if the AI or the data layer is flaky, real clinical work stops. That is the bar I build to.',
    ],
  },
  {
    slug: 'cuepilates',
    name: 'CuePilates',
    tag: 'AI SaaS',
    cover: '/work/cuepilates.webp',
    ogImage: '/og/work-cuepilates.png',
    lead: true,
    oneLiner: 'An AI Pilates class-planning SaaS, taken from idea to launch in under a month.',
    cardBlurb:
      'An AI-powered Pilates class-planning SaaS with accounts and subscriptions, taken from idea to a live, paying product in under a month.',
    role: 'Full-stack engineer, idea to launch',
    timeline: 'Under a month, idea to launch',
    live: { label: 'app.cuepilates.fit', href: 'https://app.cuepilates.fit' },
    // TODO(zeeshan): the old copy said OpenAI, but the client's review, the cover art and the
    // old README all say Claude / the Anthropic API. The vendor is left generic ("LLM API")
    // until you confirm which one powers the planning engine, then put the name back.
    stack: ['Next.js', 'Supabase', 'Stripe', 'LLM API'],
    testimonial: 'Founder, CuePilates',
    metaTitle: 'CuePilates AI SaaS case study, idea to launch | Zeeshan Hameed',
    metaDescription:
      'How I took CuePilates, an AI Pilates class-planning SaaS, from idea to a live product with paying subscribers in under a month: auth, Stripe subscriptions, Supabase, and the AI planning engine.',
    problem: [
      'The founder had a strong vision for CuePilates, an AI tool that plans Pilates classes, but no coding background and no product yet. They did not need a prototype to show around. They needed a real SaaS, live, with accounts and subscriptions, and they needed it fast.',
    ],
    built: [
      'CuePilates is an AI-powered Pilates class-planning platform. Instructors get AI-generated class plans and hands-free spoken cues, inside a full product with accounts and paid subscriptions. It is live at app.cuepilates.fit.',
      'I built it on Next.js and Supabase, with Stripe for subscriptions and an LLM powering the planning engine.',
    ],
    hardParts: [
      {
        title: 'A complete paying product in weeks',
        body: [
          'The challenge was shipping a complete, paying product in weeks rather than months without cutting the corners that matter. That meant real auth, Stripe subscriptions and payment handling done properly, a Supabase backend that holds up, and an AI planning engine that produces useful class plans, all production-ready.',
        ],
      },
      {
        title: 'A non-technical founder',
        body: [
          'The founder came in with zero coding background, so part of the job was translating their ideas into real features, milestone after milestone, and making the calls a non-technical founder should not have to.',
        ],
      },
    ],
    now: [
      'CuePilates went from idea to a live product with paying subscribers in under a month, and it is running today.',
    ],
  },
  {
    slug: 'truecert',
    name: 'TrueCert',
    tag: 'Workflow automation',
    ogImage: '/og/work-truecert.png',
    oneLiner: 'A certification platform that replaced spreadsheets and site visits for a recycling company.',
    cardBlurb:
      'A certification platform for a recycling company that ran its process on spreadsheets and site visits: 250+ questions across 16 categories, AI-suggested answers, real-time validation, role-based access and document processing.',
    role: 'Full-stack AI engineer',
    // TODO(zeeshan): add a timeline (e.g. "March to June 2025") if you want one shown.
    stack: ['Python', 'FastAPI', 'OpenAI', 'React', 'PostgreSQL'],
    testimonial: 'Aaron Phillips',
    metaTitle: 'TrueCert certification platform case study | Zeeshan Hameed',
    metaDescription:
      'How I built TrueCert, a certification platform that replaced spreadsheets and site visits for a recycling company: 250+ questions across 16 categories, AI-suggested answers, real-time validation, role-based access and document processing.',
    problem: [
      'Green Earth, a recycling company, ran its certification process on spreadsheets and site visits. They needed one system that could hold the whole process, help people answer a long questionnaire correctly, and give each person access to only the parts that were theirs.',
    ],
    built: [
      'TrueCert is a certification platform. The process is a guided questionnaire of 250+ questions across 16 categories, with AI-suggested answers, real-time validation as people fill it in, and document processing for the supporting files. Access is role-based, so each person sees and does only what their role allows.',
      'The backend is Python and FastAPI on PostgreSQL, the front end is React, and OpenAI sits behind the suggested answers.',
    ],
    // TODO(zeeshan): this section only restates the feature list. Add one or two concrete
    // engineering details you are happy to share (how suggestions are grounded, what the
    // validation covers, which document types are processed) and it will read much stronger.
    hardParts: [
      {
        title: 'A long questionnaire, validated as you go',
        body: [
          'Across 250+ questions in 16 categories, answers are validated in real time, so a mistake surfaces while the person is still on the question.',
        ],
      },
      {
        title: 'Suggestions people can check',
        body: [
          'The AI suggests answers for people to review, which cuts the typing without taking the decision away from them.',
        ],
      },
      {
        title: 'Roles and documents',
        body: [
          'Role-based access keeps each person to their part of the process, and document processing handles the supporting files that certification depends on.',
        ],
      },
    ],
    // TODO(zeeshan): confirm TrueCert is still in use today and say so here if it is.
    now: [
      'TrueCert replaced the spreadsheets and site visits the company used before. The client describes the work below.',
    ],
  },
  {
    slug: 'diettalk',
    name: 'DietTalk',
    tag: 'Mobile and web',
    cover: '/work/diettalk.webp',
    ogImage: '/og/work-diettalk.png',
    oneLiner: 'A doctor-supervised diet and weight management app, live on the App Store and Google Play.',
    cardBlurb:
      'A doctor-supervised diet and weight management product: a Flutter app for patients and a web portal for doctors, with OCR that reads lab results to auto-fill the clinical workflow. Live on both app stores.',
    role: 'Mobile and full-stack engineer',
    timeline: 'June 2025 to present',
    // TODO(zeeshan): add the App Store and Google Play URLs as `live` if you want them linked.
    stack: ['Flutter', 'iOS + Android', 'Web portal', 'PostgreSQL', 'Supabase', 'OCR + LLM extraction'],
    metaTitle: 'DietTalk mobile app and doctor portal case study | Zeeshan Hameed',
    metaDescription:
      'DietTalk is a doctor-supervised diet and weight management product: one Flutter codebase shipped to iOS and Android, a doctor web portal, and OCR that reads lab results to auto-fill the workflow.',
    problem: [
      'DietTalk needed to work for two very different users at once: patients tracking their diet and weight from their phone, and doctors supervising them and sending guidance. That is a mobile app and a clinical web tool, tied to the same patient data, and it had to ship to both app stores.',
    ],
    built: [
      'DietTalk is a doctor-supervised diet and weight management product. Patients use a Flutter mobile app to track diet and weight; doctors use a web portal to supervise and send guidance, with AI insights on top. It is live on the App Store and Google Play.',
      'I built the mobile app in Flutter for both iOS and Android, the doctor-facing web portal, and the backend on PostgreSQL and Supabase that connects them.',
    ],
    hardParts: [
      {
        title: 'One codebase, two stores',
        body: [
          'One Flutter codebase had to ship cleanly to both iOS and Android and pass both stores, while the doctor portal stayed tied to the same patient records the app writes to.',
        ],
      },
      {
        title: 'Reading documents instead of re-typing them',
        body: [
          'Instead of making people re-type everything, the product reads lab results and captures patient details straight off documents, then uses that to auto-fill the clinical workflow. It removes a pile of manual data entry, and it means the data doctors act on comes from the source. Health data is handled securely throughout.',
        ],
      },
    ],
    now: [
      'DietTalk is live on the App Store and Google Play, in real use by patients and the doctors supervising them.',
    ],
  },
  {
    slug: 'dr-aigent',
    name: 'Dr. Aigent',
    tag: 'Document AI',
    cover: '/work/dr-aigent.webp',
    ogImage: '/og/work-dr-aigent.png',
    oneLiner: "Multi-model clinical AI that turns doctors' notes into structured SOAP reports.",
    cardBlurb:
      "A multi-model clinical AI that turns doctors' notes into structured SOAP reports, with automatic fallback across models so it stays reliable and affordable in production.",
    role: 'Backend and AI engineer',
    timeline: 'June 2025 to present',
    stack: ['Python', 'FastAPI', 'Multi-model LLM routing'],
    metaTitle: 'Dr. Aigent multi-model clinical AI case study | Zeeshan Hameed',
    metaDescription:
      "Dr. Aigent turns doctors' notes into structured SOAP reports using multiple AI models with automatic, cost-aware fallback for production reliability.",
    problem: [
      "Doctors spend real time turning messy consultation notes into structured reports. The goal with Dr. Aigent was to take a doctor's notes and produce a clean, structured SOAP report, reliably enough to trust in a working day, not just in a demo.",
    ],
    built: [
      "Dr. Aigent is a multi-model clinical AI that turns doctors' notes into structured SOAP reports. I built the Python and FastAPI service behind it and the model layer that does the work.",
    ],
    hardParts: [
      {
        title: 'Routing across models, with fallback',
        body: [
          'The reliability comes from routing across GPT, Claude, and Gemini with automatic, cost-aware fallback. If one model is unavailable or too expensive for a given request, another picks it up, so the tool keeps producing reports in production instead of failing when a single provider has a bad day.',
        ],
      },
    ],
    now: ['Dr. Aigent is in production, as one of three connected platforms I built for the same client.'],
  },
  {
    slug: 'production-rescue',
    name: 'Production rescue',
    tag: 'Stabilization',
    ogImage: '/og/work-production-rescue.png',
    oneLiner:
      'A live web app taken over from another developer after its production database was wiped, then stabilized and kept running for its users.',
    cardBlurb:
      'A live web app taken over from another developer after its production database was wiped, then stabilized and kept running for its users.',
    role: 'Engineer, took over the codebase',
    // TODO(zeeshan): confirm the engagement window. The commit history runs May to July 2026.
    timeline: 'From May 2026',
    // TODO(zeeshan): your brief and resume say "FastAPI + React". The repo is Next.js,
    // TypeScript, Prisma and PostgreSQL on Vercel, so this lists what the repo shows.
    // If the resume line describes a different project, say so and this study needs a rewrite.
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel', 'Vitest', 'Playwright'],
    metaTitle: 'Production rescue case study: taking over a broken live app | Zeeshan Hameed',
    metaDescription:
      'How I took over a live web app after its production database was wiped: guarding the database against destructive commands, cleaning up recovered data, and fixing the reliability bugs that kept users out.',
    // TODO(zeeshan): the wipe (1 May 2026) and the first re-import were committed under the
    // previous author before your first commit (5 May). This page describes your part as
    // "taking over after the wipe" and does not claim you performed the first recovery.
    // If you did carry out the recovery itself, add that here.
    problem: [
      'I took this project over from another developer while it was live. A few days earlier its production database had been wiped. The core records had been re-imported from exports, but the data was uneven, some of it still needed rebuilding, and nothing stood between a stray command and the production database.',
    ],
    built: [
      'First, a guard: destructive database commands now refuse to run when the connection points at a production host, so the same mistake cannot repeat from a developer machine.',
      'Then the data. Legacy free-text values left over from the re-import were mapped onto a controlled set, with a one-time migration and an importer that normalizes on the way in. The admin accounts were seeded again so a reseed restores everyone.',
      'After that came the ordinary work of keeping a live app useful: fixing correctness bugs as people hit them, and shipping the changes the team needed.',
    ],
    hardParts: [
      {
        title: 'Making the dangerous path hard to take',
        body: [
          'The wipe was consistent with a destructive database command run against the production connection. I wired a guard into the commands people actually type: it refuses to run them against a production host and points them at a local database instead.',
        ],
      },
      {
        title: 'Cleaning up data without a second incident',
        body: [
          'The recovered data carried free-text values that no longer matched the controlled set the app expected. I fixed it in two parts: a one-time migration for what was already there, and normalization at import so new data could not reintroduce the problem.',
        ],
      },
      {
        title: 'Bugs that looked like bad data',
        body: [
          'Two problems that looked like wrong data were caching. A public page only refreshed on a short cache window, and an admin view served a stale response. Admin schedule changes now trigger revalidation on demand, and the admin view reads uncached.',
        ],
      },
      {
        title: 'Rows that vanished from an export',
        body: [
          'A spreadsheet export built one row per person, so any entry without a person attached silently disappeared from the file. It had no test coverage, which is why nobody noticed. I moved those entries to their own worksheet and wrote regression tests around it.',
        ],
      },
      {
        title: 'A scheduler that blocked its own drops',
        body: [
          'In the drag-and-drop planner, the card being moved still counted as occupying its target slot, so valid drops were refused. The fix was to exclude the dragged card from the occupancy check.',
        ],
      },
    ],
    // TODO(zeeshan): confirm the current status (still engaged? still in production?) and
    // add an outcome you are comfortable stating. The history ends on 24 July 2026.
    now: ['The app stayed live for its users while this work shipped to production.'],
  },
];

export const workSlugs = caseStudies.map((c) => c.slug);
export const workPaths = workSlugs.map((s) => `/work/${s}`);

export function getCaseStudy(slug?: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
