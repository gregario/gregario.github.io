---
layout: post
title: "Dublin Maker: LEDs, Maps, and a Robot Called Frankie"
date: 2014-06-15
categories: personal
description: Prepping for Dublin Maker Faire with an LED air quality map, a robot, and more hot glue than any reasonable person should use.
---

There's a particular kind of panic that sets in at 11pm the night before a maker faire when you realise your centrepiece project doesn't work. Not "doesn't work perfectly." Doesn't work at all. The LEDs are all showing green regardless of the data feed, and you've got twelve hours to fix it or show up with a very expensive piece of plywood with holes in it.

That was last Thursday. Dublin Maker is tomorrow. We fixed it. Mostly.

## The Enfield Air Quality Map

The idea was simple: take a map of Enfield (the area around our hackerspace), drill holes where the air quality monitoring stations are, push WS2812B LEDs through the holes, and have them change colour based on live air quality data. Green for good, yellow for moderate, red for poor. An Arduino Mega pulls the data from an API, maps the values to colours, and drives the LED strip.

Simple idea. Execution was another matter entirely.

The map itself is a 60cm by 80cm sheet of 6mm plywood. We printed the map design onto vinyl adhesive and stuck it on top. That part went fine. Drilling 23 holes for the LEDs also went fine, though I did split the plywood on hole number 17 and had to glue it back together. You can't tell from the front. Mostly.

The problem was the data pipeline. The air quality API returns JSON in a format that changes depending on how many stations are reporting. Sometimes a station drops out and the array indices shift. My Arduino code was using hardcoded array positions. So when station 7 went offline, LED 8 started showing station 9's data, and everything downstream was wrong. The fix was to match by station ID instead of position, which is obvious in hindsight and cost me about four hours of confusion.

Total cost for the map: the bones of €45. Plywood (€8), vinyl print (€15 at a print shop in town), WS2812B strip of 50 LEDs (€12 from AliExpress, ordered six weeks earlier because shipping), Arduino Mega clone (€9), and various wire and connectors from the parts bin.

## Frankie

Frankie is a robot. I use that term loosely. Frankie is a cardboard box on wheels with a face drawn on it in Sharpie, an ultrasonic distance sensor for a nose, and two continuous rotation servos driving the wheels. Frankie's entire purpose in life is to drive forward until something is in front of it, then turn left. That's it. That's the whole programme.

Niamh built Frankie over three Thursday evening sessions at the Bedroom Lab. The chassis is a shoebox. Not metaphorically. It's literally a Clarks shoebox. The distance sensor is mounted through a hole cut in the front, and the servo wires come out the bottom. There's a 9V battery inside that gives about 40 minutes of runtime, which is actually quite good for a shoebox.

(A tangent about the name: we named the robot Frankie because Niamh insisted all robots should have human names, and specifically Irish human names. There was a long argument about whether Frankie counts as sufficiently Irish. Niamh's position was that it counts because of Frankie Byrne, the agony aunt from RTÉ in the 1960s. We conceded the point.)

Frankie is the project I'm most excited to show at Dublin Maker, which probably says something about me. The air quality map is technically more interesting. But Frankie has a face and makes children laugh, and that's worth more at a maker faire than technical sophistication.

## Running Workshops

We're also running two workshops at our stand: a soldering workshop (make your own LED badge) and a Doodlebot session for kids. The LED badge is a simple circuit with a coin cell battery, a resistor, and three LEDs in parallel on a small piece of stripboard. Takes about 20 minutes for a beginner. We're charging nothing for the workshop; the materials cost us about €0.80 per badge, and we made 60 of them.

The Doodlebots are even cheaper. A small plastic cup, three marker pens taped to the outside as legs, a vibration motor from a phone glued to the top, and a coin cell battery. Total cost per Doodlebot: about €0.40. You turn it on, put it on paper, and it draws wobbly circles. Kids absolutely love them. Adults do too, if they're being honest.

I'm nervous about the workshops, actually. I've never run a soldering workshop before, and the idea of handing a hot soldering iron to strangers makes me slightly anxious. We've got safety glasses and a first aid kit. We've done a risk assessment, which consisted of Ciarán saying "what's the worst that could happen?" and Dave listing increasingly unlikely scenarios until we decided we were probably fine.

## The Maker Community in Dublin

This is our first Dublin Maker and I'm genuinely impressed by the community here. The organising committee have been brilliant. There's a WhatsApp group with about 80 makers sharing tips, offering to lend equipment, and generally being helpful in a way that feels unusual for anything involving technology.

I met a fella called Ronan at one of the prep meetups who builds mechanical automata out of wood. Hand-carved cams and linkages. No electronics at all. Watching him explain how a wooden cam profile translates to a specific motion pattern was genuinely one of the most educational ten minutes of my year. Different world from Arduino and breadboards, but the same impulse: figure out how things work, then make something.

That's what I like about maker faires. They're not tech conferences. There's no hierarchy of "real" engineering over crafts, or software over hardware. The person with the knitting machine is next to the person with the 3D printer is next to the person with the woodworking lathe, and nobody's pretending their thing is more legitimate than anyone else's.

## Tomorrow

The map is working. Frankie's battery is charged. We've got 60 LED badge kits in a toolbox and a bag of Doodlebot supplies. Dave's bringing the car. I've triple-checked that the API is still returning data.

If you're in Dublin tomorrow, come have a gander. We're the ones with the shoebox robot.
