---
layout: post
title: "What Actually Happens When You Deploy Sensors in the Wild"
date: 2016-11-15
categories: academic
description: A preview of the "Tales from the Wild" paper, three case studies from the London Living Lab covering air quality, microclimate, and urban bat monitoring.
---

We submitted a paper last month with the working title "Tales from the Wild." The official title is longer and more academic, but the sentiment is the same: we deployed a load of sensors in London, and here's what went wrong.

I say "went wrong" deliberately. The paper doesn't focus on the times everything worked beautifully. Those stories are boring. "We deployed a sensor, it collected data, the data was good." Great. Nobody learns anything from that. The interesting stories are the ones where things broke, surprised us, or revealed assumptions we didn't know we had.

## Three Case Studies

The paper covers three deployments from the London Living Lab, each designed to monitor something different, each broken in its own special way.

### Case Study 1: Air Quality Monitoring

This was our bread and butter. Electrochemical NO2 sensors and optical particulate counters deployed across London. I've written about this before, so I'll focus on the bit that made it into the paper: cross-sensitivity.

Our NO2 sensors were also sensitive to temperature and humidity. Not a little bit. A lot. On a hot day, the temperature cross-sensitivity could introduce a 15-20% error in the NO2 reading. We'd see what looked like a pollution spike on a sunny afternoon, and it was actually the sensor responding to heat.

The fix was a correction algorithm: measure the temperature simultaneously, apply a correction factor. Simple enough in theory. In practice, the correction factors varied between individual sensors, even sensors from the same manufacturing batch. Each sensor needed its own calibration curve. We had 47 air quality nodes. That's 47 individual calibrations.

The cost in researcher time was substantial. Each co-location calibration took a week of data collection plus a day of analysis. Total effort across the network: the bones of 60 person-days just for calibration. For a "low-cost" sensing network, the hidden costs add up fast.

### Case Study 2: Microclimate Monitoring in the Queen Elizabeth Olympic Park

This one was fascinating. We deployed temperature and humidity sensors across the Olympic Park in Stratford to map urban microclimates. The park has green spaces, water features, paved areas, and buildings all in close proximity, which creates surprisingly large temperature gradients over short distances.

On a sunny July day, we measured a 6.2°C temperature difference between a sensor under tree canopy and one on an exposed paved area, 40 metres apart. Six degrees. In the same park. That's the difference between "pleasant afternoon" and "genuinely uncomfortable."

The failure here wasn't the sensors. The sensors worked great. The failure was in our deployment assumptions. We'd placed sensors at a standard height of 2 metres on poles, which is the meteorological convention. But the microclimate at 2 metres doesn't represent the microclimate at ground level, where people actually sit and children actually play. We were measuring the air above people's heads, not the environment they were experiencing.

Here's the tangent: the Olympic Park is a genuinely interesting case study because it was built from scratch. Unlike most of London, where the urban fabric evolved over centuries, the park was designed as a whole. Every tree was deliberately placed. Every surface was chosen. And yet the microclimate was still a patchwork of hot and cool zones, because even deliberate design can't fully control what happens when sun hits concrete.

### Case Study 3: Urban Bat Monitoring

This was the weird one. We deployed ultrasonic microphones to detect bat echolocation calls in urban London. Bats use sonar at frequencies between 20-130 kHz, well above human hearing, and different species have characteristic call patterns. The idea was to use automated acoustic monitoring to survey bat populations without needing human observers standing in parks at midnight.

It worked, sort of. We detected bat calls. We identified species. The equipment cost about £180 per monitoring point (a Raspberry Pi, a USB ultrasonic microphone, and a weatherproof enclosure). Cheaper than the traditional method of trained ecologists with handheld detectors at £300-400 per night.

The failure was data noise. London is full of things that make sounds above 20 kHz: key fobs, security alarms, air brakes on lorries, and (this was a surprise) LED streetlights. Some LED drivers emit high-frequency whine right in the bat detection range. Our classification algorithm flagged LED streetlights as pipistrelle bats more often than I'd like to admit.

We added a filtering stage that could distinguish between the regular pulse pattern of a streetlight and the more irregular pattern of an actual bat call. This dropped our false positive rate from about 30% to under 5%. But it took three months of data collection to understand the problem and build the filter. Three months of "bat detections" that were actually Philips streetlights.

## Engineering Challenges vs Social Challenges

The paper makes a point that I think is important: the engineering challenges (calibration drift, cross-sensitivity, false positives) are ultimately solvable. They're hard, but they're tractable. You can calibrate sensors. You can build better filters. You can improve your algorithms.

The social challenges are harder. Sensors get moved by caretakers, vandalised by teenagers, and adopted by communities in ways you didn't expect. A school wanted to keep "their" air quality sensor even after the study ended because the children had built a science project around it. That's lovely, but it means the sensor is no longer in a controlled deployment; it's a community asset with different expectations.

The paper is under review. I'll share it when it's published. For now, I'm going back to the battery degradation problem, armed with a much better understanding of what deployment actually looks like. The models need to account for the real world. The real world has caretakers, slugs, LED streetlights pretending to be bats, and crisp packets.

Always the crisp packets.
