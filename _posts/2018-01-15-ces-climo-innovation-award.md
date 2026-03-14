---
layout: post
title: "CES 2018: Climo Wins an Innovation Award for Smart Cities"
date: 2018-01-15
categories: professional
description: Seeing research turn into a product at CES, and what it feels like to win an innovation award.
---

Standing in the Las Vegas Convention Centre in January 2018, surrounded by 180,000 people and more screens than I'd seen in my entire life, I had one very clear thought: this is absolutely nothing like a research lab.

The Climo air quality monitoring system — the same technology we'd been deploying across London, the same sensors I'd spent months debugging when they drifted in humidity, the same platform that featured in our "Tales from the Wild" failure paper — had just won a CES Innovation Award in the Smart Cities category. And here it was, on a booth, with a banner, being demonstrated to people who actually wanted to buy it.

## What Climo Actually Was

Climo was an air quality monitoring platform that came out of research at Imperial. The hardware was a compact sensor unit measuring NO2, CO, O3, particulate matter (PM2.5 and PM10), temperature, humidity, and noise. The units were designed to be mounted on street furniture — lamp posts, bus shelters, building facades — and connected via cellular or LoRaWAN to a cloud platform that did the data processing, calibration correction, and visualisation.

The thing that made Climo different from other air quality monitors wasn't any single technical innovation. It was the full stack approach. Most academic air quality projects build the sensor and stop there. Climo included the sensor design, the enclosure engineering (waterproof to IP65, which we learned the hard way was necessary after the bat monitor enclosure leak incident), the calibration pipeline, the data platform, and the API for third-party integration. A complete product, not a prototype.

The unit cost was about £350 per node at the volumes we were producing, which is roughly a tenth of the cost of a reference-grade monitoring station. Obviously the accuracy isn't reference-grade either — electrochemical sensors aren't the same as chemiluminescence analysers — but for hyperlocal air quality mapping, where you want 50 sensors across a borough rather than 3 reference stations, the trade-off makes sense.

## The CES Experience

I'd never been to CES before. I don't think anything can prepare you for it. The show floor is the size of several football pitches. Every company in the world is there, from Samsung with their 50-metre display wall to a bloke from Shenzhen selling Bluetooth-enabled chopsticks (real product, real booth, no idea who buys those).

The Smart Cities section was mercifully smaller and more focused. Our booth was modest — a table, a demo unit, a screen showing the data platform, and two of us taking turns explaining what air quality monitoring is and why anyone should care. You develop a very efficient pitch when you've given it 200 times in two days. Mine got down to about 90 seconds.

The Innovation Award itself was announced before the show opened, so we had a nice "CES Innovation Award" ribbon on the booth from day one. This is worth more than you'd think. CES attendees are drowning in stimulus. Anything that signals "this has been vetted" gets more foot traffic. We had a steady stream of visitors for three days straight.

The conversations ranged from fascinating to baffling. A city official from Seoul wanted to discuss sensor calibration methodology in detail. Brilliant, exactly the kind of conversation I wanted to have. A venture capitalist asked me what our "blockchain strategy" was. I said we didn't have one. He lost interest immediately. This was January 2018 — peak blockchain mania. I regret nothing.

## From Lab to Product

What struck me most at CES was the distance between the research version of Climo and the product version. In the lab, we'd been focused on data quality, calibration algorithms, and novel sensing modalities. At CES, the questions were about unit cost, deployment logistics, maintenance contracts, regulatory compliance, and data ownership.

Nobody at CES asked about our calibration algorithm. Not one person. They asked: "How much does it cost? How long does the battery last? Who owns the data? Is it GDPR-compliant? Can it withstand vandalism?"

These are all legitimate questions. They're also questions that academic training doesn't prepare you for. My PhD taught me to design experiments, write papers, and present at conferences. It didn't teach me about IP65 enclosure ratings, cellular data contract negotiation, or the fact that sensor nodes mounted at street level in London will be urinated on and you need to factor that into your materials selection.

So there's a tangent for you. We actually had to change the enclosure coating after the first London deployment because the original powder coat finish reacted badly to... well. Urban fox territory marking, to put it politely. The replacement was a marine-grade polyurethane. £4 more per unit. Worth every penny.

## What It Meant

Winning the Innovation Award didn't change the world. It didn't immediately result in massive contracts or global deployment. What it did was validate the idea that academic research in smart cities could become a real product that real cities would consider buying.

The London Living Lab deployments had shown that the technology worked in the field (after debugging, recalibration, and enclosure redesign). CES showed that there was a market for it beyond research grants and academic papers. Those are two different kinds of validation, and you need both.

Looking back, CES 2018 was a high-water mark for a certain strain of IoT optimism. Smart cities were going to fix everything. Sensors everywhere. Data-driven governance. It didn't quite work out that way — the reality turned out to be messier, slower, and more politically complicated than the conference booths suggested. But the core technology was sound, and seeing it recognised on that stage was something I won't forget.

Even if I did have to explain what NO2 is approximately four hundred times.
