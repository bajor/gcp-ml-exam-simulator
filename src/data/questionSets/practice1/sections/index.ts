import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamOneArchitectSection } from "./architect";
import { practiceExamOneCollaborateSection } from "./collaborate";
import { practiceExamOneScaleSection } from "./scale";
import { practiceExamOneServeSection } from "./serve";

export const practiceExamOneV1Sections: readonly AnyQuestionSection[] = [
  practiceExamOneArchitectSection,
  practiceExamOneCollaborateSection,
  practiceExamOneScaleSection,
  practiceExamOneServeSection,
];
