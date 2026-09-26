import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamOneArchitectSection } from "./architect";
import { practiceExamOneCollaborateSection } from "./collaborate";
import { practiceExamOneScaleSection } from "./scale";

export const practiceExamOneV1Sections: readonly AnyQuestionSection[] = [
  practiceExamOneArchitectSection,
  practiceExamOneCollaborateSection,
  practiceExamOneScaleSection,
];
