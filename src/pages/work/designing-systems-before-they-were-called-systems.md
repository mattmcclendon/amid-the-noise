---
layout: ../../layouts/PublicationLayout.astro
title: "Designing Systems Before They Were Called Systems"
description: "Early lessons from Friendster, Autodesk, and Evernote on how systems can appear to function while failing beneath the surface—and how those patterns shape system design today."
author: "Matthew McClendon"
heroImage: ""
heroAlt: ""
---

<p class="case-meta">Foundations · 1996–2016</p>

---

## Context

In the early stages of the web, systems were built before the language to describe them fully existed.

There were no established patterns for:
- large-scale social interaction  
- distributed user identity  
- real-time global infrastructure  
- product ecosystems spanning multiple platforms  

What existed instead were working systems—applications that functioned, scaled, and delivered value on the surface.

Underneath, many of them were operating at the edge of failure.

---

## Pattern: Systems That Appear Stable

Across multiple environments, a consistent pattern emerged:

> systems can appear stable while failing in fundamentally different ways

They may:
- degrade under load without fully breaking  
- remain functional while resisting change  
- validate ideas that do not belong in the larger system  

These failures are often not immediate. They are gradual, normalized, and difficult to detect until they become systemic.

---

## Example: Friendster

At Friendster, rapid growth exposed a fundamental mismatch between system design and real-world scale.

The product worked. Users could connect, interact, and engage.

But as the system expanded, performance degraded:

- load balancing struggled under increasing demand  
- response times slowed  
- core interactions became unreliable  

The system did not fail all at once.

It continued to operate, but with increasing friction.

From a distance, it still appeared functional.  
From within, it was becoming unstable.

---

## Example: Autodesk

At Autodesk, the challenge was different.

The systems were stable, mature, and deeply embedded.

They worked reliably.

But that reliability masked a deeper issue:

- legacy architecture limited adaptability  
- changes became increasingly complex  
- evolution slowed as dependencies deepened  

The system did not degrade.  
It resisted transformation.

It continued to function while becoming progressively harder to change.

---

## Example: Evernote

At Evernote, the pattern shifted again.

Rather than scaling or legacy constraints, the challenge was understanding which ideas belonged within the system.

We explored this by launching standalone applications:
- Evernote Hello  
- Evernote Food  
- Evernote Places  

These products allowed us to test features in the wild, observing real user behavior outside the constraints of the core platform.

Individually, many of these applications appeared successful:
- they had engagement  
- they solved specific problems  
- they demonstrated clear value  

But success in isolation did not guarantee system fit.

A feature could work as a product and still not belong within the larger ecosystem.

To accelerate learning, we leaned more heavily on Android for early testing:

- faster iteration cycles  
- more flexible distribution through the Play Store  
- a broader and more responsive tester base  

This allowed us to validate ideas quickly.

It also revealed a key constraint:

> not all successful features translate into coherent systems

---

## Synthesis

Across these environments, a consistent insight emerged:

> functionality is not the same as reliability  
> performance is not the same as trust  
> success is not the same as fit  

Systems can appear to work while:

- degrading under scale  
- resisting necessary change  
- validating ideas that do not belong  

These conditions are often invisible until they begin to affect behavior, adoption, or evolution.

---

## Insight

These early experiences shaped how I approach system design today.

I do not assume a system is working because it appears to work.

I look for:

- where it degrades under pressure  
- how it responds to change  
- whether its components belong together  
- and whether it can be trusted over time  

---

## Result

The work that followed reflects this shift in perspective:

- designing systems that are **legible** (Dremio)  
- designing systems that are **controllable** (Automation Anywhere)  
- designing systems that are **governable** (Wells Fargo)  
- designing systems that are **explorable under constraint** (CA Technologies)  
- designing systems that are **accessible and observable at scale** (Registrar of Voters)  

These are not separate ideas.

They are responses to the same underlying problem:

> systems that appear to work, but cannot be trusted under pressure