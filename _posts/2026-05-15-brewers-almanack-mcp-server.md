---
layout: post
title: "brewers-almanack: An MCP Server for Brewing Knowledge"
date: 2026-05-15
categories: personal
description: Building a domain-knowledge MCP server with 100 BJCP beer styles, 500+ hops, water chemistry profiles, off-flavour diagnosis, and recipe generation.
---

I've been doing some version of this for twelve years and I still can't reliably explain the difference between a Munich Dunkel and a Schwarzbier at a dinner party. But I can build an MCP server that explains it with chemical precision, so here we are.

## The Twelve-Year Arc

2014: BrewMonitor. An Arduino Mega strapped to my homebrew fermenter with temperature sensors and a flow meter. It logged data to an SD card. The code was terrible. The beer was adequate.

2026 (January): BeerBrew Tycoon. A brewery management sim in Godot 4 with actual brewing science formulas: Tinseth's hop utilisation, fermentability curves, yeast attenuation models. 1,220+ tests. The code is good. The game is fun.

2026 (May): brewers-almanack. An MCP server that gives AI assistants genuine brewing domain knowledge. 100 BJCP styles, 500+ hop varieties, water chemistry profiles for 8 classic brewing regions, off-flavour diagnosis, and recipe generation.

The through-line is brewing and technology, and I promise I didn't plan it as a trilogy. It just sort of happened, the way all hobby projects do: you scratch one itch and discover three more underneath.

## Why Embedded Data Beats API Dependencies

brewers-almanack ships with all its data embedded. No external API calls. No database connections. No third-party services. The hop data, style definitions, water profiles, and flavour compounds are all bundled into the package.

This is a deliberate design choice, and it goes against the instinct to "just use an API." Here's why:

**Reliability.** An MCP server that depends on an external API inherits that API's downtime. If the BJCP website is slow or the hop database API is down, your MCP server is useless. Embedded data is always available.

**Speed.** Local data lookups are measured in microseconds. API calls are measured in hundreds of milliseconds at best. When an AI assistant is querying hop characteristics mid-conversation, that latency difference matters.

**Cost.** External APIs often have usage limits or pricing tiers. Embedded data has zero marginal cost per query. For a tool that might get queried dozens of times in a single session, this adds up.

**Consistency.** BJCP style guidelines update roughly every 5 years. Hop characteristics change slowly. Water chemistry profiles don't change at all. This is reference data, not real-time data. Embedding it is the right architectural choice.

The trade-off is maintenance: when the BJCP releases updated guidelines, I need to update the embedded data and publish a new version. I'm fine with that trade-off. Updated style guidelines are a yearly event, not a daily one.

(A tangent: I had a brief crisis of confidence about whether anyone besides me would actually use a brewing MCP server. Then I remembered that there are approximately 1.2 million homebrewers in the US alone, and the craft beer industry is worth €85 billion globally. The Venn diagram of "people who brew" and "people who use AI tools" is small but enthusiastic. I'm betting on enthusiasm.)

## What's Inside

**100 BJCP Beer Styles.** The full Beer Judge Certification Program style guide, structured as queryable data. Each style has its vital statistics (OG, FG, IBU, SRM, ABV ranges), flavour profiles, key ingredients, and common brewing techniques. Ask for "styles with IBU above 60" or "lager styles suitable for beginners" and get structured results.

**500+ Hop Varieties.** Alpha acid ranges, beta acid ranges, total oil content, primary flavour descriptors, origin, typical usage (bittering, flavour, aroma, dual-purpose). This is the data that BeerBrew Tycoon uses in simplified form, but brewers-almanack has the full dataset.

**Water Chemistry Profiles.** 8 classic brewing water profiles (Dublin, Burton-on-Trent, Pilsen, Munich, Vienna, Dortmund, London, Edinburgh). Each with calcium, magnesium, sodium, chloride, sulphate, and bicarbonate concentrations. Plus adjustment calculations for matching a target profile from a given source water.

**Off-Flavour Diagnosis.** 23 common off-flavours with their chemical compounds (diacetyl, acetaldehyde, DMS, etc.), sensory descriptions, probable causes, and remediation strategies. This was the most fun to build because it's essentially a diagnostic decision tree for bad beer.

**Recipe Generation.** Given a target style and optional constraints (available ingredients, desired ABV, hop preference), generate a recipe with grain bill percentages, hop schedule, yeast recommendation, mash temperature, and fermentation profile. The recipes aren't guaranteed to be competition-winning, but they're solid starting points that follow style guidelines.

## The BeerBrew Tycoon Connection

Building brewers-almanack after BeerBrew Tycoon was cheating, in the best way. The game already had brewing science models: quality calculations, hop utilisation curves, ingredient interactions. brewers-almanack formalised and expanded that knowledge into a standalone tool.

Some data flowed the other direction too. While building the almanack's hop database, I discovered inconsistencies in BeerBrew Tycoon's hop data (several alpha acid ranges were wrong). The almanack made the game better, and the game made the almanack more practical. Unplanned synergies are the best kind.

## The Technical Stack

TypeScript, `@modelcontextprotocol/sdk`, Zod for validation. Same stack as godot-forge. The MCP stack profile from AI-Factory meant I could spin up the project structure in minutes. Having a stack profile for MCP servers is probably the most useful documentation I've written.

The test suite validates every tool, every data lookup, and every edge case I could think of. Brewing data has interesting edge cases: what happens when someone queries a hop that doesn't exist? What about style names with special characters (Märzen, Grisette)? What about water calculations that produce negative adjustment values (you can't remove minerals that aren't there)?

## The Circle

BrewMonitor measured temperature curves. BeerBrew Tycoon simulated them. brewers-almanack explains the science behind them.

Three different technologies (Arduino, Godot, MCP), three different decades of my life (my 20s, 30s, and... still 30s, technically), three different expressions of the same interest. Brewing is chemistry and process control and sensory evaluation and history and culture, all mixed together. It's the kind of domain that rewards obsession.

I don't know what the 2030s version of this will look like. Probably something I can't imagine yet, built with technology that doesn't exist yet, still fundamentally about making good beer.

I'll keep you posted.
