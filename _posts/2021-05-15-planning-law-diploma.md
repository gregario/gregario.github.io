---
layout: post
title: "Planning Law Diploma: What I Learned and Why Engineers Should Study Law"
date: 2021-05-15
categories: professional
description: Completing the King's Inns diploma in Environmental and Planning Law, and why legal frameworks are basically state machines.
---

I finished the Advanced Diploma in Environmental and Planning Law at King's Inns in late 2020, which means I've now had about six months to process what I learned and how it's changed how I think about building software. The short answer: enormously. The long answer is this post.

I wrote about starting the diploma in an earlier post, so I won't repeat the "why" in detail. The summary: I was building AutoPlan, an AI tool for the planning system, and I decided I needed to understand the domain at a professional level, not just a Wikipedia level. The diploma was my way of doing that.

But this post isn't about AutoPlan. It's about what the experience taught me as an engineer, and why I think more technical people should spend time studying law.

## Legal Frameworks Are State Machines

This is the insight that hit me about three weeks into the course, during a lecture on judicial review procedure, and it hasn't left me since.

A planning application moves through a series of defined states. It's submitted (initial state). It's validated (transition: all required documents present?). It goes to public consultation (transition: mandatory waiting period). It's assessed by a planner (transition: compliant with development plan?). It's decided: granted, granted with conditions, or refused (terminal states). It can be appealed (transition back to assessment, by a different body). The appeal is decided (new terminal state).

Every transition has preconditions. Every state has defined actions. The system is deterministic in structure even when individual decisions involve judgment. It is, unmistakably, a finite state machine. And once you see it that way, you can model it, which means you can build software for it.

I actually drew out the state diagram during a lecture, using UML notation I hadn't touched since my undergrad software engineering module. The barrister sitting next to me looked at my notebook, looked at me, and said, "What language is that in?" I told her it was a state transition diagram. She told me it was the clearest summary of planning procedure she'd ever seen. We were both right.

## Systems Thinking in a Wig

Here's what legal education teaches that engineering education doesn't, at least not explicitly: how to reason about systems that are designed by committee, amended by crisis, and interpreted by humans.

The Irish planning system is not a clean, well-designed system. It's the product of decades of legislation, each Act responding to the political and economic context of its time. The Planning and Development Act 2000 was the big consolidation, but it's been amended dozens of times since. Environmental assessment requirements were bolted on because of EU directives. Strategic housing development provisions were added during the housing crisis and then removed when they proved controversial.

The result is a system full of edge cases, exceptions, and contradictions. Ring any bells? It should. This is exactly what legacy codebases look like. And the skills you need to work with them are the same: patience, close reading, willingness to trace dependencies, and the humility to accept that you won't understand everything on the first pass.

Here's a tangent: I once spent two hours tracing a cross-reference chain in the Planning and Development Regulations. Section 34(2)(a) of the Act references "prescribed requirements," which are defined in Part 4 of the Regulations, which themselves reference Schedule 5 of the European Communities (Environmental Impact Assessment) Regulations, which defines thresholds by project type, some of which have been amended by subsequent statutory instruments. This is basically the legal equivalent of following a chain of function calls through six files, and the experience was so familiar I actually felt comfortable. My classmates, who were lawyers, found the cross-reference chase frustrating. I found it normal. We're all damaged by our training in different ways.

## How It Made Me a Better Product Person

Studying law changed how I think about product requirements. Before the diploma, I'd write user stories like "As an architect, I want to check planning compliance, so that I can submit a valid application." After the diploma, I'd write: "As an architect submitting a planning application under Section 34 of the PDA 2000, I need to verify compliance with the relevant objectives of the development plan applicable to the site's zoning, accounting for any specific local area plan provisions, material contravention procedures under Section 37(2), and environmental screening thresholds under Schedule 5 of the EIA Regulations."

The first version sounds cleaner. The second version actually describes what the software needs to do. The gap between them is the gap between understanding a domain at a surface level and understanding it at a professional level.

It also taught me to read regulations the way I read documentation: carefully, literally, and with an eye for what's not said as much as what is. Planning law is full of provisions that say "the planning authority may have regard to" rather than "the planning authority shall," and the difference between "may" and "shall" has generated thousands of pages of case law. In software terms, that's the difference between a suggestion and a requirement, and getting it wrong has consequences.

## The Practical Recommendation

If you're building software for a regulated domain (planning, healthcare, finance, energy, anything with a statutory framework), consider studying that domain formally. Not a weekend course. Not a YouTube playlist. A proper qualification that forces you to read primary sources, engage with practitioners, and sit exams.

The King's Inns diploma cost €3,200 and took about 8 months of part-time study. It was harder than I expected, easier than the PhD, and more directly useful to my company than any technical course I could have taken in the same period.

I'm not a lawyer. I can't give legal advice. But I can build software that respects the legal framework it operates within, and that's a competitive advantage that no amount of purely technical skill can replicate.

Also, I now understand why lawyers charge what they charge. If you'd spent years learning to parse statutory instruments, you'd want proper compensation too.
