# HANDOFF: r-zeeshan.dev (v3 redesign)

Mockup: Design canvas, page "v3", V3-RZ (desktop 1440, phone 390). Reference: `v3.css`, `img/`.
Do NOT commit or push. Work on a branch.

Stack: Vite + React 18 + Tailwind 3 + `vite-react-ssg`.

## 0. Design authority change
v3 supersedes Blueprint (light cream, radius 0, no shadows). `CLAUDE.md` and `docs/design/blueprint/DESIGN.md` now point at this folder (done).
- Tokens from `v3.css`: `--bg #F6F7FA`, `--surface #fff`, `--sunk #EEF1F6`, `--ink #16294D`, `--ink2 #4A5A7A`, `--line #E1E6EF`, `--accent #FF8A65` (buttons and progress only).
- Work Sans for UI. Fraunces serif only for the hero headline.
- Rounded cards, soft shadows, no emojis, no em dashes.
- Tokens are in `src/index.css` and `tailwind.config.ts`, which no longer forces radius 0. Check: the config carries the tokens. Four inner-page spots still use square 2px ink boxes (`CaseStudy.tsx` diagram figure and footer rule, `NotFound.tsx`, `About.tsx` facts list); they are listed in `CLAUDE.md` and were left alone on purpose.

## 1. Layout, follow V3-RZ
Files: `src/pages/Home.tsx`, `src/components/sections/Navigation.tsx`, `Hero.tsx`, `HiredFor.tsx`, `SelectedWork.tsx`, `WhyProduction.tsx`, `Testimonials.tsx`, `GetInTouch.tsx`, `Footer.tsx`. Shared pieces restyled to v3 as well: `Button`, `Card`, `Logo`, `Quote`, and the diagram and screenshot components, so the inner pages inherit the tokens.
- Hero: personal portfolio headline (Fraunces), profile photo, a primary "See the work" button and a ghost "Get in touch" button (as in the screenshot), and the Upwork proof line (`UPWORK_PROOF`, with five stars).
- The offer link ("Get a free demo of your app idea", `LAUNCH_LABEL`) sits in the closing card and goes to the launch page via `LAUNCH_URL` in `src/lib/site.ts` (`AUXON_URL/launch`). Keep it. It is not in the hero.
- Selected work: three cards (CuePilates, Dr. AIgent, DietTalk) and four rows (Production rescue, Jema AIgent, TrueCert, Invoice AI), body text from `src/lib/work.ts`. The card headlines are written for the home page and live in `SelectedWork.tsx` (`CARDS`). DietTalk has no screenshot, so its card shows its diagram. Describe systems, never client private metrics. DietTalk in past tense with the exact existing wording and "2025 to 2026".
- Testimonials: word for word from `src/lib/testimonials.ts`. The home page shows Aaron Phillips beside "Why production is the real work"; Tess Bartoli's full review is on the CuePilates case study.
- No price, discount, "founding" or spots wording anywhere on this site.
- Check: desktop about 3.8 screens at 1440x900; phone no horizontal scroll at 390; `grep -rniE "5,900|spots left|founding|7,500" src` returns nothing.

## 2. Links
- r-zeeshan.dev keeps its link to auxonai.com/launch.
- auxonai.com must not link visibly to r-zeeshan.dev (that side only).

## Acceptance
- Lighthouse accessibility 95 or higher; 44px tap targets; AA contrast; visible focus.
- `vite-react-ssg` build passes.

## Open points for Zeeshan
- Confirm card titles in Selected work.
- The hero uses `public/profile-photo.jpg` (877px), not the 600px `img/profile.jpg`. A larger original would still sharpen it.
- DietTalk needs a real screenshot with demo data for its card.
