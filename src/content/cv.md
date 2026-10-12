# Xinyue (Cindy) Tao

Toronto, ON · [xinyue.tao@mail.utoronto.ca](mailto:xinyue.tao@mail.utoronto.ca) · [GitHub](https://github.com/xinyue296) · [LinkedIn](https://www.linkedin.com/in/cindytao-xy)

Software engineer with sixteen months of backend, systems, and full-stack experience at a regulated fintech, building event-driven pipelines on AWS, diagnosing performance and data-consistency problems, and shipping features end to end from ambiguous requirements through production. Graduating May 2027.

*This page stays at the level of themes and technologies. For the detailed version with scale and impact figures, please [get in touch](/contact).*

---

## Education

**University of Toronto**, Toronto, Canada  
Honours BSc, Computer Science and Statistics, ASIP Co-op · Sep. 2023 – May 2027 (expected)

Coursework: Computer Systems Programming, Operating Systems, Computer Architecture, Computer Networks, Machine Learning

---

## Skills

**Languages:** TypeScript, JavaScript, Python, Go, SQL, Java, C, C++, R, MIPS assembly

**Systems & Performance:** concurrency, bottleneck analysis, benchmarking, cache-aware optimization, root-cause debugging, Linux

**Backend:** Node.js, Express, Fastify, REST APIs, OpenAPI, Zod, PostgreSQL, NATS JetStream, event-driven architecture, idempotency, RBAC

**Infra & Cloud:** AWS (Lambda, Step Functions, SQS, S3, ECS, EC2, RDS, IAM, CloudWatch), Terraform, Docker, Kubernetes, CI/CD

**Frontend:** React, Next.js, Tailwind CSS, Figma, responsive design

**AI/ML:** LangGraph, RAG, ChromaDB, evaluation dataset design, statistical modeling

---

## Experience

**[Tetra Digital Group](https://tetradg.com)**, Toronto, ON  
Software Engineer (Co-op) · May 2025 – Aug. 2026

*B2B SaaS for regulated digital-asset custody and stablecoin operations. TypeScript, Go, PostgreSQL, AWS, Terraform.*

- Automated manual reporting, invoicing, and audit-logging work for operations, finance, and compliance teams by building internal tools and backend services, shipping across cycled Agile releases tracked in Jira and Confluence.
- Designed and scaled a CSV export pipeline that had outgrown its original design, replacing offset pagination with keyset pagination and splitting each export into resumable parallel partitions, then benchmarked the workers under rising concurrency, traced the bottleneck to worker compute, and sized a configurable SQS worker pool to keep exports stable under congestion.
- Built Python triage scripts to find why end-of-day balances drifted, diffing on-chain transactions against platform records to classify the failures and trace them to root cause, shaping a redesign for the team's planned refactor.
- Migrated Bitcoin raw-signing operations to a new platform, owning the operations side across service, API, and React UI, and shipped the first release on schedule as ops moved off the legacy workflow.
- Built a shared schema and paginated-filtering layer in TypeScript, Zod, and OpenAPI first, so the transaction endpoints could reuse it, then shipped the client-facing REST API for integrators and reviewed its docs before launch.
- Partnered with finance to replace manual invoicing with a Step Functions pipeline that isolates each client entity's run and emails invoices via AWS SES, then drove the feedback loop through post-release reviews.
- Unified two platforms' separate audit trails into one append-only PostgreSQL store via an event-driven Go service on NATS JetStream, migrating every audit method by dual-write with zero call-site changes.

---

## Projects

**ChartProof, AI Scribe Accuracy Auditor** · Python · Sep. 2026 – Present

- Researched and authored the product landscape for an ML-based auditor of AI-generated clinical notes, surveying commercial AI scribes, evaluation frameworks, and error studies to find where an independent detector adds value.
- Planned the team's ML pipeline for detecting scribe errors in multilingual and multi-speaker visits, comparing candidate models on accuracy, latency, and cost over a purpose-built evaluation set.

**AI Marketing Agent** · Python, LangGraph, ChromaDB · Aug. 2026 – Present

- Led product and evaluation design for a multi-tenant agentic RAG platform where a LangGraph supervisor routes research, strategy, and copywriting agents over per-tenant ChromaDB indexes.
- Built an evaluation harness that scores each agent-workflow change on retrieval relevance and tests that RBAC filters never leak restricted documents across tenants or clearance tiers.

**Dr. Mario, falling-block puzzle game** · MIPS assembly · Oct. 2024 – Dec. 2024

- Built a playable Dr. Mario game in MIPS assembly, driving a memory-mapped bitmap display and keyboard from a frame-based game loop.
- Implemented gravity that speeds up over time, pause and resume, capsule hold, and a five-capsule preview queue, managing every register and stack frame by hand.

**UHelper** · Java, AWS EC2, PM2 · Jun. 2024 – Aug. 2024

- Built a recipe suggestion feature on the EDAMAM API, with a paginator that works around Discord's embed size limit.
- Deployed the bot on AWS EC2 with PM2 and automated its releases through GitHub webhooks.
- Organized weekly meetings and wrote the git workflow and hosting docs for our four-person team.

**[WasedaTime](https://wasedatime.com)** · Web Developer and PM · TypeScript, React, Tailwind · Feb. 2022 – Aug. 2023

- Pushed for UX improvements to an established open-source campus web app, co-designing redesigns in Figma and implementing UI refinements in React and TypeScript.
- Ran Instagram content campaigns beyond my engineering role to grow the app's student following.

---

## Activities

Dragon boat racing with a Toronto team, training three or more times a week and racing at the Toronto Islands regatta and the Can-Am Cup in Montreal. Hart House Singers, University of Toronto.
