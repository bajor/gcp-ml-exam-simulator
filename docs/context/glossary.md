---
type: Context
title: Project Glossary
description: Canonical definitions for the practice exam domain and project modules.
status: Accepted
timestamp: 2026-09-25T00:00:00Z
---

# Project Glossary

## ADR

Architecture Decision Record. An append-only record of a structural or implementation decision and its rejected alternatives.

## Agent Platform

Short name for Gemini Enterprise Agent Platform, the Google Cloud AI and machine learning platform formerly named Vertex AI. The exam guide dated June 1, 2026 uses the new names.

## Attempt

The local state of one candidate working through one question set, including answers, review flags, position, and deadline. An attempt is compatible with the application only when its schema version, question-set identifier and version, answer identifiers, timestamps, and status pass runtime validation.

## BDR

Behavior Decision Record. An append-only specification of observable behavior and how that behavior is tested.

## Candidate question set

A complete 60-question set listed for structural, source, and independent semantic checks before it can enter the runtime catalog.

## CI

Continuous Integration. The GitHub Actions workflows that run the repository quality gates on pull requests and on pushes to `main`.

## Choice feedback

The explanation attached to one answer choice. It states why that choice does or does not satisfy the scenario and references the source-evidence identifiers that support the explanation.

## COI

Conflict of Interest. A source relationship that could influence a claim; project research flags vendor-owned statements with this marker.

## Draft question set

The partial manifest used while independently mergeable question sections are being authored. A draft may omit sections, but every registered section must already contain its final required question count and pass structural and live-source checks.

## Exam catalog

The compiled list of practice-exam entries shown to the candidate. An available entry contains one complete question set; a coming-soon entry contains metadata only and cannot create an attempt.

## Exam guide

Google's official Professional Machine Learning Engineer certification exam guide. The current guide is labeled "as of June 1, 2026" and is identified in code as guide version `2026-06-01`.

## Exam-guide section

One of the six weighted parts of the exam guide. The code identifies them as `architect` (Architecting low-code AI solutions), `collaborate` (Collaborating within and across teams to manage data and models), `scale` (Scaling prototypes into ML models), `serve` (Serving and scaling models), `automate` (Automating and orchestrating ML pipelines), and `monitor` (Monitoring AI solutions).

## ML

Machine Learning.

## Multiple-select

A question that states the required number of choices and is correct only when the selected identifier set exactly equals the correct identifier set. This project supports choose-two questions with five choices.

## PDE

Professional Data Engineer. The Google Cloud certification covered by the earlier simulator from which this application was ported.

## PDF

Portable Document Format. The file format used by the official exam guide.

## Pearson VUE

The testing provider that delivers the real exam, online-proctored or at a test center.

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

## Reading load

The number of words in a question's prompt plus all of its choices. A word is a whitespace-separated token.

## Reading-length floor

A minimum word count enforced by structural validation: 60 words for a prompt, 12 words for each choice, and 166 words of reading load per question.

## Rejection record

The machine-readable JSON block in an indexed rejected review report. It binds rejected question identifiers and reasons to all 60 reviewed identifiers, the exact candidate version and SHA-256 content digest, reviewer, authors, review date, and source-check result.

## Review record

The independently authored document under `docs/reviews/` that records a successful semantic audit. Its JSON record identifies the exact question-set version and SHA-256 content digest, reviewer, authors, review date, successful source-check command, unique source count, and every accepted question identifier.

## Set-specific question registry

The section, draft, and candidate modules owned by one practice exam under `src/data/questionSets/practice<number>/`. The aggregate registry combines these modules without changing another exam's files.

## SHA-256

A cryptographic hash function. Review records store the SHA-256 digest of a candidate's canonical JSON content so that any later content change invalidates the record.

## Source evidence

A Google-owned documentation URL, document title, and supported claim used to justify choice feedback. Each question's `verifiedOn` date is the date on which all of its evidence was re-fetched and checked.

## UI

User Interface. The visible and interactive controls through which a candidate takes and reviews an attempt.

## URL

Uniform Resource Locator. The web address used for the deployed application or cited documentation.
