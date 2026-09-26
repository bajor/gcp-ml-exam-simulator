import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamOneArchitectSection } from "./architect";
import { practiceExamOneCollaborateSection } from "./collaborate";

export const practiceExamOneV1Sections: readonly AnyQuestionSection[] = [
  practiceExamOneArchitectSection,
  practiceExamOneCollaborateSection,
];
