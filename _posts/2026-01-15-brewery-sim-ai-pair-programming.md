---
layout: post
title: "Building a Brewery Sim in Godot with AI Pair Programming"
date: 2026-01-15
categories: personal
description: BeerBrew Tycoon, a brewery management sim built in Godot 4 where AI writes 95% of the code and I'm the product owner.
---

In 2014, I built BrewMonitor: an Arduino Mega wired to temperature sensors, a flow meter, and a salvaged display, all held together with electrical tape and optimism. It sat next to my homebrew fermenter in a Dublin flat and logged temperature curves to an SD card. It was terrible. I loved it.

Twelve years later, I'm building a brewery management sim in Godot 4 called BeerBrew Tycoon. The brewing obsession hasn't changed. The tooling has changed considerably.

## Why Godot

I evaluated Unity, Unreal, and Godot for about a week. Unity's pricing drama in 2023 made the decision easier than it should have been. Unreal is overkill for a 2D management sim. Godot is free, open source, lightweight, and has a scripting language (GDScript) that's close enough to Python that AI models handle it well.

That last point matters more than you'd think. When your development workflow is built around AI pair programming, the model's fluency in your language and framework is a genuine technical constraint. Claude writes better GDScript than I do at this point, which is either impressive or embarrassing depending on your perspective.

## The AI-Factory Workflow

BeerBrew Tycoon is built using a workflow I call the AI-Factory. Three modes, three roles:

**Spec Mode** uses OpenSpec (a product management system) to define what gets built. Features, acceptance criteria, task breakdowns. I'm the product owner. OpenSpec is the product manager. No code gets written in this mode.

**Design Mode** produces wireframes, style tokens, and interaction specs. Layout, colours, typography, how things should feel. Again, no production code.

**Execution Mode** uses what I call Superpowers (Claude Code's engineering agent) to implement everything. TDD, tests first, implementation second. The agent writes code, runs tests, iterates until they pass, and commits.

The loop is: spec one thing, design one thing, implement one thing, test, commit, clear context, repeat. The context clearing is important. Language models have finite context windows, and institutional knowledge lives in files (stack profiles, memory docs, spec files), not in conversation history.

## The Numbers

The post-MVP roadmap had 6 stages and 96 tasks. Here's what the codebase looks like after all of them:

- **1,220+ tests** (GUT test framework, all passing)
- **6 complete gameplay systems** (ingredients, brewing science, failure modes, equipment, research tree, staff, expansion, contracts, competitions, market/distribution, strategy fork, specialty/brand/automation, meta-progression)
- **55 interactive brewing tasks** across 8 sub-stages
- **16 overlay scenes** migrated from programmatic code to .tscn scene files
- **Bubble animation system** with phase-specific visual effects

I wrote approximately 5% of the code. Claude wrote the rest. My contribution was product direction, design decisions, testing strategy, and the occasional "no, that's wrong, try again." I'm essentially a product owner who happens to understand the codebase well enough to review pull requests.

(A tangent: the BrewMonitor connection goes deeper than nostalgia. BrewMonitor taught me that brewing is fundamentally about controlling variables: temperature, time, gravity, pH. BeerBrew Tycoon simulates exactly those variables. The game's BrewingScience module uses actual brewing formulas: Tinseth's hop utilisation equation, fermentability curves, yeast attenuation models. The Arduino sensor data I collected in 2014 informed the realism targets for the game in 2026. I didn't plan this arc, but I'm not going to pretend it isn't satisfying.)

## What It's Like Being the Product Owner

The honest answer: it's brilliant and it's strange.

Brilliant because I can go from idea to implemented feature in a single evening. The interactive brewing system (8 sub-stages, 55 tasks) shipped across a few focused sessions. In a traditional workflow with a human development team, that's months of work.

Strange because I have to be disciplined about what I ask for. The AI will build whatever I describe. It won't push back and say "that feature is a bad idea" or "users won't understand this." That's a role I have to play myself, and it requires more product discipline than I expected. When the cost of building something drops to near zero, the cost of deciding what to build becomes the bottleneck.

I've built three companies. In every one, engineering capacity was the constraint. With AI pair programming, product judgment is the constraint. That's a genuinely new problem, and I don't think enough people are talking about it.

## The Stack Profile Trick

One thing that works remarkably well: stack profiles. These are detailed documents that describe the technology stack, coding standards, testing patterns, project structure, and common pitfalls. They live in the repo and get loaded into the AI's context at the start of every session.

Think of them as senior engineer knowledge, codified. The Godot stack profile includes things like "`.tres` files must use `type="Resource"` not custom class names" and "never use `static func` on autoload singletons." Every one of those entries represents a bug I hit and fixed. The profile is a scar tissue document, and it prevents the AI from repeating the same mistakes.

## From Arduino to Game Dev

BrewMonitor in 2014 was me learning that hardware is hard and brewing is fun. BeerBrew Tycoon in 2026 is me learning that AI can write better code than I can but still can't tell me what game to make.

The brewing part hasn't changed. I still brew (badly, enthusiastically) in my kitchen. The technology part has changed beyond recognition. But the core activity is the same: controlling variables, measuring outcomes, iterating.

Next up: I'm building an MCP server called brewers-almanack to give AI assistants actual brewing domain knowledge. Because apparently twelve years of brewing and technology isn't enough, and I need to go deeper.
