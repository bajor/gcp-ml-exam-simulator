---
name: pmle-question-authoring
description: Use when authoring, adding, revising, or sourcing Professional Machine Learning Engineer practice questions, question sections, answer choices, distractors, or question-set content in this repository. Do not use for independent acceptance review.
---

# Professional Machine Learning Engineer Question Authoring

Create original practice questions for the Google Cloud Professional Machine Learning Engineer exam guide dated June 1, 2026. Never use exam dumps, remembered live questions, reconstructed exam content, unauthorized question collections, or Google's official sample questions as source material.

## Required Inputs

Before editing content, identify:

1. The practice exam number `<n>` and one target section with its required count: `architect` 8, `collaborate` 9, `scale` 12, `serve` 12, `automate` 11, or `monitor` 8.
2. A stable author identifier for this agent or session, such as `<model>-p<n>-<section>-<YYYYMMDD>`. It must differ from the later reviewer identifier.
3. The current date in `YYYY-MM-DD` format. Use it as `verifiedOn` only for sources fetched successfully in this session.

## Read First

Read these files completely before planning:

1. `docs/authoring/question-style-guide.md`: stem anatomy, length targets, constraint vocabulary, option rules, distractor mechanisms, difficulty levers, and the calibration example.
2. `docs/authoring/coverage-matrix.md`: objective allocation, consideration identifiers, decisions to test, common traps, availability notices, and documentation starting points.
3. `docs/context/product-names.md`: the only product names allowed in questions.
4. `docs/prd/0002-practice-exam-question-sets.md`: the set-level targets.
5. `docs/research/0003-candidate-reported-question-types.md`: the question types T1 to T12 used in the plan table.

The official sources are the [certification page](https://cloud.google.com/learn/certification/machine-learning-engineer) and the [exam guide PDF](https://services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_english_new.pdf).

## Plan the Section

1. Re-fetch the certification page and the exam guide PDF. Stop and report if the guide date, sections, or weights changed.
2. Open or create the practice exam's issue record, `docs/issues/<NNNN>-author-practice-exam-<n>.md`, and index it in `docs/issues/index.md`.
3. Before writing any question, add a plan table for the section to that issue record:

   | Question ID | Consideration | Type | Generative AI | Decisive feature | Correct letter | Distractor mechanisms | Levers |
   |---|---|---|---|---|---|---|---|

4. Tally the plan tables of this set's other sections and of every earlier practice exam before choosing topics.
   - Within the set, follow the matrix allocation, use no consideration as the primary topic more than three times, and keep the set on track for PRD 0002 requirements 5 and 6: 13 to 17 correct answers per letter, near-miss pairs (lever L2) in at least 30 questions, at most 3 choose-two questions, generative AI decisive in 12 to 18 questions, and at least 6 T4, 5 T6, 4 T10, and 4 T3 questions.
   - Across sets, prefer considerations that earlier sets used fewer than two times, so that every consideration reaches two uses by Practice Exam 3. Objective 2.2 has only 6 slots across three sets for 3 considerations, so each of its considerations must be used exactly twice.
5. Check every other practice exam's plan tables and modules for scenario reuse, for example with `grep -rn "<decisive feature>" src/data/questionSets docs/issues`. A scenario is reused when the organization type, the problem, and the decisive feature all match.

## Source Rules

1. Use only current Google-owned documentation from hosts accepted by `isGoogleOwnedSourceUrl` in `src/domain/questions.ts`. Cite the final URL after redirects.
2. Read each cited page on the date you record as `verifiedOn`, and confirm that the tested feature is generally available and not deprecated.
3. Support the correct answer and every distractor explanation with cited evidence. Every choice cites at least one evidence item.
4. Reject content that depends on preview-only, deprecated, undocumented, or ambiguous behavior.
5. Use the official samples only to understand format. Never copy, paraphrase, or re-skin them.

## Typed Template

Question identifiers use `pmle-p<n>-<section>-NN`, numbered from `01`. Evidence identifiers are short and question-local. The first draft of Practice Exam `<n>` uses the set identifier `professional-ml-engineer-2026-06-practice-<n>` and version 1. Corrections use `professional-ml-engineer-2026-06-practice-<n>-v<version>` with the matching version number.

Create `src/data/questionSets/practice<n>/sections/<section>.ts`:

```ts
import type { QuestionSection } from "../../../../domain/questions";

export const practiceExamOneArchitectSection = {
  section: "architect",
  author: "author-session-id",
  questions: [
    {
      id: "pmle-p1-architect-01",
      kind: "single",
      section: "architect",
      objective: "1.1 Developing ML models using BigQuery ML or AutoML on Gemini Enterprise Agent Platform: 1.1.b feature engineering in BigQuery ML",
      prompt: "An original scenario of 70 to 130 words that ends with the ask. What should you do?",
      verifiedOn: "YYYY-MM-DD",
      evidence: [
        {
          id: "transform-clause",
          title: "Perform feature engineering with the TRANSFORM clause",
          url: "https://docs.cloud.google.com/bigquery/docs/bigqueryml-transform",
          claim: "The specific documented fact used to evaluate the choices.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "A complete action of 15 to 45 words.",
          feedback: "Why this action satisfies or fails each named constraint.",
          evidenceIds: ["transform-clause"],
        },
        // Add b, c, and d. A choose-two question uses kind "multiple", requiredSelections 2,
        // five choices a to e, and correctChoiceIds such as ["b", "d"].
      ],
      correctChoiceId: "a",
    },
  ],
} satisfies QuestionSection<"architect">;
```

Register each finished section in `src/data/questionSets/practice<n>/sections/index.ts`:

```ts
import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamOneArchitectSection } from "./architect";

export const practiceExamOneV1Sections: readonly AnyQuestionSection[] = [
  practiceExamOneArchitectSection,
];
```

Declare the draft in `src/data/questionSets/practice<n>/drafts.ts`, and add it to `draftQuestionSets` in `src/data/questionSets/registry.ts`:

```ts
import type { DraftQuestionSet } from "../../../domain/questions";
import { practiceExamOneV1Sections } from "./sections";

export const practiceExamOneDraftQuestionSets: readonly DraftQuestionSet[] = [
  {
    id: "professional-ml-engineer-2026-06-practice-1",
    version: 1,
    title: "Professional Machine Learning Engineer Practice Exam 1",
    guideVersion: "2026-06-01",
    durationMinutes: 120,
    sections: practiceExamOneV1Sections,
  },
];
```

Only after all six sections exist, create `src/data/questionSets/practice<n>/candidates.ts` and add its candidates to `candidateQuestionSets` in the registry:

```ts
import { assembleCandidateQuestionSets } from "../../../domain/questions";
import { practiceExamOneDraftQuestionSets } from "./drafts";

export const practiceExamOneCandidateQuestionSets = assembleCandidateQuestionSets(
  practiceExamOneDraftQuestionSets,
  ["professional-ml-engineer-2026-06-practice-1"],
);
```

Never change the runtime catalog in `src/data/questionSets/index.ts` before acceptance, and never write a review record.

## Verification

Run after registering each section:

```sh
make test
make verify-sources
npm run question-set-report -- <question-set-id>
```

The first two commands must pass. The report measures the draft; compare it with the targets in the style guide and PRD 0002, and revise before handoff. It lists per-question stem, option, and reading-load word counts, the set median reading load, correct-letter counts, how often the correct option is the longest, objective counts, and repeated considerations.

## Reviewer Handoff

Give the reviewer the section, author identifier, question identifiers, a link to the plan table, the unique source URLs, the report output, and the verification results. After all six sections are assembled into a candidate, a separate session uses the `pmle-question-review` skill to review all 60 questions. An author never reviews their own questions.

If the review rejects the candidate, keep the rejected draft and candidate registered and unchanged, because the rejection record is bound to them. Make corrections under a new draft and candidate identifier and version, reusing unchanged section modules. Put every changed section in a new module file, such as `sections/architectV2.ts`, and list it in a new sections array, such as `practiceExamOneV2Sections`. Never edit a module that a rejected candidate uses: the rejection record is bound to that content, and `make verify-sources` fails if it changes. Revise or replace every rejected question before handoff.

## Publication

After the acceptance record for the exact candidate is merged, replace the exam's coming-soon entry in `src/data/questionSets/index.ts` with an available entry. Look up the accepted candidate by identifier and throw an error if it is missing. `make verify-sources` then confirms that the published set has an exact acceptance and no matching rejection.

## Acceptance Criteria

- The section has exactly its required count and passes the reading-length floors.
- Every question is original, maps to one consideration identifier, and uses current product names.
- Every choice has feedback supported by evidence fetched on `verifiedOn`.
- The plan table and the report show that the section follows the matrix allocation and the style-guide targets, or the handoff explains each exception.
- `make test` and `make verify-sources` pass.
