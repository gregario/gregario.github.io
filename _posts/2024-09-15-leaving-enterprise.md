---
layout: post
title: "Leaving Enterprise: Why I Took a Career Break to Build AI Systems"
date: 2024-09-15
categories: professional
description: Five months off to go deep on AI agents, RAG, and multi-agent orchestration. Why hands-on building is the only way to understand the ecosystem.
---

In September 2024, I left ZF Group. No next job lined up. No startup idea ready to go. Just a conviction that the AI ecosystem was moving faster than I could track from inside a corporate product role, and that the only way to truly understand it was to build with it full-time.

My LinkedIn contacts were confused. A few friends thought I'd lost the plot.

## The gap between knowing and doing

Here's the problem with being a product manager in AI: you know a lot about what AI can do, but your hands-on experience with the current tooling is always six months stale. I was making product decisions about AI capabilities based on what I'd read in papers and blog posts rather than what I'd experienced by building.

At ZF, I could tell you that RAG (retrieval-augmented generation) was the right approach for our knowledge base product. I could draw the architecture diagram. I could explain the trade-offs to stakeholders. But I'd never actually built a RAG pipeline. I'd never dealt with chunk size optimisation, embedding model selection, or the horrible moment when your retrieval returns confidently wrong context and the LLM treats it as gospel truth.

That gap between strategic understanding and tactical experience was growing, and it was starting to undermine my credibility with engineering teams. Not because they tested me on it, but because I tested myself.

## What I'm building

The project is called ProductBuilder. It's a multi-agent orchestration platform built in Python using LangGraph. The core idea is: given a product concept, coordinate multiple AI agents to produce specifications, architecture decisions, implementation plans, and working code.

I'll write a [separate post](/blog/2024/productbuilder/) about the technical details, but the short version is: I'm building a system where one agent acts as a product manager, another as an architect, another as a developer, and they communicate through structured context rather than free-form chat.

It's ambitious enough to force me into every corner of the current AI stack. LLMs, embeddings, vector databases, agent frameworks, tool use, context management. If something matters in AI engineering right now, ProductBuilder touches it.

## What I've learned so far

**RAG is harder than it looks.** The demo version of RAG (embed some documents, retrieve top-k chunks, stuff them in the prompt) works brilliantly for demos. Production RAG is a different animal. You need to handle documents that don't chunk cleanly (try splitting a legal contract at arbitrary points). You need hybrid search because pure semantic retrieval misses keyword-specific queries. You need to deal with the fact that your embedding model thinks "bank" in a financial document and "bank" in a geography document are the same concept.

I've spent the bones of three weeks on chunking strategies alone. The difference between naive fixed-size chunks and properly structured chunks with metadata was a 35% improvement in retrieval accuracy on my test set.

**Embeddings are surprisingly finicky.** Which embedding model you choose matters more than I expected. I tested four models (OpenAI ada-002, Cohere embed-v3, BGE-large, and E5-large) on the same corpus. The performance differences were significant, up to 20% variation in recall@5 for the same queries. And the best model depends entirely on your domain. There's no universal winner.

(Tangent: I fell down a rabbit hole comparing embedding models and ended up building a small benchmarking tool that runs standardised retrieval tests across models. It's not polished enough to open-source, but the process of building it taught me more about embedding spaces than any paper I've read. There's something about watching your cosine similarity scores and trying to figure out why the model thinks "quarterly revenue report" is closer to "annual budget meeting" than to "Q3 earnings summary" that makes the theory very concrete.)

**Tool use is where the magic happens.** The biggest capability jump in the current generation of AI isn't text generation. It's tool use. When an LLM can call functions, query databases, run code, and use the outputs to inform its next action, it goes from being a text predictor to being a reasoning engine with hands.

In ProductBuilder, the architecture agent can call a tool that searches for similar projects on GitHub, analyse their structure, and use that to inform its recommendations. The difference between "suggest a good architecture" and "suggest a good architecture, here are five similar projects and their structures" is enormous.

**Semantic search changes how you think about information.** Once you've built a system that can find relevant context based on meaning rather than keywords, you start seeing applications everywhere. Every corporate knowledge base. Every customer support system. Every legal document review process. The technology is ready. The organisational willingness to adopt it is lagging by about two years.

## Why hands-on matters

I could have spent these months reading papers and attending conferences. I would have learned the vocabulary. I would not have learned that LangGraph's state management has specific patterns that work well and specific patterns that cause silent context accumulation bugs that are very difficult to debug. I would not have learned that the difference between a good and bad system prompt isn't cleverness, it's structure.

Building is the only way to develop the intuition you need to make good product decisions in this space. I'm spending €200 a month on API costs and it's the best investment in my career I've made in years.

When I go back to a product role (and I will), I'll be a PM who can actually review a pull request, question an architecture decision with evidence, and spot when an engineering estimate is optimistic because I've done the work myself. That's worth the time off.
