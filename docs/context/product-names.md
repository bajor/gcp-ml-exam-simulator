---
type: Context
title: Current product names
description: The product names that practice questions must use after the 2026 Agent Platform and data-stack renames, with the former names and sources.
status: Accepted
timestamp: 2026-09-26T00:00:00Z
---

# Current Product Names

On April 22, 2026, Google announced Gemini Enterprise Agent Platform as the successor name of Vertex AI [9], and in April 2026 it renamed several data-analytics products [3] [5]. The exam guide dated June 1, 2026 and the official sample questions use the new names. Questions in this repository must use them too.

## Naming Rules

1. Use the name the exam guide uses when the guide names the product.
2. Otherwise, use the new name from Google's name-change page or from the product's current documentation title.
3. Use the names exactly as the tables list them. Agent Platform products read either "Agent Platform <product>" or "<product> on Agent Platform"; the long form with "Gemini Enterprise Agent Platform" is also correct. The official sample questions use the short forms [10].
4. Never use a former name in a prompt, choice, or feedback. Former names may appear only in evidence titles when Google has not yet renamed that documentation page, and in API names that Google kept, such as the DLP API.
5. Cite the final documentation URL after redirects. Most former `cloud.google.com/vertex-ai/...` URLs redirect to `docs.cloud.google.com/gemini-enterprise-agent-platform/...`, but some former URLs return HTTP 404.

## Agent Platform

Sources: the name-change page [1], the exam guide [2], and the documentation titles listed.

| Former name | Name to use in questions | Note |
|---|---|---|
| Vertex AI | Agent Platform (Gemini Enterprise Agent Platform) | |
| Vertex AI Workbench | Agent Platform Workbench | |
| Colab Enterprise | Colab Enterprise | Used as is in the guide. |
| Vertex AI Pipelines | Agent Platform Pipelines | |
| Vertex AI Feature Store | Agent Platform Feature Store | The name-change page writes "Feature Store on Gemini Enterprise Agent Platform". |
| Vertex AI Model Registry | Agent Platform Model Registry | |
| Vertex AI Experiments | Experiments on Agent Platform | |
| Vertex ML Metadata | Agent Platform ML Metadata | Named in the guide, not in the name-change table. |
| Vertex AI TensorBoard | Agent Platform TensorBoard | Named in the official samples [10]. |
| Vertex AI Model Monitoring | Model Monitoring on Agent Platform | |
| Vertex AI Inference, Prediction | Agent Platform Inference | Includes Agent Platform Online Inference and Batch Inference. |
| Vertex AI Endpoints | Agent Platform Endpoints | |
| Vertex AI Training | Agent Platform custom training | The guide's wording. The name-change page lists "Managed Training" and "Serverless Training". |
| Vertex AI AutoML | Agent Platform AutoML | |
| Vertex AI Forecasting | Forecasting on Agent Platform | |
| Vertex AI Model Garden | Model Garden | |
| Vertex AI Model Evaluation | Model Evaluation on Agent Platform | |
| Gen AI evaluation service | Agent Platform Evals | Describe the method, such as LLM-as-a-judge, as the guide does. |
| Vertex AI Studio | Agent Studio | |
| Vertex AI Search | Agent Search | |
| Vertex AI Vector Search | Vector Search on Agent Platform | |
| Vertex AI Agent Engine | Agent Runtime | |
| RAG Engine | RAG Engine on Agent Platform | |
| Ray on Vertex AI | Ray on Agent Platform | |
| Vertex Explainable AI | No new name | Deprecated on March 16, 2026, with shutdown scheduled for March 16, 2027 [11]. Do not write questions that depend on it, although the guide still names model explainability; test interpretability through generally available alternatives instead. |

## Data and Serverless Products

| Former name | Name to use in questions | Source |
|---|---|---|
| Cloud Composer | Managed Service for Apache Airflow | Release note of April 15, 2026 [3] |
| Dataproc on Compute Engine, Google Cloud Serverless for Apache Spark | Managed Service for Apache Spark | Product overview [4] |
| Dataplex Universal Catalog | Knowledge Catalog | Renamed on April 10, 2026; the API, client library, command-line, and IAM names are unchanged [5] |
| Looker Studio | Data Studio | Product documentation [6] |
| Cloud Functions | Cloud Run functions | Product documentation [7] |
| Cloud Data Loss Prevention (Cloud DLP) | Sensitive Data Protection | Cloud DLP is now part of Sensitive Data Protection; the API keeps its name, Cloud Data Loss Prevention API (DLP API) [8] |

BigQuery, BigQuery ML, Dataflow, Pub/Sub, Cloud Storage, Cloud Run, Google Kubernetes Engine (GKE), Cloud Build, Artifact Registry, Memorystore, Bigtable, Cloud TPU, Model Armor, Document AI, the Cloud Vision API, and Cloud Translation keep their names.

## Verification

Sources were fetched on 2026-09-25 and 2026-09-26. Re-check this page before authoring each new question set, because Google can rename more documentation pages at any time.

# References

[1] GOOGLE CLOUD. **Gemini Enterprise Agent Platform name changes**. Available at: <https://docs.cloud.google.com/gemini-enterprise-agent-platform/vertex-ai-name-changes>. Accessed on: 2026-09-25.

[2] GOOGLE CLOUD. **Professional Machine Learning Engineer Certification Exam Guide, as of June 1, 2026**. Available at: <https://services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_english_new.pdf>. Accessed on: 2026-09-25.

[3] GOOGLE CLOUD. **Managed Service for Apache Airflow release notes**. Available at: <https://docs.cloud.google.com/composer/docs/release-notes>. Accessed on: 2026-09-25.

[4] GOOGLE CLOUD. **Managed Service for Apache Spark on clusters overview**. Available at: <https://docs.cloud.google.com/managed-spark/docs/concepts/clusters-overview>. Accessed on: 2026-09-25.

[5] GOOGLE CLOUD. **Knowledge Catalog overview**. Available at: <https://docs.cloud.google.com/knowledge-catalog/docs/introduction>. Accessed on: 2026-09-25.

[6] GOOGLE CLOUD. **Data Studio documentation**. Available at: <https://docs.cloud.google.com/data-studio>. Accessed on: 2026-09-25.

[7] GOOGLE CLOUD. **Functions overview, Cloud Run functions**. Available at: <https://docs.cloud.google.com/functions/docs/concepts/overview>. Accessed on: 2026-09-25.

[8] GOOGLE CLOUD. **Sensitive Data Protection overview**. Available at: <https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview>. Accessed on: 2026-09-25.

[9] GOOGLE CLOUD BLOG. **Introducing Gemini Enterprise Agent Platform**. Published 2026-04-22. Available at: <https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform>. Accessed on: 2026-09-26.

[10] GOOGLE CLOUD. **Professional Machine Learning Engineer Sample Questions**. Available at: <https://docs.google.com/forms/d/e/1FAIpQLSeYmkCANE81qSBqLW0g2X7RoskBX9yGYQu-m1TtsjMvHabGqg/viewform>. Accessed on: 2026-09-25.

[11] GOOGLE CLOUD. **Introduction to Vertex Explainable AI**. Available at: <https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/overview>. Accessed on: 2026-09-26.
