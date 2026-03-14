---
layout: post
title: "Second Patent: A Novel Indoor Solar System"
date: 2014-08-15
categories: professional
description: Patent WO2014041040 granted, covering the interface between dye-sensitised solar cells and ultra-low-power IoT devices.
---

When I wrote about the first patent a few months ago, I mentioned that SolarPrint was trying to print solar cells like newspapers. That was the headline story. But there was a second thread of work happening in parallel that I think was actually more interesting, and it's just been granted as patent WO2014041040.

The first patent was about manufacturing. This one is about what you do with a solar cell that's too weak for the roof but perfect for your desk.

## Indoor Solar: A Different Problem

Here's something that surprised me when I started at SolarPrint: dye-sensitised solar cells perform comparatively better indoors than silicon cells do. Silicon panels are optimised for direct sunlight. Take them inside, under fluorescent lights, and their efficiency drops off dramatically. DSSCs, because of the spectral response of the dye, actually hold up reasonably well under artificial light.

The numbers: a small DSSC panel (maybe 5cm by 5cm) under typical office fluorescent lighting can generate in the region of 10-50 microwatts. That's absolutely useless for powering a phone or a laptop. But it's potentially enough to power certain types of sensors.

This was 2012-2013, and the Internet of Things was just beginning to be a phrase that people used without irony. There was a real question forming in the industry: if you want to scatter thousands of tiny sensors across a building for environmental monitoring, how do you power them all? Batteries need replacing. Wired power limits where you can put them. Energy harvesting from indoor light was a possible answer, if you could make the power budget work.

## The Problem We Solved

The patent covers the interface between a DSSC panel and an ultra-low-power microcontroller. That sounds straightforward. It really wasn't.

The issue is impedance matching. A solar cell has an optimal operating point (the maximum power point) where the voltage and current balance gives you the most power. If your load pulls the cell away from that point, you lose efficiency. With a powerful outdoor panel, this barely matters because you've got watts to spare. With a 30-microwatt indoor panel, every fraction of efficiency counts. You literally can't afford to waste power.

Our solution involved a specific circuit architecture for managing the energy harvesting, storage, and delivery to the microcontroller in a way that kept the solar cell near its maximum power point while still providing the periodic bursts of higher current that a microcontroller needs when it wakes up to take a reading and transmit data.

I'm being deliberately vague about the specifics. It's a patent. The full details are in the filing if you want to have a gander at the claims section, though I'd recommend strong coffee first.

## The Difference Between the Two Patents

The first patent (WO2013050373) was about making the cells. Manufacturing process, sealing, spacing control. It was materials science and production engineering.

This second one is electrical engineering and systems design. How the cell talks to the electronics. How you manage microwatts of intermittent power into something a digital system can use.

I found the second project more satisfying, honestly. The manufacturing patent involved a lot of repetitive lab work: make a cell, test it, vary a parameter, make another cell, test it. Important work, but not always exciting on a Tuesday afternoon. The indoor energy harvesting work felt more like puzzle-solving. We had a fixed power budget (whatever the cell could generate under office lights) and a fixed power requirement (whatever the microcontroller needed), and we had to make the maths work.

(A tangent: one of the test setups involved me sitting at a desk with a lamp, a solar cell, and a multimeter for an entire day, taking readings every fifteen minutes as the natural light in the room changed. I learned that the light level in our lab varied by a factor of about 3x between a cloudy morning and a sunny afternoon, just from the windows. This matters enormously when your total power budget is measured in microwatts. A cloud passing over the building could drop your available power by 40%.)

## What I Learned About Bridging Hardware and Software

SolarPrint was fundamentally a materials company. We made physical things in a lab with chemicals and glass. But this second patent was about connecting those physical things to the digital world. The sensor node we were prototyping needed firmware, a communication protocol, a way to manage its sleep/wake cycle to stay within the power budget.

I ended up writing most of the firmware for the prototype sensor node, which was my first real exposure to embedded C programming. The microcontroller was a Texas Instruments MSP430, which is designed for ultra-low-power operation. It can run on about 0.1 microamps in sleep mode. My code was, by professional embedded standards, probably terrible. But it worked. The node would sleep, wake up every 60 seconds, take a temperature and humidity reading, transmit it over a short-range radio link, and go back to sleep. The whole wake-transmit-sleep cycle took about 15 milliseconds and consumed approximately 8 millijoules.

Getting that energy budget right was an exercise in counting every instruction, every peripheral activation, every microsecond of radio transmission time. I'd never programmed like that before. In most software, you don't think about whether an IF statement costs more energy than a lookup table. In ultra-low-power embedded work, you do.

## Two Patents, One Startup, Zero Products

I need to acknowledge the obvious: SolarPrint had two patents and never shipped a product. That's a reality of deep-tech startups. The technology worked in the lab. The manufacturing challenges of scaling it up, combined with falling silicon panel prices that undercut the economic argument for DSSCs, meant the business case eroded faster than the technology could mature.

But I don't think the work was wasted. Both patents are in the public domain now. The knowledge is there for anyone who picks up DSSC technology in the future. And personally, the experience of working at the boundary between materials science, electrical engineering, and software gave me a perspective that's shaped everything I've done since.

I'm 25 and I've got two patents. I'm not sure what to do with that fact, except maybe put it on my CV and hope someone asks about it in an interview so I can talk about microwatts for twenty minutes.
