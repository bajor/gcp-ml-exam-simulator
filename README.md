# Google Cloud Professional Machine Learning Engineer Practice Exams

A documentation-backed exam simulator for the Google Cloud Professional Machine Learning Engineer certification. It is ported from the Professional Data Engineer simulator (`bajor/gcp-de-exam-simulator`) without that project's question content.

Each practice exam has 60 questions and a two-hour limit, the maximum of Google's published range of 50 to 60 questions. Questions follow the six sections of the exam guide dated June 1, 2026. Structural validation rejects any question whose prompt has fewer than 60 words, whose choices have fewer than 12 words each, or whose prompt and choices total fewer than 166 words (the length of the shortest official sample question); [research 0001](docs/research/0001-exam-format-and-blueprint.md) explains these floors. No practice exam has been published yet, so the catalog lists Practice Exams 1 to 3 as coming soon.

## Local Development

Node.js 22.22.2 or later is required.

```sh
npm install
npm run dev
```

Run the complete documentation, type, lint, unit, build, and browser-test gate with:

```sh
make test
```

Question-bank changes must also run `make verify-sources`. The command structurally validates every registered draft section and candidate set, verifies indexed review records against immutable candidates, and fetches every unique evidence URL.

## Deployment

Merges to `main` build and deploy the simulator to [GitHub Pages](https://bajor.github.io/gcp-ml-exam-simulator/).

## Documentation

Project requirements, decisions, behavior, research, and architecture are indexed in [`docs/index.md`](docs/index.md).
