---
layout: post
title: "Subagent-Driven Development: Shipping 14 Tasks in Parallel"
date: 2026-03-15
categories: personal
description: How subagent-driven development works in practice, using the Stage 6 Meta-Progression example with 14 tasks and 680 tests.
---

I shipped 14 tasks in a single session. 680 tests, all passing. A complete meta-progression system for BeerBrew Tycoon: unlock points, achievements, cross-run persistence, a modifier system, and 5 new UI overlays.

This sounds like I'm exaggerating. I'm not, but I should explain how it works, because "I typed really fast" is not the answer.

## What Subagent-Driven Development Is

When Claude Code's Superpowers mode encounters a set of tasks, it can dispatch subagents: independent Claude instances that each work on a single task in isolation. Each subagent gets the full context (stack profile, spec, existing codebase) but operates on its own branch or worktree.

The supervisor agent orchestrates: which tasks to dispatch, in what order, with what dependencies. Tasks that don't depend on each other run in parallel. Tasks with dependencies wait for their prerequisites to complete.

Think of it like a well-organised dev team. The tech lead (supervisor) breaks the sprint into tasks, assigns them to developers (subagents), and reviews the output. Except the developers work at machine speed and don't need coffee breaks.

## The Stage 6 Example

Stage 6 of BeerBrew Tycoon's post-MVP roadmap was Meta-Progression: the system that tracks progress across multiple game runs and lets players unlock new content.

The spec had 14 tasks:
1. MetaProgressionManager autoload (core data structure)
2. Unlock point calculation
3. Achievement system (6 achievements)
4. Unlock catalog (styles, blueprints, ingredients, perks)
5. RunModifierManager (perk and modifier effects)
6. Perk effects integration into GameState
7. Modifier effects integration
8. Blueprint research discount
9. Meta style unlocks at run start
10. RunSummaryOverlay (point breakdown UI)
11. UnlockShopOverlay (4-tab shop UI)
12. RunStartOverlay (perk/modifier selection UI)
13. AchievementsOverlay (progress tracking UI)
14. MainMenu with title screen and stats

Tasks 1-4 had a dependency chain: you can't calculate unlock points (task 2) without the data structure (task 1). But tasks 10-14 (the UI overlays) could largely run in parallel once the backend was in place.

The supervisor dispatched tasks 1-4 sequentially, then tasks 5-9 in parallel (they all depended on the core system but not on each other), then tasks 10-14 in parallel. Each subagent wrote tests first, then implementation. Each subagent's output was reviewed before being merged.

Total wall-clock time for the session: I honestly lost track, but it was a single evening. The test count went from 558 to 680. Every test passed.

## Git Worktrees for Isolation

The isolation mechanism is git worktrees. Each subagent works in its own worktree: a separate checkout of the repository that shares the git history but has its own working directory. This means subagents can't accidentally step on each other's changes.

After each subagent completes, its changes are reviewed and merged into the main branch. If there are merge conflicts (there sometimes are, especially when multiple tasks modify the same file), the supervisor resolves them.

(A tangent: git worktrees are one of those git features that 90% of developers don't know about. I didn't know about them until I started using this workflow. They've been in git since version 2.5, released in 2015. Nine years of a brilliant feature that I completely ignored. This is probably a metaphor for something.)

## Code Review Checkpoints

Subagents are fast but not infallible. Every subagent's output goes through a code review checkpoint before merging. The supervisor agent reviews:

- Do the tests actually test what they claim to test? (You'd be surprised how often an AI writes a test that passes but doesn't validate the right behaviour.)
- Does the implementation follow the stack profile conventions?
- Are there any integration issues with the existing codebase?
- Is the code unnecessarily complex? (AI-generated code has a tendency toward over-engineering. Left unchecked, a simple feature can acquire three layers of abstraction it doesn't need.)

About 1 in 5 subagent outputs gets sent back for revision. That's not a failure rate; that's a code review working as intended. The revisions are usually small: naming conventions, missing edge cases, unnecessary abstractions.

## When to Use It (and When Not To)

Subagent-driven development works brilliantly when:
- Tasks are well-specified with clear acceptance criteria
- Tasks have clear boundaries and minimal overlap
- The codebase has good test coverage (so integration issues get caught)
- There's a stack profile that enforces consistency

It works poorly when:
- The task is exploratory and the requirements are fuzzy
- Multiple tasks need to modify the same core systems extensively
- The feature requires tight design iteration (where you need to see and feel the result before knowing if it's right)
- You're working in an unfamiliar codebase without a stack profile

For BeerBrew Tycoon, about 70% of the post-MVP roadmap was suitable for subagent-driven development. The other 30% (UI polish, animation work, design-heavy features) needed more interactive, single-agent sessions.

## The Cost

I should talk about cost because I promised myself I'd always include real numbers. Subagent-driven sessions are more expensive than single-agent sessions because you're running multiple Claude instances in parallel. A heavy subagent session (like Stage 6) costs roughly 3-4x what a single-agent session costs for the same output.

But "the same output" is the wrong comparison. The same output via single-agent sequential work would take 3-4x as long. So the cost per hour of wall-clock time is similar. You're trading money for speed, which is usually a trade I'm happy to make at hobbyist project scale.

## What I've Learned

The biggest lesson: the quality of subagent output is almost entirely determined by the quality of the specs. Vague specs produce vague implementations. Precise specs with clear acceptance criteria produce code that works on the first pass.

This isn't surprising if you've managed human development teams. The same principle applies: garbage requirements in, garbage code out. AI just makes the feedback loop faster, which means you learn the lesson faster too.

14 tasks. 680 tests. One evening. And a reminder that the bottleneck was never the coding.
