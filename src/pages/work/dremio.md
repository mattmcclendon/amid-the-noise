---
layout: ../../layouts/PublicationLayout.astro
title: "Designing Decision Clarity in Distributed Data Systems"
description: "Restructuring data workflows at Dremio to reduce ambiguity, improve trust, and accelerate decision-making across enterprise environments."
author: "Matthew McClendon"
heroImage: ""
heroAlt: ""
---

<p class="case-meta">Dremio · Principal Product Designer · 2021–2022</p>


---

## Context

Dremio operates as a data lakehouse platform in enterprise environments where analysts, data scientists, and engineers must access and act on large, distributed datasets.

Customers included financial institutions and infrastructure companies operating under strict performance, scale, and compliance constraints. These environments required both flexibility for exploration and rigor for governance, often within the same workflow.

---

## The Problem

The core issue was not access to data. It was the gap between data availability and decision clarity.

Users encountered:
- slow and inconsistent query performance  
- fragmented workflows across tools and teams  
- limited visibility into dataset quality, lineage, and permissions  

Non-technical users relied heavily on engineering support to access and validate data. Technical users could retrieve data, but lacked efficient ways to assess trust and act on it quickly.

The system produced data, but lacked the structure required to turn that data into accountable decisions.

---

## Intervention

I led UX strategy to restructure how users discover, trust, and act on data within the platform.

The focus was not on interface polish, but on making system behavior legible at the point of decision.

This required introducing structure intentionally, constraining how data could be explored and interpreted so that speed did not come at the expense of trust or decision reliability.

Key changes included:

- **Role-aware interfaces**  
  Aligned permissions, visibility, and available actions with user context, reducing friction while preserving governance boundaries.

- **Dataset previews and metadata surfaces**  
  Introduced lightweight views into schema, freshness, usage, and structure, enabling rapid trust decisions before query execution.

- **Guided onboarding and workflows**  
  Reduced dependency on engineering by helping users understand how to safely explore and interact with data from the outset.

- **Self-service exploration through semantic layers**  
  Enabled non-technical users to discover and work with curated datasets without writing complex queries.

- **Lineage, validation, and feedback loops**  
  Made transformations, dependencies, and system behavior visible, supporting auditability and confidence in outputs.

---

## Constraints

The work operated within:

- high-scale distributed data systems  
- existing customer pipelines and infrastructure  
- strict governance, compliance, and audit requirements  

Any improvement in usability had to preserve performance characteristics and system integrity. Simplification could not come at the cost of control.

This created tension between flexibility and governance, particularly for advanced users who expected unrestricted access, requiring careful tradeoffs between openness, performance, and decision safety.

---

## Outcome

The system shifted from data access as a technical task to decision-making as a structured process.

Observed outcomes included:

- up to **20× improvement in query performance** in customer environments  
- **reduced onboarding friction** and increased adoption across analytics and data teams  
- up to **80% reduction in data preparation time** through self-service workflows  
- improved **trust and auditability** via integrated lineage and governance signals  
- faster **time-to-insight** across modeling, analytics, and product workflows  

Critically, users who previously depended on engineering to interpret data were able to independently assess, trust, and act on datasets within defined boundaries.

---

## Result

Dremio moved closer to functioning as a decision system rather than a data system.

The interface did not remove complexity. It made it observable, navigable, and actionable.

That shift allowed users to move from asking:

> “Where is the data?”

To:

> “Can I trust this, and what should I do next?”

---

<p class="case-nav">Next: <a href="/work/automation-anywhere">Automation Anywhere →</a></p>