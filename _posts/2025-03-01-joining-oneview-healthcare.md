---
layout: post
title: "Joining Oneview Healthcare: AI in Connected Care"
date: 2025-03-01
categories: professional
description: Platform team lead at a connected care company serving major hospital systems, and why healthcare is the hardest place to ship software.
---

My first week at Oneview, I watched a nurse in a partner hospital tap a bedside tablet to order a meal for a patient who couldn't speak. The patient's dietary restrictions, their allergen profile, their care plan preferences, all surfaced automatically. The nurse didn't think about it. She just tapped.

That's what "connected care experience" actually means, and it took me about three months to properly understand it.

## What Oneview Does (and Why It's Harder Than You Think)

Oneview builds the software that runs on those bedside tablets and in-room displays in hospitals. If you've been in a modern hospital room in the US, Ireland, or Australia, you may have seen one: a screen that lets patients control their room, order meals, watch TV, message their care team, view their care plan, and fill out surveys.

Sounds straightforward, right? It's not. These systems integrate with the hospital's EHR (electronic health record), meal ordering systems, nurse call systems, entertainment platforms, patient education libraries, and about fourteen other things that were all built by different vendors in different decades. The integration surface is enormous.

I'm leading a platform team of 7 engineers plus QA. Our job is the infrastructure that makes all those integrations reliable and the platform that other teams build features on top of. It's the plumbing. Nobody notices plumbing until it breaks, and in a hospital, "breaks" has a different weight than in most software companies.

## Why Healthcare Is Hard

I've built software in energy, smart cities, and consumer apps. Healthcare is a different animal entirely. Three things make it uniquely difficult:

**Regulation is not optional.** HIPAA in the US, GDPR in Europe, various Australian privacy frameworks. Every feature decision has a compliance dimension. You can't move fast and break things when "things" include patient data.

**The users don't choose you.** Patients don't download Oneview from the App Store. Hospitals buy the system, IT departments deploy it, nurses configure it, and patients use it. That's four distinct user groups with different needs, and none of them chose you the way a consumer chooses an app. You earn trust through reliability.

**Uptime expectations are non-negotiable.** If your SaaS project management tool goes down for 20 minutes, people grumble. If a hospital bedside system goes down, a patient can't communicate with their care team. The stakes are just different.

(A tangent: I spent a good chunk of my PhD modelling energy harvesting systems, which also had a "you can't just restart it" constraint. There's something about working on systems where failure has physical consequences that changes how you think about architecture. You get very boring about redundancy, and I mean that as a compliment.)

## The Integration Strategy

When I joined, one of my first priorities was understanding the integration landscape. Oneview connects to Epic, Cerner, and other major EHR systems. Each hospital has its own configuration, its own quirks, its own IT team with their own opinions about API standards.

The strategy we're building is about making integrations more composable. Rather than bespoke point-to-point connections for each hospital, we want patterns that can be configured rather than coded. It's the kind of unglamorous architectural work that takes 6-12 months to pay off but makes everything faster after that.

We're also looking at where AI can help, which is why they brought someone with my background onto the platform team. Not "AI for the sake of AI" (I've seen enough of that to last a lifetime) but specific, bounded applications where machine learning or language models can make clinicians' lives easier. Patient communication, clinical documentation, care plan personalisation. All with the appropriate guardrails, because (see above) healthcare.

## Managing Engineers Again

I hadn't managed a team this size since Domus AI, and I'd forgotten how much of management is just removing obstacles. My 7 engineers are brilliant. They don't need me to tell them how to write code. They need me to make sure they have clear requirements, unblocked dependencies, and enough context to make good decisions.

The QA dimension is interesting too. In healthcare, testing isn't just "does it work?" It's "does it work in the specific configuration that Hospital X uses, with their specific EHR version, their specific network topology, and their specific interpretation of the HL7 FHIR spec?" We have the bones of 200 distinct hospital configurations to consider.

## What's Next

I'm three weeks in as I write this, and I'm still in the "drinking from the firehose" phase. But I can already see where this is going. The connected care space is ready for a proper AI strategy. Not chatbots slapped onto existing workflows, but thoughtful integration of AI capabilities into the care experience.

More on that as it develops. For now, I'm learning how hospitals work, and it turns out that's quite a lot to learn.
