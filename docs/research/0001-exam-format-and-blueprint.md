---
type: Research
title: Professional Machine Learning Engineer exam format and blueprint
description: Official format facts, section weights, sample-question measurements, and the resulting 60-question practice blueprint.
status: complete
tags: [exam, sources, blueprint]
timestamp: 2026-09-25T00:00:00Z
---

# Professional Machine Learning Engineer Exam Format and Blueprint

## Method

On 2026-09-25 the research fetched Google's certification page, the exam guide PDF (converted to text with `pdftotext`), the official sample-question form, the certification misconduct policy, and the Agent Platform name-change page. The sample form was analyzed for structure and length only; its questions are not stored in this repository. The three accepted question sets of the earlier Professional Data Engineer (PDE) simulator were measured with the same method for comparison. A word is a whitespace-separated token. "Reading load" means the words in a prompt plus all of its choices.

## Findings

Documented owner fact: The certification page states a two-hour exam with "50-60 multiple choice and multiple select questions", a registration fee of USD 200, English and Japanese languages, and delivery by Pearson VUE, either online-proctored or at a test center. It recommends 3 or more years of industry experience, including 1 or more years with Google Cloud. [COI: Google] [unverified - single source] [1]

Documented owner fact: The certification page states that the exam was updated to reflect the transition from Vertex AI to Gemini Enterprise Agent Platform and updates to Google Cloud's data and analytics stack, and that it prioritizes Google Cloud native solutions. Google's name-change page maps each former Vertex AI product name to its new name. [COI: Google] [1] [5]

Documented owner fact: The exam guide is labeled "as of June 1, 2026" and carries no version number. It defines six sections with approximate weights: Architecting low-code AI solutions (13%), Collaborating within and across teams to manage data and models (16%), Scaling prototypes into ML models (21%), Serving and scaling models (20%), Automating and orchestrating ML pipelines (18%), and Monitoring AI solutions (13%). The weights sum to 101% because of rounding. The guide states that the exam does not directly assess coding skills, and that candidates with minimum Python and SQL proficiency should be able to interpret questions with code snippets. [COI: Google] [unverified - single source] [2]

Documented owner fact: The official sample form contains eight assessment items. All eight are single-choice items with four options; none is multiple-select. The form states that the samples do not represent the range of topics or the level of difficulty of the exam. [COI: Google] [3]

Documented owner policy: Google lists "disseminating exam content by any means", including "reconstruction through memorization", and using "brain-dump material and/or unauthorized publication of exam questions" as misconduct. [COI: Google] [4]

Candidate report: After taking the real PDE exam, the candidate reported on 2026-09-25 that the real questions were much harder and much longer than the PDE simulator's questions, and that they ran out of time on the real exam but not on the simulator. They asked for question and answer text in the same, smaller font size and an older Pearson-style presentation. [candidate-reported] [unverified - single source]

Measurement: Reading length of the official PMLE samples compared with the accepted PDE simulator sets.

| Source | Items | Prompt words (min / median / max) | Choice words (min / median / max) | Reading load per item (min / median / max) |
|---|---|---|---|---|
| PMLE official sample form | 8 | 52 / 84.5 / 101 | 14 / 32 / 52 | 166 / 207 / 282 |
| PDE simulator Practice Exam 1 version 6 | 50 | 26 / 50.5 / 85 | 2 / 15 / 40 | 60 / 111.5 / 162 |
| PDE simulator Practice Exam 2 version 4 | 50 | 33 / 44.5 / 64 | 1 / 14 / 34 | 50 / 103 / 146 |
| PDE simulator Practice Exam 3 version 4 | 50 | 25 / 44.5 / 63 | 1 / 11 / 29 | 37 / 95.5 / 117 |

None of the 150 PDE simulator questions reaches 166 words, the reading load of the shortest official PMLE sample; the longest PDE question has 162 words. The PDE sets contained 2, 0, and 4 multiple-select questions respectively.

## Contradictions

The certification page lists multiple-select questions, but all eight official samples are single-choice. The simulator therefore keeps multiple-select support but treats it as rare.

## Analysis

The simulator uses 60 questions, the maximum of the published range, because the candidate's time ran out on the real exam and realism has priority over comfort. Sixty questions in 120 minutes leave 2.0 minutes per question. At the official sample median of 207 words, a full attempt contains about 12,400 words.

The section allocation applies the largest-remainder method to the guide weights. Each section first receives the whole-number part of its exact share, and the remaining three questions go to the sections with the largest fractional parts. Normalizing the weights to 100% before allocating gives the same result.

| Section | Identifier | Weight | Exact share of 60 | Allocated questions |
|---|---|---|---|---|
| Architecting low-code AI solutions | `architect` | 13% | 7.8 | 8 |
| Collaborating within and across teams to manage data and models | `collaborate` | 16% | 9.6 | 9 |
| Scaling prototypes into ML models | `scale` | 21% | 12.6 | 12 |
| Serving and scaling models | `serve` | 20% | 12.0 | 12 |
| Automating and orchestrating ML pipelines | `automate` | 18% | 10.8 | 11 |
| Monitoring AI solutions | `monitor` | 13% | 7.8 | 8 |

The reading-length floors are derived from the measurements:

- The prompt floor of 60 words is above every PDE median prompt (44.5 to 50.5 words). Two official stems are shorter (52 and 55 words); that is accepted because the candidate found the real exam harder than the samples, and Google states that the samples do not represent the exam's difficulty.
- The choice floor of 12 words is below the shortest official option (14 words) and eliminates the one- and two-word options found in the PDE sets.
- The combined floor of 166 words equals the shortest official sample item, so no practice question can be shorter than any official sample. It is above the longest PDE simulator question (162 words).

The floors are minimums, not targets. Typical question length is an authoring concern and belongs to the question-authoring guidance.

## Recommendations

These recommendations rely on owner-controlled facts that were authoritative on 2026-09-25; re-check the certification page and guide before authoring each new set.

- Use 60 questions and a 120-minute timer, while stating that Google publishes a range of 50 to 60 questions.
- Allocate 8, 9, 12, 12, 11, and 8 questions to the six guide sections.
- Enforce the 60, 12, and 166-word floors in structural validation.
- Keep multiple-select questions rare, because the official samples contain none.
- Present question and answer text at the same small size in a plain, dense layout.
- Use the official samples only to understand style; never copy or paraphrase them.

Accepted recommendations are specified by [PRD 0001](/prd/0001-ml-engineer-exam-simulator.md), [ADR 0001](/adr/0001-port-data-engineer-simulator.md), [BDR 0002](/bdr/0002-question-validation-and-publication.md), and [BDR 0003](/bdr/0003-exam-presentation.md), and tracked by [issue 0001](/issues/0001-port-simulator-for-pmle.md).

# References

[1] GOOGLE CLOUD. **Professional ML Engineer Certification**. Available at: <https://cloud.google.com/learn/certification/machine-learning-engineer>. Accessed on: 2026-09-25.

[2] GOOGLE CLOUD. **Professional Machine Learning Engineer Certification Exam Guide, as of June 1, 2026**. Available at: <https://services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_english_new.pdf>. Accessed on: 2026-09-25.

[3] GOOGLE CLOUD. **Professional Machine Learning Engineer Sample Questions**. Available at: <https://docs.google.com/forms/d/e/1FAIpQLSeYmkCANE81qSBqLW0g2X7RoskBX9yGYQu-m1TtsjMvHabGqg/viewform>. Accessed on: 2026-09-25.

[4] GOOGLE CLOUD. **Identifying and Preventing Misconduct**. Available at: <https://support.google.com/cloud-certification/answer/9908051?hl=en>. Accessed on: 2026-09-25.

[5] GOOGLE CLOUD. **Gemini Enterprise Agent Platform name changes**. Available at: <https://docs.cloud.google.com/gemini-enterprise-agent-platform/vertex-ai-name-changes>. Accessed on: 2026-09-25.
