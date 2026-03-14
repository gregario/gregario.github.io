---
layout: post
title: "Founding AutoPlan: AI for the Planning System (in a Pandemic)"
date: 2020-04-15
categories: professional
description: Launching an AI startup for planning applications in March 2020, which was either perfect timing or terrible timing depending on the day.
---

I incorporated AutoPlan in March 2020. If you're reading that date and wincing, yes, you're correct. I launched a startup the same week Ireland went into its first COVID-19 lockdown. The Companies Registration Office processed my paperwork while the rest of the country was panic-buying toilet paper.

In my defence, the timing wasn't intentional. I'd been working towards this since Singapore, through the law diploma, through months of customer discovery conversations with architects and planning consultants. The company formation was already in motion when the world stopped. I just didn't stop with it, which was either brave or foolish. The distinction between those two words, in startups, is usually determined retrospectively by whether you made money.

## The Problem

Here's what architects deal with in Ireland: before they can build anything, they need planning permission. A typical planning application involves a site layout, floor plans, elevations, a design statement, an environmental report (sometimes), a traffic assessment (sometimes), flood risk analysis (sometimes), and compliance arguments against the local development plan, national guidelines, and relevant case law.

An experienced architectural technologist might spend 40-60 hours preparing a single application. The rejection rate in some local authorities runs above 20%. A rejection means reworking, resubmitting, paying fees again (around €80-€300 for domestic, much more for commercial), and losing months of calendar time. For a small practice handling 15-20 applications per year, the cost of this process is enormous.

I wanted to build AI that could read a development plan, understand the relevant rules for a specific site, and tell the architect what they needed to address before they submitted. Think of it as a planning compliance checker, an AI that knows the rules better than any individual planner because it's read every development plan in the country.

## NDRC

AutoPlan was accepted into NDRC, the National Digital Research Centre, which was at the time Ireland's leading pre-seed startup programme and ranked in the top 5 accelerators in Europe. They provided €100,000 in funding (a mix of equity investment and grant), office space (which immediately became irrelevant because lockdown), mentorship, and access to a network of Irish tech founders and investors.

The NDRC acceptance was a significant moment. Not because of the money, though the money was obviously important. Because it was external validation from people who'd seen hundreds of pitches and decided this one was worth backing. When you're a solo founder working from your kitchen table during a pandemic, external validation matters more than you'd like to admit.

## Building Remotely, in a Pandemic

Here's the thing nobody tells you about founding a company during a lockdown: the Zoom calls are actually fine. Everyone's on Zoom. Investors, customers, mentors, potential hires. Nobody can ghost you by saying they're too busy to meet because everyone is visibly at home with nowhere to go.

The hard part is the loneliness. And I don't mean that in a dramatic way. I mean that starting a company is already isolating. You've left whatever job or institution gave you daily human contact. You spend your days on problems that nobody else fully understands because they're your problems, specific to your company, your market, your technology. In normal times, you'd at least go to a co-working space and have awkward kitchen conversations with other founders. In March 2020, you had your flat and a laptop and a growing suspicion that the sourdough starter on the counter was your most stable relationship.

I built the first prototype of AutoPlan alone, in a one-bedroom apartment in Dublin 8. The technology was a mix of NLP (natural language processing, for reading development plans), geospatial analysis (for understanding what rules applied to specific sites), and a lot of very unsexy data processing (converting PDF development plans into structured data, which is approximately as fun as it sounds).

Here's a tangent about PDFs: they are the cockroaches of document formats. Every local authority in Ireland publishes their development plan as a PDF. Some are text-searchable. Some are scanned images. Some are a chaotic mix of both. One county's plan had a watermark on every page that broke my text extraction pipeline. Another had footnotes that continued across three pages. Building AI for this domain started with months of pure data engineering, and if I'd known that at the outset I might have stayed in academia.

## The Early Product

The first version of AutoPlan was embarrassingly simple. You'd enter a site address, it would identify the local authority and relevant zoning, and it would return a summary of what the development plan said about that zone. No AI, no magic, just a lookup tool that saved architects from reading a 400-page PDF to find the three pages that mattered to them.

But the architects I showed it to loved it. Not because it was sophisticated, but because it solved a real, immediate pain. That's a lesson I carry from those early days: the first version of your product should make one person's Tuesday afternoon slightly less miserable. Everything else is iteration.

The pandemic raged on. AutoPlan kept growing. The sourdough starter died. I consider two out of three a reasonable success rate.
