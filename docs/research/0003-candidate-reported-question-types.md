---
type: Research
title: Question types candidates encounter
description: Official and candidate-reported evidence about PMLE question formats and tasks, and the resulting question-type taxonomy for practice sets.
status: complete
tags: [exam, questions, research]
timestamp: 2026-09-26T00:00:00Z
---

# Question Types Candidates Encounter

## Method

On 2026-09-25 and 2026-09-26 the research combined three kinds of evidence:

1. Google-owned statements: the certification page, the exam guide dated June 1, 2026, and the official sample form. [1] [2] [3]
2. Candidate reports that could be read in full: the project owner's report after the real Professional Data Engineer (PDE) exam, and a Google Developer forums thread about the PMLE exam. [4]
3. Search-engine summaries of third-party reports that could not be opened.

Many third-party pages, including Medium articles, returned HTTP 403 to automated access. The research did not try to bypass these blocks. Claims that rest only on search summaries are marked as unverified and do not drive recommendations. Exam dumps and sites that publish reconstructed exam questions were excluded, as required by Google's misconduct policy. [5]

## Findings

Documented owner fact: Google describes the exam as 50-60 "multiple choice and multiple select" questions in two hours. [COI: Google] [1]

Documented owner fact: The guide states that the exam does not directly assess coding skills, but that candidates with minimum Python and SQL proficiency should be able to interpret questions with code snippets. Code snippets can therefore appear. [COI: Google] [2]

Documented owner fact: All eight official sample items are scenario-based single-choice questions with four options; [research 0002](/research/0002-official-sample-question-patterns.md) describes their structure. [COI: Google] [3]

Documented owner fact: The certification page does not mention case studies. [1]

Candidate report, forum, January 23, 2025: The thread's author lists the format as multiple choice and multiple select, two hours, and about 50 questions. The author describes the platform (then Vertex AI) as "the heart of the exam", covering AutoML, Pipelines, Training, Prediction, Feature Store, Explainable AI, and Model Monitoring. ML fundamentals, including algorithms, evaluation metrics, model monitoring, and hardware (TPUs, GPUs, CPUs), are estimated at 20-25%. [single source, previous exam guide] [4]

Candidate report, forum reply, November 15, 2025: A candidate who took the exam at a test center writes that "99% questions are scenario based" and that they did not recall any question that was a direct pull from Python or command-line code. They list these important areas: MLOps, pipelines, experiments, the related SDKs, train and serve skew, classification metrics and their use cases, BigQuery ML features, endpoints compared with Dataflow for inference, and GPU and TPU training strategies. They note that "Boosted trees are as important as DNNs" and that they saw little generative AI. That exam predates the June 2026 guide, which adds generative AI throughout. [single source, previous exam guide] [4]

Candidate report, project owner, 2026-09-25: On the real PDE exam, questions were much longer and harder than the PDE simulator's, and time ran out. [candidate-reported] See [research 0001](/research/0001-exam-format-and-blueprint.md).

Unverified search summary: One Medium report, not readable directly, is summarized as saying that the real PMLE exam contained only single-answer questions. [unverified - search summary only]

Unverified search summaries: Several older reports are summarized as saying candidates finished in 85 to 90 minutes. They describe earlier guide versions and shorter question sets, and they conflict with the owner's PDE experience. [unverified - search summary only]

## Contradictions

Google lists multiple-select questions, while the samples and one unverified report show single-answer questions only. The simulator keeps multiple-select questions rare.

The guide says code snippets can appear, while the November 2025 candidate recalls no code-based question. Code snippets are therefore at most occasional.

Candidates under the previous guide saw little generative AI, but the June 2026 guide mentions it in 11 of its 52 considerations. Practice sets follow the current guide.

## Analysis

The evidence consistently describes scenario-based decisions, not recall of facts or syntax. Across all sources, the recurring tasks are: choosing a product or model type, designing an architecture under constraints, diagnosing a failure, choosing and interpreting evaluation metrics, automating pipelines and retraining, serving and rolling out models, and monitoring for skew and drift. The June 2026 guide adds generative AI tasks: selecting and tuning foundation models, optimizing Gemini-based applications, evaluating with LLM-as-a-judge, and protecting against malicious prompting and data leaks with tools such as Model Armor.

Format taxonomy, with the simulator policy each item implies:

| Format | Evidence | Simulator policy |
|---|---|---|
| Single-answer scenario, four options | Samples (8 of 8), forum report, certification page | The default format; at least 57 of 60 questions per set. |
| Multiple-select, "Choose two" with five options | Certification page and forum report | 0 to 3 questions per set. |
| Code or SQL snippet in the stem | Guide note; not recalled by the November 2025 candidate | Not supported by the renderer yet. Inline names such as `ML.PREDICT` in running text are allowed. Multi-line snippets are an open question. |
| Case study | Not mentioned for this exam | Not used. |

Task taxonomy (question types). A question has one primary type; types overlap with guide sections but are not the same thing.

| Type | The candidate must | Main guide objectives |
|---|---|---|
| T1 Architecture under constraints | Choose the end-to-end design that satisfies all stated constraints | 1.1, 1.2, 4.1, 5.1 |
| T2 Product or model-type selection | Choose among BigQuery ML, AutoML, custom training, pre-trained APIs, and foundation models, or among model families such as ARIMA_PLUS, boosted trees, DNNs, and LLMs | 1.1, 1.2, 3.1 |
| T3 Migration from a prototype | Move notebook, batch, or self-managed work to a production-grade managed design | 2.2, 4.1, 5.1 |
| T4 Troubleshooting and diagnosis | Find the cause or the first step for training failures, serving errors, degraded quality, or unexpected pipeline results | 3.2, 6.2 |
| T5 Data preparation and features | Choose the preprocessing tool by scale and complexity, manage features, prevent leakage, and protect personally identifiable information (PII) | 2.1, 5.1 |
| T6 Evaluation and metrics | Choose or interpret metrics for the business goal, including imbalanced classes, forecasting error, and LLM-as-a-judge | 2.3, 6.2 |
| T7 Training at scale | Choose hyperparameter tuning, distributed strategy, accelerators, and containers | 3.2, 3.3 |
| T8 Serving and rollout | Choose batch or online inference, endpoints, scaling, versioning, and canary or A/B rollout | 4.1, 4.2 |
| T9 MLOps automation | Build pipelines, triggers, retraining policies, CI/CD/CT, and lineage | 5.1, 5.2, 2.3 |
| T10 Risk, security, and responsible AI | Protect data and models, block malicious prompts, explain predictions, and monitor bias | 6.1, 2.2 |
| T11 Generative AI application design | Select, prompt, ground, tune, and optimize foundation-model solutions | 1.2, 2.2, 3.2 |
| T12 Production monitoring | Configure skew, drift, and attribution-drift monitoring, and respond to alerts | 6.2 |

The owner's report and the sample measurements show that difficulty comes mainly from reading load, from constraints that eliminate the obvious option, and from near-identical options. Time pressure follows from 60 long questions in 120 minutes.

## Recommendations

- Write every question as a scenario that requires a decision; never test isolated facts, syntax, or command flags.
- Use single-answer questions for at least 57 of 60 questions, and at most 3 choose-two questions per set.
- In every set, include at least 6 troubleshooting (T4) questions, at least 5 evaluation and metrics (T6) questions, at least 4 risk, security, and responsible AI (T10) questions, and at least 4 migration (T3) questions. The evidence ties these areas to real-exam difficulty.
- Make generative AI the decisive topic in 12 to 18 of 60 questions. Generative AI appears in 11 of the guide's 52 considerations (21%, about 13 of 60 questions), and those considerations sit in sections that together hold 49 of the 60 questions, so the range allows for more.
- Give BigQuery ML, boosted trees, classification metrics, and train and serve skew visible weight, as the November 2025 report recommends.
- Keep multi-line code snippets out of practice sets until the owner decides whether the renderer should support them.
- Re-run this research before authoring each new set, because the guide changed in June 2026 and reports under the new guide are still scarce.

# References

[1] GOOGLE CLOUD. **Professional ML Engineer Certification**. Available at: <https://cloud.google.com/learn/certification/machine-learning-engineer>. Accessed on: 2026-09-25.

[2] GOOGLE CLOUD. **Professional Machine Learning Engineer Certification Exam Guide, as of June 1, 2026**. Available at: <https://services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_english_new.pdf>. Accessed on: 2026-09-25.

[3] GOOGLE CLOUD. **Professional Machine Learning Engineer Sample Questions**. Available at: <https://docs.google.com/forms/d/e/1FAIpQLSeYmkCANE81qSBqLW0g2X7RoskBX9yGYQu-m1TtsjMvHabGqg/viewform>. Accessed on: 2026-09-25.

[4] GOOGLE DEVELOPER FORUMS. **Google Cloud's Professional ML Engineer (PMLE) Exam: How I passed in 30 days (and you can too!)**. Posted 2025-01-23; reply cited from 2025-11-15. Available at: <https://discuss.google.dev/t/google-clouds-professional-ml-engineer-pmle-exam-how-i-passed-in-30-days-and-you-can-too/179510>. Accessed on: 2026-09-26.

[5] GOOGLE CLOUD. **Identifying and Preventing Misconduct**. Available at: <https://support.google.com/cloud-certification/answer/9908051?hl=en>. Accessed on: 2026-09-25.
