---
layout: post
title: "In AI Before It Was Trendy: A Timeline"
date: 2023-10-15
categories: professional
description: A decade of working in AI, from sensor networks to planning algorithms to everyone suddenly discovering ChatGPT.
---

In November 2022, ChatGPT launched and my LinkedIn feed transformed overnight. People who'd been posting about sales funnels were suddenly AI thought leaders. Founders who'd built CRM tools were pivoting to "AI-first" strategies. My uncle asked me at Christmas dinner if I was worried about being replaced by artificial intelligence.

I've been working in AI for ten years. Here's what that actually looked like.

## 2013: Intel Labs — ML for sensor networks

My first real AI work was at Intel Labs in Dublin, working under Niall Murphy. I was part of a research group applying machine learning to wireless sensor network data. The specific problem was anomaly detection: figuring out when a sensor reading was genuinely unusual versus when the sensor was just being flaky.

The models were simple by today's standards. Random forests, SVMs, some Bayesian approaches. The hard part wasn't the ML; it was dealing with sensors that had a 12% failure rate and batteries that died at inconvenient times. The dataset we published had 4.2 million readings. That felt enormous in 2013. A modern language model would consider it a rounding error.

## 2014-2017: PhD at Imperial College London

My PhD was at the intersection of optimisation and environmental modelling. I built algorithms to predict air quality patterns in urban areas, using a combination of atmospheric dispersion models, meteorological data, and ground-truth sensor measurements.

The work resulted in two European patents and some papers I'm still proud of. But the honest truth is that I spent a disproportionate amount of my PhD fighting with data preprocessing rather than doing actual research. Messy Met Office data. GPS coordinates in three different reference systems. Sensor calibration drift that nobody warned me about.

(Tangent: one of my PhD examiners asked me during my viva why I hadn't used neural networks. This was 2017. The answer was that shallow neural nets performed worse than gradient-boosted trees on my dataset, and deep learning didn't have enough training data to work with the bones of 200 sensor locations I had. He seemed disappointed. I suspect he'd just come from a conference where everyone was excited about deep learning and wanted me to be excited too.)

## 2017-2018: Domus.ai — planning AI

First startup. Domus.ai was building AI for home renovation planning: given a floor plan and a budget, generate an optimised renovation plan. It was essentially constraint satisfaction meets recommendation systems. We got through Entrepreneur First's EF6 cohort.

It didn't work as a business. The home renovation market is brutally fragmented, margins are thin, and homeowners make purchasing decisions approximately once per decade. We wound it down after about eight months. Cost of the education: roughly €40,000 in lost salary.

## 2018-2021: AutoPlan — AI PlanTech

Second proper startup. Construction scheduling optimisation. I've [written about this elsewhere](/blog/2022/what-i-learned-running-ai-startup/), but the AI was the best part of the company. We built planning algorithms that could genuinely reduce project timelines by 15-20%. The challenge was everything that wasn't the AI.

## 2019: Turing Institute — adaptive ML

While running AutoPlan, I did a fellowship at the Alan Turing Institute in London. The research was on adaptive machine learning systems, specifically models that could detect when their own assumptions had drifted and flag the need for retraining. This work directly influenced how I think about production ML systems today. Models don't just need to be accurate at deployment; they need to know when they're becoming inaccurate.

## 2020: CES Innovation Award — Climo

Climo was an air quality monitoring product that came out of my PhD research, built with Glanaer (my third company, a consultancy). It won a CES Innovation Award in 2020. The award ceremony was in Las Vegas, which is a surreal place to receive recognition for environmental monitoring work. The irony of flying 8,000 kilometres to accept an award for an air quality product was not lost on me.

## 2022-now: Enterprise AI at ZF Group

Building AI-powered products for commercial vehicle fleet management at a 150,000-person company. Different scale, different constraints, same fundamental challenges of getting good data and convincing humans to trust the outputs.

## The perspective

Here's what a decade gives you: pattern recognition. Not the algorithmic kind. The human kind.

Every few years, a technology goes through the hype cycle. I've watched it happen with IoT (2014), blockchain (2017), and now generative AI (2023). The pattern is always the same: excitement, overpromising, disillusionment, and then the people who were quietly building useful things all along continue to do so while everyone else moves on to the next thing.

Generative AI is genuinely different in one important way: the capability jump is larger than anything I've seen. GPT-4 can do things that would have been science fiction when I was at Intel Labs. But the deployment challenges are the same as they've always been. Data quality. Process integration. Organisational change. Trust.

So when someone at a dinner party tells me they're "getting into AI," I don't roll my eyes. I ask what problem they're solving. If they have a good answer, brilliant. If they start talking about "the space" and "the opportunity," I know they'll be posting about something else in eighteen months.

The models keep getting better. The hard work stays the same.
