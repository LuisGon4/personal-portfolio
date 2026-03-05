# Phase 10: Hero Geometric Shapes Rework - Research

**Researched:** 2026-03-05
**Domain:** Tailwind CSS absolute positioning, decorative shape patterns, responsive overflow containment
**Confidence:** HIGH

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| SHAPE-01 | Geometric shapes in the hero section do not overlap or obscure text content | Root-cause analysis of existing overlap documented; safe placement zones and `overflow-hidden` strategy identified |
| SHAPE-02 | Additional geometric shapes of varied type (lines, rectangles, dots, etc.) added to hero | Four concrete shape recipes documented using Tailwind-only classes, matching the black/white/indigo palette |
| SHAPE-03 | All decorative shapes are aria-hidden and do not interfere with pointer events | Both attributes already present on existing shapes; pattern must be preserved on all new shapes |
</phase_requirements>

---

## Summary

Phase 10 is a contained, self-contained CSS layout problem. No new libraries are needed. The two existing decorative shapes in `src/sections/About.jsx` have a concrete positioning bug: the large circle (`w-96 h-96` = 384px, offset `-top-32 -right-32`) bleeds into the text column at viewports narrower than ~450px because `max-w-5xl mx-auto` collapses but the negative offset keeps the circle anchored relative to the section edge, causing it to intrude on the grid content area. The small square (`bottom-24 -left-8`) is similarly at risk at 375px due to its negative left offset.

The fix has two parts: (1) replace unsafe negative offsets with inset-safe alternatives (`right-0` instead of `-right-32`, or reduce size with responsive classes), and (2) add at least 2 more shapes to reach the 4-shape minimum required by SHAPE-02. All shapes must remain purely decorative (`aria-hidden="true"`, `pointer-events-none`). The section already has `overflow-hidden` which clips anything that extends past the section boundary — this is the key containment mechanism.

The project design philosophy (CLAUDE.md) is explicit: black/white editorial, no gradients, no glowing borders, no animations. New shapes must use only: `border` lines, `bg-` fills in `black/5`–`black/10` or `indigo-50`/`indigo-200` tones, and simple geometry (`rounded-full`, `rounded`, sharp rectangles, diagonal lines via `rotate-`).

**Primary recommendation:** Fix the circle by capping its size responsively and moving it fully inset. Add 2–3 new shapes (a horizontal rule line, a small dot cluster, a rotated thin rectangle) using Tailwind utility classes only. Keep all shapes within safe zones defined per breakpoint.

---

## Standard Stack

### Core (all already installed — no new dependencies needed)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| tailwindcss | ^3.4.19 | All shape styling — positioning, sizing, borders, bg | Project standard; Tailwind v3 has all needed utilities |
| React 19 | ^19.2.0 | JSX host for shape divs | Project framework |

### No Additional Libraries Required

Shape rendering at this level (static CSS geometry) does not justify adding an SVG library, a CSS animation library, or any external package. All required geometry (circles, rectangles, lines, dots) is achievable with Tailwind border and background utilities.

---

## Architecture Patterns

### Current Section Structure

```
<section id="about" className="relative min-h-screen flex flex-col justify-center px-6 py-24 max-w-5xl mx-auto overflow-hidden">
  {/* shape 1: large circle, top-right */}
  {/* shape 2: small square, bottom-left */}
  <div className="grid md:grid-cols-[1fr_280px] gap-12 items-center">
    {/* h1, tagline, bio — text left */}
    {/* photo — right, hidden on mobile */}
  </div>
  {/* section divider */}
</section>
```

The `relative` + `overflow-hidden` pair on the section is correct. Shapes must be `absolute` children of this section. The `max-w-5xl mx-auto` constrains the section width on large screens but `overflow-hidden` clips within that box.

### Safe Placement Zone Analysis

At 375px viewport, the section is 375px wide. The text column (`<div>` in the grid) fills nearly the full width with `px-6` padding (24px each side), leaving a content area of ~327px.

**Current circle bug:**
- `w-96` = 384px, `-top-32` = -128px top, `-right-32` = -128px right
- At 375px, the section is 375px wide. The circle starts 128px off the right edge, so its left edge is at `375 - 128 - 384 = -137px` from the left — it crosses the entire section including the text.
- Fix: Use `right-0` (or `right-4`) and reduce size to `w-64 h-64` (256px) on mobile, or add `hidden sm:block` to hide it entirely on the smallest breakpoint.

**Current square bug:**
- `w-24 h-24` = 96px, `-left-8` = -32px left
- At 375px, the left edge is -32px — partially off-screen but also behind the text left padding. With `overflow-hidden` on the section it clips, but `px-6` content starts at 24px from left, so the square (from -32px to 64px) does overlap the text left margin.
- Fix: Change to `left-0` or `left-4`.

### Recommended Shape Set (4 shapes minimum)

All shapes: `absolute`, `aria-hidden="true"`, `pointer-events-none`.

**Shape 1 — Circle, top-right (existing, fixed)**
Placement: Top-right corner, fully inside section bounds.
```jsx
<div
  aria-hidden="true"
  className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full border border-indigo-200 opacity-40 pointer-events-none"
/>
```
Change from `-top-32 -right-32` to `top-0 right-0`. The circle is then clipped by `overflow-hidden` at the corner — visually looks like a quarter-circle peeking in, which is an intentional editorial effect. Reduce opacity to 40 so it reads lighter.

**Shape 2 — Small square, bottom-left (existing, fixed)**
```jsx
<div
  aria-hidden="true"
  className="absolute bottom-16 left-4 w-20 h-20 bg-indigo-50 pointer-events-none"
/>
```
Change `-left-8` to `left-4`, adjust size from `w-24` to `w-20`. Now fully inside the section, clear of text.

**Shape 3 — Thin horizontal line (new)**
A single-pixel-height decorative rule placed in the upper-left area, well above the text grid.
```jsx
<div
  aria-hidden="true"
  className="absolute top-16 left-0 w-32 h-px bg-black/10 pointer-events-none"
/>
```
Adds horizontal rhythm without visual weight. Placed at `top-16` (64px from top) — above the text which starts at roughly `py-24` (96px). Width `w-32` (128px) stays within the left padding zone.

**Shape 4 — Small dot, bottom-right (new)**
```jsx
<div
  aria-hidden="true"
  className="absolute bottom-32 right-8 w-3 h-3 rounded-full bg-indigo-300 opacity-50 pointer-events-none"
/>
```
Adds a small accent dot in the bottom-right quadrant. `w-3 h-3` = 12px — cannot obscure text. `bottom-32 right-8` places it in the footer margin below the text grid.

**Optional Shape 5 — Rotated thin rectangle (new, adds variety)**
```jsx
<div
  aria-hidden="true"
  className="absolute top-1/3 -right-4 w-24 h-1 bg-black/5 rotate-90 pointer-events-none"
/>
```
A vertical hairline on the far right. `h-1` = 4px wide, `w-24` = 96px tall (after rotation). `-right-4` clips via `overflow-hidden`. Purely atmospheric.

### Anti-Patterns to Avoid

- **Large negative offsets without overflow containment on a narrow viewport:** `-right-32` on a `w-96` shape at 375px will overlap text. Always verify: `shape_left_edge = section_width - offset_px - shape_size_px`.
- **Using `z-index` to put shapes above text:** Shapes must never stack above text. Default `z-auto` is correct; if z-index is needed to push shapes behind, use `z-0` on shapes and `relative z-10` on text (not needed currently).
- **Animated shapes:** CLAUDE.md explicitly prohibits animation. No `animate-`, no `transition-`, no `motion-` utilities on decorative shapes.
- **Gradients or glow effects:** CLAUDE.md prohibits gradients. `border-indigo-200`, `bg-indigo-50`, `bg-black/5` are safe. `bg-gradient-to-r` is not.
- **Shapes inside the text `<div>`:** All shapes must be direct children of the `<section>`, not nested inside the grid column, to ensure absolute positioning is relative to the section and not the column.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Viewport overlap detection | Custom JS ResizeObserver logic | Tailwind responsive prefixes (`sm:`, `md:`) + safe inset values | CSS-only solution; zero JS runtime cost |
| SVG shapes | Inline `<svg>` with path math | Tailwind `rounded-full`, `rounded`, `rotate-` on `<div>` | No additional syntax; same visual result for simple geometry |
| Overlap testing | Playwright visual diff tests | Manual browser check at 375/768/1280 + `npm run build` | No test framework exists in this project |

---

## Common Pitfalls

### Pitfall 1: Negative Offset Equals Overlap at Small Viewports
**What goes wrong:** `-right-32` on a 384px wide element at 375px viewport means the element starts 128px inside the left edge — covering all text.
**Why it happens:** Negative offsets are relative to the containing block edge, not the visible area. At small viewports the section shrinks but the element size is fixed.
**How to avoid:** Replace negative offsets with `right-0`/`top-0` (inset to corner) and rely on `overflow-hidden` to clip. Or add `hidden sm:block` to hide large shapes on mobile.
**Warning signs:** Shape has both a large `w-` and a negative offset of similar magnitude on the same axis.

### Pitfall 2: Forgetting `aria-hidden` on New Shapes
**What goes wrong:** Screen readers announce meaningless elements.
**Why it happens:** Copying a `<div>` without copying its accessibility attributes.
**How to avoid:** All decorative shape divs must have `aria-hidden="true"` and `pointer-events-none`. Both must be present — one handles screen readers, one handles mouse/touch events.

### Pitfall 3: Shape Placed Inside Grid Column Instead of Section
**What goes wrong:** Shape's `absolute` position is relative to the nearest `relative` ancestor — which may be the grid child div, not the section, if the child has `relative` applied.
**Why it happens:** The photo wrapper has `relative` class. A shape accidentally nested inside it would position relative to the photo box.
**How to avoid:** All decorative shapes must be direct children of `<section>` (which has `relative`), placed before or after the grid `<div>`.

### Pitfall 4: `overflow-hidden` Clipping the Photo Offset Border
**What goes wrong:** The photo's offset accent border (`absolute -inset-2 ... translate-x-2 translate-y-2`) is inside its own `relative` wrapper, so it won't be clipped by the section's `overflow-hidden`. This is fine as-is. Avoid adding `overflow-hidden` to the photo wrapper as it would clip the accent border.
**How to avoid:** Don't touch the photo wrapper; only modify direct shape children of `<section>`.

---

## Code Examples

Verified patterns used directly in the existing codebase:

### Current Shape Pattern (Reference)
```jsx
// Source: src/sections/About.jsx (existing)
<div
  aria-hidden="true"
  className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-indigo-200 opacity-60 pointer-events-none"
/>
```

### Fixed Circle Pattern (inset to corner, responsive size)
```jsx
// Inset to corner — clipped by overflow-hidden, safe at all widths
<div
  aria-hidden="true"
  className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full border border-indigo-200 opacity-40 pointer-events-none"
/>
```

### Horizontal Line Shape
```jsx
// 1px tall, 128px wide, above text row
<div
  aria-hidden="true"
  className="absolute top-16 left-0 w-32 h-px bg-black/10 pointer-events-none"
/>
```

### Small Dot Shape
```jsx
// 12px circle accent, bottom-right corner, below grid
<div
  aria-hidden="true"
  className="absolute bottom-32 right-8 w-3 h-3 rounded-full bg-indigo-300 opacity-50 pointer-events-none"
/>
```

### Rotated Rectangle (Vertical Hairline)
```jsx
// 4px x 96px rectangle, rotated 90deg to vertical, right edge
<div
  aria-hidden="true"
  className="absolute top-1/3 -right-4 w-24 h-1 bg-black/5 rotate-90 pointer-events-none"
/>
```

---

## State of the Art

| Old Approach | Current Approach | Notes |
|--------------|------------------|-------|
| SVG-based decorations | CSS div + Tailwind border/bg | Tailwind makes div-based shapes equivalent in simplicity to SVG for circles, rectangles, lines |
| JavaScript overlap detection | CSS responsive prefixes + safe placement | No runtime cost; works without JS |

**Tailwind v3 utilities relevant here (all confirmed available in project):**
- `absolute`, `relative`, `overflow-hidden` — layout
- `top-0`, `right-0`, `bottom-*`, `left-*` — safe inset positioning
- `-top-*`, `-right-*` — negative offsets (use sparingly on narrow viewports)
- `w-*`, `h-*`, `h-px` — sizing including 1px hairlines
- `rounded-full`, `rounded` — circle / sharp rect
- `rotate-*` — arbitrary rotation (`rotate-90`, `rotate-45`)
- `border`, `border-indigo-200`, `bg-indigo-50`, `bg-black/5` — palette-safe fills
- `opacity-*` — visual weight control
- `pointer-events-none` — interaction isolation
- `aria-hidden` — JSX attribute (not a class)
- `hidden sm:block`, `md:w-*` — responsive visibility/sizing

---

## Open Questions

1. **Should the large circle be hidden entirely on mobile (hidden sm:block) or kept but resized?**
   - What we know: At 375px any element wider than ~327px risks overlap. A `w-48 h-48` (192px) circle at `top-0 right-0` is safe.
   - What's unclear: Visual preference — is a smaller circle at 375px desirable, or cleaner to hide it?
   - Recommendation: Resize (`w-48 sm:w-64 md:w-96`) at mobile rather than hide — the visual continuity across breakpoints is preferable. Planner can make final call.

2. **Exact count of shapes: 4 or 5?**
   - SHAPE-02 requires "at least 4 distinct decorative shapes of varied geometry."
   - What we know: 4 is the minimum (2 fixed existing + 2 new). 5 gives more variety and a safer margin.
   - Recommendation: Implement 5 shapes (circle, filled square, horizontal line, dot, vertical hairline). The 5th (rotated rectangle) adds the "lines" geometry category called out in the requirement.

---

## Validation Architecture

No automated test framework exists in this project (CLAUDE.md confirms: "No test suite exists yet"). Validation is manual + build verification.

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None — manual visual verification |
| Config file | None |
| Quick run command | `npm run build` (build passes = no JSX/lint errors) |
| Full suite command | `npm run build && npm run preview` |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | Verifiable? |
|--------|----------|-----------|-------------------|-------------|
| SHAPE-01 | No shape overlaps text at 375px, 768px, 1280px | manual-only | `npm run build` (syntax only) | Manual — open browser devtools, set viewport to 375/768/1280, visually confirm no shape element bounding box intersects any `<h1>`, `<p>` |
| SHAPE-02 | At least 4 distinct shapes of varied geometry | manual-only | `npm run build` | Manual — count `aria-hidden` shape divs in React devtools or source; verify geometry types differ (circle, rectangle, line, dot) |
| SHAPE-03 | All shapes are aria-hidden and pointer-events-none | semi-automated | `grep -n 'aria-hidden' src/sections/About.jsx` | Count of `aria-hidden="true"` lines must equal total shape div count; also confirm `pointer-events-none` on same elements |

### Manual Verification Steps (for SHAPE-01)

1. Run `npm run dev`
2. Open `http://localhost:5173` in browser
3. Open DevTools → toggle device toolbar
4. Set viewport to **375px** (iPhone SE): confirm no shape div overlaps the `<h1>` text or bio `<p>` elements
5. Set viewport to **768px** (iPad): same check
6. Set viewport to **1280px** (desktop): same check
7. Use DevTools element inspector — hover each shape `<div>` and confirm its blue bounding box does not intersect the text elements

### grep Verification for SHAPE-03 (semi-automated)

```bash
# Count shapes with aria-hidden
grep -c 'aria-hidden="true"' src/sections/About.jsx

# List lines with pointer-events-none (should match above count)
grep -n 'pointer-events-none' src/sections/About.jsx
```

Both counts must equal the total number of decorative shape divs.

### Build Gate

```bash
npm run build
```

Must exit 0. This catches JSX syntax errors and Tailwind class typos that cause Vite build failure.

### Wave 0 Gaps

None — no test infrastructure is needed or expected for this phase. Validation is manual browser inspection + build gate.

---

## Sources

### Primary (HIGH confidence)
- `src/sections/About.jsx` — current implementation, overlap root-cause analysis
- `src/index.css` — confirmed `overflow-hidden` behavior context
- `CLAUDE.md` — design philosophy constraints (no animations, no gradients, black/white editorial)
- `.planning/REQUIREMENTS.md` — SHAPE-01, SHAPE-02, SHAPE-03 exact definitions
- `package.json` — confirmed Tailwind 3.4.x, no test framework

### Secondary (MEDIUM confidence)
- Tailwind CSS v3 docs (utility class behavior for `absolute`, `overflow-hidden`, `pointer-events-none`, `rotate-`, `h-px`) — standard utilities unchanged across v3 minor versions

### Tertiary (LOW confidence — not applicable)
- No WebSearch required; all findings derived from direct code inspection and authoritative Tailwind v3 documentation

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new libraries; verified from package.json
- Architecture: HIGH — derived directly from reading About.jsx source
- Pitfalls: HIGH — overlap root cause calculated arithmetically from actual class values
- Validation: HIGH — manual-only approach confirmed by CLAUDE.md ("No test suite exists yet")

**Research date:** 2026-03-05
**Valid until:** 2026-06-05 (stable — Tailwind v3 utilities do not change; pure layout problem)
