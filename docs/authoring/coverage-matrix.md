---
type: Guide
title: Objective coverage matrix
description: Per-objective question allocation, consideration identifiers, testable decisions, common traps, and verified documentation starting points for every practice set.
status: Accepted
tags: [questions, authoring, coverage]
timestamp: 2026-09-26T00:00:00Z
---

# Objective Coverage Matrix

## How to Use This Matrix

The exam guide dated June 1, 2026 has 6 sections, 14 objectives, and 52 considerations (the bullet points under each objective). This matrix assigns every consideration an identifier, such as `3.2.e`, and fixes how many questions each objective receives in every 60-question set.

Objective titles below match the guide, without its parenthetical examples. Write each question's `objective` field as `<objective number> <objective title>: <consideration identifier> <short consideration text>`. For example: `3.2 Training models: 3.2.e hyperparameter tuning`. The identifier lets reviewers count coverage with a text search.

Coverage rules:

1. Every set allocates questions to objectives exactly as the table below shows. The section totals are enforced in code; the objective split is checked in review.
2. Within one set, no consideration is the primary topic of more than three questions. A cap of two would make the `automate` section impossible to fill, because objectives 5.1 and 5.2 have only five considerations for 11 questions.
3. Across Practice Exams 1, 2, and 3, every consideration is the primary topic of at least two questions, each time with a different scenario and a different decisive feature.
4. Every documentation link below returned HTTP 200 at its final URL on 2026-09-26. Re-fetch each link and read the current page before citing it, because the matrix lists starting points, not evidence.
5. Test only generally available (GA) features. A Preview or deprecation notice disqualifies the feature it names, not other features on the same page. The notes below list the notices that affect this matrix.

## Allocation

| Section | Objective | Questions per set |
|---|---|---|
| `architect` (8) | 1.1 Developing ML models using BigQuery ML or AutoML on Gemini Enterprise Agent Platform | 4 |
| | 1.2 Building AI solutions using Google Cloud AI APIs or foundational models | 4 |
| `collaborate` (9) | 2.1 Exploring and preprocessing data for ML | 4 |
| | 2.2 Model prototyping using notebooks | 2 |
| | 2.3 Tracking and running ML experiments | 3 |
| `scale` (12) | 3.1 Building models given the task considering cost, complexity, latency, and scalability | 4 |
| | 3.2 Training models | 6 |
| | 3.3 Choosing appropriate hardware for training | 2 |
| `serve` (12) | 4.1 Serving models | 6 |
| | 4.2 Scaling online model serving | 6 |
| `automate` (11) | 5.1 Developing end-to-end ML pipelines | 6 |
| | 5.2 Automating model retraining | 5 |
| `monitor` (8) | 6.1 Identifying risks to AI solutions | 4 |
| | 6.2 Monitoring, testing, and troubleshooting AI solutions | 4 |

## 1.1 Developing ML Models Using BigQuery ML or AutoML on Gemini Enterprise Agent Platform

| ID | Consideration | Decisions to test |
|---|---|---|
| 1.1.a | Building models by business problem | Map the problem to a model type: classification, regression, forecasting with ARIMA_PLUS, clustering with k-means, or recommendation. Choose BigQuery ML when the data is in BigQuery and the team works in SQL; choose AutoML for image or tabular data without ML expertise, and Gemini prompting or tuning for text tasks, because AutoML text training ended on September 15, 2024. |
| 1.1.b | Feature engineering or selection in BigQuery ML | Use the `TRANSFORM` clause so the same preprocessing is applied automatically at prediction time; inspect feature importance. |
| 1.1.c | Generating predictions with BigQuery ML | Use `ML.PREDICT`, `ML.FORECAST`, and explanation functions in SQL for batch predictions; register the model when online serving is needed. |
| 1.1.d | Training models with Agent Platform AutoML | Data requirements, training budget, and the optimization objective for the business metric. |
| 1.1.e | Fine-tuning Gemini models using BigQuery | Tune from SQL with labeled examples, evaluate the tuned model, and decide whether tuning is needed at all. |

Common traps: exporting BigQuery data to train elsewhere when BigQuery ML meets the need (D2); preprocessing in a separate job that prediction does not reuse (D7).

Documentation: [BigQuery ML introduction](https://docs.cloud.google.com/bigquery/docs/bqml-introduction), [end-to-end user journeys](https://docs.cloud.google.com/bigquery/docs/e2e-journey), [TRANSFORM clause](https://docs.cloud.google.com/bigquery/docs/bigqueryml-transform), [ML.PREDICT](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-predict), [ARIMA_PLUS forecasting](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial), [AutoML beginner's guide](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/beginner/beginners-guide), [tuning and evaluation in BigQuery](https://docs.cloud.google.com/bigquery/docs/tune-evaluate).

## 1.2 Building AI Solutions Using Google Cloud AI APIs or Foundational Models

| ID | Consideration | Decisions to test |
|---|---|---|
| 1.2.a | Selecting a model from Model Garden | Compare capability, modality, latency, cost, license, and deployment option (model as a service or self-deployed). |
| 1.2.b | Industry-specific APIs | Prefer the Vision API, Cloud Translation, or a pre-trained Document AI processor when it covers the task; use Document AI custom processors for document-specific fields and classes. |
| 1.2.c | Building solutions and tuning for use cases | Try prompting first, ground the model when it needs current or private facts, and tune when style, format, or task behavior must change. |
| 1.2.d | Optimizing Gemini applications | Choose a smaller model for latency and cost, context caching for repeated long context, batch inference for non-urgent bulk work, and Provisioned Throughput for guaranteed capacity. |

Common traps: tuning a model to learn facts that change daily (D7); a custom model where a pre-trained API fits (D2); Provisioned Throughput for small, sporadic traffic (D2).

Documentation: [Model Garden overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-garden/explore-models), [Document AI overview](https://docs.cloud.google.com/document-ai/docs/overview), [Vision API features](https://docs.cloud.google.com/vision/docs/features-list), [Cloud Translation offerings](https://docs.cloud.google.com/translate/docs/overview), [model tuning](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tuning), [Provisioned Throughput](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/provisioned-throughput), [context caching](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/context-cache/context-cache-overview), [batch inference with Gemini](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/capabilities/batch-inference).

## 2.1 Exploring and Preprocessing Data for ML

| ID | Consideration | Decisions to test |
|---|---|---|
| 2.1.a | Organizing and exploring data types | Keep structured data in BigQuery and unstructured data in Cloud Storage, in formats that training and serving read efficiently. |
| 2.1.b | Choosing the preprocessing tool | BigQuery SQL for large structured transformations, Dataflow for streaming or complex per-record processing, Managed Service for Apache Spark for existing Spark code, and in-memory Python only for data that fits in memory. |
| 2.1.c | Creating features in Agent Platform Feature Store | Register BigQuery feature data, share features across teams, and serve the same features online. |
| 2.1.d | Data privacy and PII | Inspect and de-identify with Sensitive Data Protection before data reaches training or prompts. |

Common traps: in-memory Python on terabytes (D3); Dataflow for a simple SQL aggregation (D2); copying PII into notebooks (D5).

Documentation: [feature preprocessing in BigQuery](https://docs.cloud.google.com/bigquery/docs/preprocess-overview), [Dataflow ML](https://docs.cloud.google.com/dataflow/docs/machine-learning/ml-about), [Managed Service for Apache Spark](https://docs.cloud.google.com/managed-spark/docs/concepts/clusters-overview), [Feature Store overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/featurestore/latest/overview), [Sensitive Data Protection](https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview).

## 2.2 Model Prototyping Using Notebooks

| ID | Consideration | Decisions to test |
|---|---|---|
| 2.2.a | Collaboration and security for notebooks | Choose between Agent Platform Workbench and Colab Enterprise; control access with service accounts and access modes; apply network controls; stop idle runtimes. |
| 2.2.b | Developing with PyTorch, scikit-learn, or JAX | Use the right runtime and accelerator, then move repeatable work out of notebooks. |
| 2.2.c | Prototyping with Model Garden models | Start from Model Garden models in a notebook to compare foundation and open models. |

Common traps: sharing one user's credentials (D5); GPU runtimes left running while idle (D2, over-provisioning).

Documentation: [Agent Platform Workbench](https://docs.cloud.google.com/gemini-enterprise-agent-platform/notebooks/workbench/introduction), [Workbench access](https://docs.cloud.google.com/gemini-enterprise-agent-platform/notebooks/workbench/instances/manage-access-jupyterlab), [Colab Enterprise](https://docs.cloud.google.com/colab/docs/introduction), [Model Garden overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-garden/explore-models).

## 2.3 Tracking and Running ML Experiments

| ID | Consideration | Decisions to test |
|---|---|---|
| 2.3.a | Choosing the experimentation environment | Experiments on Agent Platform for run tracking, Agent Platform Pipelines for reproducible multi-step runs, and Kubeflow Pipelines when the framework requires it. |
| 2.3.b | Evaluating predictive and generative AI | Choose metrics that match the business cost of errors, such as precision, recall, or PR AUC for imbalanced classes, and error metrics for regression; evaluate generative output with LLM-as-a-judge. |
| 2.3.c | Tracking artifacts, versions, and lineage | Compare runs in Experiments and trace datasets and models with ML Metadata. |

Common traps: accuracy on heavily imbalanced data (D6); comparing runs in spreadsheets or notebook logs (D3).

Documentation: [Experiments](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/experiments/intro-vertex-ai-experiments), [ML Metadata](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/ml-metadata/introduction), [model evaluation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/evaluation/introduction), [generative AI evaluation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/evaluation-overview), [Pipelines introduction](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/pipelines/introduction).

## 3.1 Building Models Given the Task Considering Cost, Complexity, Latency, and Scalability

| ID | Consideration | Decisions to test |
|---|---|---|
| 3.1.a | Choosing the model type | Time series models such as ARIMA_PLUS, boosted trees or DNNs for tabular data, DNNs with transfer learning for unstructured data, and LLMs for language tasks. |
| 3.1.b | Choosing the product | AutoML, BigQuery ML, custom training, or pipelines, based on skills, data location, customization, and delivery time. |
| 3.1.c | Choosing the deployment strategy | Batch, online, or edge inference, based on where and when predictions are consumed. |
| 3.1.d | Interpretability requirements | Interpretable model families such as linear models and boosted trees, BigQuery ML explanation functions such as `ML.EXPLAIN_PREDICT` and `ML.GLOBAL_EXPLAIN`, and open-source attribution libraries in a custom container. |

Common traps: an LLM for a classification task that BigQuery ML solves more cheaply (D2); a model without attributions when explanations are required (D3).

Note: Vertex Explainable AI is deprecated as of March 16, 2026, and is scheduled to shut down on March 16, 2027. Never make it the decisive feature; use the alternatives above.

Documentation: [end-to-end user journeys](https://docs.cloud.google.com/bigquery/docs/e2e-journey), [classification and regression](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/tabular-data/classification-regression/overview), [BigQuery ML explainability](https://docs.cloud.google.com/bigquery/docs/xai-overview), [deploying models](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/general/deployment).

## 3.2 Training Models

| ID | Consideration | Decisions to test |
|---|---|---|
| 3.2.a | Organizing training data | Store tabular, text, speech, image, and video data in Cloud Storage and BigQuery in formats that scale. |
| 3.2.b | Ingesting data into training pipelines | Read structured and unstructured sources efficiently from training code and pipelines. |
| 3.2.c | Training with SDKs | Agent Platform custom training with custom containers, Kubeflow on GKE, AutoML, and Tabular Workflows. Among Tabular Workflows, only End-to-End AutoML for classification and regression is GA. The newest prebuilt training containers for TensorFlow, PyTorch, scikit-learn, and XGBoost passed their end-of-availability dates in July 2026, after which their images can no longer be used, so neither a prebuilt training container nor autopackaging, which builds on one, may be the decisive feature. |
| 3.2.d | Troubleshooting training failures | Out-of-memory errors, diverging loss, slow input pipelines, idle accelerators, and permission errors. |
| 3.2.e | Hyperparameter tuning | Search space, metric, search algorithm (Bayesian optimization is the default), and trial budget. |
| 3.2.f | Fine-tuning foundation models | When tuning beats prompting or grounding, and how supervised tuning uses labeled examples. |

Common traps: a self-managed VM where Agent Platform custom training works (D1); a larger machine for a slow input pipeline (D6).

Documentation: [serverless training](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/training/overview), [custom training jobs](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/training/create-custom-job), [custom containers](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/training/containers-overview), [Tabular Workflows](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/tabular-data/tabular-workflows/overview), [hyperparameter tuning](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/training/hyperparameter-tuning-overview), [model tuning](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tuning).

## 3.3 Choosing Appropriate Hardware for Training

| ID | Consideration | Decisions to test |
|---|---|---|
| 3.3.a | Compute and accelerators | CPUs for small or classical models, GPUs for flexible deep learning, and TPUs for large matrix-heavy models in supported frameworks. |
| 3.3.b | Distributed training | Data parallelism with replicas (including Reduction Server) versus model parallelism when a model does not fit on one device. |

Common traps: TPUs for code that TPUs do not support (D3); model parallelism for a model that fits on one device (D2).

Documentation: [Cloud TPU](https://docs.cloud.google.com/tpu/docs/intro-to-tpu), [training compute](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/training/configure-compute), [distributed training](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/training/distributed-training).

## 4.1 Serving Models

| ID | Consideration | Decisions to test |
|---|---|---|
| 4.1.a | Batch and online inference services | Agent Platform, Model Garden, Cloud Run, or GKE, based on latency, scale, and operations. |
| 4.1.b | Packaging frameworks with containers | Custom containers that serve the configured port, health route, and predict route; prebuilt containers for supported frameworks. The newest prebuilt inference containers for TensorFlow, PyTorch, and XGBoost reached their end of patch and support on 2026-07-14, and scikit-learn 1.6 reaches it on 2026-10-14, so a prebuilt container must not be the decisive feature. |
| 4.1.c | Versioning in Model Registry | Versions and aliases, and registering BigQuery ML models. |
| 4.1.d | Rollout strategies | Traffic splitting between models on one endpoint for canary and A/B tests, and rollback by shifting traffic. |
| 4.1.e | Inference preprocessing and postprocessing | Custom inference routines, preprocessing inside the model, and Dataflow RunInference for streams. |

Common traps: a second endpoint plus client changes for a canary (D2); preprocessing reimplemented in each client, which cannot guarantee consistency (D3).

Documentation: [inference overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/predictions), [prebuilt containers](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/predictions/pre-built-containers), [custom containers](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/predictions/use-custom-container), [batch inference](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/predictions/get-batch-predictions), [custom inference routines](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/predictions/custom-prediction-routines), [Model Registry](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/model-registry/introduction), [deploying models](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/general/deployment), [Cloud Run GPUs](https://docs.cloud.google.com/run/docs/configuring/services/gpu), [inference on GKE](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning/inference).

## 4.2 Scaling Online Model Serving

| ID | Consideration | Decisions to test |
|---|---|---|
| 4.2.a | Serving features with Feature Store | Serve the latest feature values online directly from BigQuery data through feature views with Bigtable online serving. Optimized online serving is deprecated and must not be the decisive feature. |
| 4.2.b | Public and private endpoints | Private Service Connect endpoints when traffic must stay private. |
| 4.2.c | Serving hardware | CPUs, GPUs, TPUs, or edge devices, based on model size, latency, and connectivity. |
| 4.2.d | Scaling by throughput | Machine types and minimum and maximum replica counts for autoscaling. |
| 4.2.e | Tuning models for production | Serving optimizations such as quantization, tensor parallelism, and Gemini context caching. Every stable optimized TensorFlow runtime image reached its end of availability by 2025-08-15, and only nightly images outside the SLA remain, so the optimized TensorFlow runtime must not be the decisive feature. |

Common traps: a hand-built feature cache in Memorystore (D1); a public endpoint for private traffic (D5).

Documentation: [serving features online](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/featurestore/latest/serve-feature-values), [private endpoints](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/predictions/private-service-connect), [inference compute](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/predictions/configure-compute), [context caching](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/context-cache/context-cache-overview), [LLM inference optimization](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/machine-learning/inference/llm-optimization).

## 5.1 Developing End-to-End ML Pipelines

| ID | Consideration | Decisions to test |
|---|---|---|
| 5.1.a | Validating data and models | Data checks and model evaluation components that gate training and deployment. |
| 5.1.b | Building and orchestrating pipelines | Agent Platform Pipelines for ML workflows, Managed Service for Apache Airflow for broader data workflows, Ray on Agent Platform for distributed Python work, and templates versus custom components. |
| 5.1.c | Consistent preprocessing | One preprocessing definition for training and serving, such as preprocessing in the model graph, the BigQuery ML `TRANSFORM` clause, or Feature Store. |

Common traps: a scheduled notebook as a production pipeline (D3); Airflow for a pure ML workflow where Pipelines records lineage with less work (D2).

Documentation: [Pipelines introduction](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/pipelines/introduction), [building pipelines](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/pipelines/build-pipeline), [model evaluation components](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/pipelines/model-evaluation-component), [Ray on Agent Platform](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/open-source/ray), [Managed Service for Apache Airflow](https://docs.cloud.google.com/composer/docs), [TRANSFORM clause](https://docs.cloud.google.com/bigquery/docs/bigqueryml-transform).

## 5.2 Automating Model Retraining

| ID | Consideration | Decisions to test |
|---|---|---|
| 5.2.a | Retraining policy | Scheduled retraining versus retraining triggered by new data, monitoring alerts, or measured quality loss, weighed against cost. |
| 5.2.b | CI/CD/CT pipelines | Cloud Build to test and package components, scheduled and event-triggered pipeline runs, and evaluation gates before promotion. |

Common traps: retraining and deploying on every alert without an evaluation gate (D8); manual retraining (D3).

Documentation: [MLOps continuous delivery](https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning), [Cloud Build](https://docs.cloud.google.com/build/docs/overview), [scheduling pipeline runs](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/pipelines/schedule-pipeline-run), [triggering runs with Pub/Sub](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/pipelines/trigger-pubsub).

## 6.1 Identifying Risks to AI Solutions

| ID | Consideration | Decisions to test |
|---|---|---|
| 6.1.a | Securing AI systems | Model Armor for prompt injection, jailbreaks, sensitive data in prompts and responses, and malicious URLs; safety filters for harmful content; regular expressions only for simple fixed patterns; VPC Service Controls against data exfiltration. |
| 6.1.b | Responsible AI practices | Evaluate quality across groups and monitor for bias. |
| 6.1.c | Model explainability | Explanations from generally available tools: BigQuery ML explanation functions, or open-source attribution libraries served with the model from a custom container on Agent Platform Inference. Vertex Explainable AI is deprecated. |

Common traps: safety filters alone against prompt injection (D7); regular expressions for semantic attacks (D3); de-identifying data after it was sent to the model (D8).

Documentation: [Model Armor](https://docs.cloud.google.com/model-armor/overview), [safety and content filters](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/capabilities/configure-safety-filters), [responsible AI](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/responsible-ai), [VPC Service Controls](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/general/vpc-service-controls), [BigQuery ML explainability](https://docs.cloud.google.com/bigquery/docs/xai-overview), [custom containers for inference](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/predictions/use-custom-container).

## 6.2 Monitoring, Testing, and Troubleshooting AI Solutions

| ID | Consideration | Decisions to test |
|---|---|---|
| 6.2.a | Configuring Model Monitoring | Model Monitoring v1, which is GA and configured on Agent Platform endpoints: skew and drift detection, the training-data baseline for skew, thresholds, sampling, and alerts. Model Monitoring v2 is in Preview and must not be the decisive feature. |
| 6.2.b | Common production issues | Training-serving skew needs the training data as a baseline; drift compares recent inputs with a baseline; concept drift shows up as quality loss against ground truth. Feature attribution monitoring depends on the deprecated Vertex Explainable AI, so do not make it the decisive feature. |
| 6.2.c | Evaluating generative AI in production | Evaluation datasets, LLM-as-a-judge metrics, and regression tests when prompts or models change. |

Common traps: drift monitoring when the stem asks for skew against training data (D7); automatic retraining before diagnosis (D8); input drift alone as proof of concept drift (D6).

Documentation: [Model Monitoring](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/model-monitoring/overview), [generative AI evaluation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/evaluation-overview).
