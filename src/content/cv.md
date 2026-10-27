# Xinyue (Cindy) Tao

Toronto, ON · [xinyue.tao@mail.utoronto.ca](mailto:xinyue.tao@mail.utoronto.ca)
· [GitHub](https://github.com/xinyue296) ·
[LinkedIn](https://www.linkedin.com/in/cindytao-xy)

Software engineer with sixteen months of backend, systems, and full-stack
experience at a regulated fintech, building event-driven pipelines on AWS,
diagnosing performance and data-consistency problems, and shipping features end
to end from ambiguous requirements through production. Graduating May 2027.

---

## Education

**University of Toronto**, Toronto, Canada  
_Sep. 2023 – May 2027 (expected)_  
Honours BSc, Computer Science and Statistics, ASIP Co-op  
Dean's List Scholar (2024, 2025)

**Coursework**: Operating Systems, Computer Architecture, Computer Networks,
Computer Systems Programming, Machine Learning, Neural Networks and Deep
Learning, ML Engineering Capstone, Methods of Data Analysis

**Waseda University**, Tokyo, Japan  
_2021 – 2023_  
Undergraduate studies in Economics (transferred)

---

## Skills

**Languages:** TypeScript, JavaScript, Python, Go, SQL, Java, C, C++, R, MIPS
assembly

**Systems & Performance:** concurrency, bottleneck analysis, benchmarking,
cache-aware optimization, root-cause debugging, Linux

**Backend:** Node.js, Express, Fastify, REST APIs, OpenAPI, Zod, PostgreSQL,
NATS JetStream, event-driven architecture, idempotency, RBAC

**Infra & Cloud:** AWS (Lambda, Step Functions, SQS, S3, SES, ECS, EC2, RDS,
IAM, CloudWatch), Terraform, Docker, Kubernetes, GitHub Actions, CI/CD

**Frontend:** React, Next.js, Tailwind CSS, Figma, responsive design

**AI/ML:** LangGraph, agent evaluation, evaluation dataset design, RAG,
statistical modelling

---

## Experience

**[Tetra Digital Group](https://tetradg.com)**, Toronto, ON  
Software Engineer (Co-op) · May 2025 – Aug. 2026

_B2B SaaS for regulated digital-asset custody and stablecoin operations.
TypeScript, Go, PostgreSQL, AWS, Terraform._

- Automated manual reporting, invoicing, and audit-logging work for operations,
  finance, and compliance teams by building internal tools and backend services,
  shipping across cycled Agile releases tracked in Jira and Confluence.
- Designed and scaled a CSV export pipeline that had outgrown its original
  design, replacing offset pagination with keyset pagination and resumable parallel
  workers behind a configurable SQS admission queue that protects the shared
  database under traffic congestion.
- Benchmarked the parallel export workers under rising concurrency, traced the
  bottleneck to worker compute, and sized the SQS worker pool to the database
  and compute budget to keep exports stable.
- Built Python triage scripts to find why end-of-day balances drifted, diffing
  on-chain transactions against platform records to trace the discrepancies to
  root cause, shaping a redesign for the team's planned refactor.
- Migrated Bitcoin raw-signing operations to a new platform, owning the
  operations side across service, API, and React UI, and shipped the first
  release on schedule as ops moved off the legacy workflow.
- Built a shared schema and paginated-filtering layer in TypeScript, Zod, and
  OpenAPI first, so the transaction endpoints could reuse it, then shipped the
  client-facing REST API for integrators and reviewed its docs before launch.
- Partnered with finance to replace manual invoicing with a Step Functions
  pipeline that isolates each client entity's run and emails invoices via AWS
  SES, then drove the feedback loop through post-release reviews.
- Unified two platforms' separate audit trails into one append-only PostgreSQL
  store via an event-driven Go service on NATS JetStream, migrating every audit
  method by dual-write with zero call-site changes.
- Led hiring for the next co-op with my manager, from screening through the
  interview day, then co-mentored the hire through daily check-ins and weekly
  1:1s.

---

## Projects

**ChartProof, AI Scribe Accuracy Auditor** · Python, PostgreSQL, AWS,
Terraform · Sep. 2026 – Present

- Researched and authored the product landscape for an ML-based auditor of
  AI-generated clinical notes, surveying commercial AI scribes, evaluation
  frameworks, and error studies to find where an independent detector adds
  value.
- Architected a medallion-style S3 data lake (bronze, silver, gold) and
  PostgreSQL warehouse, plus a Python loader that checks each batch against its
  manifest, quarantines bad rows, and writes through least-privilege roles.
- Reworked the team's Terraform to run both data pipelines on ECS Fargate across
  dev and prod, and set up GitHub Actions CI that runs migrations and the test
  suite on every pull request.
- Ran a disaster-recovery drill that rebuilt the
  Terraform-managed production stack from an RDS snapshot, restoring working
  services with no data loss.
- Unified the data generators into one shared Python library with local and
  cloud runners, so the benchmark and the live app score notes with the same
  judge.

**AI Marketing Agent** · Python, LangGraph, OpenAI API, Pydantic, pytest ·
Aug. 2026 – Present

- Led experiments comparing the LangGraph multi-agent supervisor with a simpler
  single-loop agent on outcome checks and token cost, and proposed a plan to
  move to the simpler design.
- Defined a memory eval comparing preferences learned from reviewer edits with
  automatically extracted ones, which made better automatic capture the next
  priority.

**Cache Sensitivity Study (gem5)** · Computer Architecture course · Jan. – Apr.
2025

- Characterized how cache configuration drives performance on Problem Based
  Benchmark Suite workloads by sweeping L1/L2 size (8–64 KB) and associativity
  (1–8 way) on a simulated in-order CPU.
- Found pointer-chasing BFS and hash-based deduplication far more sensitive to
  cache size and associativity than array-based sorting, and traced the gap to
  spatial locality and instruction footprint.

**Dr. Mario, falling-block puzzle game** · MIPS assembly · Oct. 2024 – Dec. 2024

- Built a playable Dr. Mario game in about 3,000 lines of MIPS assembly,
  driving a memory-mapped bitmap display and keyboard from a frame-based game loop.
- Implemented gravity that speeds up over time, pause and resume, capsule hold,
  and a five-capsule preview queue, managing every register and stack frame by
  hand.

**UHelper** · Java, AWS EC2, PM2 · Jun. 2024 – Aug. 2024

- Built a recipe suggestion feature on the EDAMAM API, with a paginator that
  works around Discord's embed size limit.
- Deployed the bot on AWS EC2 with PM2 and automated its releases through GitHub
  webhooks.
- Organized weekly meetings and wrote the team's git workflow and hosting docs.

**[WasedaTime](https://wasedatime.com)** · Web Developer and PM · TypeScript,
React, Tailwind · Feb. 2022 – Aug. 2023

- Pushed for UX improvements to an established open-source campus web app,
  co-designing redesigns in Figma and implementing UI refinements in React and
  TypeScript.
- Ran Instagram content campaigns beyond my engineering role to grow the app's
  student following.

---

## Activities

- Dragon boat racing with a Toronto team, competing at the Toronto Islands
  regatta and the Can-Am Cup (2026)
- Hart House Singers, University of Toronto
