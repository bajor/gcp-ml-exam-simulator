---
type: Issue
title: Author Practice Exam 1
description: Plan, author, review, and publish the first original 60-question practice set.
status: in-progress
labels: [content]
blocked_by: []
tracker: "One pull request per section, then candidate review and publication"
timestamp: 2026-09-26T00:00:00Z
---

## Author Practice Exam 1

Implement [PRD 0002](/prd/0002-practice-exam-question-sets.md) for Practice Exam 1 by following the authoring skill `.claude/skills/pmle-question-authoring/SKILL.md`, the [question style guide](/authoring/question-style-guide.md), and the [objective coverage matrix](/authoring/coverage-matrix.md).

- Set identifier: `professional-ml-engineer-2026-06-practice-1`, version 1.
- Authors: `claude-opus-5.5-p1-<section>-20260926`, one identifier per section.
- Guide check: on 2026-09-26 the exam guide was still dated June 1, 2026, with the same six sections, weights, and 52 considerations.

### Set Targets

The plan below allocates questions exactly as the coverage matrix requires and keeps these PRD 0002 targets:

| Target | Planned |
|---|---|
| Correct letters among 58 single-choice questions (13 to 17 each) | a 15, b 15, c 14, d 14 |
| Choose-two questions (at most 3) | 2 |
| Generative AI decisive (12 to 18) | 14 |
| T4 troubleshooting (at least 6) | 6 |
| T6 evaluation and metrics (at least 5) | 6 |
| T10 risk, security, and responsible AI (at least 4) | 7 |
| T3 migration (at least 4) | 4 |
| Considerations deferred to Practice Exam 2 | 1.1.c, 2.2.b |

Near-miss pairs (lever L2) and the longest-option limit are checked per section with `npm run question-set-report`.

### Plan: architect

| Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|
| pmle-p1-architect-01 | 1.1.a | T2 | no | One ARIMA_PLUS model with `TIME_SERIES_ID_COL` and `HOLIDAY_REGION` | a | D3, D2, D3 | L2, L3, L4 |
| pmle-p1-architect-02 | 1.1.b | T5 | no | `TRANSFORM` preprocessing applied automatically by `ML.PREDICT` | c | D3, D2, D7 | L2, L4 |
| pmle-p1-architect-03 | 1.1.d | T6 | no | AutoML `maximize-au-prc` objective for the rare class | b | D7, D6, D7 | L2, L6 |
| pmle-p1-architect-04 | 1.1.e | T11 | yes | Supervised tuning of a Gemini remote model evaluated with `ML.EVALUATE` | d | D1, D3, D6 | L2, L4 |
| pmle-p1-architect-05 | 1.2.a | T2 | yes | Pay-as-you-go partner model as a service through Agent Platform endpoints | c | D1, D2, D5 | L1, L2, L4 |
| pmle-p1-architect-06 | 1.2.b | T2 | no | Document AI Invoice Parser | a | D2, D3, D7 | L2, L3 |
| pmle-p1-architect-07 | 1.2.c | T11 | yes | Grounding on a RAG Engine corpus refreshed from Cloud Storage | d | D7, D2, D7 | L2, L4 |
| pmle-p1-architect-08 | 1.2.d | T1 | yes | Gemini batch inference at a 50% discount with higher rate limits | b | D6, D2, D3 | L1, L2 |

### Plan: collaborate

| Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|
| pmle-p1-collaborate-01 | 2.1.a | T5 | no | Images in Cloud Storage with an import file of URIs and labels | b | D3, D2, D7 | L2, L3 |
| pmle-p1-collaborate-02 | 2.1.b | T4 | no | Move a terabyte-scale aggregation from in-memory Python to BigQuery SQL | d | D3, D1, D2 | L2, L6 |
| pmle-p1-collaborate-03 | 2.1.c | T5 | no | Feature Store feature groups over BigQuery shared across teams | a | D1, D3, D2 | L2, L4 |
| pmle-p1-collaborate-04 | 2.1.d | T10 | no | Sensitive Data Protection de-identification before training | c | D5, D3, D8 | L2, L4 |
| pmle-p1-collaborate-05 | 2.2.a | T10 | no | Workbench single-user access mode for per-user identity | b | D5, D7, D2 | L2, L4 |
| pmle-p1-collaborate-06 | 2.2.c | T11 | yes | Prototype Model Garden models from a notebook | d | D1, D2, D3 | L1, L4 |
| pmle-p1-collaborate-07 | 2.3.a | T9 | no | Experiments on Agent Platform for run parameters and metrics | a | D3, D2, D3 | L2, L4 |
| pmle-p1-collaborate-08 | 2.3.b | T6 | no | Regression error metric that matches the business cost of outliers | c | D6, D6, D7 | L2, L6 |
| pmle-p1-collaborate-09 | 2.3.c | T9 | no | ML Metadata lineage from a deployed model to its dataset | b | D3, D6, D2 | L2, L3 |

### Plan: scale

| Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|
| pmle-p1-scale-01 | 3.1.a | T2 | yes | Gemini with few-shot prompting for a small labeled text task | a | D2, D3, D2 | L1, L3 |
| pmle-p1-scale-02 | 3.1.b | T2 | no | Custom training for a custom loss function | c | D3, D3, D1 | L2, L4 |
| pmle-p1-scale-03 | 3.1.c | T8 | no | Online inference for a real-time decision | d | D4, D4, D2 | L2, L6 |
| pmle-p1-scale-04 | 3.1.d | T10 | no | Boosted trees with `ML.EXPLAIN_PREDICT` for per-decision explanations | b | D3, D2, D7 | L2, L4 |
| pmle-p1-scale-05 | 3.2.a | T5 | no | Unstructured data in Cloud Storage with URIs and labels in BigQuery | c | D3, D2, D3 | L2, L3 |
| pmle-p1-scale-06 | 3.2.b | T4 | no | Faster BigQuery reads for a training input pipeline | a | D6, D2, D3 | L2, L6 |
| pmle-p1-scale-07 | 3.2.c | T3 | no | Existing script as a custom training job with a prebuilt container | b | D1, D2, D3 | L2, L4 |
| pmle-p1-scale-08 | 3.2.d | T4 | no | Input-bound accelerators fixed with a parallel, prefetching input pipeline | d | D6, D2, D6 | L2, L6 |
| pmle-p1-scale-09 | 3.2.e | T7 | no | Hyperparameter tuning job with a reported metric | a | D3, D2, D7 | L2, L4 |
| pmle-p1-scale-10 | 3.2.f | T11 | yes | Supervised fine-tuning for a strict output format | c | D7, D2, D6 | L2, L4 |
| pmle-p1-scale-11 | 3.3.a | T7 | no | GPUs for custom operations that TPUs do not suit | d | D3, D2, D7 | L2, L4 |
| pmle-p1-scale-12 | 3.3.b | T7 | no | Data parallelism with Reduction Server | b | D2, D7, D3 | L2, L4 |

### Plan: serve

| Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|
| pmle-p1-serve-01 | 4.1.a | T8 | no | Batch inference reading from and writing to BigQuery | d | D4, D2, D1 | L2, L6 |
| pmle-p1-serve-02 | 4.1.b | T3 | no | Prebuilt XGBoost serving container instead of a self-managed VM | b | D1, D2, D7 | L2, L4 |
| pmle-p1-serve-03 | 4.1.c | T8 | no | Model Registry versions and aliases | a | D2, D3, D7 | L2, L4 |
| pmle-p1-serve-04 | 4.1.d | T4 | no | Canary rollback through the endpoint traffic split | c | D8, D2, D7 | L2, L6 |
| pmle-p1-serve-05 | 4.1.e | T8 | no | Custom inference routine for preprocessing and postprocessing | d | D1, D3, D2 | L2, L4 |
| pmle-p1-serve-06 | 4.1.a | T8 | yes | Deploy an open model from Model Garden to an endpoint | b | D1, D2, D7 | L2, L4 |
| pmle-p1-serve-07 | 4.2.a | T8 | no | Feature Store Bigtable online serving for large, frequently updated features | c | D1, D4, D3 | L2, L4 |
| pmle-p1-serve-08 | 4.2.b | T10 | no | Private Service Connect endpoint | a | D5, D7, D2 | L2, L4 |
| pmle-p1-serve-09 | 4.2.c | T8 | yes | Accelerator with enough memory for large-model serving | d | D3, D2, D3 | L1, L2 |
| pmle-p1-serve-10 | 4.2.d | T8 | no | Minimum and maximum replica counts for autoscaling (choose two) | two | D2, D4, D7 | L1, L4 |
| pmle-p1-serve-11 | 4.2.e | T8 | no | Optimized TensorFlow runtime | b | D1, D2, D7 | L2, L4 |
| pmle-p1-serve-12 | 4.2.c | T8 | yes | Cost-effective accelerator for serving a small open model | a | D2, D2, D7 | L1, L2 |

### Plan: automate

| Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|
| pmle-p1-automate-01 | 5.1.a | T6 | no | Model evaluation component gating deployment | c | D8, D3, D2 | L2, L4 |
| pmle-p1-automate-02 | 5.1.b | T9 | no | Start Agent Platform Pipelines from an existing Airflow DAG | a | D2, D3, D1 | L1, L2 |
| pmle-p1-automate-03 | 5.1.b | T3 | no | Existing Ray code on Ray on Agent Platform | d | D2, D1, D3 | L2, L4 |
| pmle-p1-automate-04 | 5.1.c | T5 | no | One preprocessing definition shared by training and serving | b | D3, D7, D2 | L2, L4 |
| pmle-p1-automate-05 | 5.1.a | T6 | yes | Model-based evaluation of a tuned Gemini model before promotion | a | D6, D8, D2 | L2, L6 |
| pmle-p1-automate-06 | 5.1.c | T5 | no | Feature Store as the single feature source for training and serving | c | D3, D1, D7 | L2, L4 |
| pmle-p1-automate-07 | 5.2.a | T9 | no | Retraining triggered by a monitoring alert behind an evaluation gate | d | D2, D8, D3 | L1, L2 |
| pmle-p1-automate-08 | 5.2.a | T9 | no | Retraining schedule aligned with delayed labels | b | D6, D2, D8 | L3, L6 |
| pmle-p1-automate-09 | 5.2.b | T3 | no | Cloud Build pipeline replacing manual deployment scripts | c | D3, D1, D2 | L2, L4 |
| pmle-p1-automate-10 | 5.2.b | T9 | no | Pub/Sub trigger that starts a pipeline run (choose two) | two | D2, D3, D1 | L2, L4 |
| pmle-p1-automate-11 | 5.2.b | T9 | no | Approval gate before promotion | a | D3, D8, D2 | L2, L6 |

### Plan: monitor

| Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|
| pmle-p1-monitor-01 | 6.1.a | T10 | yes | Model Armor prompt injection and jailbreak detection | b | D7, D3, D2 | L2, L4 |
| pmle-p1-monitor-02 | 6.1.a | T10 | yes | Model Armor sensitive data protection on prompts and responses | d | D8, D3, D5 | L2, L4 |
| pmle-p1-monitor-03 | 6.1.b | T6 | no | Model quality compared across groups before deployment | a | D6, D8, D2 | L2, L6 |
| pmle-p1-monitor-04 | 6.1.c | T10 | no | `ML.GLOBAL_EXPLAIN` for model-level feature importance | c | D7, D2, D3 | L2, L4 |
| pmle-p1-monitor-05 | 6.2.a | T12 | no | Drift detection when the training data is unavailable | d | D7, D3, D2 | L2, L4 |
| pmle-p1-monitor-06 | 6.2.b | T4 | no | Concept drift confirmed against ground truth | a | D6, D8, D6 | L2, L6 |
| pmle-p1-monitor-07 | 6.2.b | T4 | no | Training-serving skew from a feature computed differently | c | D6, D8, D2 | L2, L6 |
| pmle-p1-monitor-08 | 6.2.c | T6 | yes | LLM-as-a-judge regression evaluation before a prompt change | b | D6, D2, D7 | L2, L4 |

### Progress

- 2026-09-26: Planned all 60 questions and authored the `architect` section.
- 2026-09-26: Revised the `architect` section after independent review: corrected the batch-inference deadline arithmetic in architect-08, replaced request logging (Preview for partner models) and added a pay-as-you-go near-miss in architect-05, removed the stem echo in architect-03, replaced an implausible distractor in architect-06, and raised the planned generative AI count to 14.
