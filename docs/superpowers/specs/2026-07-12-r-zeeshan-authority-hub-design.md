# r-zeeshan.dev — Reposition into a personal authority hub

Date: 2026-07-12
Status: Approved (build)

## Goal

Turn r-zeeshan.dev from a near-exact duplicate of the auxonai.com sales page into a
personal credibility, proof, and authority hub for Zeeshan Hameed (senior AI engineer,
production health/fitness AI). The selling funnel stays on auxonai.com; this site proves
he is a real engineer who ships production products, and points to Auxon for the offer.
This is a content/structure/SEO change, not a visual redesign.

## Non-goals

- No visual redesign. Reuse the existing cream/serif system, `SectionHeader`, `card`,
  `CTAButton`, Framer Motion patterns.
- No duplication of the auxonai.com funnel (guarantee, 3-step process, value stack, sales FAQ).
- No blog content. Build blog plumbing only; zero posts.

## Architecture decision: build-time prerendering

The site is Vite 5 + React 18 + `react-router-dom` v6, currently a client-side SPA with a
single `/` route and static `index.html`. To meet the SEO goals (per-page title/meta/OG/
JSON-LD/canonical, correct social link previews, rankable case studies, Lighthouse SEO 90+),
each route must be **real HTML at build time**.

- Add **`vite-react-ssg`** to statically generate every route (dynamic `/work/*` enumerated
  from a data module). Swaps `BrowserRouter` for SSG-compatible route objects; components and
  design are untouched. Fallback if it fights Vercel: `react-snap` post-build snapshot.
- Add **`react-helmet-async`** to drive per-page head (title, meta description, canonical,
  OG + Twitter, JSON-LD) baked into the static HTML.
- A shared `<Seo>` component centralizes head tags + JSON-LD per page.
- Regenerate `sitemap.xml` (all routes) via a build script; keep `robots.txt`
  (already allows GPTBot/ClaudeBot/PerplexityBot).
- `vercel.json` rewrites so real prerendered files are served, SPA fallback only for unknown.

## Routes

| URL | Purpose | JSON-LD | Canonical |
|---|---|---|---|
| `/` | Home: hero + credibility badges + 3 testimonials + work teaser + about teaser + condensed offer | `Person` | self |
| `/work` | Case-study index (4 projects) | `CollectionPage` + `BreadcrumbList` | self |
| `/work/jema` | Flagship case study (deepest) | `CreativeWork` | self |
| `/work/dr-aigent` | Lighter case study | `CreativeWork` | self |
| `/work/cuepilates` | Idea-to-launch case study | `CreativeWork` | self |
| `/work/diettalk` | Flutter app + doctor portal case study | `CreativeWork` | self |
| `/about` | Full personal narrative | `Person` / `AboutPage` | self |
| `/blog` | Post index, EMPTY ("writing soon") | `Blog` | self |
| `/blog/:slug` | Post template (built, unused until real posts) | `BlogPosting` | self |
| `*` | 404 (exists) | — | — |

The **condensed offer block** (reused on home + end of each case study) carries a canonical
hint pointing to the auxonai.com offer, so Google treats Auxon as primary for that content.

## Content model

- Case studies: typed data in `src/lib/work.ts` (slug, title, meta description, hero blurb,
  stack, ordered content sections: problem, what I built, hard production parts, outcome).
- Blog: typed data in `src/lib/blog.ts`, initialized to an **empty array**. Index renders a
  "writing soon" state; the `/blog/:slug` template exists for when real posts are added.
- Content authored from user-supplied facts (below). Any genuinely unverifiable specific
  (a hard outcome metric, a founder-problem detail) → `TODO(zeeshan)` in the draft, never invented.

## Page content plan

### Home (`/`)
Keep: hero (unchanged), credibility badges, 3 testimonials, "demo is easy / production is
the moat" thesis as an **about teaser** (short, links to `/about`). Add: a **work teaser**
(4 case-study cards linking to `/work/*`) and the **condensed offer** ("Work with me").
Remove from the personal site: Guarantee, HowItWorks, ValueStack, sales FAQ sections.

### Condensed offer ("Work with me")
2-3 sentences summarizing The Production Sprint (working prototype in 2 weeks, then a phased
build), then two buttons: **"See how I work" → auxonai.com** and **"Book a discovery call"
→ Calendly** (`BOOKING_LINK`). No funnel duplication.

### Case studies
Each: problem the founder had → what I built → the hard production parts (as MY engineering
approach) → outcome (qualitative). Article layout via `@tailwindcss/typography`, tuned to the
palette, one H1, lazy-loaded images, end-of-page discovery-call CTA.

- **Jema** (deepest): Korean-medicine clinical AI, live, in daily use by doctors; AI clinical
  reports, patient records, scheduling, herbal-formulation tracking, multilingual (Korean).
  Hard parts: multi-model AI (GPT/Claude/Gemini) with automatic fallback + cost-aware routing;
  unified patient index across the clinical suite; SSO between products; HIPAA-aware, encrypted
  patient-data handling; **building/architecting the EMR integration layer (in progress)**.
  Stack: React/Next.js, Python/FastAPI, PostgreSQL/Supabase, multi-model LLM routing, AWS, Docker.
- **Dr. Aigent** (lighter, shorter): multi-model clinical AI turning doctor notes into
  structured SOAP reports; hard part = routing across GPT/Claude/Gemini with automatic fallback
  + cost-aware selection. Less architectural detail than Jema. Stack: Python/FastAPI, multi-model routing.
- **CuePilates**: AI Pilates class-planning SaaS, idea to launch in under a month, live at
  app.cuepilates.fit. Hard part: full paying product fast — auth, Stripe subscriptions,
  Supabase backend, AI planning engine, production-ready in weeks. Stack: Next.js, Supabase,
  Stripe, OpenAI. (Public; has a real founder testimonial.)
- **DietTalk**: doctor-supervised diet/weighment product — Flutter patient app + doctor web
  portal, live on App Store + Google Play. Hard part: one cross-platform Flutter codebase to
  both stores; doctor portal tied to patient records; OCR reading lab results + capturing
  patient details off documents to auto-fill the workflow; secure health-data handling.
  Stack: Flutter (iOS+Android), web portal, PostgreSQL/Supabase, OCR + LLM extraction.

### About (`/about`)
First-person narrative: B.S. in Artificial Intelligence, how he got into health/fitness AI,
why "production, not demos," named person accountable. Credentials: Top Rated Plus, 100% Job
Success, 20+ five-star projects, Founder of Auxon AI, based in Pakistan. Stack he works across:
React, Next.js, Python, FastAPI, Flutter, PostgreSQL, Supabase, Firebase, OpenAI, Claude,
Gemini, LangChain, Stripe, AWS, Docker.

### Blog (`/blog`)
Index + `BlogPosting` post template built to spec (semantic HTML, one H1, typography, reading
time, published date, end CTA). **Zero posts.** Index shows a "writing soon" state. No filler.

## Hard guardrails (apply everywhere: copy, alt text, meta, JSON-LD)

1. **Never name the client company** behind Jema, Dr. Aigent, DietTalk. Products may be named;
   the company may not, anywhere.
2. **No client numbers** (doctor/user/download/revenue counts). Allowed: "in daily use by
   doctors," "live on the App Store and Google Play," "live at app.cuepilates.fit."
3. Architecture is fine as **Zeeshan's engineering approach** (routing/fallback, unified patient
   index, SSO, HIPAA-aware handling, OCR extraction) — standard patterns, not client secrets.
4. **No patent-pending mechanism.** A clinical decision-support / adaptive-AI system has patents
   being filed — keep it out entirely. Well-known architecture patterns only.
5. **Never claim FHIR or HL7.** EMR integration is **in progress / being architected**, never delivered.
6. **Never invent** an unverifiable specific → `TODO(zeeshan)`.
7. Voice: human, first-person, specific. No em dashes. No "leverage/robust/seamless/cutting-edge."
8. Preserve all existing working links (Calendly, GitHub, LinkedIn, Upwork, auxonai.com).
9. Keep the 3 existing testimonials as-is; do not invent new ones.

## SEO / technical requirements

- Unique `<title>` + meta description per page. Home targets Zeeshan's name + "health and
  fitness AI engineer / production AI." Case studies target "clinical AI development,"
  "health app case study," "AI Pilates SaaS," etc.
- OG + Twitter card meta on every page with a share image (branded default now; per-case-study
  images generated via the existing `sharp` script, starting with Jema).
- JSON-LD: `Person` on home/about (with `sameAs` → LinkedIn/GitHub/Upwork/auxonai.com);
  `CreativeWork` on case studies; `BlogPosting` on posts; `BreadcrumbList` on `/work`.
- Canonical tag on every page; offer content canonicals to the auxonai.com equivalent.
- `sitemap.xml` + `robots.txt` regenerated; registerable in Google Search Console.
- Semantic HTML, one H1/page, descriptive alt text, lazy-load below-fold images, mobile
  responsive, Lighthouse 90+ (performance, SEO, accessibility).

## Build order (phased, each verifiable)

1. Prerender + helmet plumbing + shared `<Seo>` head component + sitemap generation + `vercel.json`.
2. Home repositioning (strip funnel; add work teaser + condensed offer + about teaser).
3. `/work` index + the 4 case studies (content module + article layout).
4. `/about` full narrative.
5. Blog plumbing only (`/blog` empty index + `/blog/:slug` template + SEO/sitemap wiring); no posts.
6. JSON-LD everywhere + OG images + canonical wiring + Lighthouse pass.
