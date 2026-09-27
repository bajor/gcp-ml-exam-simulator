import type { QuestionForSection, QuestionSection } from "../../../../domain/questions";
import { practiceExamOneScaleSection } from "./scale";

// Version 2 revises only the question that the version 1 acceptance review rejected
// (docs/reviews/professional-ml-engineer-2026-06-practice-1-rejected-2026-09-26.md)
// and reuses the other scale questions unchanged.
const revisedScaleTwo = {
  id: "pmle-p1-scale-02",
  kind: "single",
  section: "scale",
  objective: "3.1 Building models given the task considering cost, complexity, latency, and scalability: 3.1.b choosing the product",
  prompt: "A logistics company predicts delivery delays in hours. Underestimated delays cost the company three times as much as overestimated ones, so the data science team designed an asymmetric loss function, and leadership wants that loss to be the training objective rather than a post-processing adjustment. The team writes PyTorch code, the training data is 40 GB of Parquet files in Cloud Storage, and training takes about six hours on one GPU. The platform team wants the training to run on managed infrastructure. What should you do?",
  verifiedOn: "2026-09-26",
  evidence: [
    {
      id: "custom-training",
      title: "Serverless training overview",
      url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/training/overview",
      claim: "Agent Platform provides a managed training service that runs training applications based on any ML framework in a prebuilt or a custom container image, and custom container images can use any framework version.",
    },
    {
      id: "automl-objectives",
      title: "Train a classification or regression model",
      url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/tabular-data/classification-regression/train-model",
      claim: "AutoML regression models support the optimization objectives minimize-rmse, minimize-mae, and minimize-rmsle.",
    },
  ],
  choices: [
    {
      id: "a",
      text: "Load the data into BigQuery, train an Agent Platform AutoML tabular regression model on it, and choose the optimization objective that is closest to the asymmetric loss function.",
      feedback: "Incorrect. AutoML regression optimizes one of its documented objectives, RMSE, MAE, or RMSLE, none of which is the team's asymmetric loss.",
      evidenceIds: ["automl-objectives"],
    },
    {
      id: "b",
      text: "Load the data into BigQuery, train a BigQuery ML boosted tree regressor, and add three hours to every prediction that the model returns to account for costly underestimates.",
      feedback: "Incorrect. Adding hours after prediction is the post-processing adjustment that leadership rejected, while Agent Platform custom training runs the team's own training code, so the asymmetric loss can be the training objective.",
      evidenceIds: ["custom-training"],
    },
    {
      id: "c",
      text: "Run the PyTorch code with the asymmetric loss as an Agent Platform custom training job on a GPU machine, and have the job read the Parquet files from Cloud Storage.",
      feedback: "Correct. Custom training runs the team's own PyTorch code in a container image, so the asymmetric loss is the training objective, and the job runs on managed infrastructure.",
      evidenceIds: ["custom-training"],
    },
    {
      id: "d",
      text: "Create a GKE cluster with a GPU node pool that the platform team operates, and start each training run as a Kubernetes Job that executes the PyTorch code and reads the Parquet files.",
      feedback: "Incorrect. The code would train with the right loss, but the GKE cluster is infrastructure that the platform team must operate, while Agent Platform provides managed training for any framework.",
      evidenceIds: ["custom-training"],
    },
  ],
  correctChoiceId: "c",
} satisfies QuestionForSection<"scale">;

export const practiceExamOneScaleV2Section = {
  section: "scale",
  author: "claude-opus-5.5-p1-scale-v2-20260926",
  questions: practiceExamOneScaleSection.questions.map((question) =>
    question.id === revisedScaleTwo.id ? revisedScaleTwo : question,
  ),
} satisfies QuestionSection<"scale">;
