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
