import type { QuestionForSection, QuestionSection } from "../../../../domain/questions";
import { practiceExamOneArchitectSection } from "./architect";

// Version 3 revises only the question that the version 2 acceptance review rejected
// (docs/reviews/professional-ml-engineer-2026-06-practice-1-v2-rejected-2026-09-27.md)
// and reuses the other architect questions unchanged.
const revisedArchitectEight = {
  id: "pmle-p1-architect-08",
  kind: "single",
  section: "architect",
  objective: "1.2 Building AI solutions using Google Cloud AI APIs or foundational models: 1.2.d optimizing Gemini applications",
  prompt: "An online retailer uses Gemini to write a two-sentence summary of each new product review, and the team is satisfied with the quality of the summaries. About 150,000 reviews arrive every day, and each prompt contains only the review text and a short instruction. The summaries feed a digest email that is sent every other Monday, so a summary can be produced up to two weeks after its review arrives. The application sends online requests throughout the day, receives quota errors at peak hours, and costs are 40% above budget. You need to reduce cost and remove the peak-hour errors while still summarizing every review. What should you do?",
  verifiedOn: "2026-09-27",
  evidence: [
    {
      id: "batch-inference",
      title: "Batch inference with Gemini",
      url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/capabilities/batch-inference",
      claim: "Batch inference is offered at a 50% discounted rate compared with real-time inference for large-scale non-urgent tasks, has a higher rate limit than the real-time Gemini API, and accepts up to 200,000 requests per job; a job can queue for up to 72 hours, most jobs complete within 24 hours after they start running, and after 24 hours incomplete jobs are cancelled and only completed requests are charged.",
    },
    {
      id: "context-cache",
      title: "Context caching overview",
      url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/context-cache/context-cache-overview",
      claim: "Implicit caching is enabled by default and is most likely to hit when large, common content is at the beginning of the prompt; the minimum cache token count for implicit and explicit caching is 2,048 tokens for Gemini 2 family models and 4,096 tokens for Gemini 3 family models.",
    },
  ],
  choices: [
    {
      id: "a",
      text: "Keep sending online requests throughout the day, and add client-side retries with exponential backoff so that requests that are rejected at peak hours eventually succeed.",
      feedback: "Incorrect. Retries can eventually succeed, but every request is still billed at the real-time rate, so cost does not go down.",
      evidenceIds: ["batch-inference"],
    },
    {
      id: "b",
      text: "Collect each day's reviews in a BigQuery table, submit them every night as one batch inference job that writes the summaries to BigQuery, and resubmit any requests that do not complete.",
      feedback: "Correct. Batch inference costs 50% less than real-time inference, has a higher rate limit, and accepts up to 200,000 requests per job, which covers a day of reviews. Even a job that waits a day for submission, 72 hours in the queue, and 24 hours running finishes well within two weeks, and resubmitting incomplete requests covers every review.",
      evidenceIds: ["batch-inference"],
    },
    {
      id: "c",
      text: "Move the shared summarization instruction to the beginning of every prompt so that implicit context caching can reuse it, and keep sending online requests throughout the day.",
      feedback: "Incorrect. Implicit caching needs a common prefix of at least the minimum cache token count, thousands of tokens, so a short instruction cannot be cached, and the online requests still hit the peak-hour quota.",
      evidenceIds: ["context-cache"],
    },
    {
      id: "d",
      text: "Collect each day's reviews in a BigQuery table, and send them every night as online requests from a scheduled job that writes the summaries to BigQuery and retries any failed requests.",
      feedback: "Incorrect. Sending the requests at night moves them away from the daytime peak, but online requests are still billed at the real-time rate, while batch inference costs 50% less for the same non-urgent work.",
      evidenceIds: ["batch-inference"],
    },
  ],
  correctChoiceId: "b",
} satisfies QuestionForSection<"architect">;

export const practiceExamOneArchitectV3Section = {
  section: "architect",
  author: "claude-opus-5.5-p1-architect-v3-20260927",
  questions: practiceExamOneArchitectSection.questions.map((question) =>
    question.id === revisedArchitectEight.id ? revisedArchitectEight : question,
  ),
} satisfies QuestionSection<"architect">;
