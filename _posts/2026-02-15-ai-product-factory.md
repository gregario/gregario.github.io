---
layout: post
title: "The AI Product Factory: Using Claude Code as a Game Development Studio"
date: 2026-02-15
categories: personal
description: The three-mode workflow that turns Claude Code into a one-person game development studio, and why context engineering matters more than prompting.
---

Somewhere around the 800th passing test on BeerBrew Tycoon, I realised I'd accidentally built a game development studio. It just happens to be staffed entirely by AI agents and one increasingly caffeinated Irishman.

## The Three Claudes

The AI-Factory runs on three distinct Claude personas, and keeping them separate is the whole trick:

**Supervisor Claude** orchestrates. It decides which mode to enter, which specialist to dispatch, and when to switch. It doesn't write code. It doesn't design screens. It chooses who does.

**Design Claude** is the product designer. It produces wireframes, style tokens (colour palettes, typography scales, spacing systems), UI theme configurations, screen-by-screen mockups, and interaction specs. It thinks in layout, hierarchy, and user flow. It never writes production code.

**Engineer Claude** (via Superpowers) implements. Test-driven development, always. Write the test, watch it fail, write the implementation, watch it pass, refactor, commit. It follows the stack profile religiously and doesn't make product decisions.

The critical rule: never mix modes. If Design Claude starts writing code, the design quality drops. If Engineer Claude starts making product decisions, you get features nobody asked for. Separation of concerns isn't just a software pattern; it's an organisational one.

## OpenSpec as Product Manager

OpenSpec is the product management layer. When I want a new feature, I don't describe it to an engineer. I describe it to OpenSpec, which generates a structured spec with acceptance criteria and task breakdowns.

This matters because it forces clarity. I can't hand-wave at a feature and say "make it good." I have to define what "good" means in testable terms. The discipline of writing specs before any design or implementation happens has prevented more bad decisions than I can count.

The flow: I propose a feature (`/opsx:propose`). OpenSpec analyses the current codebase, identifies how the feature fits, and generates a structured change spec with tasks. I review and approve. Then Design Mode produces the visual and interaction design. Then Superpowers implements.

Each step produces artefacts that the next step consumes. Specs feed design. Design feeds implementation. Implementation feeds tests. It's a pipeline, not a conversation.

## Stack Profiles: Senior Engineers in a File

This is probably the most useful pattern I've developed. A stack profile is a set of documents that encode everything a senior engineer would know about working in a particular technology stack.

The Godot stack profile includes:
- `STACK.md` (overview, versions, key architectural decisions)
- `coding_standards.md` (naming conventions, patterns to use, patterns to avoid)
- `testing.md` (GUT framework setup, test patterns, what to mock)
- `project_structure.md` (where files go, scene organisation)
- `pitfalls.md` (the bugs you'll hit and how to avoid them)

The pitfalls file is gold. Every entry is a bug that actually happened. "`:=` on `Dictionary.get()` causes Variant parse errors in Godot 4.6 — use explicit types." That entry alone has probably saved 20 hours of debugging across sessions.

When Engineer Claude starts a session, it reads the stack profile first. It's like onboarding a new developer, except the onboarding takes 3 seconds and the developer never forgets what it learned. (Well, it forgets when the context window clears, but then it reads the profile again. The circle of AI life.)

## Context Engineering > Prompting

I've stopped thinking about "prompt engineering." The better frame is context engineering: what information does the AI need, in what format, at what point in the workflow?

The CLAUDE.md file in the project root defines the operating system. Memory files persist knowledge across conversation clears. Stack profiles encode technical standards. Spec files define what to build. Design deliverables define how it should look.

None of this is prompting in the "write a clever sentence" sense. It's information architecture for AI consumption. The quality of the output depends almost entirely on the quality of the context, not on how cleverly you phrase your request.

(A tangent: I spent about €150 on Claude API costs in the first month of building BeerBrew Tycoon. The same month, I spent €180 on coffee. I'm not sure what this says about my priorities, but I suspect it says something unflattering about my caffeine dependency.)

## The Iteration Loop

The full loop: spec → design → implement → test → commit → clear context → repeat.

The "clear context" step is non-obvious but essential. After a major task is committed, I clear the conversation. This prevents context bleed (where details from one task contaminate the next), frees the full context window, and ensures a clean starting point. Memory files persist across clears, so institutional knowledge survives.

Each iteration is small. One feature. One design. One implementation. One commit. The temptation is always to batch ("while we're at it, let's also...") and I've learned to resist it. Small iterations compound. Large batches compound your problems.

## Is This a Studio?

Not really. It's one person with a workflow and a language model. But the output looks like a studio's work: 1,200+ tests, 6 complete gameplay systems, 16 UI scenes, a full interactive brewing pipeline. The factory metaphor works because the process is systematic, repeatable, and produces consistent quality.

The human's job is taste. What to build, what to cut, what feels right, what doesn't. The AI's job is everything else.

That division of labour would have sounded absurd two years ago. Now it's just my Tuesday evening.
