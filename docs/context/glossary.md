---
type: Context
title: Project Glossary
description: Canonical definitions for the practice exam domain and project modules.
status: Accepted
timestamp: 2026-09-26T00:00:00Z
---

# Project Glossary

## A/B test

A rollout in which two model versions serve comparable shares of live traffic so that their results can be compared.

## ADR

Architecture Decision Record. An append-only record of a structural or implementation decision and its rejected alternatives.

## Agent Platform

Short name for Gemini Enterprise Agent Platform, the Google Cloud AI and machine learning platform formerly named Vertex AI. The exam guide dated June 1, 2026 uses the new names.

## API

Application Programming Interface. A defined interface through which software components communicate.

## ARIMA_PLUS

The BigQuery ML model type for time-series forecasting, based on the autoregressive integrated moving average (ARIMA) method.

## Attempt

The local state of one candidate working through one question set, including answers, review flags, position, and deadline. An attempt is compatible with the application only when its schema version, question-set identifier and version, answer identifiers, timestamps, and status pass runtime validation.

## BDR

Behavior Decision Record. An append-only specification of observable behavior and how that behavior is tested.

## Canary rollout

A rollout in which a new model version first receives a small share of live traffic and receives more only if it performs well.

## Candidate question set

A complete 60-question set listed for structural, source, and independent semantic checks before it can enter the runtime catalog.

## CI

Continuous Integration. The GitHub Actions workflows that run the repository quality gates on pull requests and on pushes to `main`.

## Choice feedback

The explanation attached to one answer choice. It states why that choice does or does not satisfy the scenario and references the source-evidence identifiers that support the explanation.

## CI/CD/CT

Continuous integration, continuous delivery, and continuous training. An MLOps practice in which code changes are tested and released automatically and models are retrained automatically when a policy requires it.

## COI

Conflict of Interest. A source relationship that could influence a claim; project research flags vendor-owned statements with this marker.

## Constraint

A stated requirement or restriction in a question stem, such as minimal operational overhead, low latency, or no access to production data. Constraints decide which option is correct.

## Coverage matrix

The document `docs/authoring/coverage-matrix.md`, which assigns every guide consideration an identifier such as `3.2.e` and fixes the questions per objective in each set.

## Difficulty lever

A deliberate technique that makes a question as hard as the real exam, such as constraint tension or a near-miss pair. The style guide defines levers L1 to L7.

## Distractor

An incorrect answer option. In this project every distractor must be technically possible on Google Cloud and must fail at least one stated constraint for a documented reason.

## Distractor mechanism

The way a distractor fails, such as self-managed infrastructure where a managed capability exists, unrequested extra work, or a tool that cannot meet a requirement.

## DNN

Deep Neural Network.

## Draft question set

The partial manifest used while independently mergeable question sections are being authored. A draft may omit sections, but every registered section must already contain its final required question count and pass structural and live-source checks.

## Drift

A change over time in the distribution of production input data or predictions, measured against a baseline. Concept drift is a change in the relationship between inputs and the correct output.

## Exam catalog

The compiled list of practice-exam entries shown to the candidate. An available entry contains one complete question set; a coming-soon entry contains metadata only and cannot create an attempt.

## Exam guide

Google's official Professional Machine Learning Engineer certification exam guide. The current guide is labeled "as of June 1, 2026" and is identified in code as guide version `2026-06-01`.

## Exam-guide section

One of the six weighted parts of the exam guide. The code identifies them as `architect` (Architecting low-code AI solutions), `collaborate` (Collaborating within and across teams to manage data and models), `scale` (Scaling prototypes into ML models), `serve` (Serving and scaling models), `automate` (Automating and orchestrating ML pipelines), and `monitor` (Monitoring AI solutions).

## GA

Generally Available. A product or feature without a Preview label. Practice questions test only GA features.

## Generative AI

AI that produces new content, such as text, images, or code, typically with foundation models such as Gemini. Also written gen AI.

## GPU

Graphics Processing Unit. A hardware accelerator used for training and serving ML models.

## Guide consideration

One bullet point under an exam-guide objective, such as "Hyperparameter tuning" under objective 3.2. The June 1, 2026 guide has 52 considerations across 14 objectives.

## HTTP

Hypertext Transfer Protocol. The web protocol whose status codes, such as 200 or 404, show whether a documentation page was fetched successfully.

## IAM

Identity and Access Management. The Google Cloud system of principals, roles, and permissions.

## LLM

Large Language Model.

## LLM-as-a-judge

An evaluation method in which a language model scores or compares the outputs of another model against stated criteria.

## ML

Machine Learning.

## MLOps

Machine learning operations. Practices that automate and monitor the training, deployment, and retraining of ML models.

## Multiple-select

A question that states the required number of choices and is correct only when the selected identifier set exactly equals the correct identifier set. This project supports choose-two questions with five choices.

## Near-miss pair

Two options that share the same skeleton and differ in one decisive component, so the candidate must read both to the end.

## PDE

Professional Data Engineer. The Google Cloud certification covered by the earlier simulator from which this application was ported.

## PDF

Portable Document Format. The file format used by the official exam guide.

## Pearson VUE

The testing provider that delivers the real exam, online-proctored or at a test center.

## PII

Personally Identifiable Information.

## PMLE

Professional Machine Learning Engineer. The Google Cloud certification this simulator prepares for.

## PRD

Product Requirements Document. An append-only specification of the user problem, product outcomes, requirements, and acceptance criteria.

## Question bank

All question sets present in the repository, including candidates that are not available in the runtime catalog.

## Question section

All questions assigned to one exam-guide section within a draft question set. A registered section is authored as one typed module and contains exactly 8 `architect`, 9 `collaborate`, 12 `scale`, 12 `serve`, 11 `automate`, or 8 `monitor` questions.

## Question set

An immutable, versioned collection of exactly 60 original practice questions with a declared exam-guide version. The exam catalog can offer multiple available question sets.

## Question type

The primary task a question asks the candidate to perform, such as troubleshooting or product selection. Research 0003 defines types T1 to T12.

## Reading load

The number of words in a question's prompt plus all of its choices. A word is a whitespace-separated token.

## Reading-length floor

A minimum word count enforced by structural validation: 60 words for a prompt, 12 words for each choice, and 166 words of reading load per question.

## Rejection record

The machine-readable JSON block in an indexed rejected review report. It binds rejected question identifiers and reasons to all 60 reviewed identifiers, the exact candidate version and SHA-256 content digest, reviewer, authors, review date, and source-check result.

## Review record

The independently authored document under `docs/reviews/` that records a successful semantic audit. Its JSON record identifies the exact question-set version and SHA-256 content digest, reviewer, authors, review date, successful source-check command, unique source count, and every accepted question identifier.

## SDK

Software Development Kit. A library for calling a platform from code, such as the Agent Platform SDK for Python.

## Set-specific question registry

The section, draft, and candidate modules owned by one practice exam under `src/data/questionSets/practice<number>/`. The aggregate registry combines these modules without changing another exam's files.

## SHA-256

A cryptographic hash function. Review records store the SHA-256 digest of a candidate's canonical JSON content so that any later content change invalidates the record.

## Source evidence

A Google-owned documentation URL, document title, and supported claim used to justify choice feedback. Each question's `verifiedOn` date is the date on which all of its evidence was re-fetched and checked.

## Stem

The question text before the answer options, called `prompt` in the code.

## TPU

Tensor Processing Unit. A Google-designed accelerator for ML training and inference.

## Training-serving skew

A difference between the feature data distribution used to train a model and the distribution the model receives in production.

## UI

User Interface. The visible and interactive controls through which a candidate takes and reviews an attempt.

## URL

Uniform Resource Locator. The web address used for the deployed application or cited documentation.
