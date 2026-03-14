---
layout: post
title: "The London Living Lab: Deploying Hundreds of Air Quality Sensors Across a City"
date: 2015-08-15
categories: professional
description: Technical architect on the London Living Lab — deploying hundreds of air quality, weather, and environmental sensors across London and learning what breaks at scale.
---

I once spent an entire afternoon in Enfield trying to work out why a sensor node was reporting that the air quality was worse inside a primary school than next to the North Circular. Turns out a kid had put a crisp packet over it. Prawn Cocktail flavour, if you're wondering.

This is what it's actually like deploying IoT at scale.

## The London Living Lab

At Intel ICRI Cities, we were building what we called the London Living Lab: a network of environmental sensors spread across London measuring air quality (NO2, particulates), temperature, humidity, light levels, and noise. The goal was to create a living, breathing picture of London's environment at a resolution that fixed monitoring stations couldn't match. The city had the bones of 100 official air quality monitoring stations. We wanted to fill in the gaps with hundreds more.

I was the technical architect, which sounds grand but mostly meant I was the person who had to make everything actually work. Design the sensor boards, write the firmware, build the data pipeline, deploy the hardware, and then fix it all when it inevitably broke.

## The Hardware

Each node was built around a Raspberry Pi (Model B+, £25 each) with a custom sensor board. The sensor stack:

- **Alphasense OPC-N2** for particulate matter (£250 each, and yes, that's per unit — this was the expensive bit)
- **Alphasense NO2-B43F** electrochemical gas sensor (£35)
- **DHT22** for temperature and humidity (£8)
- **TSL2561** for ambient light (£5)
- A GPS module for positioning (£12)

Total cost per node: around £350, plus the enclosure (£15 for a weatherproof box from Screwfix, modified with cable glands and a lot of silicone sealant). We deployed in the region of 200 nodes across London at peak.

## What Goes Wrong

Everything. Everything goes wrong. Here's a non-exhaustive list of things that went wrong during the London Living Lab:

**Power.** About 30% of our sensor failures were power-related. Nodes would be plugged into outdoor sockets that someone would unplug to charge their phone. Or the socket would trip in the rain. Or — and this happened twice — someone would decide the extension lead powering our sensor was "untidy" and unplug it.

**Connectivity.** We used WiFi where schools or buildings would give us access, and 3G dongles everywhere else. The 3G dongles cost £10/month each on a data SIM. Multiply that by 200 nodes and suddenly your running costs are £2,000 a month just for connectivity. Also, 3G coverage in London is patchy. I know, I know, you'd think central London would be fine. It's not. Basements, courtyards, anywhere with thick walls — dead zones.

**Enclosures.** Our weatherproof boxes were not, in fact, weatherproof. The cable glands leaked. Condensation formed inside. One node shorted out because a slug got in through a cable entry point. A slug. In an electronics enclosure. In Zone 2 London.

**Calibration drift.** The electrochemical gas sensors drift over time. You deploy them nicely calibrated, and three months later they're reading 20% high. The particulate sensors were better but still needed co-location calibration against reference instruments. We'd periodically bring nodes back, co-locate them with official AURN stations for a week, calculate correction factors, and redeploy. It was tedious but essential.

**Humans.** The crisp packet incident was just one example. Sensors got vandalised, stolen, repurposed, relocated, covered, spray-painted, and in one memorable case, used as a doorstop. A school caretaker moved one of our outdoor sensors indoors because "it looked like it might get rained on." He wasn't wrong, to be fair.

## The Enfield Map

One piece of the project I'm particularly proud of is the work we did in Enfield. We deployed a cluster of air quality sensors across the borough and built an interactive map showing pollution levels in near-real-time. This was early days for this kind of hyperlocal air quality mapping, and the council were genuinely excited about it.

So here's the tangent: Enfield is fascinating from an air quality perspective because it has the A10 and the M25 cutting through residential areas. You'd walk two streets from a quiet residential road and the NO2 levels would double. Our data showed that, clearly, on a map. It was the kind of thing that residents had always *felt* but couldn't prove.

The council used the data in a planning consultation. That felt like the project actually mattering, which — if I'm honest — is rare in research.

## What I Learned

Three things stick with me from the Living Lab:

First, deployment is where the real engineering happens. You can prototype something beautiful on your bench. The real test is whether it survives rain, slugs, and school caretakers.

Second, the data pipeline matters as much as the sensors. We were generating about 4GB of data per day across the network. Storing, cleaning, calibrating, and visualising that data was easily half the total effort.

Third, people care about air quality. Genuinely. When we showed residents their local data, they engaged. They asked questions. They got angry about the numbers next to main roads. That emotional response to data is something I keep coming back to.

I'm starting a PhD at Imperial in a few months, and a lot of what I'll be working on comes directly from problems we hit in the Living Lab. But that's a story for another day.

Cheers to Sarah Gallacher for leading the research side with patience and rigour, and to Gawain Morrison for making the data visualisations actually comprehensible. Right now I need to go check whether that Enfield sensor is still reading correctly, or whether someone's found another crisp packet.
