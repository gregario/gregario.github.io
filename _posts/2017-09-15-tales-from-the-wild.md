---
layout: post
title: "Tales from the Wild: Our Paper on Why IoT Deployments Fail"
date: 2017-09-15
categories: academic
description: A paper about failures, because nobody else was writing them up.
---

Nobody publishes failure papers. This is a well-known problem in academia and also the reason we decided to write one.

Our group at Imperial — the AESE lab under Julie McCann — had been deploying wireless sensor networks in real environments for years. Air quality monitors on lamp posts. Bat activity sensors in parks. Environmental monitoring rigs on rooftops. And a frankly unreasonable number of them had gone wrong in ways that no amount of simulation could have predicted.

So we wrote it all down. What broke, why it broke, and what we learned. The result was an ACM workshop paper that's since picked up 13 citations, which for a workshop paper about things going wrong is pretty decent.

## The Air Quality Sensors That Stopped Working

We deployed Climo air quality sensors across parts of London as part of a living lab project. Electrochemical gas sensors measuring NO2, CO, O3, and particulate matter. The hardware was solid, the calibration was careful, and for the first six weeks everything was brilliant.

Then the readings started drifting. NO2 values crept upward in a way that didn't correlate with traffic patterns or weather. We spent two weeks debugging the firmware before someone suggested checking the physical sensors. Turns out electrochemical gas sensors have a cross-sensitivity to temperature and humidity that's well-documented in the datasheet but poorly handled by most people (including us) who deploy them in the field.

The fix was a correction algorithm that compensates for ambient conditions. Simple enough in retrospect. But nobody in the IoT literature at the time was talking about sensor drift in deployed systems — all the papers showed nice clean data from the first week of deployment and stopped there.

The cost of debugging this was real: the bones of 80 person-hours of engineering time, plus the data from weeks 6-12 was essentially useless. We had to throw it away and recalibrate everything.

## The Bat Monitors That Bats Ignored

This one still makes me laugh. We deployed ultrasonic microphones in a London park to monitor bat activity. The idea was to detect bat echolocation calls, classify them by species, and track population changes over time. Conservation meets IoT. Lovely stuff.

The sensors worked perfectly. They detected ultrasonic signals with high fidelity, classified them accurately, and transmitted the data reliably over the mesh network. There was just one problem: the bats weren't where we put the sensors.

We'd placed the monitors based on historical survey data and advice from ecologists. But bats, it turns out, are not terribly respectful of historical survey data. They'd shifted their flight paths, possibly due to new construction in the area, and our carefully positioned sensors were recording approximately zero bat calls per night.

This isn't an engineering failure. It's a deployment failure, and it's the kind that you can only discover by actually deploying. No simulation, no lab test, no literature review would have told us that the bats had moved. We had to go out with handheld detectors, walk around the park at 11pm (in November, in London, which is exactly as cold and miserable as it sounds), and find where the bats actually were.

So we moved the sensors. Then it rained for a week and two of the enclosures leaked.

## The Social Challenges

Here's the thing that really surprised me. The hardest problems weren't technical. They were social.

Getting permission to deploy sensors on public infrastructure involves a truly remarkable number of stakeholders. The local council. The highways department. The environmental health team. Sometimes Transport for London. Sometimes the police, if your sensor has a camera. Each one has their own process, their own timelines, and their own concerns.

One deployment was delayed by four months because the council's insurance team needed to assess whether our sensor — a box the size of a paperback book, cable-tied to a lamp post — constituted a "liability risk to pedestrians." I'm not making this up. Four months.

And then there's public perception. We had a community meeting about an air quality deployment where a resident accused us of installing surveillance cameras. The sensors didn't have cameras. They measured gas concentrations. But try explaining electrochemical gas sensing to someone who's already decided you're spying on them. Once trust is gone, the technical details are irrelevant.

## Why We Wrote the Paper

Academic incentives push you toward publishing successes. Nobody's career was ever made by a paper titled "We Deployed Sensors and They Didn't Work." But the failures are where the learning is.

Every PhD student who deploys an IoT system discovers the same problems independently, because nobody writes them down. Sensor drift. Enclosure leaks. Antenna placement. Wildlife being uncooperative. Council bureaucracy. If we'd had a paper like ours when we started, we'd have saved months.

There's a broader point here about the gap between lab IoT and real IoT. In the lab, your network topology is stable, your power supply is a bench supply, your environment is a controlled room at 22°C, and nobody steals your nodes. In the field, topology changes because someone parks a van in front of your relay node, power comes from a solar panel that gets covered in pigeon droppings, the temperature ranges from -5°C to 40°C, and yes, people do steal sensor nodes. We lost three.

The paper didn't propose solutions to all of these problems. Some of them don't have solutions — you can't engineer your way around a council's insurance process. But naming the problems is the first step, and sometimes the most useful contribution is just saying "this is hard, and here's specifically why."

13 citations later, it seems like other people found it useful too. Not bad for a paper about failure.
