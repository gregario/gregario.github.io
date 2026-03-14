---
layout: post
title: "Founding Domus.ai: Can AI Fix the UK Planning System?"
date: 2017-03-15
categories: professional
description: Starting an AI company to tackle planning applications while doing a PhD at Imperial.
---

There are roughly 900,000 planning applications submitted in England every year. Nine hundred thousand. Each one gets assessed by a human planning officer, cross-referenced against local and national policy, checked for neighbour objections, and eventually approved or rejected. The median decision time is about 8 weeks, but that's a generous average — complex applications can drag on for months or years.

I looked at this system and thought: surely a machine can do at least some of this faster.

That's how Domus.ai started. Not with a business plan or a pitch deck, but with the naive optimism of a PhD student who'd been reading too many NLP papers and not enough planning law.

## The Idea

The core concept was straightforward. Planning applications follow rules. Rules can be encoded. If you can parse the application documents (drawings, design statements, site plans) and match them against planning policy, you can automate at least the initial assessment. Flag the obvious approvals, flag the obvious rejections, and let the planning officers focus on the genuinely difficult cases.

We started with permitted development rights — the rules that say what you can build without needing full planning permission. Things like: you can extend your house by up to 4 metres if it's detached, 3 metres if it's semi-detached, the extension can't be higher than 4 metres, can't cover more than half the garden, and about forty other conditions that interact in ways that would make a Prolog interpreter weep.

Seemed tractable. Seemed like a good first product.

## The Reality

Here's what I didn't appreciate: planning law is not computer science. It's not even law in the way most people think of law. It's a strange hybrid of national legislation, local policy documents, supplementary planning guidance, conservation area rules, Article 4 directions, and — critically — officer discretion.

That last one is the killer. A planning officer can look at your perfectly-compliant extension and say "yes, but it would harm the character of the street scene" and refuse it. Try encoding "character of the street scene" into a decision tree. I'll wait.

We spent weeks building rule engines for permitted development and kept finding edge cases that weren't really edge cases — they were the norm. Every local authority interprets the rules slightly differently. The national planning policy framework uses phrases like "significant harm" and "substantial weight" without defining what those mean. It's deliberately vague, because planning is fundamentally about balancing competing interests, and you can't balance competing interests with a flowchart.

## Running a Startup During a PhD

I should mention: I was doing all of this while writing my PhD at Imperial. This was, in hindsight, completely mental.

The PhD work was on energy harvesting and IoT — about as far from planning law as you can get. So my days would go: morning in the lab debugging sensor firmware, afternoon on calls with planning consultants trying to understand Use Class Orders, evening writing papers about battery degradation. My supervisor Julie was remarkably patient about it, possibly because I was still publishing, but I suspect she thought I'd lost the plot.

The honest truth is that running both simultaneously made me worse at both. My PhD could have been six months shorter if I'd focused on it. Domus.ai could have moved faster with full-time attention. But I was 27 and convinced I could do everything. You live and learn.

## What We Actually Built

We got a working prototype that could assess basic permitted development queries. You'd put in your property details — house type, location, conservation area status — and it would tell you what you could and couldn't build without planning permission. We validated it against 200 real applications and got the bones of 85% accuracy.

That sounds decent until you realise that the 15% it got wrong were exactly the cases where people would rely on it most — the ambiguous ones. Nobody needs an AI to tell them they can put up a garden fence. They need help with the loft conversion that's 0.3 metres too close to the boundary but might be fine because the neighbour's already done the same thing.

We also discovered something I probably should have known from the start: the people who submit planning applications aren't the ones who'd pay for an AI tool. The architects and planning consultants who prepare applications already know the rules. The local authorities who assess them have zero budget for new technology. And homeowners who just want to build an extension would rather pay £200 for a planning consultant to give them a definitive answer than trust an algorithm.

## The Takeaway

Domus.ai taught me that domain expertise matters more than technical sophistication. We had decent NLP, reasonable rule engines, and a genuine problem to solve. What we didn't have was a deep enough understanding of how planning actually works on the ground — the politics, the precedents, the human relationships between applicants and officers.

I still think the UK planning system is ripe for technology. But the winning approach probably isn't "replace the planning officer with AI." It's more like "give the planning officer better tools so they can handle more applications." Less revolutionary, more useful.

We kept going for a while after this, but that's a story for another post.
