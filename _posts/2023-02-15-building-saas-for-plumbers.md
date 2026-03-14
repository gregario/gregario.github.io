---
layout: post
title: "Building a SaaS Product for Plumbers Who Accidentally Own Fleets"
date: 2023-02-15
categories: professional
description: How we built Vandy, a fleet management SaaS for small businesses who never wanted to manage fleets in the first place.
---

There's a bakery in Munich that owns nine delivery vans. The owner, a woman named Katrin, gets up at 3am to bake bread. She does not want to think about tyre rotations. She especially does not want to think about tyre rotations in a software interface designed for someone who manages 500 trucks for a living.

Katrin is the reason we built Vandy the way we did.

## Who are accidental fleet owners?

I wrote about this concept in my [previous post](/blog/2022/joining-zf-group/), but it's worth expanding. Accidental fleet owners are businesses that own commercial vehicles as a side effect of their actual work. Plumbers, bakers, electricians, construction firms, catering companies. In Germany alone, there are over 600,000 small businesses operating fewer than 20 commercial vehicles each.

These people share three characteristics: they have no dedicated fleet manager, their current "system" is a combination of memory and prayer, and they're losing money they don't know they're losing. The average small fleet overspends on maintenance by 40% compared to a professionally managed operation. For a 12-vehicle fleet, that's roughly €20,000 per year going up in smoke.

## The product

Vandy (which later became part of the Uptime product family) was designed to be the fleet management tool for people who hate fleet management tools. The core promise: connect your vehicles, and we'll tell you what needs attention before it becomes a problem.

We had two engineering teams, one in Düsseldorf and one in Hyderabad, plus a data science team in Munich. About 35 people total. Keeping those two groups building the same product across time zones was its own kind of challenge. My job was to make sure all three teams were building towards the same product vision, which sounds simple and is absolutely not.

The technical backbone was telematics data from ZF's existing hardware. We could pull real-time vehicle diagnostics, location, fuel consumption, and driving behaviour. The challenge was turning that firehose of data into three or four things Katrin should care about this week.

## Subscription model across six countries

We launched with a subscription model: €15 per vehicle per month for the basic tier, €25 for the full suite including predictive maintenance. Rolling that out across Germany, France, the Netherlands, Poland, Italy, and Spain simultaneously was an education in how different "the same product" can be in each market.

In Germany, customers wanted detailed reports. In France, they wanted a mobile app that worked offline because half the construction sites had no signal. In Poland, the price sensitivity was dramatically different, and €25/vehicle/month was a hard sell when the average monthly vehicle cost was lower.

(Tangent: the internationalisation work alone was fascinating. We had the bones of 180,000 words to translate across six languages. Traditional translation agencies were quoting us €90,000 and eight weeks. We built an AI-powered translation workflow using GPT-3.5 with human review, where a native speaker in each country would review and correct the machine translations. Total cost: about €12,000, and it took two weeks. The quality was genuinely good, maybe 85% accuracy before human review, and the reviewers said the AI translations were better starting points than the translation memory tools they'd used before. This was early 2023, before everyone was doing this.)

## Product-market fit in an unglamorous space

Nobody writes breathless TechCrunch articles about fleet management software for plumbers. There are no viral launch tweets. The product hunt of it all is nonexistent.

But here's what's brilliant about unglamorous markets: the competition is weak, the customers are grateful, and the retention is sticky. When you save Thomas the plumber €400 a month by catching a brake pad issue before it becomes a brake disc replacement, Thomas doesn't churn. Thomas tells the other plumbers at his trade association meeting.

Our net revenue retention hit 115% after the first year. That number doesn't come from clever growth hacking. It comes from solving a genuine problem for people who'd been ignoring it for years.

## What I learned about building for non-technical users

The single most important design decision we made was removing choice. Early prototypes had dashboards with filters, date ranges, comparison views. Our test users in the field ignored all of it. They wanted a list of "things that need attention" sorted by urgency.

So that's what we built. Open the app, see a priority list. Tap an item, see what to do about it. Done. The engagement metrics doubled overnight when we shipped that simplification. I had to fight for it, because the engineering team had built beautiful dashboard components and didn't love being told to hide them. But the data was clear.

Katrin from the Munich bakery became one of our case study customers. She told us she spends about four minutes a day on Vandy. For context, she used to spend zero minutes on fleet management and was losing thousands of euros a year because of it. Four minutes of attention, properly directed, was worth more than any amount of sophisticated tooling.

That's the lesson I keep coming back to: the best product isn't the most powerful one. It's the one that respects how much attention your user actually has to give you.
