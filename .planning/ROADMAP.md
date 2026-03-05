# Roadmap

## Milestones

| Version | Name | Phases | Status |
|---------|------|--------|--------|
| v1.0.0 | Launch-Ready Portfolio | 1–8 | Shipped 2026-03-05 |
| v1.1.0 | Visual Rework | 9–10 | In Progress (1/2 phases) |

<details>
<summary>v1.0.0 Phase List (all complete)</summary>

- [x] Phase 1: Foundation & Styling Setup
- [x] Phase 2: Layout Shell & Navigation
- [x] Phase 3: Hero / About Section
- [x] Phase 4: Projects Section
- [x] Phase 5: Resume Section
- [x] Phase 6: Contact Section & Footer
- [x] Phase 7: Visual Polish — Color, Photo & Decorations
- [x] Phase 8: Polish & Accessibility Audit

Full archive: `.planning/milestones/v1.0.0-ROADMAP.md`

</details>

---

## Milestone v1.1.0: Visual Rework

### Phase 9: Black Nav & Skills Section — COMPLETE

**Goal:** Invert nav to black theme and add a Technologies section between About and Projects.

**Requirements:** NAV-01, NAV-02, SKILL-01, SKILL-02, SKILL-03, SKILL-04

**Plans:** 1/1 plans complete

**Success Criteria:**
1. Nav renders black background / white text at all breakpoints
2. Mobile menu opens with dark theme; links invert on hover
3. Skills section appears between About and Projects with grouped tag pills
4. "Skills" nav link smooth-scrolls to the section
5. `npm run build` exits 0

---

### Phase 10: Hero Geometric Shapes Rework

**Goal:** Fix shape-text overlap in the hero and expand decorative shapes for visual impact.

**Requirements:** SHAPE-01, SHAPE-02, SHAPE-03

**Plans:** 2 plans

Plans:
- [ ] 10-01-PLAN.md — Fix existing shapes and add three new shapes (autonomous, wave 1)
- [ ] 10-02-PLAN.md — Human visual verification at 375/768/1280px (checkpoint, wave 2)

**Success Criteria:**
1. No geometric shape overlaps or obscures any text at 375px, 768px, 1280px
2. Hero has at least 4 distinct decorative shapes of varied geometry
3. All shapes are aria-hidden and pointer-events-none
4. `npm run build` exits 0
