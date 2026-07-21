---
layout: "../../layouts/PublicationLayout.astro"
title: "From Natural Interaction to Legible Agency"
subtitle: "What changes when AI moves from answering to acting"
description: "Punchcut's research reveals a gap between frequent AI use and natural interaction. The agentic leap adds a harder design problem: making authority, uncertainty, intervention, and recovery legible."
pubDate: "2026-07-22"
heroImage: "/images/writing/from-natural-interaction-to-legible-agency.png"
heroAlt: "Fine paths move through a folded boundary and resolve into directed actions, illustrating the transition from natural interaction to legible agency."
tags: ["AI", "DESIGN", "TRUST", "AGENCY"]
tier: "tier-1"
series: "Studio Mode"
edition: "Special Edition"
---

**STUDIO MODE — SPECIAL EDITION**

This edition began with a piece of research that stayed with me.

Ken Olewiler and the team at Punchcut recently examined the gap between the frequency with which people use AI and how natural those interactions actually feel. Their findings raise an important question about trust, personalization, and the relationships we are beginning to form with intelligent systems.

What follows is an attempt to carry that question one step further: what changes when AI stops answering and begins acting?

---

Ken and the research team have done something useful: they put numbers around a contradiction many of us have felt but have not named clearly.

In Punchcut’s survey of more than 600 consumers, 64% of respondents said they use at least one generative AI application. Among those users, 51% qualified as power users, engaging with AI several times a day across multiple applications. Yet frequency did not translate into ease. More than 80% of AI dabblers—and just over 60% of power users—still said interacting with AI did not feel natural. [Ken and the research team are careful to note that the survey does not establish why](https://www.uxmatters.com/mt/archives/2025/08/insights-on-ai-usage-for-an-agentic-ai-future.php). Personalization, tone, privacy, and inconsistent behavior are all plausible factors, but the cause remains open.

That finding has stayed with me because it disrupts the usual adoption story. People are not waiting on the sidelines for AI to become useful. Many have already folded it into the texture of their days. They are using it to plan meals, search for work, write, research, control their homes, and work through personal decisions. They are doing all of this while maintaining a certain distance from the experience.

Ken’s article argues that closing this gap will require greater trust, more adaptive personalization, and a richer emotional range. Where I think the research becomes especially interesting is at the seam between conversational AI and agentic AI—the moment a system stops responding and begins acting.

An assistant that drafts an email presents information for our review. An assistant that sends the email creates a consequence in the world. The language may be identical right up to that point, but the design problem is not.

Natural interaction helps us express intent. Agency requires the system to show us what it intends to do with it.

## The trouble with fluency

I spend a lot of time in Studio Mode with these systems: asking them to research, sort, draft, challenge a premise, assemble materials, and carry work across multiple steps. What changes my posture is rarely how human the exchange sounds. I pay attention to whether I can see the system’s working boundary.

Does it know which parts of the assignment are settled and which parts are still ambiguous? Can it distinguish an instruction from an inference? Does it understand what it may decide, what requires consultation, and what would be costly to undo?

A system can be gracious, concise, and emotionally calibrated while remaining opaque on every one of those questions. In some ways, fluency makes the problem harder. A confident sentence carries the same surface authority whether the underlying work is grounded, incomplete, or simply wrong.

Microsoft Research has been studying this under the term *appropriate reliance*: the ability to accept useful AI output without accepting incorrect or incomplete output simply because it arrives with authority. Its researchers point to a stubborn interaction problem. People are generally disinclined to verify AI responses, and generative AI makes errors harder to recognize because the responses are expressed with such fluency. Even explanations can backfire by adding the appearance of rigor without helping someone decide whether the answer deserves reliance. [The objective is not to maximize trust, but to bring reliance into proportion with actual capability](https://www.microsoft.com/en-us/research/quarterly-brief/sep-2024-brief/articles/fostering-appropriate-reliance-on-ai/).

That distinction matters even more when the output is an action.

Consider a modest request to a calendar agent: “Clear Thursday afternoon so I can finish the proposal.”

The sentence feels natural. The intention feels obvious. The execution is full of judgment.

Which meetings are movable? Does “afternoon” begin at noon or after lunch? Is the client review more important than the proposal? May the agent decline meetings, or only move them? Should it notify participants before finding new times? What does “finish” mean, and how much time should it protect? If three calendars are involved, whose inconvenience should it minimize?

A conversational interface can hide those decisions inside a smooth exchange. A well-designed agentic interface has to expose enough of them for the person to remain oriented without forcing that person to supervise every mechanical step.

That is the design problem I see coming into focus. We have spent years teaching machines to interpret human language. We now have to design the terms under which their interpretations become actions.

## Consent is no longer a setting

Traditional software tends to treat consent as an event. A person grants access to a calendar, inbox, contact list, or payment method, and the application retains that permission until it is withdrawn.

That model is too coarse for agents.

Access to a calendar does not answer whether an agent may cancel an appointment. Access to an inbox does not confer authority to represent someone in a conversation. Access to a payment method says nothing about acceptable price, timing, vendor, or risk.

The meaningful boundary is not between access and no access. It is between the decisions a system may make independently and the decisions a person expects to retain.

Those boundaries shift with context. I may allow an agent to reschedule an internal check-in without asking me, require approval before moving a client meeting, and prohibit it from declining a personal commitment. I may trust it to reorder a familiar product but want to review a new seller, a price increase, or a substitution. The same person, using the same agent, will draw the line differently as consequence, uncertainty, and reversibility change.

This is why I think the basic unit of agentic interaction is becoming a consent loop. The agent interprets a goal, establishes its operating boundary, acts within that boundary, and returns when the facts or stakes exceed it. Consent is maintained through the work rather than collected before it.

The loop does not need to feel bureaucratic. In a mature experience, much of it may be quiet. But the structure has to be there.

## Friction has a job

The dominant product instinct is to remove friction. Usually that instinct serves us well. Extra steps create abandonment, slow comprehension, and make routine work feel unnecessarily difficult.

Agentic systems complicate that rule because some friction protects judgment.

A 2021 experiment by Zana Buçinca, Maja Barbara Malaya, and Krzysztof Gajos compared conventional explainable-AI interfaces with “cognitive forcing” designs that required people to form or record their own judgment before seeing the AI recommendation. The interventions significantly reduced overreliance when the AI was wrong. The uncomfortable part of the result was that participants preferred and reported greater trust in the easier interfaces—even though they performed worse with them. [The designs people liked least were often the ones that helped them think more carefully](https://scholar.harvard.edu/files/zbucinca/files/bucinca2021trust.pdf).

That experiment involved decision support rather than a contemporary general-purpose agent, so I would not treat it as a direct prescription. It does reveal something important about experience design: subjective ease and effective human–AI performance can move in opposite directions.

A confirmation before every action would make an agent tedious. No confirmation at all would make it reckless. The design opportunity lies in deciding where a pause improves the combined judgment of the person and the system.

Low-cost, reversible, familiar actions should require little ceremony. As uncertainty, consequence, novelty, or irreversibility rises, the system should make the boundary visible. The friction should be proportional to the risk, not evenly distributed across the experience.

## What legible agency looks like

The word I keep returning to is *legibility*.

I do not mean exposing a model’s internal reasoning or covering the interface with technical telemetry. People need a useful account of the working relationship: what the system understood, what it assumed, what it is authorized to do, where it is in the process, and what changed as a result.

In the calendar example, the agent might respond:

> I found three hours by moving the internal project review to Friday. I left the client call and your 4:00 personal appointment unchanged. I can send the revised invitation now, or show you two other options.

That response is not dramatically more human. It is more useful because it reveals the interpretation, the boundary, the proposed action, and the remaining choice.

Once I started looking at agentic experiences this way, three qualities kept appearing.

The first is legibility before action. Can I see the agent’s operative understanding before an ambiguous instruction becomes a consequential decision?

The second is interruptibility during action. Can I redirect the work when new information arrives, or does autonomy mean the system disappears until it has completed the wrong assignment?

The third is reversibility after action. Can I inspect what changed, restore the prior state, and recover without reconstructing the entire sequence myself?

These are related, but they solve different failures. Legibility catches misunderstanding. Interruptibility addresses changing context. Reversibility makes experimentation survivable.

There is evidence that systems benefit when they communicate their own limits accurately. In a recent human–machine classification study, a system trained to assess when it did and did not need human help produced roughly a 40% improvement in reported trust and a 5% improvement in team performance, despite having the same underlying classification accuracy as the comparison system. It also reduced both overreliance and unnecessary human takeover. [The capability had not improved; the system’s representation of its capability had](https://pmc.ncbi.nlm.nih.gov/articles/PMC12146354/).

That is a subtle but important design lesson. Reliability alone does not create a reliable relationship. The system must also help the person understand when that reliability applies.

## Trust should vary

We often describe trust as something an AI earns over time, followed by progressively greater autonomy. That is directionally sensible, but too linear.

I may trust an agent to compare fifty flights and still refuse to let it choose one. I may let it modify thousands of lines in a test environment while requiring approval for a one-line production change. I may trust it to draft sensitive language precisely because I know I will review every word.

Trust varies by task, domain, consequence, and recoverability. Familiarity with one behavior should not quietly expand authority somewhere else.

This is why “build trust” feels incomplete as a product objective. An agent that inspires more confidence than its performance warrants has not succeeded. Neither has one whose opacity causes people to reject work it consistently performs well.

The healthier aim is calibrated trust: helping people rely on a system where the evidence supports reliance and pause where it does not.

The emerging governance language points in the same direction. The NIST AI Risk Management Framework calls for organizations to define human and AI roles, document system limits, monitor behavior in production, support human review, and ensure systems can fail safely when operating beyond their knowledge. [Those may sound like governance concerns, but each eventually becomes an experience-design decision](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/). Someone has to decide when the interface reveals uncertainty, how authority is represented, where intervention remains possible, and what recovery looks like.

If I were reviewing an agentic product tomorrow, I would put five questions on the wall:

1. What is the system allowed to decide?
2. What does it show before a consequential action?
3. What causes it to stop and return judgment to a person?
4. Can someone redirect it without starting over?
5. When the system is wrong, what can be recovered—and who owns the recovery?

Those questions tell me more about the maturity of an agent than whether its personality is warm, direct, playful, or polite.

## Beyond natural

Punchcut’s research gives us a valuable starting point. High use has not produced a corresponding sense of naturalness, even among people who interact with AI many times a day. Ken is right to see that gap as a design challenge involving trust, personalization, and the quality of the relationship.

The agentic leap adds another layer.

As AI becomes capable of doing more, the experience has to preserve a person’s ability to understand and shape what is happening. Sometimes that will mean a smoother conversation. Sometimes it will mean a deliberate pause, a visible assumption, a constrained permission, or an honest admission that the system does not know enough to proceed.

The measure of progress is not whether the machine disappears into the interaction. It is whether the person remains present in the outcome.
