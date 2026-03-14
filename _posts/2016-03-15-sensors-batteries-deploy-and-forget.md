---
layout: post
title: "Sensors, Batteries, and Why 'Deploy and Forget' is a Lie"
date: 2016-03-15
categories: academic
description: The core problem of my PhD taking shape. Battery degradation in wireless sensor networks and why existing energy harvesting models assume batteries last forever.
---

Six months into my PhD and I've read 127 papers. I know this because I have a spreadsheet, and the spreadsheet is the only thing stopping me from losing my mind. Of those 127 papers, roughly 80 deal with energy harvesting in wireless sensor networks. And of those 80, exactly three mention battery degradation.

Three.

That's the problem.

## The Promise

The pitch for energy-harvesting wireless sensor networks goes like this: stick a solar panel (or a vibration harvester, or a thermoelectric generator) on your sensor node, and it'll harvest enough ambient energy to run indefinitely. Deploy it, walk away, forget about it. The node takes care of itself.

This is a lovely story. It's clean. It's elegant. It fits on a conference poster. And it's not true.

## What "Indefinitely" Actually Means

Let's talk about batteries for a minute. Most energy-harvesting sensor nodes use a rechargeable battery as an energy buffer. Solar energy comes in during the day, gets stored in the battery, and the node uses that stored energy at night. The battery is the bridge between intermittent supply and continuous demand.

Here's the bit that the models tend to gloss over: rechargeable batteries degrade. Every charge-discharge cycle does a tiny bit of irreversible damage. A typical lithium-ion cell rated for 500 cycles will lose the bones of 20% of its original capacity after those 500 cycles. That's not a defect; that's just chemistry.

Now do the maths. If your sensor node does one full charge-discharge cycle per day (which is common for solar-powered outdoor nodes), you'll hit 500 cycles in about 18 months. At that point, your battery holds 80% of its original capacity. After another 18 months, maybe 60%. The node that was happily running for three years starts struggling. Then it dies.

"Deploy and forget" has become "deploy and forget until it silently stops working and nobody notices."

## What Exists Today

I've been cataloguing how existing Energy Neutral Operation (ENO) algorithms handle this. The most-cited ENO papers use some variant of the following approach: measure how much energy you harvested today, predict how much you'll harvest tomorrow, and set your sensing rate to match. Harvest a lot? Sense frequently. Harvest a little? Slow down.

The maths is sound. The control theory is elegant. Some of these papers have genuinely clever prediction algorithms that account for weather variability, seasonal changes, and even cloud cover patterns.

But almost all of them model the battery as a bucket. Energy goes in, energy comes out. The bucket never leaks, never shrinks, never changes. It's the same bucket on day 1 as it is on day 1,000.

Quick tangent: I spent two weeks reading about battery chemistry and it's properly fascinating. The reason lithium-ion batteries degrade is that lithium ions get trapped in the solid electrolyte interphase layer during charging. They're physically locked away, unable to participate in future cycles. It's like losing soldiers in battle. Each cycle, a few more don't come back. There's a poetic sadness to it, if you're the kind of person who finds poetry in electrochemistry. I might be that person. It's been a long six months.

## Why This Matters

You might think: so what? Batteries die. Replace them. That's what maintenance is for.

Fair point. But the whole selling point of energy harvesting is that you *don't* need maintenance. The economic case for solar-powered environmental monitoring (air quality, river levels, soil moisture, structural health) depends on not sending engineers out to remote locations to swap batteries. In the London Living Lab, we had nodes deployed on school rooftops, in parks, on lampposts. Accessing them was possible but expensive and disruptive. Scale that up to agricultural monitoring across thousands of hectares, or environmental monitoring in developing countries, and "just replace the batteries" stops being viable.

A battery replacement visit costs, conservatively, £50-100 per node when you factor in labour, transport, and the replacement battery itself. For a network of 1,000 nodes, that's £50,000-100,000 per replacement cycle. If batteries last 18-24 months, you're spending that every two years. For a technology that was supposed to be low-cost and maintenance-free, that's a serious problem.

## Where I'm Going

I don't have answers yet. I have questions, which is apparently the correct state for a first-year PhD student. Julie keeps telling me that the first year is about understanding the landscape, and the second year is about finding your gap. I think I've found the gap. It's the gap between the perfect battery in the model and the degrading battery on the rooftop.

The direction I'm heading is something like: what if the ENO algorithm knew about battery degradation? What if it could model the remaining capacity, predict the remaining useful life, and adjust its behaviour accordingly? What if, instead of squeezing every last drop of energy out of a dying battery, it could gracefully reduce its ambitions and extend its useful life?

That's not a thesis yet. It's not even a research question yet, not formally. But it's the shape of one. And after 127 papers and six months of reading, having a shape feels like progress.

Now if you'll excuse me, I have paper 128 to read. It's about supercapacitors. They don't degrade like batteries, but they leak energy like a sieve. Nothing is easy.
