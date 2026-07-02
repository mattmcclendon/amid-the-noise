---
layout: ../../../../layouts/PublicationLayout.astro
title: "Designing Human-in-the-Loop Control for AI Automation"
description: "Restructuring AI-driven automation at Automation Anywhere to improve trust, control, and decision clarity in high-stakes workflows."
author: "Matthew McClendon"
heroImage: "/images/writing/designing-human-in-the-loop-control-for-ai-automation.png"
heroAlt: "Hero image for the Automation Anywhere case study 'Designing Human-in-the-Loop Control for AI Automation.'"
---

<p class="case-meta">Automation Anywhere | UX Strategy & Intelligent Automation Lead (Principal) | 2020-2021</p>

---

## Context

Automation Anywhere is an enterprise RPA platform used to automate operational workflows across finance, IT, and back-office systems. The platform was evolving from deterministic, rules-based bots to AI-enhanced automation capable of handling unstructured data and probabilistic outcomes.

This shift introduced a new class of risk: decisions made by models, not just scripts. Users needed to understand, trust, and control system behavior in environments with real operational and compliance impact.

---

## The Problem
Rules-based bots were predictable but brittle. AI-enabled bots were adaptive but opaque.

A bot could extract invoice data with high statistical confidence while still misclassifying a vendor or routing a payment incorrectly. Operators often lacked enough context to determine whether the system was confidently correct or confidently wrong.

Users encountered:
- limited visibility into model behavior and decision pathways
- unclear confidence thresholds and failure conditions
- difficulty intervening or escalating when outcomes were uncertain
- uncertainty in high-impact decisions without clear system rationale

The system could execute work, but it did not consistently support confident human judgment.

---

## Intervention

I led UX strategy to design human-in-the-loop control systems that make AI behavior observable, governable, and actionable.

These systems introduced control intentionally; requiring operators to validate, override, or escalate decisions at defined checkpoints. The challenge was not adding oversight universally; it was determining where uncertainty justified friction and where automation should remain invisible. This ensured that automation remained accountable in scenarios where model confidence alone was insufficient.

Key changes included:

- **Explainability at the point of action**  
  Introduced confidence indicators, rationale surfaces, and structured summaries to support rapid validation of AI outputs.

- **Human-in-the-loop control patterns**  
  Designed clear intervention, override, and escalation pathways for sensitive workflows.

- **Progressive disclosure for complexity**  
  Revealed advanced controls and model details as users gained context, reducing onboarding friction without limiting power.

- **Telemetry and system visibility**  
  Built operational telemetry surfaces so administrators could identify drift and failure patterns before automation errors cascaded downstream.

- **Workflow restructuring**  
  Translated automation steps into decision checkpoints, aligning system output with human review and accountability.

---

## Constraints

The work operated within:

- enterprise compliance and audit requirements  
- cross-functional dependencies across product, engineering, and go-to-market teams  
- existing customer automation pipelines and migration timelines  


Design improvements had to increase clarity without degrading throughput or increasing operational overhead. Oversight was designed to activate selectively: low-risk outcomes flowed through automatically, while ambiguous or high-impact decisions triggered human validation checkpoints.

This created tension between automation efficiency and human oversight, requiring careful design to preserve trust, auditability, and operator confidence without sacrificing the efficiency gains of automation.

---

## Impact

The platform shifted from rigid execution to adaptive, controlled automation.

Observed outcomes included:

- **35% reduction in manual intervention** through selective escalation controls that focused human attention on ambiguous or high-impact decisions  
- improved user trust and satisfaction with AI-assisted workflows (SUS increase and preference for AI-enhanced bots)  
- increased task efficiency following navigation and workflow improvements  
- reduced support burden during migration and improved adoption of new capabilities  

Operators who previously acted as passive recipients of automated output became active participants in governed decision-making.

Automation Anywhere evolved from a system that executed tasks to one that supported governed decision-making.

AI did not replace the operator. It supported augmented judgment with visibility, control, and accountability.

The system shifted from:

> “Did the bot run?”

To:

> “Should this outcome be accepted, and why?”