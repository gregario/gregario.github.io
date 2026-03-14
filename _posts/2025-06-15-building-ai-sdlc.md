---
layout: post
title: "Building an AI SDLC: Standards for How We Ship AI Features"
date: 2025-06-15
categories: professional
description: Developing a company-wide framework for conceiving, building, and shipping AI features in healthcare software.
---

Nobody wakes up excited to write process documentation. I certainly didn't. But six months into leading AI transformation at Oneview, I realised we had a problem that only process documentation could solve.

Teams were building AI features. That was the good news. The bad news was that every team was doing it differently. One team was fine-tuning models without a review process. Another was using an LLM API with no fallback strategy. A third had built something brilliant but couldn't explain to our compliance team how it worked. We were shipping AI features the way startups ship MVPs: fast, creative, and with a faint whiff of chaos.

Healthcare doesn't tolerate chaos well.

## What "AI-Native" Actually Means Operationally

Everyone says they want to be "AI-native." It's one of those phrases that sounds strategic in a board meeting but dissolves into vagueness when you try to implement it. So I spent three weeks interviewing every team lead, every product manager, and our compliance officer Rachel to figure out what AI-native would actually look like at Oneview.

The answer: it means AI is a first-class consideration in every stage of the software development lifecycle, not an afterthought bolted on at the end.

That means:
- **Requirements** include AI-specific acceptance criteria (accuracy thresholds, fallback behaviour, bias checks)
- **Design** accounts for AI uncertainty (what does the UI show when the model isn't confident?)
- **Implementation** follows patterns for model integration, prompt management, and output validation
- **Testing** includes AI-specific test strategies (not just "does it return 200 OK?" but "does it return something clinically appropriate?")
- **Deployment** has AI-specific monitoring and rollback procedures
- **Maintenance** includes model drift detection and retraining triggers

Each of those bullet points took about two weeks to turn into actual standards with examples, templates, and review checklists. The full AI SDLC document is 47 pages. Nobody reads 47 pages voluntarily, which is why I also wrote a 4-page summary and a 1-page cheat sheet.

## The Patterns

Three patterns emerged as the most useful across teams:

**The Confidence Gate.** Every AI output gets a confidence score. Below a threshold, the system falls back to a non-AI path. This sounds obvious, but you'd be surprised how many AI features in production just show whatever the model returns, regardless of confidence. In healthcare, a low-confidence suggestion shown without qualification is worse than no suggestion at all.

**The Human-in-the-Loop Checkpoint.** For clinical-adjacent features, there's always a point where a human reviews the AI output before it reaches a patient or clinician. The checkpoint can be synchronous (the human reviews before the output is shown) or asynchronous (the output is shown but flagged for review). The choice depends on the risk profile of the feature.

**The Audit Trail.** Every AI decision is logged with its inputs, outputs, model version, and confidence score. This isn't just good practice; it's a regulatory requirement in healthcare. But even without regulation, you want this. When something goes wrong (and something always goes wrong), you need to be able to trace exactly what happened and why.

(A tangent: I first learned about audit trails during my PhD at Imperial, where we had to document every experimental parameter for reproducibility. I thought it was bureaucratic at the time. Twelve years later, I'm building the same concept into AI systems, and I'm grateful for the training. Funny how that works.)

## The Guardrails

Standards without guardrails are suggestions. We needed actual enforcement. So the AI SDLC includes:

- A mandatory AI Impact Assessment for any feature that uses a language model, ML model, or AI-generated content. It takes about 30 minutes to complete and forces the team to think about failure modes before they write code.
- A review gate where the AI Community of Practice reviews new AI features before they go to production. This adds about 3 days to the timeline but has caught issues that would have been much more expensive to fix post-launch.
- Approved model and provider lists. You can't just sign up for any AI API and start shipping features with it. There are approved providers, approved models, and approved use cases. Adding a new one requires a security and privacy review.

The review gate was controversial. Engineers don't love additional gates. But after the first review caught a feature that was inadvertently sending patient context to a third-party API in a way that violated our data processing agreement, the complaints stopped.

## The Training Materials Nobody Wants to Write

I also had to create training materials. Four workshops, each 90 minutes:
1. AI Fundamentals for Product Teams (what models can and can't do)
2. AI SDLC in Practice (the standards, with worked examples)
3. Prompt Engineering for Production (not the "10 tips" blog post version; the actual engineering version with version control, testing, and monitoring)
4. AI Ethics and Bias in Healthcare (facilitated discussion, not a lecture)

Workshop 3 cost me a weekend to build properly. Workshop 4 cost me some sleep, because getting the ethics discussion right in a healthcare context is genuinely hard. I'm not an ethicist, and I said so at the start of the session, which oddly made the discussion more productive. People open up more when the facilitator admits they don't have all the answers.

## Is It Working?

It's been three months since we rolled out the AI SDLC. Early indicators are positive. We've shipped 6 AI features through the new process. None have had production incidents. The average time from concept to production is actually shorter than before, because teams spend less time arguing about approach and more time building.

But the real test will be the next 12 months. Standards are easy to follow when they're new and everyone's paying attention. The challenge is making them stick when the novelty wears off and deadlines start pressing.

I'll let you know.
