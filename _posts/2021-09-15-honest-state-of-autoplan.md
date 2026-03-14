---
layout: post
title: "The Honest State of AutoPlan: Year Two"
date: 2021-09-15
categories: professional
description: An honest look at what's working, what isn't, and what it's actually like building an AI startup in 2021.
---

There's a version of this post that writes itself. AutoPlan is thriving. Customers love us. Revenue is growing. The AI works brilliantly. We're about to raise a big round. The future is bright.

That version would be about 40% true, which in startup communication is considered a passing grade. I want to write the 100% version instead, because I think the startup ecosystem has enough polished narratives and not enough honest ones.

## What's Working

The product does what it's supposed to do. AutoPlan can ingest a local authority development plan, extract the relevant planning rules for a given site, and present them to an architect in a structured, searchable format. This saves real time. In user testing, architects who previously spent 45-90 minutes finding the relevant development plan policies for a site could do it in under 5 minutes with AutoPlan.

That's a genuine improvement. I'm proud of it.

Customer conversations are positive. When I demo the product to architects and planning consultants, they get it immediately. The problem resonates. The solution makes sense. I've had people in demos say "where was this three years ago?" which is the best feedback a founder can receive.

We've processed development plans from 20 of Ireland's 31 local authorities. The NLP pipeline is getting better with each one. Error rates on policy extraction have dropped from around 15% to about 4% over the past year, which sounds good and is good, but that 4% is the hardest 4%, because it's the edge cases where legal language is genuinely ambiguous even to human readers.

ESA, Enterprise Ireland, NDRC, and the various tech partnerships are all ongoing and supportive. The institutional backing is real.

## What Isn't Working

Revenue. Or rather, the gap between "people who say they'd pay for this" and "people who actually pay for this." This gap is the most well-documented phenomenon in startup literature and yet it still surprises you when you experience it firsthand. I've had architects tell me, with complete sincerity, that AutoPlan would save them hours per week and they'd happily pay €200 a month for it. Then I send them the signup link and they go quiet. Not all of them. But enough.

The conversion problem is partly a market problem. Architecture practices in Ireland are often small (3-10 people), cost-conscious, and not accustomed to paying for SaaS tools. Their software spending goes to AutoCAD licences (roughly €2,400/year) and maybe a project management tool, and everything else is done in Excel or email or Word. Adding a new subscription requires a mental shift that takes time and trust.

It's also partly a timing problem. In 2021, GPT-3 exists. People have seen the demos. They know AI can do impressive things with text. But GPT-3 isn't quite good enough for the specific, domain-critical accuracy that planning compliance requires. If my system tells an architect that a proposed development doesn't need environmental screening, and it's wrong, that architect faces a legal problem. The stakes are too high for "mostly correct." It needs to be reliable, and reliability in NLP is expensive and slow to achieve.

## Fundraising

I've had preliminary conversations with about 15 investors. Some angel investors in Ireland, a couple of VC funds focused on proptech or govtech. The conversations are encouraging but haven't converted to term sheets.

Here's what I've learned about fundraising as a solo technical founder: investors want to see traction (revenue or user growth), and they want to see a team. I have early traction but not the kind of hockey-stick graph that makes investors' pupils dilate. And I'm one person, which means every investor conversation includes a variation of "great product, but how do you scale with one person?" The answer is "I hire people," and the follow-up is "with what money?" and now we're in a circular conversation that only a term sheet can break.

I don't say this to complain. Investors are rationally assessing risk, and a solo founder is a risk. I'd assess it the same way from their side.

## The Loneliness Thing

Here's a tangent that's actually the most important section of this post.

Being a solo founder is lonely in a way that's hard to describe without sounding self-pitying, which I don't intend. The loneliness isn't about being alone. I have friends, family, a decent social life. It's about carrying a specific weight that nobody else carries.

Every decision is yours. Every failure is yours. When the NLP model breaks on a Saturday night and a demo is on Monday morning, that's your Saturday night. When a customer call goes badly, there's no co-founder to debrief with. When you're not sure whether to pivot or persist, there's no partner to argue with until you find the right answer.

The accelerator cohorts help. The EF and NDRC alumni networks help. Phone calls with other solo founders help — shout out to Dave, who co-founded a medtech startup from the NDRC cohort and always picked up. But they're not the same as having someone in the room who cares about this specific company as much as you do.

I say this not to discourage solo founding but to describe it honestly. Some people thrive on it. I find it hard. Both things can be true.

## The GPT-3 Question

People keep asking me whether GPT-3 (or whatever comes next) will make AutoPlan obsolete. It's a fair question. If you can ask a general-purpose AI to read a planning document and summarise it, why do you need a specialised tool?

The answer, for now, is accuracy and structure. GPT-3 can summarise a planning policy in fluent English. It can also hallucinate planning policies that don't exist, misattribute requirements to the wrong zones, and present wrong information with the same confidence as correct information. For a tool that architects rely on for legal compliance, that's not acceptable.

But the general-purpose models are getting better fast. I don't know how long the accuracy advantage of domain-specific models will last. Maybe two years. Maybe five. Maybe six months. This uncertainty is both the risk and the motivation: build the best domain-specific tool now, build the customer relationships and the data moat, and adapt when the technology shifts.

## Where I Am

It's September 2021. AutoPlan is real, it works, and it helps people. It's not making enough money. I'm not sleeping enough. The technology is moving under my feet. I don't know if this will be a big company, a small company, or a brilliant failure.

I do know that every architect who uses AutoPlan and saves an hour of their day is a real, measurable improvement in someone's working life. That might not be enough to build a venture-scale business on. But it's enough to keep going.

I'll check back in a year. We'll see where things stand.
