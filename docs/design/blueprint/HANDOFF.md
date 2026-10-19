# Claude Code handoff: r-zeeshan.dev "Blueprint" redesign

Paste everything below the line into Claude Code, opened in the `r-zeeshan` repo.

---

Redesign the r-zeeshan.dev UI to the approved "Blueprint" design. This is a **visual overhaul**: keep the routes, the SSG setup (vite-react-ssg), the SEO and JSON-LD, the sitemap and the data files. Change the look and the page composition.

## Read first, in this order

1. `docs/design/blueprint/DESIGN.md` is the design system: tokens, type, components, motion rules and the banned list. It is the source of truth.
2. `docs/design/blueprint/screens/RZ-Home-desktop.png` and `RZ-Home-mobile.png` show the approved homepage at 1440px and 390px.
3. `docs/design/blueprint/RZ-Home.html` is a static mockup of the homepage. Open it in a browser. Its inline styles are a reference for structure and values only; rebuild it with Tailwind tokens and components.
4. `docs/design/blueprint/assets/zeeshan-logo-z.svg` is the new logo mark.

Then update CLAUDE.md, or add a section there, so it points at `docs/design/blueprint/DESIGN.md` as the design authority, and remove any older instruction about Fraunces, Inter, cream/sage or the editorial style.

## What to do

1. **Tokens and fonts.**
   - Replace the cream/sage palette and the Fraunces/Inter fonts in `tailwind.config.ts`, `src/index.css` and `index.html` with the paper tokens from DESIGN.md, plus Work Sans, Caveat and IBM Plex Mono. Use Google Fonts with `display=swap`, and preconnect.
   - Add the 24px grid-paper background to `body`.
   - Set the radius to 0 everywhere.
2. **Shared components.** Create:
   - `DiagramNode`, with a solid variant and a dashed `ai` variant.
   - `DiagramArrow`.
   - `Diagram`, a flex-wrap row. Below 640px it stacks vertically and the arrows become `↓`.
   - `Note`, the Caveat annotation.
   - `SectionHeader`, with a mono number, h2 and an optional note.
   - `Card`.
   - `Button`, with a primary variant and a text-link variant.
   - `Logo`: the SVG mark plus the two-line lockup.
3. **Homepage.** Recompose `src/pages/Home.tsx` and the sections in `src/components/sections/` to match the mockup:
   - nav;
   - hero with the Jema diagram;
   - 01 What I get hired for;
   - 02 Products I've built and shipped: Jema as a wide card with its "hard parts", then Dr. Aigent, DietTalk, CuePilates and Production rescue in a 2-column grid;
   - 03 The demo is the easy part, with the real portrait from `public/`;
   - 04 What clients say;
   - the dark contact band;
   - the footer.
4. **Hero copy.** Headline: "The demo is the easy part." Subheadline: "I build AI products from idea to production, the AI layer, backend, web and mobile, and stay to run them after launch." Rename the existing "The demo is the easy part" section to "Why production is the real work" so the line appears once. Keep CTA targets, booking link and email.
5. **Work covers.** Stop using the ad-style cover images (`/work/*.webp|png`) on cards. Each card gets a small `Diagram` built from that case study's own data in `src/lib/work.ts`. Add a `diagram` field per case study, holding an ordered list of nodes, one of them marked `ai`. Diagrams must describe how the product really works.
6. **The other pages.**
   - Apply the same system to About, Work index, Case study, Blog index/post and 404.
   - Case study pages: a hero with the study's diagram drawn large; problem / built / hard parts as numbered sections; the stack as a mono line.
   - Keep all the existing text.
7. **Fix one fact.** Jema's stack is **Firebase**, not Supabase/PostgreSQL. Update the `stack` list and any prose in `src/lib/work.ts` that says PostgreSQL on Supabase for Jema.
8. **Testimonials.** Remove the "quoted as written" line. Where a quote is shortened, show the cut with "…".
9. **Navigation.** Hide "Notes" from the nav until a blog post exists. Keep the route.
10. **Motion.** Follow DESIGN.md §5 exactly:
    - Remove the 0.8s `.rise`, and stop animating the header padding.
    - Add `:active` press states.
    - Gate hovers behind `(hover:hover)`.
    - Add `MotionConfig reducedMotion="user"`.
11. **Cleanup.**
    - Delete unused shadcn components in `src/components/ui/`, and remove the unused providers in `RootLayout.tsx` (QueryClient, Tooltip, Toaster, Sonner) if nothing uses them.
    - Remove the dead keyframes (`float`, `pulseGlow`, `slideUp`) and any dependencies that are then unused.
    - Run the build to confirm nothing breaks.
12. **OG images.** Regenerate the OG/share images in the new style if the repo generates them (`scripts/`). Otherwise list them for me.

## Done means

- `npm run build` passes, and the sitemap still generates.
- There is no horizontal scroll at 390px. Every diagram stacks cleanly on mobile.
- Text contrast is at least 4.5:1. There is visible `:focus-visible` everywhere. Touch targets are at least 44px.
- Nothing from DESIGN.md §7 (banned) is anywhere in the UI.
- Take screenshots of Home, Work, one case study and About at 1440px and 390px. Compare them against `docs/design/blueprint/screens/`, then fix any differences in one pass.
- Don't commit or push until I've reviewed the screenshots.
