---
layout: "../../../layouts/PublicationLayout.astro"
title: "The Edge of What We Know"
subtitle: "How consequential contribution turns unfamiliarity into domain fluency"
description: "What designing at Dremio taught me about outsider perception, situated learning, shared language, and the way collaborative teams move the boundary of expertise."
pubDate: "2022-01-01"
heroImage: "/images/writing/field-study-dremio.png"
heroAlt: "Abstract semantic data structures resolving into navigable pathways"
tags: ["Field Studies", "Collaborative Systems", "Enterprise Design"]
tier: "tier-1"
---

I entered Dremio with only marginal knowledge of the data domain.

I understood complex enterprise software. I knew how to make systems legible, how to reduce cognitive load without erasing necessary complexity, and how to build interfaces around consequential decisions. I was not a data analyst, data engineer, or database architect. SQL was not yet a language in which I could think with any fluency, and the conceptual territory surrounding lakehouses, repositories, lineage, and versioned enterprise data was largely unfamiliar.

Design work often begins before expertise feels complete, especially in technical domains where “complete” may be an imaginary threshold. Learning is an obvious responsibility; standing outside the work until learning has somehow finished is a less useful response.

At Dremio, I began contributing where my existing capabilities could carry real weight, then used collaboration to move the boundary of what I understood. Within approximately six months, I had progressed from designing first-time experiences to producing meaningful work on SQL editors, data repositories, job monitoring, version histories, and conflict resolution.

I learned the domain by entering the work and helping to make it understandable.

---

## The Brief Value of Not Knowing

Unfamiliarity is often described as a liability. It can be, particularly when confidence outruns understanding. It also creates a temporary form of perception that deserves more respect than most expert cultures give it.

Newcomers notice what experienced participants have learned to see through. We stumble over terminology that insiders use without explanation. We encounter conceptual discontinuities that have become invisible through repetition. We ask why two objects that appear identical behave differently, or why one workflow assumes knowledge that another laboriously explains.

That perception has a short half-life.

As we acquire fluency, we become faster and more capable. We also begin to normalize the assumptions surrounding the domain. The confusing term becomes familiar. The unexplained transition stops attracting attention. Soon we are explaining the system through the same language that once prevented us from understanding it.

Unfamiliarity is useful only when converted into evidence before familiarity erases it. Ignorance deserves no romance, and naïveté is a poor substitute for expertise.

A designer entering a new domain therefore carries two responsibilities at once. We must learn quickly enough to avoid imposing shallow interpretations on specialized work. We must also document what the domain looks like before its rough edges disappear from our own perception.

That balance is difficult to achieve through study alone. It becomes more plausible when learning occurs through consequential contribution.

---

## Onboarding as a Map of the Product

My first substantial work at Dremio focused on the first-time experience. Onboarding sat at an unusually productive intersection between what I already understood and what I needed to learn, far from the holding area where a new designer might remain safely removed from the “real” product.

A first-time experience is a compressed representation of a product’s conceptual architecture. Designing one forces the team to decide what a person needs to understand first, which dependencies can remain latent, where the product’s model diverges from prior expectation, and how much complexity can be introduced before orientation collapses.

At Dremio, a new customer needed to establish a project, connect infrastructure, navigate differences in administrative authority, invite collaborators, and arrive at a usable analytical environment. The sequence exposed relationships among workspace, cloud configuration, permissions, data, and team structure. Those relationships formed part of the grammar underlying nearly every specialized workflow that followed.

Designing the path taught me the terrain.

The learning was situated because every question had consequences. If I misunderstood who possessed AWS credentials, the handoff failed. If the sequence exposed permissions too early, an individual could not make progress. If it concealed infrastructure dependencies, the apparent simplicity would collapse the moment the product encountered an enterprise organization.

Engineers, product leaders, data experts, customers, and the behavior of the product itself supplied context I did not possess. I contributed interaction design, systems thinking, pattern recognition, and sensitivity to the assumptions the experience had not yet made explicit.

The value moved in both directions. I became more capable of working inside the domain while the domain benefited from someone who had not yet learned to excuse its discontinuities.

---

## Expertise Must Be Able to Travel

We often imagine expertise as a possession residing inside an individual. In collaborative work, its usefulness depends upon mobility.

A data engineer may understand the consequences of a schema change with extraordinary precision. That knowledge cannot improve an interaction if it remains encoded in a professional dialect the designer cannot interpret. The designer may recognize that users lack a stable sense of location inside a repository. That perception cannot improve the product if it never reaches the people shaping the underlying model.

The team needed no uniform distribution of expertise. It needed a surface through which different forms of knowledge could travel toward the decision.

Shared vernacular gave that movement structure. Branches, commits, histories, merges, and conflicts carried more than technical definitions borrowed from Git; together they supplied a model for independent work, accountable change, divergence, comparison, and safe convergence.

Engineers could use that model with technical precision. Designers could use it to reason about state, location, and consequence. Product leaders could use it to describe collaboration. Data practitioners could identify where the analogy held and where the material properties of data required a different answer.

Shared language made our differences communicable without making our expertise homogeneous.

Vocabulary performs a subtle function in collaborative work. Some teams resist specialized language because it can exclude people; others accumulate jargon until ordinary thought becomes impossible without a glossary. Interoperability offers a better standard. A term earns its place when it allows distinct forms of cognition to influence one another with greater precision.

---

## Designing Specialized Work Without Becoming the Specialist

As my domain fluency developed, the design work moved toward more specialized surfaces.

Versioned data needed to establish location before capability. A user had to know which repository and branch contained their work, how it related to the shared version, and whether it was current before the interface asked them to make a consequential change. History needed to expose authorship, time, and affected objects as evidence rather than as an activity log. Divergence needed a visible form. Commits required a deliberate review point where someone could inspect the consequences before making work permanent.

SQL exploration presented another cognitive problem. Analysts move repeatedly among finding data, writing a query, executing it, interpreting the result, and diagnosing failure. Fragmenting those activities across disconnected surfaces forces a user to reconstruct context while also holding an analytical hypothesis in working memory.

The interface needed to behave as a cockpit, holding data navigation, authoring, execution, results, and system status in a coherent operational field. SQL remained complex, but the complexity became observable enough for people to think inside it.

Merge conflicts revealed the boundary between automation and judgment. When the system could reconcile independent work safely, it should. When it could not, the interface needed to explain why, preserve the relevant alternatives, and return the decision to a properly informed human.

These were technical product problems with deeply human requirements: orientation, continuity, accountability, consequence, recovery, and trust.

Designers did not need to become data analysts to contribute to them. We needed enough domain knowledge to understand what our decisions carried, enough access to specialists to correct our blind spots, and enough confidence in our own discipline to recognize what domain familiarity alone could not solve.

---

## The Product as a Collaborative Surface

Dremio’s versioning model eventually struck me as a product-scale expression of the same collaborative philosophy that shaped the team.

People could work independently without losing their relationship to a shared source of truth. The system preserved history, made divergence visible, and created structured moments for comparison and convergence. When two contributions conflicted, neither had to disappear before someone understood the tradeoff.

Healthy collaboration attempts the same among people: give distinct lines of thought room to develop, preserve enough context to make them intelligible, and bring them into contact before synthesis becomes irreversible.

The metaphor should not be stretched beyond usefulness. Human disagreement is more complicated than a merge conflict, and no interface can resolve the politics of a room through version control. Still, the resemblance helped clarify something I had practiced for years without naming.

Collaboration requires more than proximity. It requires an architecture through which independent capability can converge without erasing its history.

---

## Moving the Edge

Within six months, I was contributing to parts of Dremio’s product that would have been beyond my credible reach when I arrived. Domain expertise remained essential; the difference was working inside a team where expertise could move.

The pattern has influenced how I enter unfamiliar systems ever since. I look for the edge at which my existing capabilities can produce immediate value. I begin there, where contribution is honest but still demands learning. Then I use the relationships surrounding the work to extend the boundary.

The practice is more demanding than waiting for permission from expertise and more responsible than substituting confidence for it. Every contribution becomes both an intervention and a question: the work changes the product while the response changes the practitioner.

I eventually found a concise way to describe the practice:

> I contribute at the edge of what I know, then use collaboration to move that edge.

A well-composed team allows the domain to benefit from the newcomer while the newcomer is still learning the domain. Over time, unfamiliarity becomes fluency, contribution becomes more specialized, and the edge moves far enough that the distinction between learning and working becomes difficult to locate.

Perhaps the boundary was always less useful than the work made it appear.

---

This article is supporting content for [Designing the Collaborative Surface](/writing/papers/designing-the-collaborative-surface/). For product imagery, workflow details, and project outcomes, read the professional case study: [Moving the Edge at Dremio](https://mattm.cc/case-studies/dremio-enterprise-systems/).
