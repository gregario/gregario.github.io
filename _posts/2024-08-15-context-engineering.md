---
layout: post
title: "Prompt Engineering is Dead, Long Live Context Engineering"
date: 2024-08-15
categories: opinion
description: What actually matters when building AI systems isn't clever prompts — it's structured context. The discipline that replaced prompt engineering.
---

Last month, someone on LinkedIn asked me to review their "prompt engineering portfolio." It was a collection of 40 carefully crafted prompts, each one a small masterpiece of instruction-writing. Chain-of-thought reasoning, role assignments, few-shot examples, temperature tuning. Genuinely impressive work.

Every single prompt would break the moment you put it inside a real system.

## The prompt engineering era is over

I'm not saying prompts don't matter. They do. But the discipline of "prompt engineering" — the idea that the primary skill in building AI systems is writing better instructions to an LLM — has run its course. It peaked somewhere around mid-2023 and has been declining in relevance ever since.

Here's why: in any production AI system, the prompt itself accounts for maybe 15% of the quality of the output. The other 85% is determined by the context the prompt operates within. What information does the model have access to? In what format? How current is it? How relevant is it to the specific task at hand?

I've been building multi-agent systems for six months now, and the biggest quality improvements have never come from rewriting prompts. They've come from restructuring what information the model receives, when it receives it, and how it's formatted.

That's context engineering.

## What context engineering actually means

Context engineering is the discipline of designing, curating, and managing the information environment that surrounds an LLM interaction. It includes:

**What goes in.** Not everything the model could know, but specifically what it needs to know for this task, right now. When I was building ProductBuilder, I found that giving the architecture agent access to the full product specification produced worse results than giving it a curated summary. More context isn't better context. Often it's worse.

**What stays out.** Equally important. If your customer support bot has access to internal engineering documentation, it will occasionally cite it in customer-facing responses. I watched this happen at a company I was advising — their bot told a customer to "check the Grafana dashboard for latency metrics." The customer was a florist.

**The format.** The same information, structured differently, produces dramatically different outputs. I ran an experiment: same data about a software project, presented as (a) a prose description, (b) a bulleted list, (c) a structured JSON schema. The JSON schema produced 40% more accurate architecture recommendations. The model doesn't just read context — it's influenced by its shape.

**The freshness.** Stale context is often worse than no context. RAG systems that retrieve outdated documentation will produce confidently wrong answers. I'd rather have a model say "I don't know" than have it reference a deprecated API endpoint because that's what the 2022 version of the docs says.

## The shift from "how I ask" to "what I provide"

Think of it this way. Prompt engineering is about crafting the question. Context engineering is about curating the briefing document. In any serious decision-making scenario — whether it's a human or an AI making the decision — the quality of the briefing matters more than the quality of the question.

A brilliant question asked in an information vacuum produces speculation. A mediocre question asked with excellent context produces useful answers. I've tested this repeatedly and it holds up. Take a simple prompt like "suggest improvements to this architecture" and vary the context quality while keeping the prompt identical. The output quality tracks the context quality almost perfectly.

(Tangent: this maps surprisingly well to how product management works in enterprise. The best PMs I worked with at ZF weren't the ones who asked the cleverest questions in stakeholder meetings. They were the ones who prepared the best pre-reads. By the time the meeting started, everyone had the right context, and even simple questions produced good decisions. Context engineering is PM skills applied to machines. Or maybe PM was always context engineering for humans. I'm still working out which way that analogy runs.)

## Practical context engineering patterns

Here are patterns I've found that actually work.

**Context windowing.** Don't dump everything into the prompt. Maintain a priority queue of context items ranked by relevance to the current task. Include the top N items. I use a simple scoring function: recency * relevance * specificity. It's crude but it beats "include everything" by a wide margin.

**Decision logs over conversation history.** In multi-turn systems, don't carry the full conversation forward. Extract decisions, facts, and commitments into a structured log. Feed that forward instead. This cut my token usage by 60% and improved consistency.

**Context schemas.** Define what the model should receive using a typed schema, just like you'd define a database schema. Section headers, expected fields, value types. When you formalise context structure, you catch gaps and redundancies before they affect output.

**Negative context.** Explicitly tell the model what's out of scope, what's been tried and failed, what constraints exist. "The team has already rejected a microservices approach due to operational complexity" prevents the model from wasting your time (and tokens) suggesting what you've already ruled out.

## Why this matters for AI product development

If you're building AI-powered products, your competitive advantage isn't going to come from a better model — everyone has access to the same models. It's not going to come from better prompts — prompts are easily copied and quickly commoditised.

It'll come from better context. Better data pipelines. Better retrieval systems. Better understanding of what your users need the model to know at each point in their workflow. That's hard, unglamorous, deeply technical work. It looks a lot more like data engineering than it does like creative writing.

The prompt is the last mile. The context is the entire supply chain. And in every industry I've worked in, the supply chain determines the outcome far more than the last mile does.

So if you're investing in your team's AI capabilities, stop running prompt engineering workshops. Start investing in context infrastructure. The prompts will write themselves once the context is right.

That LinkedIn portfolio I mentioned at the start? I told the person their prompts were great, but asked them to show me their context architecture. They didn't have one. Neither does almost anyone else yet. That's the opportunity.
