---
type: Review
title: Independent review of professional-ml-engineer-2026-06-practice-1-v2 version 2, rejected
description: Semantic and source review of all 60 candidate questions; two questions are rejected because a distractor's feedback states a cost outcome that its cited evidence does not support.
status: Rejected
timestamp: 2026-09-27T00:00:00Z
---

# Independent Review of professional-ml-engineer-2026-06-practice-1-v2 Version 2 (Rejected)

## Review Summary

- **Candidate:** `professional-ml-engineer-2026-06-practice-1-v2`, version 2, registered at commit `646d67b`. The content digest is in the record below.
- **Reviewer:** `claude-opus-5.5-p1-acceptance-reviewer-2-20260926`.
- **Authors:** `claude-opus-5.5-p1-architect-20260926`, `claude-opus-5.5-p1-collaborate-20260926`, `claude-opus-5.5-p1-scale-v2-20260926`, `claude-opus-5.5-p1-serve-20260926`, `claude-opus-5.5-p1-automate-20260926`, and `claude-opus-5.5-p1-monitor-20260926`, read from the `author` field of each section module that version 2 uses.
- **Independence check:** The reviewer identifier differs from all six author identifiers, from `claude-opus-5.5-p1-scale-20260926`, which authored the 11 scale questions that `sections/scaleV2.ts` reuses, and from `claude-opus-5.5-p1-acceptance-reviewer-20260926`, which reviewed version 1 and proposed the wording of the revised sentence. The review session did not author, edit, or propose wording for any candidate content.
- **Guide check:** On 2026-09-26 and again on 2026-09-27, the reviewer re-fetched the [certification page](https://cloud.google.com/learn/certification/machine-learning-engineer) and the [exam guide](https://services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_english_new.pdf). The guide is still dated June 1, 2026, with six sections weighted about 13%, 16%, 21%, 20%, 18%, and 13% and 52 considerations, and its file is byte-identical on both days. The certification page still links the same guide and describes 50 to 60 multiple choice and multiple select questions in two hours. Neither changed.
- **Sources:** The reviewer opened all 94 unique evidence URLs on 2026-09-26 and re-fetched all of them on 2026-09-27. Every URL returned HTTP 200 at its cited address on both days, the article text of every page was unchanged between the two fetches, and every host is `docs.cloud.google.com` or `developers.google.com`. The reviewer checked every evidence claim and every feedback sentence against the fetched pages.

## Commands Run

1. `make test` before the review: passed (documentation lint, type checking, lint, 83 unit tests, build, and 18 Playwright end-to-end tests).
2. `make verify-sources` before the review: passed.
3. `npm run question-set-report -- professional-ml-engineer-2026-06-practice-1-v2`: summary below.
4. `npm run create-rejection-record -- professional-ml-engineer-2026-06-practice-1-v2 claude-opus-5.5-p1-acceptance-reviewer-2-20260926 2026-09-27 "$(cat rejections.json)"`: output below.
5. `make docs`, `make test`, and `make verify-sources` after adding this report.

## Report Summary

```text
Question set: professional-ml-engineer-2026-06-practice-1-v2 (candidate version 2)
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

Every question has a longest option of at most twice its shortest option; the largest ratio is 1.67 (30 to 18 words, automate-08). The objective allocation matches the coverage matrix, no consideration is the primary topic of more than three questions, and considerations 1.1.c and 2.2.b are deferred to Practice Exam 2 as issue 0003 plans. Every stem has 70 to 130 words, every option 15 to 45 words, and every question 180 to 300 words of reading load.

Reviewer tallies, which the report does not measure:

| Measure | Target | Tally |
|---|---|---|
| Questions with a near-miss pair | At least 30 | 45. The 15 questions without one are collaborate-09, scale-01, scale-02, scale-03, scale-05, scale-06, scale-10, scale-11, serve-10, serve-11, automate-02, automate-03, automate-11, monitor-04, and monitor-06. Four pairs are looser than the rest (architect-01 a and c, serve-05 a and d, serve-08 a and d, automate-10 c and d); without them the tally is 41. |
| Choose-two questions | At most 3 | 2 (serve-10 and automate-10) |
| T4 troubleshooting | At least 6 | 6 (collaborate-02, scale-06, scale-08, serve-04, monitor-06, monitor-07) |
| T6 evaluation and metrics | At least 5 | 6 (architect-03, collaborate-08, automate-01, automate-05, monitor-03, monitor-08) |
| T10 risk, security, and responsible AI | At least 4 | 7 (collaborate-04, collaborate-05, scale-04, serve-08, monitor-01, monitor-02, monitor-04) |
| T3 migration | At least 4 | 4 (scale-07, serve-02, automate-03, automate-09) |
| Other types | None | T1 1, T2 5, T5 6, T7 3, T8 10, T9 7, T11 4, T12 1 |
| Generative AI decisive | 12 to 18 | 14 (architect-04, architect-05, architect-07, architect-08, collaborate-06, scale-01, scale-10, serve-06, serve-09, serve-11, automate-05, monitor-01, monitor-02, monitor-08) |

Every set-level target is met, so no set-level exception is needed.

## Earlier Rejections

`docs/reviews/professional-ml-engineer-2026-06-practice-1-rejected-2026-09-26.md` rejected one question of version 1, `pmle-p1-scale-02`. The reviewer compared the registered version 1 and version 2 candidates field by field. The only difference in the whole set is the feedback of scale-02 choice b, which version 2 revised; the stem, choices, key, objective, evidence, and other feedback of scale-02 and all other 59 questions are identical. The revised sentence is supported by its cited evidence, the Serverless training overview, which documents managed training that runs applications built on any ML framework. No rejected question returns unchanged.

## Semantic Review

The reviewer checked each question for a valid consideration identifier, two or three explicit constraints, exactly one defensible answer (or the two keyed answers in serve-10 and automate-10), distractors that are technically possible and fail a named constraint for a documented reason, feedback format and support, the option rules, product names, general availability of the decisive feature, originality, and at least two difficulty levers.

- **Currency:** Stems, options, and feedback use the current product names. No question makes a Preview feature decisive: Model Monitoring v2, the GenAI Client evaluation interface, the Gemini jailbreak classifier, endpoint Scale To Zero, Model Armor image screening, and evaluation slices appear only as context or not at all. No question depends on Vertex Explainable AI, optimized online serving, the optimized TensorFlow runtime, or a prebuilt training or inference container.
- **Originality:** On 2026-09-27 the reviewer compared all 60 questions with the eight items of the current official sample form cited in [research 0002](/research/0002-official-sample-question-patterns.md), without storing or reproducing them. No question copies, paraphrases, or re-skins a sample. serve-04 and serve-07 share a topic with a sample item, traffic splitting on one endpoint and online feature serving from BigQuery, but they test a different problem and decisive feature: rolling back a live canary while keeping it deployed, and continuous against scheduled feature view sync. automate-10 uses the same event chain as an older, widely republished public sample that is not in the current form, a Cloud Storage notification that starts retraining through Pub/Sub and a function, but its organization, constraints, choose-two format, and distractors differ.

## Rejection Summary

Two questions fail the required condition that every feedback sentence is supported by its cited evidence. In each, a distractor's feedback concludes that Provisioned Throughput does not lower cost, but the cited pages describe it only as a fixed-cost subscription that reserves throughput and do not compare its price with pay-as-you-go requests. The reviewer found no Google page that makes that comparison; the [consumption options](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/deploy/consumption-options) page, which neither question cites, says only that sizing Provisioned Throughput for peak demand drives up cost compared with sizing it for a percentile of traffic. Because each stem asks to reduce or lower cost, the distractor also lacks a documented reason to fail that constraint. This is the same kind of defect that rejected version 1. The record below is the only authoritative list of the rejected identifiers and reasons. The other 58 questions passed every required check.

The rejected candidate stays registered and unchanged. A separate author must create a corrected draft and candidate with a new identifier and version, and that candidate needs a new independent review.

Non-blocking observations, which do not reject any question:

- automate-05 and monitor-08 rely on the generally available evaluation module, which Google maintains for backward compatibility but no longer actively develops. Re-check both before publication.
- collaborate-07 requires that the best run's model can be registered from its run, and the cited page states that registration automatically chooses a prebuilt prediction container. The question does not depend on that container, but the newest prebuilt inference containers are past their end of patch and support, so re-check the step before publication.

## Rejection Record

```json
{
  "questionSetId": "professional-ml-engineer-2026-06-practice-1-v2",
  "questionSetVersion": 2,
  "contentSha256": "57a42ec2c8ea8cf9147a534d28794e079b0b9f3bc7381d4507afc62658a79e09",
  "reviewer": "claude-opus-5.5-p1-acceptance-reviewer-2-20260926",
  "authors": [
    "claude-opus-5.5-p1-architect-20260926",
    "claude-opus-5.5-p1-collaborate-20260926",
    "claude-opus-5.5-p1-scale-v2-20260926",
    "claude-opus-5.5-p1-serve-20260926",
    "claude-opus-5.5-p1-automate-20260926",
    "claude-opus-5.5-p1-monitor-20260926"
  ],
  "reviewedOn": "2026-09-27",
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
      "id": "pmle-p1-architect-08",
      "reason": "Unsupported feedback, and no documented reason for a distractor to fail. The feedback of choice c states that Provisioned Throughput sized for the peak reserves capacity 'without reducing cost'. The cited evidence (provisioned-throughput, the Provisioned Throughput overview, and batch-inference, the Gemini batch inference page) documents that Provisioned Throughput is a fixed-cost, fixed-term subscription that reserves throughput and that batch inference costs 50% less than real-time inference, but neither page compares the price of Provisioned Throughput with the pay-as-you-go online requests that the application sends today, so the claim that cost does not fall has no support in the cited evidence. The stem asks only to reduce cost, not to minimize it, and reserved throughput addresses the peak-hour quota errors, so whether choice c fails a stated constraint depends entirely on that unsupported claim. This breaks the required conditions that every feedback sentence is supported by its cited evidence and that every distractor fails a named constraint for a documented reason."
    },
    {
      "id": "pmle-p1-serve-11",
      "reason": "Unsupported feedback. The feedback of choice d states that with Provisioned Throughput 'the cost does not fall'. The cited evidence (provisioned-throughput, the Provisioned Throughput overview, and context-cache, the context caching overview) documents that Provisioned Throughput is a fixed-cost subscription that reserves throughput and that implicit caching lowers the cost of large common content at the start of the prompt, but neither page compares the price of Provisioned Throughput with the pay-as-you-go requests that the assistant sends today, so the claim that cost does not fall has no support in the cited evidence. The stem requires lower cost and latency, so the documented reason why choice d fails that constraint is missing. This breaks the required conditions that every feedback sentence is supported by its cited evidence and that every distractor fails a named constraint for a documented reason."
    }
  ]
}
```
