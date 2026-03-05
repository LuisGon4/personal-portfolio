---
phase: 10
slug: hero-geometric-shapes-rework
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-05
---

# Phase 10 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — manual visual verification |
| **Config file** | None |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npm run preview` |
| **Estimated runtime** | ~10 seconds (build only) |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && npm run preview`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** ~10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 10-01-01 | 01 | 1 | SHAPE-01 | manual + build | `npm run build` | ✅ | ⬜ pending |
| 10-01-02 | 01 | 1 | SHAPE-02 | manual + build | `npm run build` | ✅ | ⬜ pending |
| 10-01-03 | 01 | 1 | SHAPE-03 | semi-automated | `grep -c 'aria-hidden="true"' src/sections/About.jsx` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Existing infrastructure covers all phase requirements. No test framework setup needed.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| No shape overlaps text at 375px | SHAPE-01 | No visual testing framework | Run `npm run dev`, DevTools → device toolbar → 375px, inspect shape bounding boxes don't intersect h1/p |
| No shape overlaps text at 768px | SHAPE-01 | No visual testing framework | Same as above, set viewport to 768px |
| No shape overlaps text at 1280px | SHAPE-01 | No visual testing framework | Same as above, set viewport to 1280px |
| At least 4 distinct shapes of varied geometry | SHAPE-02 | Geometry type requires human judgment | Count aria-hidden shape divs in source; verify types differ (circle, rectangle, line, dot) |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 10s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
