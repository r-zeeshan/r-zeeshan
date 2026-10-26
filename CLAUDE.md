# r-zeeshan.dev

Personal portfolio for Zeeshan Hameed, a full-stack AI engineer. Vite + React 18 + Tailwind 3, statically generated with `vite-react-ssg` (one real HTML file per route). `npm run build` also writes the sitemap.

## Design authority

**`docs/design/blueprint/DESIGN.md` is the single source of truth for the UI.** Read it before changing any visual or motion detail: tokens (§2), type (§3), components (§4), motion (§5), accessibility (§6) and the banned list (§7).

- Approved screens: `docs/design/blueprint/screens/` (1440px and 390px). Reference markup: `docs/design/blueprint/RZ-Home.html`. It uses inline styles for reference only; build with Tailwind tokens and the shared components.
- Logo mark: `docs/design/blueprint/assets/zeeshan-logo-z.svg`.
- Idea in one line: an engineer's notebook. Real system diagrams (boxes and arrows) on 24px grid paper, plus short handwritten notes. Every diagram must describe how the product actually works.
- Light paper ground. Work Sans for everything, Caveat only for short notes (about 8 words), IBM Plex Mono for labels and stack lines. Radius is 0 everywhere. No shadows, no gradients, no glow.

### Where things live

- Tokens: CSS variables in `src/index.css`, exposed as Tailwind colours in `tailwind.config.ts` (`bg-paper`, `text-ink`, `text-ink-2`, `text-muted`, `border-rule-dash`, `text-note`, `bg-note-bg`, `bg-band`...). Use `hov:` instead of `hover:` so every hover is gated behind `(hover: hover) and (pointer: fine)`.
- Shared components: `src/components/blueprint/` (`Diagram`, `DiagramNode`, `DiagramArrow`, `DiagramStep`, `WorkDiagram`, `Note`, `SectionHeader`, `Card`, `Button`, `Container`, `Logo`).
- Case study diagrams are data: the `diagram` field of each entry in `src/lib/work.ts`. Nodes must be backed by that case study's text. At most one node is `ai`.
- Motion is CSS (`.enter`, `.enter-node`, `.press` in `src/index.css`) so the pre-rendered HTML is readable without JS. Only transform and opacity animate; easing is `cubic-bezier(0.23, 1, 0.32, 1)`; never `ease-in`, never `transition: all`. `MotionConfig reducedMotion="user"` wraps the app in `RootLayout`.

### Rules that are easy to break

- Text contrast at least 4.5:1. Do not lighten `--muted` or `--ink-2`.
- Touch targets at least 44px; visible `:focus-visible` outline (2px, `--note`).
- Diagrams are decorative: `aria-hidden`. The hero diagram is a `<figure>` with a real `<figcaption>`.
- No invented numbers, user counts or client metrics. No ad-style cover images with baked-in text.
- The "Notes" (`/blog`) route stays, but it is hidden from the nav until `src/lib/blog.ts` has a post.
- Testimonials are real Upwork reviews. Never reword and never shorten; always show the full `text`. A quote with `permissionPending` stays anonymous (role only) until the client confirms.

## Commands

- `npm run dev` / `npm run build` (SSG + sitemap) / `npm run lint`
- `node scripts/generate-icons.mjs`: favicons, app icons and `public/og-image.png` from the Z mark.
- `node scripts/generate-og.mjs`: `public/og/work-*.png`, drawn from the diagrams in `src/lib/work.ts`. Fonts are bundled in `scripts/fonts` and rendered to outlines, so nothing needs to be installed. Needs Node 23.6+ (it imports `work.ts`).
