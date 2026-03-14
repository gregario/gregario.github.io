---
layout: post
title: "Solar Tracking for Wireless Sensors: From Masters Thesis to IEEE GLOBECOM"
date: 2017-11-15
categories: academic
description: Full circle from an MSc thesis at DCU to a GLOBECOM paper on adaptive solar tracking for sensor nodes.
---

In 2013, I submitted my MSc thesis at Dublin City University. The title was "Design and Evaluation of a Solar Tracking System" and it was, frankly, a bit rough around the edges. The hardware worked, the results were promising, but the algorithms needed more thought and the evaluation was limited to a few weeks of data.

Four years later, that thesis turned into an IEEE GLOBECOM paper. Same core idea — solar tracking for wireless sensor nodes — but with better algorithms, longer evaluation, and the kind of rigour that comes from spending four years in a research lab being told your work isn't good enough yet.

Full circle. Took a while, but got there.

## The Idea

Solar panels are most efficient when they're perpendicular to the sun. Everyone knows this. Large solar installations use motorised tracking systems that follow the sun across the sky, sometimes on two axes. These trackers cost thousands of euros, weigh tens of kilograms, and consume meaningful amounts of power.

Wireless sensor nodes are small, cheap, and power-constrained. You can't bolt a commercial solar tracker onto a sensor node that costs £30 and runs on a battery the size of your thumb. But you also can't ignore the efficiency gains — a tracking panel can harvest 25-40% more energy than a fixed one, depending on latitude and time of year.

So the question is: can you build a solar tracker that's small enough, cheap enough, and low-power enough for a wireless sensor node?

The MSc version used light-dependent resistors (LDRs) arranged around the panel to detect the sun's position and a pair of micro servo motors to adjust tilt and azimuth. Total hardware cost: about €15. It worked, in the sense that it tracked the sun and generated more power than a fixed panel. But it also consumed more power than I'd like to admit, and the control algorithm was a simple proportional controller that hunted back and forth around the optimal angle like a dog chasing its tail.

## The Improved Version

For the GLOBECOM paper, we redesigned the tracking algorithm around two key insights.

First: you don't need to track continuously. The sun moves at 15 degrees per hour. If you adjust your panel every 15-20 minutes, you lose almost nothing compared to continuous tracking, but you save significant energy because the motors are off most of the time. We calculated the optimal tracking interval as a function of latitude, time of year, and motor power consumption. At our test latitude (53°N, Dublin — not exactly the Sahara), tracking every 18 minutes gave 97% of the energy gain of continuous tracking at about 12% of the motor energy cost.

Second: you don't need LDRs if you know the time and your GPS coordinates. The sun's position is deterministic. It's one of the few things in IoT that actually is. So we replaced the analogue light sensing with an astronomical calculation — the solar position algorithm from Meeus (which has been around since 1991 and is well-tested). This eliminated the four LDR sensors, their ADC channels, and the noise problems we'd had when clouds caused the LDRs to give contradictory readings.

The total component cost for the tracking mechanism dropped to about €8. Two micro servos, a 3D-printed bracket, and the computational cost of some trigonometry every 18 minutes. Not going to break the bank.

## The Results

We ran the system for 6 months on a rooftop at DCU, alongside a fixed panel at optimal tilt (36° for Dublin's latitude). The tracker harvested 31% more energy over the full period, with the gain varying from about 20% in winter (short days, low sun angle, lots of cloud) to 38% in summer.

After subtracting the energy consumed by the motors and the tracking computation, net gain was 28%. That's meaningful — it's the difference between a sensor node that can sense every 5 minutes and one that can only manage every 7 minutes, or the difference between surviving a week of cloudy weather and dying on day five.

There's an amusing tangent here. During the evaluation, one of the two servos failed. Not catastrophically — it just developed a dead zone where it wouldn't respond to commands between 85° and 95° azimuth. This meant our tracker would smoothly follow the sun all morning, then suddenly lurch past the dead zone around noon, then track normally again in the afternoon.

I spent a genuinely embarrassing amount of time trying to find a firmware bug before I physically inspected the servo and found that a gear tooth had chipped. £1.50 for a replacement servo. Three days of debugging. The lesson, as always: check the hardware first.

## Why GLOBECOM

GLOBECOM is IEEE's flagship communications conference — big, broad, and well-attended. It's not the first place you'd think to publish a paper about solar tracking. But the paper's contribution wasn't really about solar panels. It was about adaptive energy management for communication systems. The tracking is a means to an end: keeping a wireless sensor node alive long enough to do its job.

The paper's picked up 14 citations, which I'm pleased about. Most of them cite the adaptive tracking interval concept rather than the hardware design, which tells me we got the framing right. It's not about the servos. It's about the algorithm.

There's something satisfying about seeing MSc work through to a proper publication. The core insight — that you can trade tracking frequency for energy savings — was there in the thesis, buried under too many pages of literature review and not enough evaluation. It took four years to extract the good idea, refine it, and prove it properly. Research is slow. But sometimes the slow version is the right version.
