---
type: Review
title: Independent review of professional-ml-engineer-2026-06-practice-1 version 1, rejected
description: Semantic and source review of all 60 candidate questions; one question is rejected because its feedback is not supported by its cited evidence.
status: Rejected
timestamp: 2026-09-26T00:00:00Z
---

# Independent Review of professional-ml-engineer-2026-06-practice-1 Version 1 (Rejected)

## Review Summary

- **Candidate:** `professional-ml-engineer-2026-06-practice-1`, version 1, registered at commit `ede0437`. The content digest is in the record below.
- **Reviewer:** `claude-opus-5.5-p1-acceptance-reviewer-20260926`.
- **Authors:** `claude-opus-5.5-p1-architect-20260926`, `claude-opus-5.5-p1-collaborate-20260926`, `claude-opus-5.5-p1-scale-20260926`, `claude-opus-5.5-p1-serve-20260926`, `claude-opus-5.5-p1-automate-20260926`, and `claude-opus-5.5-p1-monitor-20260926`, read from the `author` field of each section module.
- **Independence check:** The reviewer identifier differs from all six author identifiers, and the review session did not author or edit any candidate content.
- **Guide check:** On 2026-09-26 the reviewer re-fetched the [certification page](https://cloud.google.com/learn/certification/machine-learning-engineer) and the [exam guide](https://services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_english_new.pdf). The guide is still dated June 1, 2026, with six sections weighted about 13%, 16%, 21%, 20%, 18%, and 13%, and 52 considerations. The certification page still links the same guide and describes 50 to 60 multiple choice and multiple select questions in two hours. Neither changed.
- **Earlier rejections:** `docs/reviews/` contained no rejection report for this practice exam, so no earlier rejected question needed a comparison.
- **Sources:** The reviewer opened all 94 unique evidence URLs on 2026-09-26. Every URL returned HTTP 200 at its cited address, and every host is `docs.cloud.google.com` or `developers.google.com`. The reviewer checked every evidence claim and every feedback sentence against the fetched pages.

## Commands Run

1. `make test` before the review: passed (documentation lint, type checking, lint, unit tests, build, and 18 Playwright end-to-end tests).
2. `make verify-sources` before the review: passed.
3. `npm run question-set-report -- professional-ml-engineer-2026-06-practice-1`: summary below.
4. `npm run create-rejection-record -- professional-ml-engineer-2026-06-practice-1 claude-opus-5.5-p1-acceptance-reviewer-20260926 2026-09-26 "$(cat rejections.json)"`: output below.
5. `make docs`, `make test`, and `make verify-sources` after adding this report.

## Report Summary

```text
Question set: professional-ml-engineer-2026-06-practice-1 (candidate version 1)
Questions: 60, multiple-select: 2
Stem words: min 77, median 94, max 121
Option words: min 18, median 28, max 38
Reading load: min 187, median 206, max 232
Correct option strictly longest: 0 of 58 single-choice questions
Correct letters (single-choice): a 15, b 15, c 14, d 14
Objectives: 1.1 4, 1.2 4, 2.1 4, 2.2 2, 2.3 3, 3.1 4, 3.2 6, 3.3 2, 4.1 6, 4.2 6, 5.1 6, 5.2 5, 6.1 4, 6.2 4
Considerations used more than once: 4.1.a 2, 4.2.c 2, 5.1.a 2, 5.1.b 2, 5.1.c 2, 5.2.a 2, 5.2.b 3, 6.1.a 2, 6.2.b 2
Questions without a consideration identifier: none
```

Every question has a longest option of at most twice its shortest option; the largest ratio is 1.67 (30 to 18 words). The objective allocation matches the coverage matrix, no consideration is the primary topic of more than three questions, and considerations 1.1.c and 2.2.b are deferred to Practice Exam 2 as issue 0003 plans.

Reviewer tallies, which the report does not measure:

| Measure | Target | Tally |
|---|---|---|
| Questions with a near-miss pair | At least 30 | 45. The 15 questions without one are collaborate-09, scale-01, scale-02, scale-03, scale-05, scale-06, scale-10, scale-11, serve-10, serve-11, automate-02, automate-03, automate-11, monitor-04, and monitor-06. Four of the 45 pairs are looser than the rest (architect-01 a and c, serve-05 a and d, serve-08 a and d, automate-10 c and d); without them the tally is 41. |
| Choose-two questions | At most 3 | 2 (serve-10 and automate-10) |
| T4 troubleshooting | At least 6 | 6 (collaborate-02, scale-06, scale-08, serve-04, monitor-06, monitor-07) |
| T6 evaluation and metrics | At least 5 | 6 (architect-03, collaborate-08, automate-01, automate-05, monitor-03, monitor-08) |
| T10 risk, security, and responsible AI | At least 4 | 7 (collaborate-04, collaborate-05, scale-04, serve-08, monitor-01, monitor-02, monitor-04) |
| T3 migration | At least 4 | 4 (scale-07, serve-02, automate-03, automate-09) |
| Other types | None | T1 1, T2 5, T5 6, T7 3, T8 10, T9 7, T11 4, T12 1 |
| Generative AI decisive | 12 to 18 | 14 (architect-04, architect-05, architect-07, architect-08, collaborate-06, scale-01, scale-10, serve-06, serve-09, serve-11, automate-05, monitor-01, monitor-02, monitor-08) |

Every set-level target is met, so no set-level exception is needed.

## Semantic Review

The reviewer checked each question for a valid consideration identifier, two or three explicit constraints, exactly one defensible answer (or the two keyed answers in serve-10 and automate-10), distractors that are technically possible and fail a named constraint, feedback format and support, the option rules, product names, general availability of the decisive feature, originality, and at least two difficulty levers.

- **Currency:** Stems, options, and feedback use the current product names. Former names appear only in evidence titles that Google has not renamed, such as "BigQuery Explainable AI overview", which describes BigQuery ML functions rather than Vertex Explainable AI. No question makes a Preview feature decisive: Model Monitoring v2, the GenAI Client evaluation interface, the Gemini jailbreak classifier, endpoint Scale To Zero, Model Armor image screening, and evaluation slices appear only as context or not at all. No question depends on Vertex Explainable AI, optimized online serving, the optimized TensorFlow runtime, or a prebuilt training or inference container.
- **Originality:** No question copies, paraphrases, or re-skins an official sample question. scale-05 (sharded files in Cloud Storage), scale-07 (custom containers for managed training), and collaborate-07 (experiment tracking) cover topics that older public sample questions also cover, but their organizations, problems, and decisive features differ.

## Rejection Summary

One question fails the required condition that every feedback sentence is supported by its cited evidence: a distractor's feedback states a product behavior that none of its cited evidence documents. The record below is the only authoritative list of the rejected identifier, the reason, and the proposed fix. The other 59 questions passed every required check.

The rejected candidate stays registered and unchanged. A separate author must create a corrected draft and candidate with a new identifier and version, and that candidate needs a new independent review.

Non-blocking observations for the corrected draft. These questions are not rejected:

- The feedback of architect-08 choice c and serve-11 choice d concludes that Provisioned Throughput would not lower cost. The cited Provisioned Throughput page documents a fixed-cost, fixed-term subscription that reserves throughput, but it does not compare prices. The conclusion follows from the stems, but the author can limit these sentences to documented properties.
- collaborate-07 requires that the best run's model can be registered from its run. The cited page states that registering an experiment model automatically chooses a prebuilt prediction container. The question does not depend on that container, but re-check the step before publication because the newest prebuilt inference containers are past their end of patch and support.
- automate-05 and monitor-08 rely on the generally available evaluation module, which Google maintains for backward compatibility but no longer develops. Re-check both before publication, as issue 0003 notes.

## Rejection Record

```json
{
  "questionSetId": "professional-ml-engineer-2026-06-practice-1",
  "questionSetVersion": 1,
  "contentSha256": "6b48f1f4061845297b0645ecc3b0cc18a2eeee33d3ddf9f7be7e26f190306d03",
  "reviewer": "claude-opus-5.5-p1-acceptance-reviewer-20260926",
  "authors": [
    "claude-opus-5.5-p1-architect-20260926",
    "claude-opus-5.5-p1-collaborate-20260926",
    "claude-opus-5.5-p1-scale-20260926",
    "claude-opus-5.5-p1-serve-20260926",
    "claude-opus-5.5-p1-automate-20260926",
    "claude-opus-5.5-p1-monitor-20260926"
  ],
  "reviewedOn": "2026-09-26",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 94,
  "questionIds": [
    "pmle-p1-architect-01",
    "pmle-p1-architect-02",
    "pmle-p1-architect-03",
    "pmle-p1-architect-04",
    "pmle-p1-architect-05",
    "pmle-p1-architect-06",
    "pmle-p1-architect-07",
    "pmle-p1-architect-08",
    "pmle-p1-collaborate-01",
    "pmle-p1-collaborate-02",
    "pmle-p1-collaborate-03",
    "pmle-p1-collaborate-04",
    "pmle-p1-collaborate-05",
    "pmle-p1-collaborate-06",
    "pmle-p1-collaborate-07",
    "pmle-p1-collaborate-08",
    "pmle-p1-collaborate-09",
    "pmle-p1-scale-01",
    "pmle-p1-scale-02",
    "pmle-p1-scale-03",
    "pmle-p1-scale-04",
    "pmle-p1-scale-05",
    "pmle-p1-scale-06",
    "pmle-p1-scale-07",
    "pmle-p1-scale-08",
    "pmle-p1-scale-09",
    "pmle-p1-scale-10",
    "pmle-p1-scale-11",
    "pmle-p1-scale-12",
    "pmle-p1-serve-01",
    "pmle-p1-serve-02",
    "pmle-p1-serve-03",
    "pmle-p1-serve-04",
    "pmle-p1-serve-05",
    "pmle-p1-serve-06",
    "pmle-p1-serve-07",
    "pmle-p1-serve-08",
    "pmle-p1-serve-09",
    "pmle-p1-serve-10",
    "pmle-p1-serve-11",
    "pmle-p1-serve-12",
    "pmle-p1-automate-01",
    "pmle-p1-automate-02",
    "pmle-p1-automate-03",
    "pmle-p1-automate-04",
    "pmle-p1-automate-05",
    "pmle-p1-automate-06",
    "pmle-p1-automate-07",
    "pmle-p1-automate-08",
    "pmle-p1-automate-09",
    "pmle-p1-automate-10",
    "pmle-p1-automate-11",
    "pmle-p1-monitor-01",
    "pmle-p1-monitor-02",
    "pmle-p1-monitor-03",
    "pmle-p1-monitor-04",
    "pmle-p1-monitor-05",
    "pmle-p1-monitor-06",
    "pmle-p1-monitor-07",
    "pmle-p1-monitor-08"
  ],
  "rejectedQuestions": [
    {
      "id": "pmle-p1-scale-02",
      "reason": "Unsupported feedback. Choice b's feedback states that a BigQuery ML boosted tree regressor 'would still be trained on a symmetric objective', but the only evidence it cites (custom-training, the Agent Platform Serverless training overview) says nothing about BigQuery ML or its training loss, so that clause has no support in the cited evidence. Fix: replace the clause with one that the cited evidence supports, for example 'Incorrect. Adding hours after prediction is the post-processing adjustment that leadership rejected, while Agent Platform custom training runs the team's own training code, so the asymmetric loss can be the training objective.', or cite a Google page that documents the training objective of BigQuery ML boosted tree regressors. The stem, choices, key, and other feedback passed review."
    }
  ]
}
```
