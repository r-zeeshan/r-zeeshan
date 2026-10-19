# Blueprint design system (r-zeeshan.dev + auxonai.com)

Approved 2026-10-18. Both sites share one system: same fonts, same components and the same logo construction. They differ only in ground: r-zeeshan.dev is **light paper**; auxonai.com is **dark blueprint**. Auxon also adds a small **neo-brutalist accent** (hard offset shadow and thick border) on primary CTAs and two highlight cards.

The approved mockups are in this folder:

- `RZ-Home.dc.html` is the r-zeeshan.dev homepage.
- `AX-Home.dc.html` is the auxonai.com homepage.

The mockups use inline styles because the design tool requires it. Rebuild them as proper components and tokens, not by copying the inline styles. The pages are fluid: at 390px everything wraps and stacks, and that is the intended mobile layout.

## 1. Idea in one line

The work reads like an engineer's notebook: real system diagrams drawn as boxes and arrows on grid paper, plus short handwritten notes. The diagrams are the proof. Every diagram must describe how the product actually works.

## 2. Tokens

### r-zeeshan.dev (paper)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#F7F8F5` | page ground |
| `--grid` | `#DFE6EE` | 1px grid lines, 24px cell |
| `--ink` | `#1B2A4A` | text, borders, primary button bg |
| `--ink-2` | `#3A4865` | body copy |
| `--muted` | `#5E6B84` | mono labels, meta (4.5:1 on bg) |
| `--rule-dash` | `#9AA6BA` | dashed separators |
| `--surface` | `#FFFFFF` | cards / nodes |
| `--note` | `#C2412D` | handwritten notes, the "AI" node, accents |
| `--note-bg` | `#FFF6F2` | fill of the dashed AI node |
| contact band | bg `--ink`, text `#F2F5FA`, note `#FFB59E` | |

### auxonai.com (blueprint)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#16294D` | page ground |
| `--grid` | `rgba(58,82,128,.45)` | 1px grid lines, 24px cell |
| `--ink` | `#F2F5FA` | text, borders |
| `--ink-2` | `#C9D3E4` | body copy |
| `--note` | `#FFB59E` | handwritten notes, dashed AI node |
| `--cta` | `#FF8A65` | primary CTA bg (text `#16294D`) |
| `--cta-border` | `#0B1630` | 2px border on CTA and light cards |
| `--cta-shadow` | `#F2F5FA` on dark, `#16294D` on light | hard offset shadow |
| light cards | bg `#F2F5FA`, text `#16294D`, body `#33456B`, note `#B23A1E` | services cards, product teaser, contact |
| footer | `#0F1E3B` | |

Grid background: `background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px); background-size: 24px 24px;`

## 3. Type

- **Work Sans** (400/500/600/700) is used for everything: headlines, body and UI.
- **Caveat** (500/700) is used ONLY for short handwritten annotations: the note colour, at most about 8 words, never body copy, never buttons. If a section has more than two Caveat notes, cut some.
- **IBM Plex Mono** (400/500) is used for small uppercase labels, section numbers (`01`, `02`…) and stack/meta lines.
- Load all three from Google Fonts with `display=swap`. Remove Fraunces, Inter, Lora and Poppins.
- Scale:
  - h1 is `clamp(38px, 4.4vw, 62px)`, 700, line-height 1.04, letter-spacing -0.025em, `text-wrap: balance`.
  - h2 is `clamp(28px, 3vw, 40px)`.
  - Card h3 is 21–32px.
  - Body is 17–19px, line-height 1.55–1.65.
  - Mono labels are 12–13px.

## 4. Components

- **Node (box):** `border: 2px solid var(--ink)`, white (paper) or transparent (blueprint), padding 12px 16px, weight 600, 15px. Small nodes inside cards are 1.5px, padding 6px 10px, 13px.
- **AI node:** the same node with `border-style: dashed` in `--note`, and text in `--note`. Use it for the part of the system that is AI. There is exactly one per diagram, and it carries the eye.
- **Arrow:** a text glyph `→ ↓ ↔ +` at 22px between nodes, with `aria-hidden`. Diagrams are flex rows with `flex-wrap: wrap` so they reflow on mobile.
- **Diagram panel:** 2px ink border, padding 28px, a Caveat caption at the top, a dashed top rule above the extras line.
- **Section header:** a 2px solid top rule, then mono number plus h2 on one baseline, plus an optional Caveat aside on the right.
- **Card:** 2px border, square corners (radius 0 everywhere), padding 24–28px. There are no drop shadows, except Auxon's neo-brutal ones below.
- **Primary button (r-zeeshan):** ink bg, paper text, min-height 52px, square, weight 600.
- **Primary button (Auxon, neo-brutal):** `--cta` bg, navy text, 2px `--cta-border`, `box-shadow: 5px 5px 0 var(--cta-shadow)`, weight 700. Press state: `transform: translate(3px,3px); box-shadow: 2px 2px 0 …` over 120ms.
- **Secondary action:** an underlined text link with `text-underline-offset: 5px`, weight 600.
- **Logo:** a square outline with the constructed letter (Z or A) and two crop-mark corners in the note colour. The SVGs are in `assets/` (`zeeshan-logo-z.svg`, `auxon-logo-a.svg`, `auxon-logo-a-light.svg`). In the nav the mark is 36px, next to a two-line lockup: name (700, 18px) and a Caveat descriptor.

## 5. Motion (Emil Kowalski rules)

- Easing is `cubic-bezier(0.23, 1, 0.32, 1)` for UI. Never use `ease-in`. Never use `transition: all`. Only animate transform and opacity.
- Hero entrance: one stagger of opacity plus a translateY(8px). 40ms between items, 400ms each, all done in under 600ms. Nothing else fades in on scroll.
- Optional delight, hero only: diagram nodes appear left to right, then the Caveat note fades in last. Total under 900ms, played once.
- Buttons: `:active { transform: scale(.97) }` at 120ms (the Auxon CTA uses the translate press above).
- Gate every hover style behind `@media (hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion`: no movement, only opacity at 150ms. In framer-motion, wrap the app in `MotionConfig reducedMotion="user"`.
- Don't animate header padding or height on scroll. A border or bg change on scroll is fine.

## 6. Accessibility

- Text contrast is at least 4.5:1. The pairs above were chosen to pass; don't lighten `--muted` or `--ink-2`.
- Diagrams are decorative duplicates of nearby text, so mark them `aria-hidden`. The hero diagram is a `<figure>` with a real `<figcaption>`.
- Touch targets are at least 44px. The skip link and `:focus-visible` outline are 2px, in `--note` on paper and `--cta` on blueprint.
- Below 768px the nav keeps its links visible: they wrap, or sit behind a simple menu button. Never hide all navigation.

## 7. Banned (these are what made the old sites read as AI templates)

- Glow blobs, radial spotlights and gradient washes. The grid is the only background texture.
- Floating tilted mockup clusters, skeleton bars, fake code windows with traffic-light dots, sparklines or any implied metric.
- Ad-style cover images with text baked in, device frames and UPPERCASE pill tags in images. Work cards use diagrams instead. A real screenshot is fine only as a tight crop with no baked-in text.
- The italic serif accent word, eyebrow pill badges above the h1, and rounded-2xl cards.
- Invented numbers, user counts or client metrics.
