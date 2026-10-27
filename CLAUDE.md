# r-zeeshan.dev

Personal portfolio for Zeeshan Hameed, a full-stack AI engineer. Vite + React 18 + Tailwind 3, statically generated with `vite-react-ssg` (one real HTML file per route). `npm run build` also writes the sitemap.

## Design authority

**The v3 design is the single source of truth for the UI. It supersedes Blueprint.** Read `docs/design/blueprint/v3/HANDOFF-r-zeeshan.md` first, then `docs/design/blueprint/v3/v3.css` (tokens and component styles) and the target screens in `docs/design/blueprint/v3/screens/` (`RZ-desktop.png` 1440 and `RZ-phone.png` 390). `docs/design/blueprint/DESIGN.md` points here and keeps the older Blueprint rules as history.

- Light, soft and rounded: `--bg #F6F7FA`, white cards with a soft shadow, recessed `--sunk` panels, `--ink #16294D`. The accent `#FF8A65` is for buttons and progress only; accent text uses `#B23A1E`.
- Work Sans for all UI text. Fraunces (600) only for the home hero headline (`.t-hero`). No emojis, no em or en dashes in copy.
- Logo mark: `docs/design/blueprint/assets/zeeshan-logo-z.svg`.
- Only the home page, the header and the footer were redrawn in v3. The inner pages (`/work`, case studies, `/about`, `/blog`, 404) inherit the new tokens, buttons and cards but still carry Blueprint pieces: the diagram components with Caveat notes, and a few square 2px ink boxes (`CaseStudy.tsx` diagram figure and footer rule, `NotFound.tsx`, `About.tsx` facts list). Redraw them to v3 when those pages are next touched.

### Where things live

- Tokens: CSS variables in `src/index.css`, exposed as Tailwind colours in `tailwind.config.ts` (`bg-paper`, `bg-surface`, `bg-sunk`, `text-ink`, `text-ink-2`, `border-line`, `bg-accent`, `text-accent-text`, `bg-band`, `shadow-card`...). Use `hov:` instead of `hover:` so every hover is gated behind `(hover: hover) and (pointer: fine)`.
- Shared components: `src/components/blueprint/` (`Button` pills, `Card`, `Logo`, `Container`, plus the diagram pieces `Diagram`, `DiagramNode`, `DiagramArrow`, `DiagramStep`, `WorkDiagram`, `Note`, `SectionHeader` and `ScreenshotSlot` that the inner pages use). Home sections are in `src/components/sections/`.
- Case study diagrams are data: the `diagram` field of each entry in `src/lib/work.ts`. Nodes must be backed by that case study's text. At most one node is `ai`.
- Motion is CSS (`.enter`, `.enter-node`, `.press` in `src/index.css`) so the pre-rendered HTML is readable without JS. Only transform and opacity animate; easing is `cubic-bezier(0.23, 1, 0.32, 1)`; never `ease-in`, never `transition: all`. There is no JS animation library; reduced motion is handled in CSS.

### Rules that are easy to break

- Text contrast at least 4.5:1. Do not lighten `--muted` or `--ink-2`.
- Touch targets at least 44px; visible `:focus-visible` outline (2px `--ink`, light on the dark card).
- Diagrams are decorative: `aria-hidden`. The home hero is a headline plus the profile photo (a `<figure>` with a real `<figcaption>`).
- No price, discount, "founding" or spots wording anywhere on the site. The link to `auxonai.com/launch` (`LAUNCH_URL` in `src/lib/site.ts`) stays.
- No invented numbers, user counts or client metrics. The Upwork line in the hero comes from the verified Upwork profile (`UPWORK_PROOF` in `src/lib/site.ts`). No ad-style cover images with baked-in text.
- The "Notes" (`/blog`) route stays, but it is hidden from the nav until `src/lib/blog.ts` has a post.
- Case study screenshots (`screenshots` in `src/lib/work.ts`, files in `public/screens/`) are real captures of the product with fictional or demo data only. Never show real patient, doctor or client data; check each image before adding it.
- Selected-work card headlines on the home page live in `SelectedWork.tsx` (`CARDS`); each must restate what that case study says. DietTalk stays in the past tense with its exact wording and "2025 to 2026".
- Testimonials are real Upwork reviews. Never reword and never shorten; always show the full `text`. The current wording comes from the verified proof doc; if a client has not confirmed permission to be named, keep that quote role-only. The home page shows Aaron Phillips; Tess Bartoli's full review is on the CuePilates case study.

## Commands

- `npm run dev` / `npm run build` (SSG + sitemap) / `npm run lint`
- `node scripts/generate-icons.mjs`: favicons, app icons and `public/og-image.png` from the Z mark.
- `node scripts/generate-og.mjs`: `public/og/work-*.png`, drawn from the diagrams in `src/lib/work.ts`. Fonts are bundled in `scripts/fonts` and rendered to outlines, so nothing needs to be installed. Needs Node 23.6+ (it imports `work.ts`).
