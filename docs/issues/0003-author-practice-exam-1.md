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
| pmle-p1-architect-03 | 1.1.d | T6 | no | AutoML `maximize-au-prc` objective for rare-class performance across thresholds | b | D7, D6, D7 | L2, L4 |
| pmle-p1-architect-04 | 1.1.e | T11 | yes | Supervised tuning of a Gemini remote model evaluated with `ML.EVALUATE` | d | D1, D3, D3 | L2, L4 |
| pmle-p1-architect-05 | 1.2.a | T2 | yes | Pay-as-you-go partner model as a service through Agent Platform endpoints | c | D1, D2, D5 | L1, L2, L4 |
| pmle-p1-architect-06 | 1.2.b | T2 | no | Document AI Invoice Parser | a | D2, D3, D7 | L2, L3 |
| pmle-p1-architect-07 | 1.2.c | T11 | yes | Grounding on a RAG Engine corpus refreshed from Cloud Storage | d | D7, D7, D7 | L2, L4 |
| pmle-p1-architect-08 | 1.2.d | T1 | yes | Gemini batch inference at a 50% discount with higher rate limits | b | D6, D2, D4 | L1, L2 |

### Plan: collaborate

| Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|
| pmle-p1-collaborate-01 | 2.1.a | T5 | no | Images in Cloud Storage with an `ML_USE` import column and a manual split | b | D7, D7, D1 | L2, L4 |
| pmle-p1-collaborate-02 | 2.1.b | T4 | no | Move a terabyte-scale aggregation from in-memory pandas to BigQuery DataFrames | d | D7, D1, D3 | L2, L4 |
| pmle-p1-collaborate-03 | 2.1.c | T5 | no | Feature Store feature groups over BigQuery with feature views for online serving | a | D2, D3, D2 | L2, L4 |
| pmle-p1-collaborate-04 | 2.1.d | T10 | no | Sensitive Data Protection deterministic encryption with a surrogate annotation | c | D5, D7, D7 | L2, L4 |
| pmle-p1-collaborate-05 | 2.2.a | T10 | no | New Workbench instances with the Single user only access mode | b | D7, D8, D6 | L2, L4 |
| pmle-p1-collaborate-06 | 2.2.c | T11 | yes | Deploy self-deployed Model Garden models from a notebook, then undeploy | d | D1, D2, D1 | L2, L4 |
| pmle-p1-collaborate-07 | 2.3.a | T9 | no | Experiments on Agent Platform with the trained model logged to each run | a | D7, D2, D1 | L2, L4 |
| pmle-p1-collaborate-08 | 2.3.b | T6 | no | Regression error metric that matches a linear per-megawatt-hour cost | c | D6, D6, D7 | L2, L4 |
| pmle-p1-collaborate-09 | 2.3.c | T9 | no | ML Metadata lineage from a deployed model to its dataset | b | D6, D2, D3 | L3, L4 |

### Plan: scale

| Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|
| pmle-p1-scale-01 | 3.1.a | T2 | yes | Gemini with few-shot prompting for a small labeled text task | a | D2, D3, D3 | L3, L4 |
| pmle-p1-scale-02 | 3.1.b | T2 | no | Custom training for a custom loss function | c | D3, D3, D1 | L3, L4 |
| pmle-p1-scale-03 | 3.1.c | T8 | no | Online inference for a real-time decision | d | D4, D4, D1 | L3, L4 |
| pmle-p1-scale-04 | 3.1.d | T10 | no | Boosted trees with `ML.EXPLAIN_PREDICT` for per-decision explanations | b | D3, D7, D2 | L2, L4 |
| pmle-p1-scale-05 | 3.2.a | T5 | no | Fewer, larger files in Cloud Storage behind Cloud Storage FUSE | c | D3, D2, D2 | L3, L4 |
| pmle-p1-scale-06 | 3.2.b | T4 | no | BigQuery Storage Read API instead of paginated `tabledata.list` reads | a | D2, D6, D3 | L3, L4 |
| pmle-p1-scale-07 | 3.2.c | T3 | no | Notebook code with an unsupported framework version and private dependencies moved to a custom container training job | b | D1, D3, D2 | L2, L4 |
| pmle-p1-scale-08 | 3.2.d | T4 | no | Input-bound TPU fixed with parallel file reads in `tf.data` | d | D3, D6, D7 | L2, L4 |
| pmle-p1-scale-09 | 3.2.e | T7 | no | Hyperparameter tuning job with a reported metric | a | D3, D7, D2 | L2, L4 |
| pmle-p1-scale-10 | 3.2.f | T11 | yes | Supervised fine-tuning to learn classification boundaries under a prompt-length limit | c | D7, D2, D6 | L1, L4 |
| pmle-p1-scale-11 | 3.3.a | T7 | no | GPUs for custom operations that TPUs do not suit | d | D7, D3, D7 | L3, L4 |
| pmle-p1-scale-12 | 3.3.b | T7 | no | Reduction Server on CPU-only nodes for NCCL data-parallel GPU training | b | D7, D2, D6 | L2, L4 |

### Plan: serve

| Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|
| pmle-p1-serve-01 | 4.1.a | T8 | no | Batch inference from BigQuery to BigQuery with a starting replica count sized for the deadline | d | D4, D7, D1 | L2, L4 |
| pmle-p1-serve-02 | 4.1.b | T3 | no | Custom container that keeps the existing server's port, health route, and predict route | b | D1, D7, D2 | L2, L4 |
| pmle-p1-serve-03 | 4.1.c | T8 | no | Model Registry versions with the default alias moved after validation | a | D2, D7, D7 | L2, L4 |
| pmle-p1-serve-04 | 4.1.d | T4 | no | Canary rollback through the endpoint traffic split | c | D8, D2, D7 | L4, L6 |
| pmle-p1-serve-05 | 4.1.e | T8 | no | Custom inference routine for preprocessing and postprocessing | d | D1, D3, D2 | L2, L4 |
| pmle-p1-serve-06 | 4.1.a | T8 | yes | Cloud Run service with a GPU that scales to zero for a fine-tuned open model | b | D2, D1, D2 | L1, L2, L4 |
| pmle-p1-serve-07 | 4.2.a | T8 | no | Feature Store Bigtable online serving with continuous data sync | c | D1, D4, D3 | L2, L4 |
| pmle-p1-serve-08 | 4.2.b | T10 | no | Private Service Connect endpoint shared with several VPC networks | a | D7, D5, D2 | L2, L4 |
| pmle-p1-serve-09 | 4.2.c | T8 | yes | Multi-GPU machine with tensor parallelism for a model larger than one GPU | d | D7, D3, D2 | L1, L2, L4 |
| pmle-p1-serve-10 | 4.2.d | T8 | no | Minimum and maximum replica counts for autoscaling (choose two) | two | D2, D4, D7 | L1, L4 |
| pmle-p1-serve-11 | 4.2.e | T8 | yes | Prompt order that lets Gemini implicit context caching reuse a shared prefix | b | D4, D7, D3 | L3, L4 |
| pmle-p1-serve-12 | 4.2.c | T8 | no | AutoML Edge model exported for an offline Edge TPU device | a | D4, D7, D7 | L2, L4 |

### Plan: automate

| Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|
| pmle-p1-automate-01 | 5.1.a | T6 | no | Model evaluation component whose AUC gates deployment | c | D8, D3, D7 | L2, L4 |
| pmle-p1-automate-02 | 5.1.b | T9 | no | Versioned pipeline templates in Artifact Registry | a | D2, D3, D1 | L2, L4 |
| pmle-p1-automate-03 | 5.1.b | T3 | no | Existing Ray code on Ray on Agent Platform | d | D2, D1, D3 | L3, L4 |
| pmle-p1-automate-04 | 5.1.c | T5 | no | Transformations inside the model with dataset-wide normalization constants | b | D3, D4, D7 | L2, L4 |
| pmle-p1-automate-05 | 5.1.a | T6 | yes | Deterministic reference-based metrics for a tuned Gemini model before promotion | a | D6, D7, D8 | L2, L4 |
| pmle-p1-automate-06 | 5.1.c | T5 | no | Point-in-time training features with `ML.ENTITY_FEATURES_AT_TIME` | c | D3, D1, D7 | L2, L4 |
| pmle-p1-automate-07 | 5.2.a | T9 | no | Retraining triggered by a monitoring alert behind an evaluation gate | d | D2, D8, D3 | L1, L2 |
| pmle-p1-automate-08 | 5.2.a | T9 | no | Retraining schedule aligned with delayed labels | b | D6, D2, D8 | L2, L6 |
| pmle-p1-automate-09 | 5.2.b | T3 | no | Cloud Build trigger that builds, tests, and publishes versioned pipeline templates | c | D3, D1, D2 | L2, L4 |
| pmle-p1-automate-10 | 5.2.b | T9 | no | Cloud Storage notifications and a Pub/Sub-triggered function that start a pipeline run (choose two) | two | D2, D1, D3 | L2, L4 |
| pmle-p1-automate-11 | 5.2.b | T9 | no | Cloud Build trigger that requires approval before deployment | a | D3, D8, D2 | L4, L5 |

### Plan: monitor

| Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|
| pmle-p1-monitor-01 | 6.1.a | T10 | yes | Model Armor prompt injection and jailbreak detection with Inspect and block | b | D7, D3, D7 | L2, L4 |
| pmle-p1-monitor-02 | 6.1.a | T10 | yes | Model Armor floor settings with Sensitive Data Protection filters for every Gemini call | d | D8, D3, D7 | L2, L4 |
| pmle-p1-monitor-03 | 6.1.b | T6 | no | Model quality compared across groups before deployment | a | D6, D8, D2 | L3, L6 |
| pmle-p1-monitor-04 | 6.1.c | T10 | no | `ML.GLOBAL_EXPLAIN` for model-level feature importance | c | D7, D2, D3 | L3, L4 |
| pmle-p1-monitor-05 | 6.2.a | T12 | no | Drift detection when the training data is unavailable | d | D7, D6, D3 | L2, L4 |
| pmle-p1-monitor-06 | 6.2.b | T4 | no | Concept drift confirmed against ground truth | a | D6, D8, D6 | L4, L6 |
| pmle-p1-monitor-07 | 6.2.b | T4 | no | Training-serving skew from a feature computed differently | c | D6, D8, D2 | L4, L6 |
| pmle-p1-monitor-08 | 6.2.c | T6 | yes | LLM-as-a-judge regression evaluation before a prompt change | b | D6, D2, D7 | L2, L4 |

### Progress

- 2026-09-26: Planned all 60 questions and authored the `architect` section.
- 2026-09-26: Authored the `collaborate` section.
- 2026-09-26: Revised the `architect` section after independent review: corrected the batch-inference deadline arithmetic in architect-08, replaced request logging (Preview for partner models) and added a pay-as-you-go near-miss in architect-05, removed the stem echo in architect-03, replaced an implausible distractor in architect-06, and raised the planned generative AI count to 14.
- 2026-09-26: Revised the `collaborate` section after independent review: replaced distractors that were impossible rather than wrong (a BigQuery image source in collaborate-01, an access-mode change in collaborate-05), removed the second defensible answer in collaborate-07 by requiring the trained model to be logged, corrected unsupported feedback in collaborate-03, collaborate-04, and collaborate-06, added near-miss pairs to six questions, and replaced collaborate-08 with a regression-metric question so that it no longer overlaps architect-03.
- 2026-09-26: Addressed the second independent review: architect-03 now requires performance across thresholds and adds a precision-at-recall near-miss, architect-04 no longer overlaps scale-10, architect-06, architect-07, and architect-08 gained near-miss pairs, collaborate-05 replaced its unsupported metadata-edit distractor, and collaborate-07, collaborate-08, and collaborate-09 were reworded.
- 2026-09-26: Authored the `scale` section. Because the newest prebuilt training containers passed their end-of-availability dates in July 2026, scale-02 uses a custom container and scale-07 tests custom containers instead of autopackaging.
- 2026-09-26: Addressed the independent review of the scale section: scale-05 and scale-06 gained stated cost and memory constraints, scale-12 now states the NCCL and custom-container prerequisites of Reduction Server and adds a GPU worker-pool near-miss, scale-08 gained a near-miss, scale-01 replaced its ARIMA_PLUS distractor with the Natural Language API, scale-11 no longer asks for documentation recall, and the scale plan rows now record only real near-miss pairs and scope words.
- 2026-09-26: Authored the `serve` section. Replaced two planned topics that are no longer supported: the optimized TensorFlow runtime (serve-11, now Gemini context caching) has no stable images left, and prebuilt inference containers (serve-02, now custom container routes) are past their end of patch and support. The generative AI question moved from serve-12 to serve-11, and serve-06 now uses Cloud Run GPUs so that it no longer overlaps the Model Garden deployment in collaborate-06.
- 2026-09-26: Authored the `automate` section. Replaced the Airflow question in automate-02 with versioned pipeline templates, because no Google-hosted page documents starting an Agent Platform pipeline from Airflow. automate-04 moves the transformations into the model instead of repeating the custom inference routine in serve-05, automate-06 uses point-in-time feature lookups instead of a third Feature Store question, and automate-05 uses deterministic reference-based metrics so that it does not overlap the LLM-as-a-judge question planned for monitor-08.
- 2026-09-26: Authored the `monitor` section, which completes the 60 questions. monitor-02 tests Model Armor floor settings, so it does not repeat the template decision in monitor-01, and monitor-08 uses LLM-as-a-judge metrics because no reference answers exist, which separates it from the reference-based metrics in automate-05.
