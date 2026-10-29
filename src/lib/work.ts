// Case study content model. One entry per project, authored in this file (no CMS).
// Guardrails: never name the Korean client company or the rescue client; no client
// numbers; architecture is framed as Zeeshan's engineering approach; EMR integration
// is in progress. Anything that is not known is left out of the page rather than padded.

export interface HardPart {
  title: string;
  /** Optional sub-heading. Consecutive parts with the same group render under one label. */
  group?: string;
  body: string[];
}

/** One box in a case study's system diagram. */
export interface DiagramNode {
  label: string;
  /** Mono sub-label, e.g. the models behind a router. */
  sub?: string;
  /** The AI part of the system (dashed). At most one per diagram. */
  ai?: boolean;
  /** Something that went wrong (solid, in the note colour). */
  alert?: boolean;
  /** How this node joins the one before it. Defaults to an arrow. */
  join?: 'to' | 'both' | 'plus';
  /** A short handwritten note that ends the row here; the next node starts a new row. */
  after?: string;
}

/**
 * How the product actually works, as an ordered list of nodes. Drawn small on cards and
 * large on the case study. Every node must be backed by the case study text below.
 */
export interface WorkDiagram {
  /** Handwritten caption for the large diagram. */
  caption: string;
  nodes: DiagramNode[];
  /** Extra capabilities, shown as handwritten "+ ..." lines under the large diagram. */
  asides?: string[];
}

/** A product screenshot on a case study. Without `src` it renders a marked placeholder. */
export interface Screenshot {
  /** Path under /public, e.g. /screens/jema-1.webp. PLACEHOLDER while unset. */
  src?: string;
  /** Pixel size of the file at `src`, so the page can reserve its space. */
  width?: number;
  height?: number;
  /** What the screenshot shows (alt text, and the caption when `caption` is not set). */
  alt: string;
  /** Short visible caption. */
  caption?: string;
  /** Where the file goes, shown on the placeholder only. */
  slot: string;
}

export interface CaseStudy {
  slug: string;
  /** Product name. */
  name: string;
  /** Short category label, sentence case. */
  tag: string;
  /** Branded 1200x630 OG/Twitter share image in /public/og. */
  ogImage: string;
  /** The product's system diagram. */
  diagram: WorkDiagram;
  /** One-line summary for the index and the title block. */
  oneLiner: string;
  /** Slightly longer blurb for the wide card. */
  cardBlurb: string;
  /** Short line for the small cards on the home page and the work index. */
  shortLine: string;
  /** Wide-card callouts shown beside the blurb (Jema AIgent only). */
  cardParts?: { text: string; inProgress?: boolean }[];
  /** "At a glance": Zeeshan's role. */
  role: string;
  /** "At a glance": timeline. Omitted from the page when unknown. */
  timeline?: string;
  /** "At a glance": live links, if any. */
  live?: { label: string; href: string }[];
  /** Product screenshots. Slots without a file show a placeholder. */
  screenshots?: Screenshot[];
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
  /** The hard parts, each with a short title. Omit when there is nothing specific to say. */
  hardParts?: HardPart[];
  /** Where it is now. Omitted when the current state is not known. */
  now?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'jema',
    name: 'Jema AIgent',
    tag: 'Clinical AI',
    ogImage: '/og/work-jema.png',
    oneLiner: 'A clinical AI platform for Korean medicine, used by doctors in Korea.',
    cardBlurb:
      'An end-to-end clinical AI platform for Korean medicine: AI clinical reports, patient records, scheduling, and herbal-formulation tracking. Live and used by doctors in Korea.',
    shortLine: 'A clinical AI platform for Korean medicine, used by doctors in Korea.',
    cardParts: [
      { text: 'Reports that survive a provider outage' },
      { text: 'One patient record everywhere' },
      { text: 'Single sign-on across the suite' },
      { text: 'EMR integration, not shipped yet', inProgress: true },
    ],
    diagram: {
      caption: 'Jema AIgent: how a visit becomes a report',
      nodes: [
        { label: 'Visit recording' },
        { label: 'Transcript' },
        { label: 'LLM router', sub: 'primary + backup model', ai: true, after: '↓ falls back to the next model if a provider stalls' },
        { label: 'SOAP report draft' },
        { label: 'Doctor reviews' },
      ],
      asides: ['+ patient records', '+ scheduling', '+ formulation tracking'],
    },
    role: 'Lead AI engineer, end to end',
    timeline: 'June 2025 to present',
    screenshots: [
      { src: '/screens/jema-1.webp', width: 2160, height: 1620, caption: 'A visit transcript and the SOAP report generated from it', alt: 'The Jema AIgent report workspace: a visit transcript, the SOAP report generated from it and the patient panel, with fictional test data', slot: 'public/screens/jema-1.webp' },
      { src: '/screens/jema-2.webp', width: 2160, height: 1620, caption: 'The patient-facing explanation report, generated from the SOAP', alt: 'The Jema AIgent patient explanation report generated from a SOAP report, with fictional test data', slot: 'public/screens/jema-2.webp' },
    ],
    stack: ['React', 'Next.js', 'Python', 'FastAPI', 'Firebase', 'Multi-model LLM fallback', 'AWS', 'Docker'],
    metaTitle: 'Jema AIgent clinical AI case study | Zeeshan Hameed',
    metaDescription:
      'How I built Jema AIgent, a production clinical AI platform for Korean medicine: multi-model AI reports with fallback, a unified patient index, SSO across the product suite, and encrypted patient-data handling with access controls.',
    problem: [
      'The founders had a clear vision for a clinical AI platform for Korean medicine, the traditional and herbal side of care, but no engineering team to build it. They needed a real product doctors could use in a live clinic, not a demo that falls over the first time a report has to generate under pressure.',
      'That meant building the whole thing end to end: the web app doctors work in, the backend and data model behind it, and the AI itself. And it had to work in Korean, for real clinical workflows, from day one.',
    ],
    built: [
      'Jema AIgent is a clinical AI platform used by doctors in Korea. It generates clinical reports with AI, keeps patient records, handles scheduling, tracks herbal formulations, and supports doctor verification and multi-clinic use, in a multilingual product built for Korean-medicine practice.',
      'I built and own it end to end: the React and Next.js front end, a Python and FastAPI backend, the Firebase data layer, the multi-model AI, and the infrastructure it runs on. It is my flagship build, and it is live.',
    ],
    hardParts: [
      {
        title: 'Reports that survive a provider outage',
        body: [
          'Report generation runs across multiple models behind an automatic backup-model fallback layer I built. Each step has a primary model and a configured backup, so if the primary is down or failing, a report still generates from another. A doctor mid-consult never sees the plumbing; they just get their report.',
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
          'I am architecting the integration layer that will let Jema AIgent sit alongside the systems clinics already run. It is in progress, not shipped.',
        ],
      },
    ],
    now: [
      'Jema AIgent is live and used by doctors in Korea. It is the kind of product where reliability is not a nice-to-have: if the AI or the data layer is flaky, real clinical work stops. That is the bar I build to.',
    ],
  },
  {
    slug: 'cuepilates',
    name: 'CuePilates',
    tag: 'AI SaaS',
    ogImage: '/og/work-cuepilates.png',
    oneLiner: 'An AI Pilates class-planning SaaS, taken from idea to launch in under a month.',
    cardBlurb:
      'An AI-powered Pilates class-planning SaaS with accounts and subscriptions, taken from idea to a live, paying product in under a month.',
    shortLine: 'Idea to paid launch in under a month.',
    diagram: {
      caption: 'CuePilates: how a class gets planned',
      nodes: [
        { label: 'Class setup' },
        { label: 'AI class planner', sub: 'Claude API', ai: true },
        { label: 'Plan validation' },
        { label: 'Plan and spoken cues' },
      ],
      asides: ['+ drag-and-drop builder', '+ PDF export', '+ Stripe subscriptions'],
    },
    role: 'Full-stack engineer, idea to launch',
    timeline: 'Under a month, idea to launch',
    live: [
      { label: 'app.cuepilates.fit', href: 'https://app.cuepilates.fit' },
      { label: 'www.cuepilates.fit', href: 'https://www.cuepilates.fit' },
    ],
    screenshots: [
      { src: '/screens/cuepilates-home.webp', width: 1280, height: 800, caption: 'The CuePilates landing page, with the class timer on a phone', alt: 'CuePilates landing page with the class timer on a phone', slot: 'public/screens/cuepilates-home.webp' },
      { src: '/screens/cuepilates-1.webp', width: 780, height: 2020, caption: 'Class player on a phone: the cues for one exercise, also read aloud', alt: 'The CuePilates class player on a phone, showing the setup, movement, breathing and correction cues for one exercise', slot: 'public/screens/cuepilates-1.webp' },
      { src: '/screens/cuepilates-2.webp', width: 2160, height: 1350, caption: 'Class player on desktop, from the sample class', alt: 'The CuePilates class player on desktop, exercise 3 of 5 with its setup, movement, breathing and correction cues, from the sample class', slot: 'public/screens/cuepilates-2.webp' },
    ],
    stack: ['Next.js', 'Supabase', 'Stripe', 'Claude API', 'Vercel'],
    testimonial: 'Tess Bartoli',
    metaTitle: 'CuePilates AI SaaS case study, idea to launch | Zeeshan Hameed',
    metaDescription:
      'How I took CuePilates, an AI Pilates class-planning SaaS, from idea to a live product with paying subscribers in under a month: auth, Stripe subscriptions, Supabase, and the AI planning engine.',
    problem: [
      'The founder had a strong vision for CuePilates, an AI tool that plans Pilates classes, but no coding background and no product yet. They did not need a prototype to show around. They needed a real SaaS, live, with accounts and subscriptions, and they needed it fast.',
    ],
    built: [
      'CuePilates is an AI-powered Pilates class-planning platform. Instructors get AI-generated class plans, a live teaching timer that speaks every cue, a drag-and-drop builder and PDF export, inside a full product with accounts and paid subscriptions. It is live at www.cuepilates.fit.',
      'I built it on Next.js and Supabase, with Stripe for subscriptions, Vercel for hosting, and Claude through the Anthropic API powering the planning engine.',
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
      'A certification platform for a recycling company that ran its process on spreadsheets and site visits: 250+ questions across 16 categories, AI validation of answers and documents, an assistant that answers questions about each requirement, and role-based access.',
    shortLine: 'A certification platform that replaced spreadsheets and site visits.',
    diagram: {
      caption: 'TrueCert: how a certification gets filled in',
      nodes: [
        { label: 'Questionnaire', sub: '250+ questions · 16 categories' },
        { label: 'AI validation', sub: 'answers + documents', ai: true },
        { label: 'Credit calculation' },
        { label: 'Certification progress' },
      ],
      asides: ['+ AI assistant for each requirement', '+ role-based access', '+ document upload'],
    },
    role: 'Full-stack AI engineer',
    timeline: 'March to June 2025',
    stack: ['Next.js', 'React', 'TypeScript', 'Firebase', 'OpenAI'],
    testimonial: 'Aaron Phillips',
    metaTitle: 'TrueCert certification platform case study | Zeeshan Hameed',
    metaDescription:
      'How I built TrueCert, a certification platform that replaced spreadsheets and site visits for a recycling company: 250+ questions across 16 categories, AI validation of answers and documents, an assistant that answers questions about each requirement, and role-based access.',
    problem: [
      'Green Earth, a recycling company, ran its certification process on spreadsheets and site visits. TrueCert moved that process onto one platform.',
    ],
    built: [
      'TrueCert is a certification platform with 250+ questions across 16 categories, AI validation of answers and documents, an assistant that answers questions about each requirement, and role-based access.',
      'It is built with Next.js, React and TypeScript on Firebase for authentication, data and document storage, and OpenAI provides the AI.',
    ],
    now: [
      'TrueCert replaced the spreadsheets and site visits the company used before. The client describes the work below.',
    ],
  },
  {
    slug: 'diettalk',
    name: 'DietTalk',
    tag: 'Mobile and web',
    ogImage: '/og/work-diettalk.png',
    oneLiner: 'Built the DietTalk app and doctor web portal for a doctor-supervised diet and weight program. Published on the App Store and Google Play.',
    cardBlurb:
      'Built the DietTalk app and doctor web portal for a doctor-supervised diet and weight program. Published on the App Store and Google Play. Its OCR read lab results to auto-fill the clinical workflow.',
    shortLine: 'Built the DietTalk app and doctor web portal. Published on the App Store and Google Play.',
    diagram: {
      caption: 'DietTalk: one record, two screens',
      nodes: [
        { label: 'Flutter app', sub: 'iOS + Android' },
        { label: 'Backend', sub: 'FastAPI · Supabase', join: 'both' },
        { label: 'Doctor portal', join: 'both' },
        { label: 'OCR + LLM extraction', sub: 'lab reports fill the portal form', ai: true, join: 'plus' },
      ],
    },
    screenshots: [
      { src: '/screens/diettalk-1.webp', width: 1280, height: 800, caption: "The doctor portal: a patient's weight and body composition over time", alt: "DietTalk doctor portal showing a patient's weight and body composition over time, demo data", slot: 'public/screens/diettalk-1.webp' },
    ],
    role: 'Mobile and full-stack engineer',
    timeline: '2025 to 2026',
    stack: ['Flutter', 'iOS + Android', 'Web portal', 'PostgreSQL', 'Supabase', 'OCR + LLM extraction'],
    metaTitle: 'DietTalk mobile app and doctor portal case study | Zeeshan Hameed',
    metaDescription:
      'Built the DietTalk app and doctor web portal for a doctor-supervised diet and weight program: one Flutter codebase for iOS and Android, and OCR that read lab results to auto-fill the workflow. Published on the App Store and Google Play.',
    problem: [
      'DietTalk needed to work for two very different users at once: patients tracking their diet and weight from their phone, and doctors supervising them and sending guidance. That meant a mobile app and a clinical web tool, tied to the same patient data, and it had to ship to both app stores.',
    ],
    built: [
      'Built the DietTalk app and doctor web portal for a doctor-supervised diet and weight program. Published on the App Store and Google Play. Patients used a Flutter mobile app to track diet and weight; doctors used a web portal to supervise and send guidance, with AI insights on top.',
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
          'Instead of making people re-type everything, the product read lab results and captured patient details straight off documents, then used that to auto-fill the clinical workflow. It removed a pile of manual data entry, and it meant the data doctors acted on came from the source. Health data was handled securely throughout.',
        ],
      },
    ],
    now: [
      'DietTalk was published on the App Store and Google Play and was used by patients and the doctors supervising them.',
    ],
  },
  {
    slug: 'dr-aigent',
    name: 'Dr. AIgent',
    tag: 'Document AI',
    ogImage: '/og/work-dr-aigent.png',
    oneLiner: "Multi-model clinical AI that turns recorded consultations into structured SOAP reports.",
    cardBlurb:
      "A multi-model clinical AI that turns recorded consultations into structured SOAP reports, with automatic fallback to a backup model so it stays reliable in production.",
    shortLine: 'Multi-model clinical AI with automatic backup-model fallback.',
    diagram: {
      caption: 'Dr. AIgent: how a consult becomes a SOAP report',
      nodes: [
        { label: 'Consultation recording' },
        { label: 'Transcript' },
        { label: 'Model router', sub: 'primary + backup model', ai: true },
        { label: 'SOAP report', after: 'if the primary model fails, the backup picks it up' },
      ],
    },
    screenshots: [
      { src: '/screens/dr-aigent-1.webp', width: 2160, height: 1620, caption: 'A consultation transcript and its SOAP report', alt: 'The Dr. AIgent report workspace: a consultation transcript and the SOAP report, with a sample demo patient', slot: 'public/screens/dr-aigent-1.webp' },
      { src: '/screens/dr-aigent-2.webp', width: 2160, height: 1620, caption: 'The SOAP report: assessment, plan, subjective and objective findings', alt: 'The Dr. AIgent SOAP report with assessment, plan, subjective and objective sections filled in, for a sample demo patient', slot: 'public/screens/dr-aigent-2.webp' },
    ],
    role: 'Backend and AI engineer',
    timeline: 'June 2025 to present',
    stack: ['Python', 'FastAPI', 'Multi-model LLM fallback'],
    metaTitle: 'Dr. AIgent multi-model clinical AI case study | Zeeshan Hameed',
    metaDescription:
      "Dr. AIgent turns recorded consultations into structured SOAP reports using multiple AI models with automatic backup-model fallback for production reliability.",
    problem: [
      "Doctors spend real time turning a consultation into a structured report. The goal with Dr. AIgent was to take a recorded consultation and produce a clean, structured SOAP report, reliably enough to trust in a working day, not just in a demo.",
    ],
    built: [
      "Dr. AIgent is a multi-model clinical AI that turns recorded consultations into structured SOAP reports. I built the Python and FastAPI service behind it and the model layer that does the work.",
    ],
    hardParts: [
      {
        title: 'A backup model when one fails',
        body: [
          'The reliability comes from an automatic backup-model fallback. Each step has a primary model and a configured backup. If the primary is unavailable or failing, the backup picks it up, so the tool keeps producing reports in production instead of failing when a single provider has a bad day.',
        ],
      },
    ],
    now: ['Dr. AIgent is in production, as one of three connected platforms I built for the same client.'],
  },
  {
    slug: 'invoice-ai',
    name: 'Invoice AI',
    tag: 'Document AI',
    ogImage: '/og/work-invoice-ai.png',
    oneLiner: 'Document AI that reads invoice PDFs into structured data, with duplicate detection and a dashboard.',
    cardBlurb:
      'A document AI system that reads invoice PDFs with a vision model and returns structured data without per-vendor templates. Duplicates are caught when an invoice is saved, and a dashboard shows the data by vendor.',
    shortLine: 'Invoice PDFs read into structured data, with duplicate detection and a dashboard.',
    diagram: {
      caption: 'Invoice AI: no per-vendor templates',
      nodes: [
        { label: 'Invoice PDF' },
        { label: 'Page images' },
        { label: 'AI extraction', sub: 'vision model', ai: true },
        { label: 'Duplicate check' },
        { label: 'Dashboard' },
      ],
    },
    role: 'Full-stack AI engineer',
    stack: ['Python', 'FastAPI', 'Next.js', 'Firebase', 'OpenAI'],
    metaTitle: 'Invoice AI document extraction case study | Zeeshan Hameed',
    metaDescription:
      'How I built Invoice AI: a vision model reads each page of an invoice PDF into structured data without per-vendor templates, with duplicate detection on save and a vendor dashboard.',
    problem: [
      'Invoice PDFs come in every layout, so reading them reliably usually means building a template for each vendor. This system had to read them without per-vendor templates, and keep the same invoice from being saved twice.',
    ],
    built: [
      'Invoice AI takes an invoice PDF, converts each page to an image, and has a vision model read it. The model returns the vendor, dates, line items, quantities, prices, subtotal, tax and total as structured data.',
      'I built it as a Python and FastAPI backend with a Next.js dashboard on Firebase. Saved invoices go through a duplicate check, and the dashboard shows the data with vendor charts and standardised vendor names.',
    ],
    hardParts: [
      {
        title: 'No templates to maintain',
        body: [
          'Every page goes to one vision model with a structured output format, so a new vendor layout needs no new code or template.',
        ],
      },
      {
        title: 'The same invoice twice',
        body: [
          'When an invoice is saved it is checked against the ones already stored, matching on invoice number first and then on filename, so duplicates are caught instead of silently doubling up.',
        ],
      },
    ],
  },
  {
    slug: 'production-rescue',
    name: 'Production rescue',
    tag: 'Stabilization',
    ogImage: '/og/work-production-rescue.png',
    oneLiner:
      'Two existing apps for one client in appraisal tech: a FastAPI and React pipeline made stable, and a Next.js app hardened right after its production database was wiped.',
    cardBlurb:
      'Two existing apps for one client in appraisal tech: a FastAPI and React pipeline made stable, and a Next.js app hardened right after its production database was wiped.',
    shortLine: 'Two live apps for one client in appraisal tech, made stable.',
    diagram: {
      caption: 'Production rescue: after the wipe',
      nodes: [
        { label: 'Wiped prod DB', alert: true },
        { label: 'Recovered' },
        { label: 'Guard + cleanup' },
        { label: 'Hardened', after: 'a guard now refuses destructive commands against production' },
      ],
    },
    role: 'Engineer, hired to stabilize two existing apps',
    timeline: 'March to September 2026',
    stack: ['FastAPI', 'React', 'TypeScript', 'Next.js', 'Prisma', 'PostgreSQL'],
    metaTitle: 'Production rescue case study: stabilizing two live apps | Zeeshan Hameed',
    metaDescription:
      'How I stabilized two existing apps for one client: startup, lost session state, repeated pipeline phases and silent errors in a FastAPI and React pipeline, and a production-database guard, data cleanup and reliability fixes in a Next.js app after its database was wiped.',
    problem: [
      'One client in appraisal tech had two existing apps, and neither was stable. I was brought in to make them dependable rather than to build something new.',
      'For the second app, the production database had been wiped a few days before I took it over. The core records had been re-imported from exports, but the data was uneven, some of it still needed rebuilding, and nothing stood between a stray command and the production database.',
    ],
    built: [
      'The first app was a FastAPI and React (Vite, TypeScript) appraisal pipeline the client had built. I was hired to fix its stability. The problems the engagement addressed are listed below.',
      'The second was a Next.js, TypeScript, Prisma and PostgreSQL app on Vercel, built by the founder. I took it over right after its production database was accidentally wiped. Once the data was recovered, my work started: a guard in front of the production database, cleanup of the recovered data, and fixes for reliability bugs.',
    ],
    hardParts: [
      {
        group: 'The FastAPI and React pipeline',
        title: 'A clean start for a two-process setup',
        body: ['The pipeline runs as two processes, and getting it to start cleanly was part of the work.'],
      },
      {
        group: 'The FastAPI and React pipeline',
        title: 'Restarts that created blank sessions',
        body: [
          'When the server restarted it created a blank session instead of loading the saved state. Making a restart pick up where the work left off was part of the engagement.',
        ],
      },
      {
        group: 'The FastAPI and React pipeline',
        title: 'Finished phases that ran again',
        body: [
          'Pipeline phases that had already finished re-ran instead of loading their cached results. Fixing that was part of the engagement.',
        ],
      },
      {
        group: 'The FastAPI and React pipeline',
        title: 'Errors that went unseen',
        body: [
          'Errors were silent and there were no error boundaries, so the app could not recover without a full restart. Making it able to recover was part of the engagement.',
        ],
      },
      {
        group: 'The Next.js app',
        title: 'Making the dangerous path hard to take',
        body: [
          'The wipe was consistent with a destructive database command run against the production connection. I wired a guard into the commands people actually type: it refuses to run them against a production host and points them at a local database instead.',
        ],
      },
      {
        group: 'The Next.js app',
        title: 'Cleaning up data without a second incident',
        body: [
          'The recovered data carried free-text values that no longer matched the controlled set the app expected. I fixed it in two parts: a one-time migration for what was already there, and normalization at import so new data could not reintroduce the problem.',
        ],
      },
      {
        group: 'The Next.js app',
        title: 'Bugs that looked like bad data',
        body: [
          'Two problems that looked like wrong data were caching. A public page only refreshed on a short cache window, and an admin view served a stale response. Admin schedule changes now trigger revalidation on demand, and the admin view reads uncached.',
        ],
      },
      {
        group: 'The Next.js app',
        title: 'Rows that vanished from an export',
        body: [
          'A spreadsheet export built one row per person, so any entry without a person attached silently disappeared from the file. It had no test coverage, which is why nobody noticed. I moved those entries to their own worksheet and wrote regression tests around it.',
        ],
      },
      {
        group: 'The Next.js app',
        title: 'A scheduler that blocked its own drops',
        body: [
          'In the drag-and-drop planner, the card being moved still counted as occupying its target slot, so valid drops were refused. The fix was to exclude the dragged card from the occupancy check.',
        ],
      },
    ],
    now: ['The engagement ended in September 2026.'],
  },
];

export const workSlugs = caseStudies.map((c) => c.slug);
export const workPaths = workSlugs.map((s) => `/work/${s}`);

export function getCaseStudy(slug?: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
