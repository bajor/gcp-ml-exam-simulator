import type { QuestionForSection, QuestionSection } from "../../../../domain/questions";
import { practiceExamOneServeSection } from "./serve";

// Version 3 revises only the question that the version 2 acceptance review rejected
// (docs/reviews/professional-ml-engineer-2026-06-practice-1-v2-rejected-2026-09-27.md)
// and reuses the other serve questions unchanged.
const revisedServeEleven = {
  id: "pmle-p1-serve-11",
  kind: "single",
  section: "serve",
  objective: "4.2 Scaling online model serving: 4.2.e tuning models for production",
  prompt: "An engineering consultancy's research assistant calls a Gemini model on Agent Platform about 20,000 times each business day. Every request contains the same 60,000-token set of firm guidelines and a short user question, and the application puts the user question first and the guidelines after it. The guidelines change once a quarter, and each answer must consider the complete guidelines. Implicit caching is enabled by default, but the usage metadata of the responses shows almost no cached tokens. The firm wants to lower cost and latency without adding infrastructure to manage. What should you do?",
  verifiedOn: "2026-09-27",
  evidence: [
    {
      id: "context-cache",
      title: "Context caching overview",
      url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/context-cache/context-cache-overview",
      claim: "Context caching reduces the cost and latency of Gemini requests that contain repeated content; implicit caching is enabled by default, and cache hits are more likely when large, common content is at the beginning of the prompt and requests with a similar prefix are sent within a short time; the cachedContentTokenCount field in the response metadata shows the cached tokens; explicit caches are billed for the input tokens that create them and for storage while they are stored.",
    },
    {
      id: "gemini-batch",
      title: "Batch inference with Gemini",
      url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/capabilities/batch-inference",
      claim: "Gemini batch inference provides asynchronous, high-throughput, and cost-effective inference for large-scale data processing.",
    },
    {
      id: "self-deployed",
      title: "Overview of self-deployed models",
      url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-garden/self-deployed-models",
      claim: "Unlike model-as-a-service offerings, which are serverless and don't require manual deployment, self-deployed Model Garden models run in your Google Cloud project, and you have full control over the deployment environment.",
    },
    {
      id: "model-garden",
      title: "Overview of Model Garden",
      url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-garden/explore-models",
      claim: "For open models in Model Garden, you are charged for the compute resources used to deploy the model to an endpoint.",
    },
  ],
  choices: [
    {
      id: "a",
      text: "Send the questions to Gemini batch inference jobs, and return each answer to the user when the batch job that contains the question has completed.",
      feedback: "Incorrect. Batch inference is asynchronous processing for large-scale data, so answers would arrive later rather than sooner, while the firm wants lower latency.",
      evidenceIds: ["gemini-batch"],
    },
    {
      id: "b",
      text: "Restructure each request so that the guidelines come first and the user question comes last, so that consecutive requests share a long common prefix.",
      feedback: "Correct. Implicit caching is already enabled, and hits are more likely when large, common content starts the prompt and similar prefixes arrive close together, so moving the guidelines first lowers cost and latency with no infrastructure.",
      evidenceIds: ["context-cache"],
    },
    {
      id: "c",
      text: "Write a 5,000-token summary of the guidelines each quarter, and send the summary with each question instead of the complete 60,000-token guidelines.",
      feedback: "Incorrect. A summary lowers the token count, but each answer must consider the complete guidelines, which a summary does not contain.",
      evidenceIds: ["context-cache"],
    },
    {
      id: "d",
      text: "Deploy an open model from Model Garden to an Agent Platform endpoint, and send the same prompts to that endpoint instead of sending them to Gemini.",
      feedback: "Incorrect. A self-deployed model needs a manual deployment to an endpoint whose compute is charged, which adds infrastructure to manage, while reordering the prompt lets the implicit caching that is already enabled lower cost and latency.",
      evidenceIds: ["self-deployed", "model-garden", "context-cache"],
    },
  ],
  correctChoiceId: "b",
} satisfies QuestionForSection<"serve">;

export const practiceExamOneServeV3Section = {
  section: "serve",
  author: "claude-opus-5.5-p1-serve-v3-20260927",
  questions: practiceExamOneServeSection.questions.map((question) =>
    question.id === revisedServeEleven.id ? revisedServeEleven : question,
  ),
} satisfies QuestionSection<"serve">;
