# Claude Code handoff: r-zeeshan.dev review fixes (Oct 23, 2026)

Paste everything below the line into Claude Code, opened in the `r-zeeshan` repo.

---

The Blueprint redesign is live. It was reviewed with the **apple-look** skill (Apple's Human Interface Guidelines plus a craft lens) and the **apple-design** skill (Apple's fluid-interface and typography rules for the web). Apply the fixes below.

## Before you start

1. If the `/apple-look` and `/apple-design` skills are available in this session, load both now. Use them as the rulebook for every change, and run `/apple-look` again at the end as a self-review.
   - If they aren't available, the findings below are self-contained. Follow them as written.
2. Read `docs/design/blueprint/DESIGN.md`. It is still the design authority.
3. Look at the updated mockup and screenshots in `docs/design/blueprint/`:
   - `RZ-Home.html`
   - `screens/RZ-Home-desktop.png`
   - `screens/RZ-Home-mobile.png`

   They show the target. Only the craft changes below differ from what is live.

This is a **refinement pass**. Keep the layout, copy, routes, data and motion exactly as they are, except where a fix below says otherwise.

## Fixes, in this order

### 1. Text must follow the visitor's text-size setting (High)

- **The problem:** every size is in fixed px (`src/index.css` lines ~48–125, `tailwind.config.ts`, and `text-[Npx]` classes in components). Raising the browser's default font size changes nothing; only zoom works.
  - **Apple rule:** `accessibility.md › Support larger text sizes` ("enlarge text by at least 200 percent").
- **The fix:** leave `html` at the browser default (no px font-size on `html`). Convert type and type-related spacing to `rem`, with 16px = 1rem:
  - body: `17px` becomes `1.0625rem`
  - lead: `19px` becomes `1.1875rem`
  - h1: `clamp(38px, 4.4vw, 62px)` becomes `clamp(2.375rem, 4.4vw, 3.875rem)`
  - h2: `clamp(28px, 3vw, 40px)` becomes `clamp(1.75rem, 3vw, 2.5rem)`
  - mono labels: `13px` becomes `0.8125rem`, `12px` becomes `0.75rem`
  - In `src/components/blueprint/Diagram.tsx`, replace `text-[15px]`, `text-[13px]`, `text-[12px]`, `text-[11px]`, `text-[22px]` and `text-[16px]` with rem values.
  - Do the same for the `Note` sizes passed as px numbers.
- **Check:** set `document.documentElement.style.fontSize = '24px'` in DevTools. Body and headings must grow by about 1.5×, and nothing may overflow at 390px or 1440px.

### 2. No loose arrows when a diagram wraps (Medium)

- **The problem:** on desktop, the Dr. Aigent and CuePilates work cards wrap onto a second row that starts with a bare "→".
  - **Apple rule:** `layout.md › Align elements to make them easier to scan`.
- **The fix:** `DiagramStep` in `src/components/blueprint/Diagram.tsx` already binds an arrow to the node after it. Make `WorkDiagram.tsx` always use the bound form (`bound` on every step after the first), on cards and on case-study pages. A wrapped row must then start with a node.

### 3. Remove section numbers from things that aren't a sequence (High, craft)

- **The problem:** "01 / 02 / 03 / 04" sit on What I get hired for, Products, Why production is the real work, and What clients say. None of these is a sequence.
  - **Skill rule:** apple-look flags "01 / 02 / 03 markers on content that isn't a sequence" as a generated-template tell.
- **The fix:** remove the `number` prop from those `SectionHeader` uses: `HiredFor.tsx`, `SelectedWork.tsx`, `Testimonials.tsx` and the About section. Make `number` optional in `SectionHeader.tsx`, rendering nothing when absent, so the 2px top rule plus the h2 remains.

### 4. Cut the handwritten notes to the two that earn it (Medium, craft)

- **The problem:** there are 13 Caveat notes on the homepage. DESIGN.md allows at most about 2 per section, and "the hard part" repeats three times.
  - **Apple rule:** `branding.md › Apply your app's accent color judiciously`. The same applies to a signature font.
- **Keep:**
  - the logo descriptor;
  - the hero caption ("Jema AIgent: how a visit becomes a report");
  - the hero fallback note ("↓ falls back to the next model if a provider stalls");
  - the same caption on each case-study page;
  - the 404 note.
- **Remove:**
  - the `note` on `SelectedWork` ("each one drawn as it actually works") and on `Testimonials` ("from Upwork reviews");
  - "start here" in `GetInTouch.tsx`.
- **Change:**
  - The hero extras line (`+ patient records · + scheduling · + formulation tracking`, in `Hero.tsx:49` and `CaseStudy.tsx:106`) becomes the mono style, 13px equivalent, in `--muted`, on the same line style as the stack.
  - In `WorkCards.tsx`, remove the three "the hard part" Notes. Put one mono label **"THE HARD PARTS"** (0.75rem, letter-spacing 0.04em, `--muted`) above the grid of hard-part boxes.
  - The "in progress" note becomes a mono label "IN PROGRESS" (0.6875rem).

### 5. Respect "increase contrast" (Medium)

- **The problem:** the stylesheet has no `prefers-contrast` support.
  - **Apple rule:** `color.md › Make sure all your app's colors work well in light, dark, and increased contrast contexts`.
- **The fix:** add `@media (prefers-contrast: more)` with:
  - `--muted: #3A4865`
  - `--rule-dash: #5E6B84`
  - grid lines removed from `body` (`background-image: none`)
  - dashed borders kept, but 2px

### 6. Phone header in two rows, not three (Low)

- **The problem:** at 390px the logo, the links and "Get in touch" stack into three rows (about 110px).
- **The fix:** below 640px, put the logo and "Get in touch" on row 1 and the text links on row 2, with every link still at least 44px tall. Don't hide any navigation.

### 7. Optional polish (Low)

None of these is a defect; do them only if cheap:

- Animate FAQ or disclosure opening (if any) over about 200ms (height plus opacity), with ease-out `cubic-bezier(0.23,1,0.32,1)`.
- Keep `prefers-reduced-motion` as a 150ms fade.

## Do not change

- **Motion:** it passed review. The entrance finishes in about 760ms, press state is `scale(.97)` on `:active`, hover styles only apply on devices that can hover, and reduced motion is honoured.
- **Contrast:** 0 failures across all text, so don't lighten any colour.
- **Everything else:** copy, data in `src/lib/work.ts`, routes, SEO, OG images.

## Done means

- `npm run build` passes, and the sitemap still generates.
- The text-size check in fix 1 passes. There is no horizontal scroll at 390px.
- No diagram row starts with an arrow at 1440px, 1024px or 768px.
- The homepage has at most 3 Caveat notes, counting the logo. No section numbers remain.
- Run `/apple-look` (if available) on the result and fix anything Critical or High it finds.
- Take screenshots of Home and the Jema case study at 1440px and 390px, and compare them with `docs/design/blueprint/screens/`.
- **Don't commit or push until I've reviewed the screenshots.**
