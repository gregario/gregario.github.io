---
layout: post
title: "Accurate Models of Energy Harvesting for Smart Environments"
date: 2017-01-15
categories: academic
description: Why existing energy models for sensor nodes are wrong, and what we did about it.
---

I spent the bones of three months staring at solar panel data before I realised the model everyone was using was nonsense.

Not maliciously wrong. Just... optimistic. The kind of optimistic you get when someone tests their energy harvesting model in a lab with a halogen lamp and then claims it'll work on a rooftop in London in November. Spoiler: London in November is not a halogen lamp.

This was the starting point for our IEEE SMARTCOMP paper, where we looked at how energy harvesting models for wireless sensor nodes actually hold up when you put them in real environments. The short answer is: badly. The longer answer involves solar irradiance curves, fluid flow dynamics, and a lot of spreadsheets.

## The Problem with Clean Models

Most energy harvesting papers at the time used one of two approaches. Either they'd assume a constant harvesting rate (which is like assuming it's always sunny — try selling that to anyone who's lived in Ireland), or they'd use idealised sinusoidal models that roughly approximate a day-night cycle but miss everything interesting.

What's interesting? Clouds, for one. Shadows from buildings. The fact that a solar panel at 15 degrees tilt in January harvests about 40% less than the same panel in June. Seasonal variation, short-term transients, the works.

We also looked at flow-based energy harvesting — think tiny turbines in water pipes. The maths there is different but the problem is the same: real-world flow patterns don't look like the smooth curves in textbooks. They look like someone drew a line graph while having a sneezing fit.

## What We Actually Did

We built models that used real environmental data — actual solar irradiance measurements, actual flow rates — and then compared what our models predicted against what the sensor nodes actually harvested. The gap between "model says" and "reality says" turned out to be significant enough to matter for system design.

Here's the thing that surprised me. It wasn't just that the simple models were inaccurate. It's that they were inaccurate in ways that compound over time. If you're designing a sensor node to run for five years on harvested energy (which is the whole point of energy harvesting — you don't want to send someone up a ladder to change batteries), then a 15% error in your energy model doesn't just mean 15% less energy. It means your duty cycle calculations are wrong, your sleep schedules are wrong, and eventually your node dies two years early.

So we proposed models that account for temporal variation at multiple scales: hourly, daily, and seasonal. More parameters, yes, but parameters that actually correspond to things you can measure.

## The Trade-off Nobody Talks About

There's a tension here that I think is underappreciated. More accurate models need more computation. If you're running these models on the sensor node itself — so it can adapt its own behaviour — then the model is consuming some of the energy it's trying to optimise. It's a bit like hiring an accountant who charges more than they save you.

We spent a fair bit of time on this trade-off. How complex can your model be before the inference cost eats into your energy budget? For our solar case study, the sweet spot was a model with the bones of 6 parameters — enough to capture seasonal and weather variation, cheap enough to run on a microcontroller with 32KB of RAM.

I'll admit I went down a rabbit hole trying to get a neural network running on the sensor node. This was 2016, before TinyML was a thing, and I was trying to fit a multi-layer perceptron into an MSP430. Julie (Prof McCann, my supervisor) politely suggested I was "perhaps overcomplicating things." She was right. A piecewise linear model did 90% as well and used 200 times less memory.

## Why This Matters

Energy harvesting isn't a niche curiosity anymore. There are billions of IoT devices out there, and a good chunk of them are in places where you can't easily replace batteries. Environmental monitoring, structural health monitoring, precision agriculture — all of these need nodes that run for years without maintenance.

If your energy model is wrong, you either over-provision (expensive, wasteful) or under-provision (node dies, data lost). Neither is brilliant.

The SMARTCOMP paper was my first real publication at Imperial, and presenting it was terrifying in the way that first conference talks always are. I spoke too fast, forgot to advance one slide, and someone asked a question about piezoelectric harvesting that I absolutely could not answer. But the core contribution — that we need environment-specific, multi-timescale energy models — has held up well. It set the foundation for the battery health work that came later, which eventually got into ICDCS.

Sometimes the most useful thing you can do is point out that the emperor's energy model has no clothes.
