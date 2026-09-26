---
type: Issue
title: Port the simulator for the Professional Machine Learning Engineer exam
description: Port the Data Engineer simulator without its content, adopt the PMLE blueprint and reading-length floors, and apply the dense exam presentation.
status: in-progress
labels: [feature, frontend]
blocked_by: []
tracker: "PR [1/5] and PR [2/5]"
timestamp: 2026-09-25T00:00:00Z
---

## Port the Simulator for the Professional Machine Learning Engineer Exam

Implement [PRD 0001](/prd/0001-ml-engineer-exam-simulator.md), [ADR 0001](/adr/0001-port-data-engineer-simulator.md), [BDR 0001](/bdr/0001-exam-attempt-and-scoring.md), and [BDR 0002](/bdr/0002-question-validation-and-publication.md), based on [exam-format research](/research/0001-exam-format-and-blueprint.md).

### Scope

1. PR [1/5]: Copy the application, tooling, tests, and workflows without Data Engineer content. Adopt six sections, 60 questions, reading-length floors, PMLE storage keys, the `/gcp-ml-exam-simulator/` base path, and a coming-soon catalog.
2. PR [2/5]: Restyle the application in a dense Pearson-style presentation in which question and answer text share one font size.

Question-authoring preparation is tracked by [issue 0002](/issues/0002-prepare-question-authoring.md).

### Acceptance

- The acceptance criteria of PRD 0001 pass.
- `make test` and `make verify-sources` pass locally and in CI.
- The GitHub Pages deployment renders the catalog.

### Progress

- 2026-09-25: PR [1/5] ports the application and documentation.
- 2026-09-25: PR [2/5] applies the dense exam presentation specified by [BDR 0003](/bdr/0003-exam-presentation.md).
