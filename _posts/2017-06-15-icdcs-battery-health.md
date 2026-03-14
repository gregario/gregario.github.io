---
layout: post
title: "My PhD Paper Got into ICDCS: Battery Health and Long-Term Sensing"
date: 2017-06-15
categories: academic
description: Batteries degrade, energy neutral systems slowly fail, and we turned it into an optimisation problem.
---

I got the ICDCS acceptance email at 2am on a Tuesday. I know this because I was in the lab, which tells you everything you need to know about the last month of that submission cycle. I may have done a small fist pump. Nobody was around to see it, which is probably for the best.

IEEE ICDCS — the International Conference on Distributed Computing Systems — is one of those venues where getting a paper accepted feels like it actually means something. Acceptance rates hover around 17-20%, the reviewers are thorough to the point of being terrifying, and the competition is stiff. Getting in with a paper about batteries might sound unglamorous, but hear me out.

## The Problem Nobody Was Talking About

Energy harvesting for wireless sensors had been a hot topic for years by 2017. The pitch is simple: stick a solar panel on your sensor node, harvest enough energy to keep it running, and you never need to change the battery. Energy neutral operation. Brilliant.

Except for one thing. Batteries degrade.

A lithium-ion battery loses the bones of 20% of its capacity over 500 charge-discharge cycles. If your sensor node charges and discharges once a day, that's less than two years before your battery can only hold 80% of what it used to. After five years, you might be down to 60%. After seven years, the battery is essentially a decorative cylinder.

This matters because the whole point of energy neutral operation is that you design the duty cycle — how often the sensor wakes up, takes a measurement, and transmits — so that the energy harvested equals the energy consumed over a full cycle. But if the battery capacity is shrinking, your energy buffer is shrinking too. Eventually, the node can't store enough energy during the day to survive the night. It dies. Not because there isn't enough sun, but because the battery can't hold the charge.

When I started looking at the literature, almost nobody was accounting for this. Energy harvesting papers would talk about "perpetual operation" with a straight face, as if the battery would last forever. It won't. I've seen the data.

## Turning It Into Maths

The approach we took was to formulate this as an optimisation problem. Given a battery with known degradation characteristics, a known energy harvesting profile (from the models we'd built for the SMARTCOMP paper), and a desired system lifetime, what's the optimal duty cycle schedule?

The trick is that the duty cycle isn't static. In year one, your battery is fine, and you can afford aggressive sensing — wake up every 5 minutes, transmit everything. By year three, you need to back off. Maybe sense every 15 minutes. By year five, every 30 minutes. The optimisation finds the schedule that maximises total data yield over the system lifetime while keeping the node alive.

There's a nice subtlety here that I'm quite proud of. Battery degradation isn't just a function of time — it depends on how you use the battery. Deep discharges degrade it faster than shallow ones. High charge rates degrade it faster than low ones. So the duty cycle affects the degradation rate, which affects the future duty cycle. It's a coupled problem, which makes it more interesting and more annoying in roughly equal measure.

We solved it with a dynamic programming approach, discretising the battery state-of-health into levels and finding the optimal policy at each level. Nothing revolutionary algorithmically, but the contribution was showing that this problem exists, matters, and can be addressed systematically.

## The Numbers

On our test scenarios — solar-powered environmental sensors deployed in London (because that's where we were, not because London is ideal for solar anything) — accounting for battery degradation extended useful system lifetime by 2-3 years compared to a fixed duty cycle. The total amount of data collected was actually higher with the adaptive approach, even though the sensing rate decreases over time, because the node stays alive longer instead of dying abruptly.

The cost argument is compelling too. A wireless sensor node with solar harvesting costs the bones of £30-50 to build. Sending someone to a rooftop to replace a dead battery costs £150-200 in labour, if you can even get access. If your network has 100 nodes, that's £15,000-20,000 in maintenance you'd rather avoid.

## A Tangent About Conferences

I should mention: ICDCS 2017 was in Atlanta, and it was my first time presenting at a top-tier conference. The session had about 60 people in the room, which is 59 more than I'd practised in front of. I'd rehearsed the talk approximately one hundred times, timed it to exactly 18 minutes, and had backup slides for every conceivable question.

Naturally, the projector didn't work for the first three minutes. I stood there making small talk with the session chair while the AV team sorted it out, which used up all the adrenaline I'd been saving for the actual presentation. By the time I started talking, I was weirdly calm. The questions were good — someone from ETH Zurich asked about supercapacitors as an alternative to batteries, which I hadn't considered but probably should have.

## Looking Back

This paper ended up being one of the foundations of my thesis. The energy modelling from SMARTCOMP fed into it, and it fed forward into the deployment work and the failure analysis. It's not my most-cited paper — that honour goes to the jamming attacks work — but it's the one I'm most personally attached to, because it started from a genuine "wait, has nobody thought about this?" moment.

Those moments don't come often in research. When they do, you write them down quickly before someone else does.
