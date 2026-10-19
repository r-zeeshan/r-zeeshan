> **Visual direction superseded 2026-10-19** by the Blueprint design system, `docs/design/blueprint/DESIGN.md`. The palette, fonts and component notes below describe the old cream/sage editorial look. Copy and positioning decisions still stand.

# r-zeeshan.dev: reposition as a generalist engineering portfolio

Date: 2026-10-12
Status: Building
Supersedes the positioning (not the architecture) of `2026-07-12-r-zeeshan-authority-hub-design.md`.

## Why

The health and fitness niche and the Production Sprint offer ($2,000, 2-week guaranteed
prototype, free discovery call) are retired. Upwork, LinkedIn and the resume now say:

> Full-Stack AI Engineer. I build AI products from idea to production, and stay to run them
> after launch. The AI layer, backend, web and mobile.

The site still sells the old niche and offer. It has to match.

## Audience and job

Recruiters and hiring managers (resume and LinkedIn link here), plus a few clients from
LinkedIn. Both ask one question: has this person actually built and shipped real AI products?
So this is an engineering portfolio for one person, not a sales page. The agency offer lives
on auxonai.com and this site does not sell it.

## Hard rules

- No offer, price, guarantee, "Production Sprint", "free discovery call" or funnel sections.
- No job-seeking signals. A small neutral "Resume (PDF)" link is fine.
- Never invent facts, numbers, clients or quotes. Anything unknown is left out of the rendered
  page rather than padded (a section with nothing specific to say is cut).
- Testimonials are real Upwork reviews; `testimonials.ts` is not edited.
- Describe the systems built, never a client's private metrics. The Korean client company is
  not named in case studies. The rescue client and product are not named.
- Title everywhere: **Full-Stack AI Engineer**. No "Senior".
- Removed claims: "Upwork top 3%", "20+ projects", "20+ five-star projects", "All 5-star".
  Kept: Top Rated Plus, 100% Job Success, B.S. in AI, Founder of Auxon AI.
- Voice: first person, specific, no em dashes, no "leverage / robust / seamless / cutting-edge".

## Content changes

| Area | Change |
|---|---|
| Hero | H1 "I build AI products from idea to production." Lead, "See my work" + "Get in touch" (mailto), "Resume (PDF)" text link, credibility line, portrait kept. |
| Home | Hero, the three kinds of work (prose rows, not numbered cards), selected work, short about, testimonials, quiet closing block. Trust-badge grid removed. |
| About | Rewritten generalist. Demo vs production idea kept, "boring 80%" and "moat" dropped. Honesty paragraph kept. Health origin TODO removed. |
| Closing | `WorkWithMe` replaced by `GetInTouch`: one sentence, email, the single booking link (Calendly "Book a call"). |
| Footer | Blurb "Zeeshan Hameed, full-stack AI engineer. I build AI products from idea to production." auxonai.com as a plain footer link ("Auxon AI, my studio"). Resume (PDF) link. |
| `site.ts` | `SPRINT_PRICE` deleted. `CTA_LABEL` = "Get in touch". `CONTACT_HREF` (mailto) added. Booking link used in one place only. |
| Case studies | Order: Jema, CuePilates, TrueCert, DietTalk, Dr. Aigent, Production rescue. Jema and DietTalk copy edits as specified. TrueCert and Production rescue added. |
| Case-study model | Fixed shape: problem, built, hardParts (titled), now. Plus `role`, `timeline`, `stack`, `live`, optional `testimonial` (looked up by author so wording is never copied). |
| Resume | `public/zeeshan-hameed-resume.pdf`, linked from hero and footer. |
| SEO | Titles, descriptions, OG/Twitter, JSON-LD, manifest, llms.txt, sitemap, README rewritten. New OG images for TrueCert, Production rescue, and the default share image. |

### Facts used for the new case studies

- **TrueCert**: from the brief and the resume. Client Green Earth, testimonial from its CEO
  shown under the study. No numbers beyond 250+ questions, 16 categories.
- **Jema / Dr. Aigent / DietTalk timeline** "June 2025 to present" and the "lead engineer"
  role come from the resume's single engagement entry.
- **TrueCert**: March to June 2025. No hard-parts section, because the source copy only lists
  features and padding it would invent detail.
- **CuePilates**: Next.js, Supabase, Stripe, Claude API, Vercel. Public link is www.cuepilates.fit (the app subdomain is the login screen).
- **Production rescue**: one engagement with one client in appraisal tech, March to September
  2026, two existing apps. The FastAPI and React pipeline is described as the problems the
  engagement addressed only (no pipeline repo is available to confirm the fixes). The Next.js
  app (built by the client's founder, whose production database was accidentally wiped) is
  described at engineering level: taken over right after the wipe, and once the data was
  recovered, a production-database guard, data cleanup and reliability fixes. The recovery
  itself is not claimed. The client, founder and products are not named.

## Design

Palette and fonts are kept (cream `#FBF8F2`, sage, ink, Fraunces + Inter). The change is how
they are used.

**Tokens**
- Text: ink `#262B20` (13.7:1), body warm-gray `#5F6155` (5.9:1), links sage-deep `#46603F`
  (6.6:1). `--muted` is darkened so small text clears 4.5:1. Sage `#5C7A5C` is for fills and
  rules, white on it is 4.8:1.
- Surfaces: cream base, one `cream-deep` band at most per page, hairline `#E7E1D4` rules.
- Type: Fraunces 400/500 for display with tight tracking at large sizes; Inter 17px/1.65 body.
  Scale: 13 / 15 / 17 / 20 / 26 / 36 / fluid 40-68. Prose measure capped at about 65ch.

**Layout**
- One left axis. Content is left aligned. Rows and rules instead of cards; only the portrait
  and covers carry radius and shadow.
- Work index: Jema and CuePilates lead with large covers and large type; the rest are ruled
  rows with a small thumbnail where a cover exists. It reads as a body of work, not a grid.
- Case study: title block, an "at a glance" definition list (role, timeline, stack, live),
  cover at full measure, then a two-column editorial body at desktop: section label left,
  prose right, "hard parts" as titled sub-blocks.

**Removed template tells**: uppercase tracked eyebrows, middle-dot meta strings, uppercase
tags, identical rounded cards with shared shadow, single-word italic accents, fade-up on every
element, blurred background orbs and the noise overlay, icon-in-circle badges.

**Motion**: one orchestrated hero entrance. Everything else is static. `MotionConfig
reducedMotion="user"` plus the existing CSS media query. Hover is colour/underline only.

**Quality floor**: mobile first (checked at 390 and 1280), visible `:focus-visible` rings,
skip link, semantic landmarks, one h1 per page, alt text.

## Verification

1. `npm run lint` and `npm run build` clean.
2. Dev server: every route at mobile and desktop width.
3. Leftover grep: `health`, `fitness`, `Sprint`, `2,000`, `guarantee`, `discovery call`,
   `Senior`, `top 3%`, `20+`, `5-star`, `weighment`. Each remaining hit is intentional.
4. Commit on `reposition-oct-2026`. No push, merge or deploy.
