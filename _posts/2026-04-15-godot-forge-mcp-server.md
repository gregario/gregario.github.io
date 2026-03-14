---
layout: post
title: "godot-forge: Building and Publishing an MCP Server for Game Development"
date: 2026-04-15
categories: personal
description: Building an MCP server that gives AI assistants Godot 4 superpowers, from idea to npm package to listed on Glama and MCP Registry.
---

The moment that convinced me to build godot-forge was watching Claude hallucinate a Godot API call for the fourth time in an afternoon. `get_tree().get_nodes_in_group()` is a real function. `get_tree().find_nodes_by_class()` is not. But Claude was very confident about it, and I was very tired of correcting it.

What if, instead of memorising Godot's API, Claude could just look it up?

## What MCP Servers Are (the Short Version)

MCP (Model Context Protocol) is Anthropic's open standard for giving AI assistants access to external tools and data. An MCP server is a program that exposes tools, resources, and prompts that any MCP-compatible client (Claude Desktop, Claude Code, etc.) can use.

Think of it this way: if an AI assistant is a brain, MCP servers are hands and eyes. They let the assistant interact with the world rather than just generating text about it.

## What godot-forge Does

godot-forge gives AI assistants 8 tools for working with Godot 4 projects:

1. **test-runner**: runs GUT tests and returns structured results
2. **script-analysis**: parses GDScript files for classes, functions, signals, dependencies
3. **scene-analysis**: parses .tscn files for node trees, script attachments, resource references
4. **docs-search**: searches Godot's built-in documentation
5. **lsp-diagnostics**: gets Godot LSP errors and warnings
6. **resource-analysis**: parses .tres resource files
7. **project-scan**: scans project structure and returns a summary
8. **screenshot**: captures the Godot editor or running game

The test-runner was the most impactful. Before godot-forge, when Claude wrote code for BeerBrew Tycoon, I had to manually run the tests and paste the results back. Now Claude runs the tests itself, reads the output, and fixes failures without my involvement. The feedback loop went from minutes to seconds.

## The Build

godot-forge is TypeScript, built on the `@modelcontextprotocol/sdk` with Zod for schema validation. It uses stdio transport (the simplest option: the client launches the server as a subprocess and communicates via stdin/stdout).

The test suite has 74 tests. I used the MCP stack profile from my AI-Factory repo, which meant Engineer Claude already knew the patterns: how to structure tools, how to handle errors, how to validate inputs. The stack profile earned its keep here.

(A tangent: the hardest part of building godot-forge wasn't the MCP protocol or the tool implementation. It was parsing Godot's .tscn and .tres file formats. These are Godot-specific text formats that look a bit like INI files but aren't. They have their own escaping rules, their own nesting conventions, and their own special cases. I spent more time on the parser than on the entire MCP integration. Software is like that sometimes: the boring part takes the longest.)

The build took about a week of evening sessions. The first three days were the core tools and tests. The fourth day was the docs-search tool, which required indexing Godot's XML documentation files. The fifth day was polish, error handling, and the README.

## The Publishing Pipeline

Getting from "working code" to "listed on registries" was its own adventure:

**npm:** Standard `npm publish`. Package is `godot-forge`. I set up the package.json with the right `bin` entry so it can be run via `npx godot-forge`. Cost: free (public npm package).

**Glama:** Glama is a directory of MCP servers. Submission is a pull request to their repository with a metadata file. Review took about 3 days. They check that the server actually works, which is refreshingly thorough.

**MCP Registry:** Similar submission process. Slightly different metadata format. Review took about a week.

The total cost of publishing was €0 in money and about 4 hours in time. The npm ecosystem makes distribution almost trivially easy, which is one of the reasons I chose TypeScript for MCP servers. You run `npx godot-forge` and it just works. No binary downloads, no dependency hell, no "please install these 7 prerequisites first."

## How It Changed the BeerBrew Tycoon Workflow

Before godot-forge, a typical implementation session looked like:
1. Claude writes code
2. I run tests manually
3. I paste test output back to Claude
4. Claude fixes failures
5. Repeat

After godot-forge:
1. Claude writes code
2. Claude runs tests via godot-forge
3. Claude fixes failures
4. Claude runs tests again
5. Claude tells me everything passes

The difference is that steps 2-5 happen without my involvement. I'm freed up to review the code, think about design, or (honestly) make tea. The feedback loop is faster, and I'm no longer a bottleneck in the test-run cycle.

The docs-search tool also made a measurable difference. Claude's Godot API accuracy improved noticeably once it could look things up instead of generating from training data. Fewer hallucinated function names. Fewer incorrect parameter types. Less of me squinting at error messages.

## Why MCP Servers Are the New Developer Tools

Here's my pitch: MCP servers are to AI-assisted development what command-line tools are to traditional development. They extend the AI's capabilities in specific, composable ways. Just as a developer uses `git`, `npm`, `curl`, and `jq` as specialised tools in their workflow, an AI assistant uses MCP servers as specialised tools in its workflow.

The difference is that MCP servers are designed for machine consumption. The outputs are structured. The inputs are validated. The error messages are informative. Everything a human developer learns to handle through experience, an MCP server handles through schema.

I think we'll see an explosion of domain-specific MCP servers over the next year or two. Every specialised tool, every domain knowledge base, every proprietary API will eventually have an MCP server in front of it. It's the natural interface between AI assistants and the rest of the software world.

godot-forge was my first MCP server. It won't be my last. The next one involves beer, naturally.
