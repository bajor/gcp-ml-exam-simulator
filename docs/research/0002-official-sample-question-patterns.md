---
type: Research
title: Official sample question patterns
description: Structural patterns in Google's eight official PMLE sample questions, described without reproducing them, and their implications for original questions.
status: complete
tags: [exam, questions, style]
timestamp: 2026-09-26T00:00:00Z
---

# Official Sample Question Patterns

## Method

The research analyzed the eight assessment items of Google's official Professional Machine Learning Engineer sample form [1], which the candidate supplied on 2026-09-25 and which match the live form. The analysis counted stem structure, constraint phrases, option construction, product names, and topic coverage. It does not store, quote, or paraphrase any sample question, and it does not state any answer key; Google's form does not publish the keys, and inferring them would add unsupported claims. Word counts come from [research 0001](/research/0001-exam-format-and-blueprint.md). Topic mappings to the exam guide [2] are this project's classification.

In this record, a "stem" is the question text before the options, a "constraint" is a stated requirement or restriction that rules options in or out, and a "distractor" is an incorrect option.

## Findings

Documented owner fact: All eight items are single-choice with four options, and none says "Choose two". Stems have 52 to 101 words (median 84.5), options have 14 to 52 words (median 32), and whole items have 166 to 282 words (median 207). [COI: Google] [1]

Observation: Seven of eight stems end with "What should you do?". The remaining stem asks how to reconfigure an existing architecture. All stems address the candidate as "you", the engineer responsible for the outcome.

Observation: Every stem describes a concrete current state before the ask. All eight name where data or models live or what already runs, such as Cloud Storage, BigQuery, Pub/Sub, a notebook prototype, a production pipeline, a deployed endpoint, or a Cloud Run service. Two of eight stems contain an enumerated list of existing steps or processes.

Observation: Every stem states two or three explicit constraints (median two). The constraint categories occur as follows:

| Constraint category | Items | Typical wording pattern |
|---|---|---|
| Operational effort or maintenance | 5 of 8 | minimize maintenance, code maintenance, implementation effort, or update effort |
| Latency or speed | 4 of 8 | low latency, minimize prediction latency, as quickly as possible, minimize time to train |
| Cost | 2 of 8 | minimize cost |
| Security or access restriction | 2 of 8 | deliver results securely; no access to production data |
| Coverage or reliability of the result | 2 of 8 | detect every case reliably; a comprehensive solution |
| Scalability | 1 of 8 | scalable |
| Availability | 1 of 8 | zero downtime, optimal user experience |

Observation: Options are complete actions in the imperative mood, not product names. In seven of eight items, at least two options share the same opening and differ only in a later step, such as the orchestrator, the ML service, the alerting channel, or an added remediation step. One item uses explicitly numbered two-step options. The candidate therefore has to read every option to its end.

Observation: The options use these recurring distractor mechanisms. The list describes what the options do and does not claim which option is correct.

- Self-managed infrastructure where a managed Google Cloud capability exists, for example Google Kubernetes Engine with open-source traffic routers or a separate cache for features. Seen in at least three items.
- Extra, unrequested work, such as copying data to another store, starting retraining when only monitoring was requested, or emailing an encrypted file. Seen in at least two items.
- A tool that cannot meet a stated requirement, such as a pre-trained API for a custom object class, or comparing model file sizes as a quality check. Seen in at least two items.
- A step that breaks an explicit restriction, such as requesting production access that the stem forbids. Seen in one item.
- An ad hoc mechanism where a purpose-built feature exists, such as scheduling a notebook for a production pipeline, or writing a custom transform that calls an endpoint instead of using a built-in inference transform. Seen in at least three items.

Observation: The options name Google-managed products and open-source tools side by side: Agent Platform Workbench, Pipelines, Feature Store, Inference and endpoints, ML Metadata, TensorBoard, Model Monitoring, and AutoML; BigQuery and BigQuery ML; Cloud Storage, Pub/Sub, Dataflow, Cloud Run, Cloud Run functions, Google Kubernetes Engine, Memorystore, Cloud Workflows, Managed Service for Apache Airflow, Data Studio, and the Cloud Vision API; and the open-source TensorFlow Extended, TensorFlow Transform, TensorFlow Data Validation, Kubeflow Pipelines SDK, Istio, and Seldon Core.

Observation: The samples use the post-April 2026 product names, such as Agent Platform, Managed Service for Apache Airflow, Cloud Run functions, and Data Studio. Two options lack a space after "Agent Platform". That suggests the names were replaced mechanically in earlier Vertex AI wording, so product behavior described in Vertex AI-era material still applies under the new names.

Observation, project classification: The items cover pipeline orchestration and automation (three items), serving and rollout (two items), online feature serving (one item), choosing between low-code and custom training (one item), diagnosing an unexpected pipeline result from metadata and training metrics (one item), and skew monitoring (one item). No item tests generative AI, BigQuery ML SQL, accelerator selection, notebook security, responsible AI, or metric selection. In the exam guide, 11 of the 52 considerations (the bullet points under each objective) mention generative AI, Gemini, large language models, foundation models, or Model Garden, across sections 1, 2, 3, 4, and 6. [2]

Observation: Stems contain realistic details that are not all decisive, such as dataset sizes, file sizes, or schedule frequency. The candidate has to decide which details are constraints.

## Analysis

The samples show a consistent construction: a concrete current state, two or three competing constraints, and four full-sentence actions that often differ only in one component. Difficulty comes from reading every option completely and from telling which constraint removes each plausible option, not from obscure facts. The samples cover mainly MLOps and serving. The guide assigns substantial weight to generative AI, BigQuery ML, hardware, and monitoring, so original sets must follow the guide's weights rather than the samples' topic mix.

## Recommendations

- Build every stem from organization and goal, current state, problem or change, two or three explicit constraints, and the ask.
- Use "What should you do?" as the default ask; also use "What should you do first?" and "How should you reconfigure the architecture?" where the scenario needs them.
- Write options as complete imperative actions with parallel structure, and make at least half of the questions contain an option pair that shares a skeleton and differs in one decisive component.
- Build each distractor from one named mechanism and make it fail exactly one stated requirement.
- Allow open-source tools as options when the scenario makes them realistic.
- Take topics from the guide weights, including generative AI, not from the sample mix.
- Never copy, paraphrase, or re-skin a sample scenario, and never publish inferred sample answer keys.

# References

[1] GOOGLE CLOUD. **Professional Machine Learning Engineer Sample Questions**. Available at: <https://docs.google.com/forms/d/e/1FAIpQLSeYmkCANE81qSBqLW0g2X7RoskBX9yGYQu-m1TtsjMvHabGqg/viewform>. Accessed on: 2026-09-25.

[2] GOOGLE CLOUD. **Professional Machine Learning Engineer Certification Exam Guide, as of June 1, 2026**. Available at: <https://services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_english_new.pdf>. Accessed on: 2026-09-25.
