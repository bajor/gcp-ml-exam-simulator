---
type: Review
title: Independent review of professional-ml-engineer-2026-06-practice-1-v3
description: Semantic and source acceptance for all 60 questions.
status: Accepted
timestamp: 2026-09-27T00:00:00Z
---

# Independent Review of professional-ml-engineer-2026-06-practice-1-v3

## Review Summary

- **Candidate:** `professional-ml-engineer-2026-06-practice-1-v3`, version 3, registered at commit `70609e0`. The content digest is in the record below.
- **Reviewer and independence:** The reviewer is `claude-opus-5.5-p1-acceptance-reviewer-2-20260926`. The authors, read from the `author` field of each section module that version 3 uses, are `claude-opus-5.5-p1-architect-v3-20260927`, `claude-opus-5.5-p1-collaborate-20260926`, `claude-opus-5.5-p1-scale-v2-20260926`, `claude-opus-5.5-p1-serve-v3-20260927`, `claude-opus-5.5-p1-automate-20260926`, and `claude-opus-5.5-p1-monitor-20260926`. The reviewer identifier differs from all of them and from the authors of the reused version 1 sections. The review session did not author, edit, or propose wording for any candidate content; the reviewer's [version 2 rejection report](/reviews/professional-ml-engineer-2026-06-practice-1-v2-rejected-2026-09-27.md) described the defects without replacement wording.
- **Guide check:** On 2026-09-27 the reviewer re-fetched the [certification page](https://cloud.google.com/learn/certification/machine-learning-engineer) and the [exam guide](https://services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_english_new.pdf). The guide is still dated June 1, 2026, with six sections weighted about 13%, 16%, 21%, 20%, 18%, and 13% and 52 considerations, and the certification page still links it and describes 50 to 60 multiple choice and multiple select questions in two hours. Neither changed.
- **Commands run:** `make test` and `make verify-sources` before the review (both passed; 83 unit tests and 18 Playwright end-to-end tests), `npm run question-set-report -- professional-ml-engineer-2026-06-practice-1-v3`, `npm run create-review-record -- professional-ml-engineer-2026-06-practice-1-v3 claude-opus-5.5-p1-acceptance-reviewer-2-20260926 2026-09-27`, and `make docs`, `make test`, and `make verify-sources` after adding this document.
- **Sources:** Version 3 cites 93 unique evidence URLs, all on `docs.cloud.google.com` or `developers.google.com`. The reviewer opened every one on 2026-09-26 and again on 2026-09-27; each returned HTTP 200 at its cited address, and no page's article text changed between the fetches. The reviewer checked every evidence claim and feedback sentence against the fetched pages, and re-fetched the four pages that the two revised questions cite before checking them.
- **Set-level metrics from the report:**

```text
Question set: professional-ml-engineer-2026-06-practice-1-v3 (candidate version 3)
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

  The largest ratio of longest to shortest option in a question is 1.67 (automate-08). Every stem has 70 to 130 words, every option 15 to 45 words, and every question 180 to 300 words of reading load. The objective allocation matches the coverage matrix, no consideration is the primary topic of more than three questions, and considerations 1.1.c and 2.2.b are deferred to Practice Exam 2 as issue 0003 plans.
- **Reviewer tallies:** 45 questions contain a near-miss pair, or 41 without the looser pairs in architect-01, serve-05, serve-08, and automate-10 (target at least 30). Question types: T4 troubleshooting 6 (target at least 6), T6 evaluation and metrics 6 (at least 5), T10 risk, security, and responsible AI 7 (at least 4), T3 migration 4 (at least 4), and T1 1, T2 5, T5 6, T7 3, T8 10, T9 7, T11 4, T12 1. Generative AI is decisive in 14 questions (target 12 to 18): architect-04, architect-05, architect-07, architect-08, collaborate-06, scale-01, scale-10, serve-06, serve-09, serve-11, automate-05, monitor-01, monitor-02, and monitor-08. Two questions are choose-two (serve-10 and automate-10).
- **Earlier rejections:** Version 1 was rejected for `pmle-p1-scale-02`, and version 2 for `pmle-p1-architect-08` and `pmle-p1-serve-11`. A field-by-field comparison with the registered candidates shows that scale-02 carries the revised choice b feedback of version 2, and that architect-08 choice c and serve-11 choice d have new text, feedback, and evidence. No other question differs from version 2. The Provisioned Throughput evidence is gone. The feedback of architect-08 choice c is supported by the minimum cache token count and prefix guidance on the context caching overview. The feedback of serve-11 choice d is supported by the self-deployed models overview and the Model Garden pricing statement. No rejected question returns unchanged.
- **Currency and originality:** Product names match the current names. No Preview or deprecated feature is decisive: Model Monitoring v2, the GenAI Client evaluation interface, the Gemini jailbreak classifier, and endpoint Scale To Zero appear only as context or not at all, and no question depends on Vertex Explainable AI or a prebuilt training or inference container. The reviewer compared all 60 questions with the eight items of the current official sample form cited in [research 0002](/research/0002-official-sample-question-patterns.md), without storing or reproducing them, and found no copy, paraphrase, or re-skin.
- **Exceptions:** None. Every set-level target is met.
- **Result:** All 60 questions passed the required checks.

## Review Record

```json
{
  "questionSetId": "professional-ml-engineer-2026-06-practice-1-v3",
  "questionSetVersion": 3,
  "contentSha256": "09693122e389abc4b23affa462e36caea5569bcc2d3bdac203e8e227a1531ddd",
  "reviewer": "claude-opus-5.5-p1-acceptance-reviewer-2-20260926",
  "authors": [
    "claude-opus-5.5-p1-architect-v3-20260927",
    "claude-opus-5.5-p1-collaborate-20260926",
    "claude-opus-5.5-p1-scale-v2-20260926",
    "claude-opus-5.5-p1-serve-v3-20260927",
    "claude-opus-5.5-p1-automate-20260926",
    "claude-opus-5.5-p1-monitor-20260926"
  ],
  "reviewedOn": "2026-09-27",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 93,
  "acceptedQuestionIds": [
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
  "rejectedQuestions": []
}
```
