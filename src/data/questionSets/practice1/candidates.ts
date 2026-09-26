import { assembleCandidateQuestionSets } from "../../../domain/questions";
import { practiceExamOneDraftQuestionSets } from "./drafts";

export const practiceExamOneCandidateQuestionSets = assembleCandidateQuestionSets(
  practiceExamOneDraftQuestionSets,
  ["professional-ml-engineer-2026-06-practice-1", "professional-ml-engineer-2026-06-practice-1-v2"],
);
