// Case study content model. One entry per project. Content sections are authored
// in this file (no CMS). Guardrails: never name the client company; no client
// numbers; architecture is framed as Zeeshan's engineering approach; no
// patent-pending mechanism; no FHIR/HL7 claims; EMR integration is in progress.

export interface CaseStudySection {
  heading: string;
  /** Paragraphs of body copy. */
  body: string[];
}

export interface CaseStudy {
  slug: string;
  /** Product name. */
  name: string;
  /** Short category label. */
  tag: string;
  /** Cover image in /public/work. Optional: text-only card when absent. */
  cover?: string;
  /** One-line summary for cards and hero. */
  oneLiner: string;
  /** Slightly longer blurb for the index card. */
  cardBlurb: string;
  /** Optional live link. */
  live?: { label: string; href: string };
  /** Tech used. */
  stack: string[];
  /** Per-page SEO. */
  metaTitle: string;
  metaDescription: string;
  /** Ordered content sections: problem, what I built, the hard parts, outcome. */
  sections: CaseStudySection[];
}

// Content sections are filled in Phase 3.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'jema',
    name: 'Jema',
    tag: 'Clinical AI',
    cover: '/work/jema.png',
    oneLiner: 'A clinical AI platform for Korean medicine, in daily use by doctors.',
    cardBlurb:
      'An end-to-end clinical AI platform for Korean medicine: AI clinical reports, patient records, scheduling, and herbal-formulation tracking. Live and used by doctors day to day.',
    stack: ['React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'Multi-model LLM routing', 'AWS', 'Docker'],
    metaTitle: 'Jema clinical AI case study | Zeeshan Hameed',
    metaDescription:
      'How I built Jema, a production clinical AI platform for Korean medicine: multi-model AI reports with fallback, a unified patient index, SSO across the product suite, and encrypted patient-data handling.',
    sections: [
      {
        heading: 'The problem',
        body: [
          'The founders had a clear vision for a clinical AI platform for Korean medicine, the traditional and herbal side of care, but no engineering team to build it. They needed a real product doctors could use in a live clinic, not a demo that falls over the first time a report has to generate under pressure.',
          'That meant building the whole thing end to end: the web app doctors work in, the backend and data model behind it, and the AI itself. And it had to work in Korean, for real clinical workflows, from day one.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'Jema is a clinical AI platform that doctors use in their day-to-day. It generates clinical reports with AI, keeps patient records, handles scheduling, and tracks herbal formulations, all in a multilingual product built for Korean-medicine practice.',
          'I built and own it end to end: the React and Next.js front end, a Python and FastAPI backend, the PostgreSQL data layer on Supabase, the multi-model AI, and the infrastructure it runs on. It is my flagship build, and it is live.',
        ],
      },
      {
        heading: 'The hard production parts',
        body: [
          'Report generation runs across multiple models, GPT, Claude, and Gemini, behind an automatic fallback and cost-aware routing layer I built. If one provider is down, slow, or expensive, a report still generates from another. A doctor mid-consult never sees the plumbing; they just get their report.',
          'The products in the suite share a unified patient index, so a patient is one record everywhere rather than a copy per app. On top of that, SSO lets a doctor move between the products without re-verifying, while access stays controlled.',
          'All of it handles sensitive patient data with encryption and a HIPAA-aware approach to storage and access, built in from the start rather than bolted on later. I am currently architecting the EMR integration layer on top of this, so Jema can sit alongside the systems clinics already run.',
        ],
      },
      {
        heading: 'Where it is now',
        body: [
          'Jema is live and in daily use by doctors, and it is at paid launch. It is the kind of product where reliability is not a nice-to-have: if the AI or the data layer is flaky, real clinical work stops. That is exactly the bar I build to.',
        ],
      },
    ],
  },
  {
    slug: 'dr-aigent',
    name: 'Dr. Aigent',
    tag: 'Clinical AI',
    // TODO(zeeshan): add a real cover image at /public/work/dr-aigent.png; text-only for now.
    oneLiner: "Multi-model clinical AI that turns doctors' notes into structured SOAP reports.",
    cardBlurb:
      "A multi-model clinical AI that turns doctors' notes into structured SOAP reports, with automatic fallback across models so it stays reliable and affordable in production.",
    stack: ['Python', 'FastAPI', 'Multi-model LLM routing'],
    metaTitle: 'Dr. Aigent multi-model clinical AI case study | Zeeshan Hameed',
    metaDescription:
      "Dr. Aigent turns doctors' notes into structured SOAP reports using multiple AI models with automatic, cost-aware fallback for production reliability.",
    sections: [
      {
        heading: 'The problem',
        body: [
          "Doctors spend real time turning messy consultation notes into structured reports. The goal with Dr. Aigent was to take a doctor's notes and produce a clean, structured SOAP report, reliably enough to trust in a working day, not just in a demo.",
        ],
      },
      {
        heading: 'What I built',
        body: [
          "Dr. Aigent is a multi-model clinical AI that turns doctors' notes into structured SOAP reports. I built the Python and FastAPI service behind it and the model layer that does the work.",
        ],
      },
      {
        heading: 'The hard part',
        body: [
          'The reliability comes from routing across GPT, Claude, and Gemini with automatic, cost-aware fallback. If one model is unavailable or too expensive for a given request, another picks it up, so the tool keeps producing reports in production instead of failing when a single provider has a bad day.',
        ],
      },
    ],
  },
  {
    slug: 'cuepilates',
    name: 'CuePilates',
    tag: 'Fitness SaaS',
    cover: '/work/cuepilates.png',
    oneLiner: 'An AI Pilates class-planning SaaS, taken from idea to launch in under a month.',
    cardBlurb:
      'An AI-powered Pilates class-planning SaaS with accounts and subscriptions, taken from idea to a live, paying product in under a month.',
    live: { label: 'Visit the live app', href: 'https://app.cuepilates.fit' },
    stack: ['Next.js', 'Supabase', 'Stripe', 'OpenAI'],
    metaTitle: 'CuePilates AI SaaS case study, idea to launch | Zeeshan Hameed',
    metaDescription:
      'How I took CuePilates, an AI Pilates class-planning SaaS, from idea to a live product with paying subscribers in under a month: auth, Stripe subscriptions, Supabase, and the AI planning engine.',
    sections: [
      {
        heading: 'The problem',
        body: [
          'The founder had a strong vision for CuePilates, an AI tool that plans Pilates classes, but no coding background and no product yet. They did not need a prototype to show around. They needed a real SaaS, live, with accounts and subscriptions, and they needed it fast.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'CuePilates is an AI-powered Pilates class-planning platform. Instructors get class plans generated by AI, inside a full product with accounts and paid subscriptions. It is live at app.cuepilates.fit.',
          'I built it on Next.js and Supabase, with Stripe for subscriptions and OpenAI powering the planning engine.',
        ],
      },
      {
        heading: 'The hard part',
        body: [
          'The challenge was shipping a complete, paying product in weeks rather than months without cutting the corners that matter. That meant real auth, Stripe subscriptions and payment handling done properly, a Supabase backend that holds up, and an AI planning engine that produces useful class plans, all production-ready.',
          'The founder came in with zero coding background, so part of the job was translating their ideas into real features, milestone after milestone, and making the calls a non-technical founder should not have to.',
        ],
      },
      {
        heading: 'The outcome',
        body: [
          'CuePilates went from idea to a live product with paying subscribers in under a month, and it is running today.',
        ],
      },
    ],
  },
  {
    slug: 'diettalk',
    name: 'DietTalk',
    tag: 'Health app',
    cover: '/work/diettalk.png',
    oneLiner: 'A doctor-supervised diet and weighment app, live on the App Store and Google Play.',
    cardBlurb:
      'A doctor-supervised diet and weighment product: a Flutter app for patients and a web portal for doctors, with OCR that reads lab results to auto-fill the clinical workflow. Live on both app stores.',
    stack: ['Flutter', 'iOS + Android', 'Web portal', 'PostgreSQL', 'Supabase', 'OCR + LLM extraction'],
    metaTitle: 'DietTalk health app case study, Flutter + doctor portal | Zeeshan Hameed',
    metaDescription:
      'DietTalk is a doctor-supervised diet and weighment product: one Flutter codebase shipped to iOS and Android, a doctor web portal, and OCR that reads lab results to auto-fill the workflow.',
    sections: [
      {
        heading: 'The problem',
        body: [
          'DietTalk needed to work for two very different users at once: patients tracking their diet and weight from their phone, and doctors supervising them and sending guidance. That is a mobile app and a clinical web tool, tied to the same patient data, and it had to ship to both app stores.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'DietTalk is a doctor-supervised diet and weighment product. Patients use a Flutter mobile app to track diet and weight; doctors use a web portal to supervise and send guidance, with AI insights on top. It is live on the App Store and Google Play.',
          'I built the mobile app in Flutter for both iOS and Android, the doctor-facing web portal, and the backend on PostgreSQL and Supabase that connects them.',
        ],
      },
      {
        heading: 'The hard part',
        body: [
          'One Flutter codebase had to ship cleanly to both iOS and Android and pass both stores, while the doctor portal stayed tied to the same patient records the app writes to.',
          'The part I am most happy with is the OCR: instead of making people re-type everything, the product reads lab results and captures patient details straight off documents, then uses that to auto-fill the clinical workflow. It removes a pile of manual data entry, and it means the data doctors act on comes from the source. Health data is handled securely throughout.',
        ],
      },
      {
        heading: 'The outcome',
        body: [
          'DietTalk is live on the App Store and Google Play, in real use by patients and the doctors supervising them.',
        ],
      },
    ],
  },
];

export const workSlugs = caseStudies.map((c) => c.slug);
export const workPaths = workSlugs.map((s) => `/work/${s}`);

export function getCaseStudy(slug?: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
