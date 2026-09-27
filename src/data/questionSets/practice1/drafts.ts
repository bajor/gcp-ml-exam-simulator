import type { DraftQuestionSet } from "../../../domain/questions";
import { practiceExamOneV1Sections, practiceExamOneV2Sections, practiceExamOneV3Sections } from "./sections";

export const practiceExamOneDraftQuestionSets: readonly DraftQuestionSet[] = [
  {
    id: "professional-ml-engineer-2026-06-practice-1",
    version: 1,
    title: "Professional Machine Learning Engineer Practice Exam 1",
    guideVersion: "2026-06-01",
    durationMinutes: 120,
    sections: practiceExamOneV1Sections,
  },
  {
    id: "professional-ml-engineer-2026-06-practice-1-v2",
    version: 2,
    title: "Professional Machine Learning Engineer Practice Exam 1",
    guideVersion: "2026-06-01",
    durationMinutes: 120,
    sections: practiceExamOneV2Sections,
  },
  {
    id: "professional-ml-engineer-2026-06-practice-1-v3",
    version: 3,
    title: "Professional Machine Learning Engineer Practice Exam 1",
    guideVersion: "2026-06-01",
    durationMinutes: 120,
    sections: practiceExamOneV3Sections,
  },
];
