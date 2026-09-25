---
type: ADR
title: Port the Data Engineer simulator
description: Reuse the static typed simulator, catalog, isolated registries, and content-bound review gates without the Data Engineer question content.
status: Accepted
supersedes:
superseded_by:
tags: [architecture, frontend, deployment]
timestamp: 2026-09-25T00:00:00Z
---

# 0001. Port the Data Engineer Simulator

## Context

The candidate already uses a Professional Data Engineer simulator in the `bajor/gcp-de-exam-simulator` repository. It is a static React, TypeScript, and Vite application with a typed exam catalog, per-exam question registries, structural and live-source validation, and independent review records bound to a SHA-256 digest of the reviewed content. The candidate asked for the same simulator for the Professional Machine Learning Engineer exam without the Data Engineer question content. [PRD 0001](/prd/0001-ml-engineer-exam-simulator.md) adds requirements from the candidate's real-exam experience.

## Decision

Copy the Data Engineer application, tooling, tests, CI, and deployment workflows from commit `c658237`. Exclude every question section, draft, candidate, review record, authoring skill, and decision record. Adapt the copy as follows:

- Replace the five Data Engineer sections with the six sections of the exam guide dated June 1, 2026, and derive the set size of 60 from the section counts.
- Identify the guide by its date, `2026-06-01`, because it has no version number.
- Enforce reading-length floors during structural validation.
- Store attempts under `pmle-practice-attempt:<set-id>:v<version>` and the selected set under `pmle-practice-selected-set-v1`.
- Remove the Data Engineer migration of its legacy storage key.
- Start with empty draft and candidate registries and a catalog of coming-soon entries.
- Place every practice exam, including the first, in its own `src/data/questionSets/practice<number>/` module tree.
- Serve the build from `/gcp-ml-exam-simulator/`.

## Alternatives Considered

Building a new simulator was rejected because the Data Engineer code already implements and tests every required attempt behavior. Extracting a package shared by both repositories was rejected because the two exams change for different reasons, and a shared release process adds coordination cost for one candidate. A GitHub fork was rejected because it would carry Data Engineer question content and review history. Keeping the Data Engineer storage keys was rejected because both GitHub Pages sites share the `https://bajor.github.io` origin, so equal keys would let one simulator read the other simulator's attempts.

## Consequences

Easier or gained:

- Tested attempt, scoring, persistence, review, and publication behavior from the start.
- The same authoring and review discipline that produced three accepted Data Engineer exams.

Harder or accepted trade-offs:

- A fix made in one simulator must be ported to the other manually.
- Correct answers are present in the downloaded client bundle and are not secret.
- Attempts remain on one browser profile and are cleared with browser storage.

## Verification

- `make test` passes, including unit, component, build, and desktop and mobile browser tests.
- Structural validation rejects a set that does not have 60 questions in the 8, 9, 12, 12, 11, and 8 distribution.
- Production assets resolve below `/gcp-ml-exam-simulator/`.

## Related

- PRD: [/prd/0001-ml-engineer-exam-simulator.md](/prd/0001-ml-engineer-exam-simulator.md)
- BDR: [/bdr/0002-question-validation-and-publication.md](/bdr/0002-question-validation-and-publication.md)
- Issue: [/issues/0001-port-simulator-for-pmle.md](/issues/0001-port-simulator-for-pmle.md)
