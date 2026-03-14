---
layout: post
title: "ProductBuilder: What I Learned Building a Multi-Agent Platform from Scratch"
date: 2024-12-15
categories: professional
description: Technical lessons from building a multi-agent orchestration platform with LangGraph, covering architecture decisions, context patterns, and where RAG falls apart.
---

Three months into building ProductBuilder, I hit a wall that I didn't see coming. The system was working. Agents were coordinating, producing specifications, generating code. But the quality of the output was degrading with each step in the pipeline. By the time the fourth agent in the chain received its context, it was operating on a distorted version of what the first agent had actually decided.

I'd discovered context accumulation drift, and fixing it changed how I think about multi-agent systems entirely.

## The architecture

ProductBuilder is built on LangGraph, which is LangChain's framework for stateful, multi-step agent workflows. I chose LangGraph over alternatives (CrewAI, AutoGen, raw function chaining) for three reasons: explicit state management, support for cycles and conditionals in the agent graph, and the ability to checkpoint and resume workflows.

The system has five agents:

1. **Product Analyst**: takes a product concept and produces a structured specification with user stories, constraints, and acceptance criteria.
2. **Architect**: receives the spec, researches similar projects, and proposes a technical architecture.
3. **Planner**: breaks the architecture into implementation tasks with dependencies.
4. **Developer**: generates code for individual tasks.
5. **Reviewer**: evaluates outputs and can send work back to earlier agents.

Each agent has a system prompt, a set of tools (search, code execution, file operations), and access to a shared state object that accumulates context as work flows through the graph.

## Context accumulation: the real problem

Here's what the LangGraph tutorials don't tell you. When you chain agents together and each one adds its output to a shared state, the context grows linearly with each step. By agent four, you're sending 12,000-15,000 tokens of accumulated context, and only about 30% of it is relevant to what that agent needs to do.

The result: agents start contradicting earlier decisions. The architect specifies PostgreSQL, but by the time the developer agent gets the context, the database choice is buried under layers of planning decisions and the developer defaults to SQLite because it's simpler. I called this context accumulation drift because each agent drifts slightly from the shared understanding, and the drift compounds.

My first solution was brute force: just give every agent the full context. With GPT-4, that was costing me $0.40 per pipeline run. I was running 20-30 test runs a day. The API bill for January alone was $380, and the quality wasn't even improving because more context doesn't mean better context.

## The structured context pattern

The fix was to stop treating context as a growing blob and start treating it as a structured document with sections that agents could selectively read. I built a context manager that maintains a canonical state with clearly labelled sections: decisions, constraints, specifications, architecture, tasks. Each agent receives only the sections relevant to its role, plus a "decisions log" that records key choices in a standardised format.

The decisions log was the breakthrough. Instead of letting agents infer what previous agents decided from their full output, I extract explicit decisions: "Database: PostgreSQL (reason: need JSONB support for flexible schemas)." These are compact, unambiguous, and every downstream agent sees the same version.

After implementing structured context, the contradiction rate dropped from about 25% of runs to under 5%. API costs dropped to $0.15 per run. Better and cheaper. The rare engineering trade-off where you don't have to choose.

(Tangent: I spent a weekend building a visualisation tool that shows which parts of the context each agent actually attends to, based on a rough proxy using token probabilities. It confirmed what I suspected: agents were spending attention budget on irrelevant context sections. The attention maps looked like students highlighting an entire textbook page instead of the key sentence. Structured context is basically teaching the system to highlight properly.)

## Where RAG works and where it doesn't

The Architect agent uses RAG to search for similar projects and patterns. This is where RAG shines: retrieving relevant examples from a curated corpus of architecture documents and project structures. The queries are specific ("Python REST API with PostgreSQL and Redis caching"), the documents are well-structured, and the retrieval quality is high.

Where RAG fell apart was in the Developer agent. I tried using RAG to retrieve relevant code snippets from a repository of example implementations. The problem: code is terrible for semantic retrieval. A function that calculates user authentication scores and a function that calculates product recommendation scores have very different purposes but look semantically identical to an embedding model. They both "calculate scores."

I ended up using AST-based code search for the developer agent instead of RAG. Parse the code, extract function signatures and docstrings, search those. It's less elegant but the retrieval accuracy went from 45% to 78%.

## The framework demo gap

Every agent framework has brilliant demos. A three-minute video showing agents collaborating to solve a problem. What the demos don't show:

- Error handling when an agent produces malformed output (happens about 8% of the time with GPT-4).
- Recovery when one agent in the middle of a chain fails and you need to retry without re-running everything.
- Cost management when your experimentation budget is your personal savings.
- The debugging experience when something goes wrong inside a black box that thinks in natural language.

LangGraph handles some of this better than alternatives (checkpointing is genuinely useful for recovery). But I still wrote about 2,000 lines of error handling, retry logic, and output validation code that wraps around the actual agent logic. That wrapper code is unglamorous and essential.

## What I'd tell someone starting today

Start with one agent doing one thing well. Get the prompt right, get the tools right, get the output validation right. Then add a second agent. The complexity of multi-agent systems doesn't scale linearly; it scales combinatorially with the number of interaction points.

Use structured context from day one. Don't accumulate free-form text between agents. Define a schema. It feels like over-engineering when you have two agents. It saves your project when you have five.

And track your costs from the first API call. I built a cost dashboard on day one and it's been one of the best decisions I've made. You can't optimise what you don't measure, and at $0.03 per 1K tokens, the costs add up in ways that surprise you.

ProductBuilder isn't finished. I'm not sure it ever will be in the way that software products are "finished." But the lessons from building it have fundamentally changed how I think about AI systems. The models are incredible. The engineering around them is where the real craft lives.
