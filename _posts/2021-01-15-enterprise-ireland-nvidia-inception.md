---
layout: post
title: "Enterprise Ireland, Nvidia Inception, and the AutoPlan Stack"
date: 2021-01-15
categories: professional
description: On accumulating impressive logos, what they actually mean, and what they don't.
---

By January 2021, AutoPlan's partnership slide looked like this: NDRC. Enterprise Ireland. ESA BIC. Nvidia Inception. Google for Startups. Amazon Web Services. Autodesk. Seven logos, neatly arranged, each one implying a level of institutional endorsement that would make any investor's ears perk up.

I want to talk honestly about what these logos mean and what they don't, because there's a gap between perception and reality that I think is worth closing.

## Enterprise Ireland

Enterprise Ireland is the government agency responsible for Irish companies that export. Becoming an EI client is significant. It means the agency has assessed your company and decided you're worth supporting with grants, trade missions, mentoring, and introductions to overseas buyers. The financial support is meaningful: feasibility grants, innovation vouchers, and larger R&D funding if you qualify. We received our first EI support in 2020, and it contributed directly to product development.

What it means: the Irish government has decided your company is real and worth investing in. What it doesn't mean: the Irish government has decided your company will succeed. EI supports hundreds of companies. Some fail. That's understood. But the support itself, the access to market intelligence, the introductions to buyers in the UK and Europe, the credibility when talking to international partners, is genuinely valuable.

## Nvidia Inception

Nvidia Inception is a programme for AI startups. You apply, they review your use of GPU computing and AI, and if accepted, you get credits for Nvidia's cloud GPU platform, technical support, and the right to use the Nvidia Inception badge on your materials.

Here's the honest bit: the bar for entry isn't as high as people assume. Nvidia Inception accepts thousands of companies. It's not Y Combinator; it's more like a tiered partnership programme that starts broad and narrows as you prove traction. The initial tier is relatively accessible for any company doing genuine AI/ML work.

That said, the benefits are real. We used the GPU credits for training NLP models on planning documents. A single training run for our document classification model cost the bones of $200 in cloud compute. The Nvidia credits meant we could iterate without agonising over every experiment's price tag. For an early-stage startup where every euro matters, free compute is free compute.

## Google, Amazon, Autodesk

Google for Startups provided cloud credits (around $100,000 worth, which sounds enormous until you realise how quickly cloud costs accumulate when you're processing satellite imagery and running ML pipelines). Amazon AWS had a similar programme with similar credits. Autodesk's partnership was more domain-specific: they're interested in construction technology, and AutoPlan's connection to the built environment made us a natural fit for their programme.

Here's a tangent about cloud credits: they're the startup equivalent of airline miles. They feel like money. They function like money. But they expire, they come with conditions, and they create a dependency that can be expensive when they run out. I've watched startups build their entire infrastructure on credit-subsidised cloud services and then face a terrifying bill when the credits expire and they haven't raised enough to cover the real cost. We were careful about this. We designed AutoPlan's infrastructure to be cost-efficient from day one, treating the credits as a bonus rather than a foundation.

## What Logos Actually Mean

So here's the uncomfortable truth about partnership logos: they're a signal, not a substance. Having the Nvidia logo doesn't mean Nvidia is invested in your success. Having the ESA logo doesn't mean an astronaut is going to use your product. Having the Enterprise Ireland logo doesn't mean the government will bail you out if things go sideways.

What they do mean is that someone, at each of these organisations, reviewed your application and decided you weren't a waste of time. That's a lower bar than most people imagine, but it's not nothing. Especially when you're a solo founder in Dublin trying to convince architects that an AI company they've never heard of can actually help them.

The logos also compound. Each one makes the next one easier to get. "We're an ESA BIC company" helps when you're applying to Nvidia Inception. "We're backed by NDRC and Enterprise Ireland" helps when you're applying to Google for Startups. It's a credibility flywheel, and it's one of the few genuine advantages of being in the European startup ecosystem, where these programmes exist and are well-connected.

## The Actual Stack

Behind the logos, there was a real technology stack that I was building and iterating on. By early 2021, AutoPlan's architecture looked something like this: Python backend for NLP and geospatial processing, PostgreSQL with PostGIS for spatial data, a React frontend, and a growing collection of ML models for document classification, entity extraction, and compliance checking.

The NLP work was the core. Planning documents are dense, technical, and full of domain-specific language. A development plan might say "residential development shall not exceed a plot ratio of 0.5 in areas zoned A1" and that sentence contains three distinct pieces of structured information (use type, metric, zone) that need to be extracted and stored. Getting a model to do this reliably across 31 local authority development plans, each written by different people in different styles, was the central technical challenge.

Was the tech brilliant? Sometimes. Was it hacky in places? Definitely. Was it better than the alternative (an architect manually reading 400-page PDFs)? Absolutely.

Seven logos. One person. One laptop. And a growing collection of Python scripts held together by determination and cloud credits. Credit where it's due: my Enterprise Ireland advisor kept me honest about what the logos meant versus what I still needed to prove, and the NDRC alumni network kept me sane during the solo stretches. That's the honest state of early-stage startup infrastructure, no matter how good the slide deck looks.
