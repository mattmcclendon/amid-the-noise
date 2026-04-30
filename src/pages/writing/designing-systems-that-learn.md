---
layout: ../../layouts/PublicationLayout.astro
title: "Designing Systems That Learn: A Practitioner’s Update"
subtitle: "Revisiting the UX–Data Science partnership in the age of continuous learning systems"
description: "A refreshed perspective on feedback loops, machine learning, and the evolving partnership between designers and data scientists."
pubDate: 2026-07-30
author: "Matthew McClendon"
heroImage: "/images/writing/designing-systems-that-learn.png"
heroAlt: "Abstract loop of data, algorithm, interface, and action forming a continuous system"
tags: ["AI systems", "UX strategy", "decision systems"]
---

## Preface

This piece was first published in February 2020 via UX Collective. At the time, systems that learned from users still felt emergent. Today, they define the baseline.

What follows is not a rewrite. It is a recalibration. The core loop remains intact. The implications have deepened.

---

## The Feedback Loop as Architecture

![Figure 1. A feedback loop characterizes services that learn from their users.](/images/writing/designing-systems-that-learn-fig-1.png)

Systems that learn from users are best understood as a loop:

- Data captures behavior  
- Algorithms transform data into signals  
- Interfaces translate signals into experience  
- Actions generate new data  

This is not a feature. It is the system.

The consequence is simple and easy to underestimate. Experience design no longer ends at the interface. It extends into how systems learn, what they optimize for, and how they adapt over time.

---

## What Changed Since 2020

Three shifts matter.

**1. From features to behavior shaping**  
Products no longer just respond. They anticipate, guide, and sometimes steer. The line between assistance and influence has thinned.

**2. From models to systems**  
A model in isolation has no value. Value emerges only when the loop closes. Data quality, feedback design, and evaluation now matter as much as model choice.

**3. From outputs to decisions**  
Many systems now participate in decisions. Financial approvals, content ranking, risk scoring. The interface is no longer just display. It is a negotiation between human judgment and machine inference.

---

## Designing in a Non-Deterministic World

Traditional software behaves like a script. Machine learning behaves like a probability distribution.

That distinction forces new design responsibilities:

### Design for Discovery  
Recommender systems shape what users encounter. The challenge is not relevance alone. It is exposure.  
What users see defines what they can become.

### Design for Decision-Making  
Interfaces now carry probabilistic outputs into human choices. Precision matters, but clarity matters more.  
A confident wrong answer is more dangerous than a transparent uncertain one.

### Design for Uncertainty  
Every prediction contains error.  
The question is not whether the system fails. It is how that failure is communicated, contained, and learned from.

### Design for Engagement  
Engagement can be engineered. That is now trivial.  
The harder question is whether it should be.

---

## The Data Science Loop

![Figure 2. The data science method and its cyclical processes of constant evaluation and refinement.](/images/writing/designing-systems-that-learn-fig-2.png)

Data science follows a structured cycle:

- Define a question  
- Form a hypothesis  
- Build and test models  
- Evaluate against a baseline  
- Deploy and measure in production  
- Iterate or reformulate  

Two truths matter here:

1. Models are only meaningful relative to alternatives  
2. Production is the real test environment  

This introduces tension with design, which often seeks coherence before deployment. Data science accepts uncertainty as a starting condition.

---

## Where Designers and Data Scientists Miss Each Other

The friction is not technical. It is conceptual.

**Designers build narratives about users**  
Personas, journeys, motivations

**Data scientists build statistical representations**  
Features, distributions, correlations

Both are abstractions. They operate at different layers.

The bridge is translation.

A behavioral insight becomes a question.  
A question becomes a measurable signal.  
A signal becomes a model input.

Without that translation, teams talk past each other while using the same words.

---

## The Real Unit of Design: The Loop

The most important shift is this:

You are not designing screens.  
You are designing loops.

A well-designed loop answers:

- What data is captured, and why  
- What the system optimizes for  
- How outputs are interpreted by humans  
- How feedback improves future behavior  

If any part breaks, the system degrades. Quietly at first. Then all at once.

---

## Cold Start, Drift, and Exit

Three moments define the lifecycle:

**Onboarding (Cold Start)**  
The system knows nothing.  
Design must create value before intelligence exists.

**Evolution (Learning and Drift)**  
The system improves, but not uniformly.  
Edge cases expose the truth of the design.

**Offboarding (End of Relationship)**  
Users leave. Devices get abandoned. Data persists.  
Few systems are designed for a graceful ending.

This last phase remains underdesigned and underestimated.

---

## A Working Model for Collaboration

Effective teams converge on a shared rhythm:

- Co-create the experience vision early  
- Translate qualitative insights into measurable questions  
- Define success metrics before building  
- Expose model limitations explicitly  
- Treat user interaction as both experience and data generation  

This is less about process and more about alignment. Teams fail when each discipline optimizes locally.

---

## The Ethical Center

Systems that learn are not neutral.

They encode:
- What is measured  
- What is optimized  
- What is ignored  

Designers and data scientists now share responsibility for behavioral outcomes at scale.

That includes attention, trust, and decision integrity.

---

## Closing

In 2020, the feedback loop was a useful model.

In 2026, it is the substrate of digital experience.

The work is no longer about integrating machine learning into products.

It is about designing systems where learning itself becomes part of the user experience.

---

## References

Levy, S. (2016). *How Google is Remaking Itself as a Machine Learning First Company*  
Hebron, P. (2016). *Machine Learning for Designers*  
Weyenber, A. (2016). *The Ethics of Good Design*  
Zinkevich, M. (2017). *Rules of Machine Learning*