---
type: Constitution
title: Professional Machine Learning Engineer Practice Exam Constitution
description: Foundational scope, data model, and non-negotiables for the practice exam simulator.
status: Ratified
timestamp: 2026-09-25T00:00:00Z
---

# Product Constitution

## Product

The product is a personal practice exam simulator for candidates preparing for the Google Cloud Professional Machine Learning Engineer (PMLE) certification. It provides original questions with explanations grounded in current Google-owned documentation.

Realism has priority over reading comfort. Question length, question count, time limit, and screen presentation approximate the real exam as delivered by Pearson VUE, so that practice produces the same time pressure as the real exam.

## Scope Boundaries

In scope:

- Timed 60-question practice attempts with a two-hour limit.
- Single-choice and multiple-select questions.
- Long scenario questions whose reading load is at least that of Google's official sample questions.
- Local attempt recovery, scoring, section breakdowns, and answer review.
- Several original question sets mapped to the current official exam guide.
- Documentation evidence for every answer and distractor.

Explicitly out of scope:

- Exam dumps, reconstructed live exam content, or unauthorized question collections.
- Claims that a practice percentage predicts Google's pass or fail decision.
- Accounts, remote persistence, analytics, payments, or a server-side API.
- Reproduction of Google's official sample questions in this application or repository.

## Data Model Foundation

A question set contains exactly 60 questions: 8 `architect`, 9 `collaborate`, 12 `scale`, 12 `serve`, 11 `automate`, and 8 `monitor` questions, one group for each section of the exam guide dated June 1, 2026. Each question has single-choice or multiple-select answer semantics, cites one or more Google-owned sources, and meets the reading-length floors in `src/domain/questions.ts`: at least 60 prompt words, at least 12 words in every choice, and at least 160 words across the prompt and all choices. An attempt records answers, review flags, position, start time, and deadline for one question set. A completed attempt produces a result without changing the question set.

Invalid question states must be rejected by TypeScript types and question-bank validation. Answer identifiers must exist among the choices, multiple-select questions must declare the required selection count, and every choice must have feedback supported by cited evidence.

## Non-negotiables

- Every published question is original and mapped to the current official exam guide.
- Every correct answer and distractor explanation is supported by current Google-owned documentation.
- Every question records the date on which its sources were verified.
- Ambiguous, deprecated, preview-dependent, or unsupported questions are rejected.
- Questions use the product names of the current exam guide and Google's Agent Platform name-change page.
- A separate reviewer re-fetches the evidence before a question set enters the runtime catalog.
- The application never presents a practice percentage as Google's unpublished passing score.
- The deployed application remains usable on current desktop and mobile browsers.

## Amendment Log

- 2026-09-25: Ratified for the Professional Machine Learning Engineer exam, adapted from the Professional Data Engineer simulator constitution.
