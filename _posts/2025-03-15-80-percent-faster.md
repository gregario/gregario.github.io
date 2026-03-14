---
layout: post
title: "80% Faster: How Multi-Agent Workflows Changed Our Product Process"
date: 2025-03-15
categories: professional
description: Leading company-wide AI transformation, starting with an 80% reduction in PRD-to-user-story conversion time using multi-agent workflows.
---

Two months into my role at Oneview, our VP of Product, Fiona, asked me a question that changed the trajectory of my year: "Could you show the product team how you use AI? They're curious."

That "showing" turned into a company-wide AI transformation programme. I didn't plan it that way, but here we are.

## The First Win

Every product manager knows the grind: you write a PRD (product requirements document), then you manually break it down into user stories, acceptance criteria, edge cases, and test scenarios. It's important work. It's also tedious work that follows predictable patterns, which makes it a perfect candidate for automation.

I built a multi-agent workflow where one agent analyses the PRD for structure and intent, a second generates user stories with acceptance criteria, and a third reviews the output for gaps and inconsistencies. The agents argue with each other (politely, mostly). The PM reviews the final output and makes adjustments.

The result: what used to take a product manager the bones of a full day now takes about 90 minutes, including the review and adjustment phase. That's an 80% reduction in conversion time.

Now, I should be honest. That 80% number is an average across our first 12 PRDs through the pipeline. Some were faster, some were slower. Complex PRDs with lots of integration requirements still need significant human revision. But even the worst case was 50% faster, and for straightforward feature PRDs, it was closer to 90%.

## What the C-Suite Workshops Looked Like

After the product team demo, word got around. Our CTO asked me to run workshops for the senior leadership team. I've done a lot of presentations in my career, but presenting AI capabilities to a healthcare company's C-suite is its own particular challenge.

Healthcare executives are (rightly) cautious about AI. They've seen the hype cycle. They've read about AI hallucinations in medical contexts. They're not interested in demos that look impressive but don't address their actual constraints.

So I didn't lead with demos. I led with constraints. "Here's what AI can't do in our context. Here's what's off the table because of HIPAA. Here's what's off the table because of our hospital partners' data policies." Only after establishing the boundaries did I show what's possible within them.

It worked. When you start by acknowledging the risks, people trust you more when you show the opportunities.

(A tangent: this is the same approach I used when pitching to investors at Entrepreneur First in 2019. Lead with the hard problem, show you understand why it's hard, then show your solution. Investors, like healthcare executives, can smell bullshit from a considerable distance.)

## Building an AI Community of Practice

The workshops created demand I hadn't anticipated. Engineers wanted to know how to use AI in their development workflows. Product managers wanted more automation. The customer success team wanted to know if AI could help with support ticket triage.

Rather than trying to be the bottleneck for all of this, I set up an AI Community of Practice. It's a cross-functional group that meets fortnightly. We share what's working, what's not, and what we've learned. We have a Slack channel that's genuinely active (about 40 messages a week, which for an internal Slack channel is practically viral).

The key insight was making it opt-in and practitioner-led. Nobody's forced to attend. Nobody's forced to use AI tools. But when people see their colleagues shipping faster, they get curious. Curiosity is a much better driver of adoption than mandates.

We started with 8 people. We're at 35 now, across engineering, product, design, QA, and customer success. That's roughly a third of the company.

## What "Multi-Agent" Actually Means

I should clarify what I mean by multi-agent, because the term gets thrown around loosely. I'm not talking about autonomous agents roaming free across our codebase. I'm talking about structured workflows where multiple AI instances handle different stages of a task, with human checkpoints between stages.

Think of it like an assembly line where each station is an AI with a specific brief, specific inputs, and specific outputs. The human is the quality inspector who can stop the line, adjust parameters, or override decisions at any point.

The PRD workflow has three agents. Our code review workflow has two. Our documentation workflow has one (it turns out documentation is simple enough that a single well-prompted agent handles it fine). Each workflow was designed for a specific bottleneck, not because "more agents = better."

## The Numbers So Far

After 10 weeks of the programme:
- 12 PRDs processed through the multi-agent workflow (80% time reduction)
- 35 members in the Community of Practice
- 4 distinct AI workflows in production use
- 0 data privacy incidents (this is the number I care about most)

I'm not naive about this. We're early. The easy wins come first, and the hard problems of AI adoption (cultural resistance, over-reliance, quality degradation in edge cases) are still ahead. But as a starting point, I'll take an 80% improvement in a core product process and a growing community of practitioners who are genuinely excited about what's possible.

The VP of Product, by the way, has started calling me "the AI guy." I've been called worse things.
