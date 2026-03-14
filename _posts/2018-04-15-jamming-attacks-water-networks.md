---
layout: post
title: "Jamming Attacks on Water Networks: Our IEEE Paper on Cyber-Physical Resilience"
date: 2018-04-15
categories: academic
description: Retrofitting water networks with wireless sensors and then trying to break them with jamming attacks.
---

The best way to test whether a system is secure is to attack it yourself. Preferably before someone else does.

This is the premise behind our IEEE iThings paper on jamming attacks against wireless sensor networks in water distribution systems. We took a simulated water network, added wireless sensors to monitor pressure and flow, and then systematically tried to break the whole thing by jamming the wireless communications. It turned out to be disturbingly effective.

This paper has become my most-cited work, with 20 citations to date. I think that says something about how worried people are about critical infrastructure security, and rightly so.

## The Setup

Water distribution networks are increasingly being retrofitted with wireless sensors. The sensors monitor pressure, flow rate, and water quality at key points in the network. The data goes to a control centre that uses it to detect leaks, manage pressure zones, and respond to contamination events. It's a textbook IoT application: distributed sensors, wireless communication, centralised control.

The problem is that wireless communication can be jammed. A jammer is just a radio transmitter that broadcasts noise on the same frequency as your sensor network. It doesn't need to be sophisticated. It doesn't need to crack any encryption. It just needs to be loud enough that the legitimate signals can't get through.

We modelled three jamming strategies. Constant jamming: the attacker transmits noise continuously, blocking all communication. Random jamming: the attacker transmits in random bursts, causing intermittent packet loss. And protocol-aware jamming: the attacker listens for legitimate transmissions and jams specifically during data packets, which is more energy-efficient for the attacker and harder to detect.

The water network simulation used EPANET (the industry-standard hydraulic simulator) with a network topology based on a real medium-sized UK distribution system. About 100 nodes, 120 pipes, 2 reservoirs, and 5 pumping stations. We placed 15 wireless sensors at critical monitoring points (reservoir outlets, major junctions, pump stations) and simulated the control system's response to sensor data.

## What Happened When We Jammed It

The results were genuinely concerning. Under constant jamming, the control system lost all sensor data and had to fall back to time-triggered control, basically running the pumps on a fixed schedule regardless of demand. This works, sort of, but it wastes energy (the pumps run when they don't need to) and can't respond to anomalies. If there's a burst pipe while the system is jammed, the control centre won't know about it until someone reports a flooded street.

Random jamming was worse in some ways, because it created partial data. The control system received some sensor readings but not others, leading to an inconsistent view of the network state. In our simulations, this caused the control algorithm to make actively bad decisions, reducing pressure in a zone that was actually experiencing high demand, because the sensor reading from that zone didn't arrive and the system assumed default values.

Protocol-aware jamming was the most efficient for the attacker. By targeting only data packets (and not the overhead transmissions), the jammer could block the bones of 90% of useful data while using only 30% of the energy of a constant jammer. It was also harder to detect, because the channel didn't appear continuously busy. It just seemed like the sensors were experiencing unusually high packet loss.

## The Defence: Event-Triggered Control

The most interesting finding was about control strategy. Traditional time-triggered control (where sensors report at fixed intervals) is more vulnerable to jamming than event-triggered control, where sensors only transmit when something changes significantly.

This is counterintuitive. You'd think that transmitting less often would mean losing more information when packets are dropped. But event-triggered control is more resilient because each packet carries more information content. In a time-triggered system, most packets say "everything is normal," so losing them seems harmless, but the control system can't distinguish "I didn't hear from the sensor because everything is fine" from "I didn't hear from the sensor because it's being jammed." In an event-triggered system, silence actually means "nothing has changed," so the absence of a packet is itself informative.

We showed that event-triggered control maintained acceptable network performance under random jamming conditions that caused the time-triggered system to fail. The improvement was significant: event-triggered control tolerated packet loss rates of up to 60% before performance degraded noticeably, compared to about 25% for time-triggered.

## The Collaborators

This paper was a proper team effort. Ivana Tomić led the cyber-physical security analysis. She had a background in control theory that was essential for the event-triggered vs time-triggered comparison. Michael Breza worked on the network simulation and jamming models. Laksh Bhatia contributed the water network modelling. And Julie McCann supervised the whole thing with her usual ability to see the forest when the rest of us were lost among the trees.

I should mention a tangent that nearly derailed the whole paper. Halfway through, I got into an argument with myself about whether we should include a physical jamming experiment. I'd priced up a software-defined radio setup (about £200 for a HackRF One) and was genuinely tempted to build a jammer and test it against real sensor hardware. Julie pointed out that (a) building a radio jammer is illegal under the Wireless Telegraphy Act 2006, (b) even if it weren't, the ethics board would have something to say about it, and (c) the simulation results were already strong enough. She was right on all three counts. I quietly put the HackRF back in my Amazon basket and closed the tab.

## Why This Matters

Water networks are critical infrastructure. People need clean water. An attack that disrupts water pressure management or prevents leak detection could cause real harm, not theoretical, Hollywood-style harm, but mundane, serious harm like burst pipes flooding homes or contaminated water reaching consumers before anyone notices.

The 20 citations suggest this resonated with the community. Critical infrastructure security is one of those areas where the gap between what's possible (attacking) and what's deployed (defending) is uncomfortably wide. Most water utilities are still in the early stages of digitisation. They're adding sensors and connectivity to systems that were designed in an era when "cybersecurity" meant locking the door to the pump house.

Our paper didn't solve this problem, but it characterised it clearly and pointed toward event-triggered control as a design principle for resilient cyber-physical systems. Sometimes the most useful thing you can contribute is a well-defined threat model and a direction to go.
