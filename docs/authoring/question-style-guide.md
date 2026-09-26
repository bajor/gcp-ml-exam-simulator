---
type: Guide
title: Question style guide
description: How to write long, hard, original PMLE practice questions, with length targets, constraint wording, distractor mechanisms, difficulty levers, and an annotated calibration example.
status: Accepted
tags: [questions, authoring]
timestamp: 2026-09-26T00:00:00Z
---

# Question Style Guide

## Scope and Precedence

This guide applies to every question under `src/data/questionSets/practice<number>/`. It turns [research 0002](/research/0002-official-sample-question-patterns.md) and [research 0003](/research/0003-candidate-reported-question-types.md) into writing rules.

Two kinds of rules apply:

- **Floors** are enforced by structural validation in `src/domain/questions.ts`: a prompt of at least 60 words, at least 12 words per choice, and at least 166 words per question. A question below a floor cannot be registered.
- **Targets** are defined in this guide and checked by the independent reviewer. A set that misses a target is rejected unless the review document explains why the exception is acceptable.

Terms: the **stem** is the question text before the options (the `prompt` field). A **constraint** is a stated requirement that rules options in or out. A **distractor** is an incorrect option. The **reading load** is the number of words in the stem plus all options.

## Stem Anatomy

Write every stem in this order:

1. **Organization and goal.** One or two sentences about who needs what business outcome.
2. **Current state.** Two to four sentences about where the data or models live, their format and volume, what already runs, and relevant team skills.
3. **Problem or change.** One or two sentences about a new requirement, an incident, a failure, or growth.
4. **Constraints.** Two or three explicit constraints from the vocabulary below. At least one constraint must eliminate the option that looks most obvious.
5. **Ask.** "What should you do?" by default. Use "What should you do first?" for sequencing, "How should you reconfigure the architecture?" for redesigns, and add "Choose two." to multiple-select stems.

Address the candidate as "you", the ML engineer responsible for the outcome. Use present tense for the current state and past tense for incidents.

## Length Targets

| Element | Floor, enforced in code | Target, checked in review |
|---|---|---|
| Stem | 60 words | 70 to 130 words |
| Each option | 12 words | 15 to 45 words |
| Reading load per question | 166 words | 180 to 300 words |
| Median reading load of a set | None | At least 200 words |
| Longest option compared with shortest | None | At most twice as long |

The official samples have a median reading load of 207 words. A set at the targets gives 60 questions of about 12,000 words for 120 minutes.

## Constraint Vocabulary

Use these phrases, or close variants, so the decisive property is unambiguous.

| Constraint wording | Rewards | Typically eliminates |
|---|---|---|
| minimize operational overhead, maintenance, or code maintenance | Managed and serverless services, built-in features, prebuilt containers | Self-managed clusters, custom code where a built-in feature exists |
| minimize cost | Right-sized resources, batch instead of online, in-place ML such as BigQuery ML | Always-on endpoints for periodic work, unnecessary data copies |
| low latency, near real time | Online endpoints, online feature serving, streaming | Batch jobs, scheduled exports |
| as quickly as possible, minimize implementation or training time | AutoML, BigQuery ML, pre-trained APIs, foundation models, transfer learning | Building and training from scratch |
| securely, sensitive data, PII, regulated | Sensitive Data Protection, VPC Service Controls, private endpoints, least-privilege service accounts | Copying data to less-controlled locations, public endpoints, shared user credentials |
| zero downtime, no impact on users | Traffic splitting on one endpoint, canary rollout | Replacing a deployment in place, switching all traffic at once |
| reproducible, auditable, track lineage | Agent Platform Pipelines, ML Metadata, Experiments, Model Registry | Notebooks and manual steps |
| no access to production data | Metadata, metrics, logs, and lineage | Any option that reads raw production data |
| the team knows only SQL | BigQuery ML | Python-based custom training |
| explain individual predictions, interpretability | Interpretable model families, feature attributions | Unexplained black-box models |
| millions of predictions, spiky traffic | Autoscaling endpoints, batch inference, Dataflow | Fixed-size self-managed serving |

## Option Rules

1. Write each option as a complete imperative action, not a product name. Multi-step options are allowed and may be numbered.
2. Every option must be technically possible on Google Cloud. A distractor is wrong because it fails a stated constraint, never because the feature does not exist.
3. Keep options parallel in grammar, detail, and length. The correct option may be the longest option in at most 18 of 60 questions.
4. In at least 30 of 60 questions, give two options the same skeleton that differ in one decisive component. This is a near-miss pair.
5. Do not use "all of the above", "none of the above", negative stems such as "Which is NOT", joke options, or absolute words such as "always" and "never" as clues.
6. Balance the answer key. Among single-choice questions, each letter from `a` to `d` is correct in 13 to 17 questions of a set.
7. Use at most 3 choose-two questions per set. Both correct options must be independently required by the stem, and each of the three distractors must fail a stated constraint.

## Distractor Mechanisms

Build each distractor from one mechanism and make it fail exactly one named requirement. The choice feedback must name that requirement.

| Code | Mechanism | Fails |
|---|---|---|
| D1 | Self-managed: runs on GKE, Compute Engine, or custom code what a managed capability provides | Operational overhead |
| D2 | Over-engineering: adds unrequested components, data copies, or automation | Cost, effort, or scope |
| D3 | Under-powered tool: a simpler tool that cannot meet a stated requirement | Capability, scale, or reproducibility |
| D4 | Wrong mode: batch where online is needed, or the reverse | Latency or cost |
| D5 | Restriction violation: moves sensitive data, requests forbidden access, or exposes an endpoint publicly | Security or compliance |
| D6 | Symptom or wrong signal: acts on a symptom or measures something that does not answer the question | Diagnosis |
| D7 | Right product, wrong feature: the correct service with a feature or setting that does not do the job | Specific documented behavior |
| D8 | Wrong sequence: a later step offered as the first step, or steps in an unsafe order | The "first" or ordering requirement |

## Difficulty Levers

Each question uses at least two levers.

| Code | Lever | Example use |
|---|---|---|
| L1 | Constraint tension | Low latency and minimal cost pull in different directions; one option balances both. |
| L2 | Near-miss pair | Two options share every step except the orchestrator. |
| L3 | Non-decisive realistic detail | Dataset size, team size, or schedule that does not change the answer and does not create ambiguity. |
| L4 | Feature-level knowledge | The answer depends on a documented feature, such as traffic splitting on one endpoint. |
| L5 | Sophisticated overkill | A technically impressive option, such as a multi-armed bandit router, that exceeds the need. |
| L6 | Scope word | "first", "most cost-effective", or "least operational overhead" decides between two valid actions. |
| L7 | One wrong step | A multi-step option in which only one step breaks a constraint. |

Avoid artificial difficulty. Do not use trick wording, undocumented defaults, preview features, quota numbers, or facts that change often.

## Content Rules

- Use the names in [current product names](/context/product-names.md). Never use former names such as Vertex AI or Cloud Composer in a stem, option, or feedback.
- Use only generally available (GA) features. Reject content whose documentation page shows a Preview or deprecation notice.
- Make generative AI the decisive topic in 12 to 18 questions of each set.
- In each set, include at least 6 troubleshooting questions, at least 5 evaluation and metrics questions, at least 4 risk, security, and responsible AI questions, and at least 4 migration questions, as defined in research 0003.
- Do not include multi-line code. Inline names such as `ML.PREDICT` or `TRANSFORM` in running text are allowed.
- Never copy, paraphrase, or re-skin an official sample question, and never reuse a scenario from another practice set. A scenario is reused when the organization type, the problem, and the decisive feature all match.

## Feedback Rules

Each choice has two to four sentences of feedback. The correct choice's feedback names every constraint it satisfies. Each distractor's feedback names the constraint it fails and the documented reason. Every sentence must be supported by the cited evidence, and each choice cites at least one evidence item.

## Calibration Example

This original question shows the targets in practice. It is not part of any practice set.

**Stem (96 words):** A retail company retrains a demand forecasting model every week on three years of sales data stored in BigQuery. The data science team prototypes in Colab Enterprise notebooks, and the platform team requires every production training run to be reproducible and to record lineage between datasets, models, and endpoints. Training takes about four hours on one GPU. Last month, an analyst retrained the model on an incomplete daily partition, and the degraded model was deployed before anyone noticed. You need to prevent incomplete data from reaching production while keeping operational overhead low. What should you do?

| Choice | Text | Words | Role |
|---|---|---|---|
| a | Build an Agent Platform Pipelines pipeline that checks the row count and schema statistics of the training data, stops the run when a check fails, and records artifacts in ML Metadata. | 31 | Correct |
| b | Schedule the existing notebook in Colab Enterprise, add a cell that prints the row count of the latest partition, and ask the analyst to confirm the count before approving each deployment. | 31 | D3: not reproducible and records no lineage; a manual check adds overhead |
| c | Create a Cloud Run function that retrains the model every week, compares the file size of the new model with the previous model, and deploys the new model only when the sizes are similar. | 34 | D6: file size does not show whether the training data was complete |
| d | Run the training workflow on a self-managed Kubeflow Pipelines installation on Google Kubernetes Engine, add a custom container that validates the data, and store run metadata in the cluster. | 29 | D1: validates data, but the team must operate the cluster |

The reading load is 221 words. The stem states three constraints: prevent incomplete data from reaching production, keep training reproducible with recorded lineage, and keep operational overhead low. Choices a and d form a near-miss pair (L2), because both run Kubeflow-style pipelines with a validation step. The training time is a non-decisive detail (L3), and the correct answer depends on the documented behavior of managed pipelines (L4). The correct option is not the longest.

Evidence for the feedback:

- [Introduction to Agent Platform Pipelines](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/pipelines/introduction): Agent Platform Pipelines runs Kubeflow Pipelines or TFX pipelines "in a serverless manner". A pipeline is a directed acyclic graph of tasks connected by input-output dependencies, and all parameters and artifact metadata are stored in Agent Platform ML Metadata.
- [Introduction to Agent Platform ML Metadata](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/ml-metadata/introduction): ML Metadata tracks the lineage of artifacts such as datasets and models.
- [Schedule a notebook run in Colab Enterprise](https://docs.cloud.google.com/colab/docs/schedule-notebook-run): scheduled notebook runs exist, so choice b is technically possible.

## Author Checklist

Before handing a section to review, confirm for every question:

- [ ] The stem follows the anatomy and states two or three constraints.
- [ ] The reading load is between 180 and 300 words, and each option has 15 to 45 words.
- [ ] Every distractor uses one mechanism and fails one named constraint.
- [ ] At least two difficulty levers are present.
- [ ] Product names match the product-name reference.
- [ ] Every feedback sentence is supported by cited Google-owned evidence fetched on `verifiedOn`.
- [ ] The scenario does not resemble an official sample or another set's question.
