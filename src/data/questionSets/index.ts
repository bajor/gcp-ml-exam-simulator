import type { ExamCatalogEntry } from "../../domain/catalog";
import type { QuestionSet } from "../../domain/questions";
import { candidateQuestionSets } from "./registry";

// Accepted in docs/reviews/professional-ml-engineer-2026-06-practice-1-v3.md.
const practiceExamOneAcceptedId = "professional-ml-engineer-2026-06-practice-1-v3";

function acceptedCandidate(id: string): QuestionSet {
  const questionSet = candidateQuestionSets.find((candidate) => candidate.id === id);
  if (!questionSet) throw new Error(`${id}: the accepted candidate is not registered.`);
  return questionSet;
}

export const examCatalog: readonly ExamCatalogEntry[] = [
  {
    availability: "available",
    questionSet: acceptedCandidate(practiceExamOneAcceptedId),
  },
  {
    availability: "coming-soon",
    id: "professional-ml-engineer-2026-06-practice-2",
    title: "Professional Machine Learning Engineer Practice Exam 2",
  },
  {
    availability: "coming-soon",
    id: "professional-ml-engineer-2026-06-practice-3",
    title: "Professional Machine Learning Engineer Practice Exam 3",
  },
];
