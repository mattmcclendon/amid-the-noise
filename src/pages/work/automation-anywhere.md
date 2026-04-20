---
layout: ../../layouts/PublicationLayout.astro
title: "Designing Human‑in‑the‑Loop Control for AI Automation"
description: "Restructuring AI-driven automation at Automation Anywhere to improve trust, control, and decision clarity in high-stakes workflows."
author: "Matthew McClendon"
heroImage: ""
heroAlt: ""
---

<p class="case-meta">Automation Anywhere · UX Strategy & Intelligent Automation Lead (Principal) · 2020–2021</p>

---

## Context

Automation Anywhere is an enterprise RPA platform used to automate operational workflows across finance, IT, and back-office systems. The platform was evolving from deterministic, rules-based bots to AI-enhanced automation capable of handling unstructured data and probabilistic outcomes.

This shift introduced a new class of risk: decisions made by models, not just scripts. Users needed to understand, trust, and control system behavior in environments with real operational and compliance impact.

---

## The Problem

Rules-based bots were predictable but brittle. AI-enabled bots were adaptive but opaque.

Users encountered:
- limited visibility into model behavior and decision pathways
- unclear confidence thresholds and failure conditions
- difficulty intervening or escalating when outcomes were uncertain
- high cognitive load when validating automated results

The system could execute work, but it did not consistently support confident human judgment.

---

## Intervention

I led UX strategy to design human-in-the-loop control systems that make AI behavior observable, governable, and actionable.

These systems introduced control intentionally, requiring operators to validate, override, or escalate decisions at defined checkpoints. This ensured that automation remained accountable in scenarios where model confidence alone was insufficient.

Key changes included:

- **Explainability at the point of action**  
  Introduced confidence indicators, rationale surfaces, and structured summaries to support rapid validation of AI outputs.

- **Human-in-the-loop control patterns**  
  Designed clear intervention, override, and escalation pathways for sensitive workflows.

- **Progressive disclosure for complexity**  
  Revealed advanced controls and model details as users gained context, reducing onboarding friction without limiting power.

- **Telemetry and system visibility**  
  Built surfaces to expose model performance, error states, and system health for operators and administrators.

- **Workflow restructuring**  
  Translated automation steps into decision checkpoints, aligning system output with human review and accountability.

---

## Constraints

The work operated within:

- enterprise compliance and audit requirements  
- cross-functional dependencies across product, engineering, and go-to-market teams  
- existing customer automation pipelines and migration timelines  

Design improvements had to increase clarity and control without degrading throughput or increasing operational overhead.

This created tension between automation efficiency and human oversight, requiring careful design to avoid slowing systems while still preserving trust, auditability, and operator confidence.

---

## Outcome

The platform shifted from rigid execution to adaptive, controlled automation.

Observed outcomes included:

- **35% reduction in manual intervention** through clearer decision and escalation pathways  
- improved user trust and satisfaction with AI-assisted workflows (SUS increase and preference for AI-enhanced bots)  
- increased task efficiency and engagement following navigation and workflow improvements  
- reduced support burden during migration and improved adoption of new capabilities  

Operators who previously acted as passive recipients of automated output were now active participants in decision-making, with clear mechanisms to intervene when system behavior diverged from expectations.

---

## Result

Automation Anywhere evolved from a system that executed tasks to one that supported decisions.

AI did not replace the operator. It augmented judgment with visibility, control, and accountability.

The system shifted from:

> “Did the bot run?”

To:

> “Should this outcome be accepted, and why?”