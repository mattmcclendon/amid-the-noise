---
layout: "../../layouts/PublicationLayout.astro"
title: "The Layer SAP Just Bought"
subtitle: "Where data becomes decision"
description: "SAP’s acquisition of Dremio signals a shift toward systems that govern how data is interpreted and acted on."
pubDate: "2026-09-24"
heroImage: "/images/writing/the-layer-sap-just-bought.png"
heroAlt: "Abstract diagram of data flowing through a system with lineage paths and decision points highlighted"
tags: ["Decision Systems", "Signal", "Systems"]
tier: "tier-1"
---

SAP is acquiring Dremio.

I led UX at Dremio during its first year of operation in 2021, stepping away for health reasons.

Day to day, the work lived in details:

Onboarding flows.  
OAuth and identity.  
Tableau integration.  

We focused on reducing friction between login, identity resolution, and first meaningful query so users could get to data without getting blocked on permissions or unclear system state.

In parallel, I established an early design pattern library to bring consistency across the product and create a shared foundation for how these flows were built and evolved.

At the time, it felt like feature work.

It wasn’t.

It was the boundary where data becomes usable context.

This acquisition is a clear signal. The industry is consolidating around the layer that governs how information is assembled, interpreted, and turned into action.

That layer is becoming the product.

It’s also where most systems still break.

Three patterns show up consistently:

- Access and intent drift apart. Users see data they don’t fully understand or can’t act on with confidence.  
- Lineage is abstracted away. The “why” behind a dataset disappears right when decisions are made.  
- Integration optimizes for connectivity, not clarity. Data moves freely, but meaning degrades as it flows.

These aren’t edge cases. They’re structural.

I would start by making lineage a first-class surface in the query and result view, so every dataset carries its origin and transformations at the moment a decision is made.

That single shift changes how people trust and act on data.

That’s the work I’m focused on now.

There’s a lot more to build in this layer.