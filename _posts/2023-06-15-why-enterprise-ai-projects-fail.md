---
layout: post
title: "Hot Take: Why Enterprise AI Projects Fail (It's Not the AI)"
date: 2023-06-15
categories: opinion
description: After a decade in AI across startups and enterprise, I can tell you — the model is never the problem.
---

I watched a Fortune 500 company spend €2.3 million on an "AI transformation initiative" that produced exactly one PowerPoint deck and a proof-of-concept that nobody used. The PoC worked brilliantly in the demo. It worked brilliantly in the boardroom. It never touched a real workflow because the department it was supposed to help hadn't been consulted during the eight-month build process.

This happens constantly. And I'm tired of people blaming the AI.

## It's always one of three things

I've been working in AI since 2013 — Intel Labs, then a PhD, then two startups, then the Turing Institute, now enterprise. In that time, I've seen the bones of 30 AI projects up close. The ones that fail, and most of them fail, share the same root causes. It's never the model. It's the data, the process, or the politics.

**The data.** Every AI project starts with the assumption that the data exists and is clean. It almost never is. At ZF, we had vehicle telematics data from millions of trucks across Europe. Sounds brilliant, right? Except the data came from 14 different hardware generations with different sensor configurations, different sampling rates, and different error codes for the same faults. We spent four months just building a normalisation layer before any ML work could begin.

I've seen this pattern everywhere. The data is in three systems that don't talk to each other. It's in a format that made sense in 2008 but is now incomprehensible. There's a critical field that's null 40% of the time because one team stopped filling it in years ago and nobody noticed.

**The process.** AI doesn't automate a process — it automates a specific version of that process. If the process isn't well-defined, standardised, and documented, the AI will learn one person's interpretation of it and produce garbage for everyone else.

At AutoPlan, we built scheduling optimisation for construction projects. The algorithm was genuinely good. The problem was that no two project managers defined "task dependency" the same way. One PM's "must finish before" was another PM's "should ideally overlap with." The AI couldn't resolve a disagreement that the humans hadn't resolved first.

**The politics.** This is the one nobody wants to talk about. AI projects threaten someone's territory. Always. The data team doesn't want engineering touching their pipelines. The operations team doesn't trust a model to make decisions they've been making by instinct for twenty years. Middle management sees automation and hears "we're going to need fewer managers."

I sat in a meeting once where a department head killed a project that had demonstrated a 30% efficiency improvement. His stated reason: "the methodology needs more validation." His actual reason, which he told me privately over coffee: "if this works, my team goes from fifteen people to eight, and I'm the manager of eight people instead of fifteen."

## The slide deck version vs reality

There's a genre of consulting presentation I call "The AI Transformation Slide Deck." It has a timeline. Phase 1: Data Strategy. Phase 2: Pilot. Phase 3: Scale. Phase 4: profit, presumably. The arrows are smooth. The milestones are quarterly. There is usually a stock photo of a robot handshaking a human.

(Tangent: I once counted the number of times the word "transformation" appeared in a 40-slide deck from a Big Four consultancy. It was 67 times. That's 1.675 transformations per slide. At some point, you're not transforming anymore, you're just rearranging.)

The reality looks more like this: spend three months discovering your data is a mess. Spend two months getting the right people in a room. Build a prototype in six weeks. Watch the prototype sit unused for four months because nobody owns the integration into existing workflows. Rebuild the prototype after the team that was supposed to use it tells you they actually need something completely different. Ship something small. Measure it obsessively. Iterate.

## What "AI transformation" actually means

The companies that succeed with AI don't treat it as a technology project. They treat it as an organisational change project that happens to involve technology.

That means: a sponsor who owns the outcome, not the output. A team that includes the people whose work will change, not just the people building the system. A willingness to change the process before automating it. And honest conversations about what happens to the people whose jobs are affected.

At ZF, the AI projects that shipped and stuck had one thing in common — they started with a specific person's specific problem. Not "optimise fleet maintenance" but "help Thomas know which van needs brake pads before next Tuesday." The specificity forced clarity on data, process, and politics before anyone wrote a line of code.

## So what should you actually do?

Start with one problem. Not a strategy, not a transformation, not a platform. One problem, owned by one person, with data that exists today. Make that person's life measurably better. Then do it again.

It's not a satisfying answer. It doesn't fill a slide deck. But it's the only approach I've seen work consistently in a decade of doing this.

The AI works. It's been working for years. It's everything around the AI that keeps breaking.
