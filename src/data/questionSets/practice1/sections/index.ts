import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamOneArchitectSection } from "./architect";
import { practiceExamOneAutomateSection } from "./automate";
import { practiceExamOneCollaborateSection } from "./collaborate";
import { practiceExamOneMonitorSection } from "./monitor";
import { practiceExamOneScaleSection } from "./scale";
import { practiceExamOneScaleV2Section } from "./scaleV2";
import { practiceExamOneServeSection } from "./serve";

export const practiceExamOneV1Sections: readonly AnyQuestionSection[] = [
  practiceExamOneArchitectSection,
  practiceExamOneCollaborateSection,
  practiceExamOneScaleSection,
  practiceExamOneServeSection,
  practiceExamOneAutomateSection,
  practiceExamOneMonitorSection,
];

// Version 2 replaces the scale section, whose version 1 was rejected; the other sections are unchanged.
export const practiceExamOneV2Sections: readonly AnyQuestionSection[] = [
  practiceExamOneArchitectSection,
  practiceExamOneCollaborateSection,
  practiceExamOneScaleV2Section,
  practiceExamOneServeSection,
  practiceExamOneAutomateSection,
  practiceExamOneMonitorSection,
];
