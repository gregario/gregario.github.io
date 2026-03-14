---
layout: post
title: "The Bedroom Laboratory: Why We Built a Hackerspace in a Bedroom"
date: 2014-02-15
categories: personal
description: The origin story of the Bedroom Lab, born from a hackathon and a Dublin apartment with no garage.
---

It was 05:30 on a Sunday morning and I was soldering a temperature sensor onto a Nest thermostat that we'd voided the warranty on about twelve hours earlier. My flatmate Dave was asleep on the couch. Ciarán was on his fourth Red Bull. The Deconstruction hackathon had six hours left and we hadn't tested anything yet.

We didn't win. But something happened that weekend that stuck with me more than any trophy would have.

## The Problem with Not Having a Garage

Every maker origin story you read starts in a garage. Wozniak had a garage. The Homebrew Computer Club met in a garage. If you're in Palo Alto, garages are just part of the infrastructure.

If you're in a two-bedroom apartment in Phibsborough, you have a wardrobe and a communal bin area. Not quite the same.

After the Deconstruction hackathon, the three of us kept meeting up to build things. We'd sit around Dave's kitchen table with a soldering iron balanced on a plate, components in sandwich bags, and a laptop open to whatever tutorial we were following that week. It worked, but it was terrible. I burned the table twice. Ciarán knocked a cup of tea onto an Arduino. Classic stuff.

So we did what any reasonable group of people would do: we converted a bedroom into a hackerspace.

## The Setup

Dave's spare room was about 3 metres by 2.5 metres. The bones of 7.5 square metres. We fitted it out for under €200, which I'm still proud of.

The bill of materials was something like:

- 2x IKEA Lack side tables (€5 each) as soldering stations
- 1x IKEA Kallax shelf unit (€35) for component storage
- A donated oscilloscope from a college lab clearout (free, but it weighed about 15kg)
- Soldering station from eBay (€28)
- A bunch of small plastic bins from Dealz (€1 each, bought maybe 15)
- Power strip with surge protection (€12)
- Fume extractor fan (€18, absolutely essential unless you enjoy headaches)

Total: the bones of €120, not counting components.

The Lack tables were brilliant for this, by the way. They're hollow inside, so they're light enough to move around, and at €5 each you don't care when you inevitably burn them. We covered the tops with a sheet of fire-resistant silicone matting that Ciarán found on AliExpress for about €8.

## The Deconstruction Hackathon

I should probably explain how this all started. Deconstruction was a 48-hour hackathon in Dublin where the premise was simple: take consumer electronics apart, understand them, and build something new. Our team got assigned a Nest thermostat. First generation. Beautiful piece of hardware, genuinely impressive engineering.

We spent the first four hours just taking it apart and documenting what we found. The main board had an ARM Cortex processor, a bunch of environmental sensors, and a really clever mechanical design for the rotating ring. Our plan was to repurpose the sensors into a standalone environmental monitoring node.

It mostly worked. The temperature and humidity readings were solid. The motion sensor was a bit flaky. Our presentation was... let's say "enthusiastic but underpolished." I distinctly remember Ciarán trying to explain our cloud architecture while Dave was behind the laptop frantically trying to get the WiFi to connect.

(A brief tangent: if you've never been to a hardware hackathon, the WiFi situation is always a disaster. You've got forty teams all trying to connect IoT devices to the same network. Someone always brings a device that's broadcasting on a channel that interferes with everything else. At Deconstruction, someone's Bluetooth speaker kept connecting to our ESP module. Brilliant.)

## Why It Matters

Here's the thing about makerspaces that I think people miss: they're not really about the tools. You can solder on your kitchen table. You can 3D print at a library now. The tools aren't the point.

The point is having a place where the default activity is building things. When Dave and I were sitting in our respective apartments, the default evening activity was Netflix. When we had a room with a soldering iron and a shelf of components, the default was "what should we build tonight?"

We started meeting every Thursday. Sometimes it was just two of us. Sometimes we'd have five or six people crammed into this tiny room, which violated every fire code in existence but felt great. Sarah from Dave's office started coming and built her first circuit. Tomás, who I knew from college, showed up one week with a bag of servos and a plan for a robot arm that he never quite finished.

The room smelled permanently of solder flux and slightly of burned plastic. The Kallax shelf was overflowing within a month. We had a "wall of shame" where we pinned up our most spectacular failures. My entry was an LED matrix that I'd wired in reverse and melted three transistors on before I figured out what I'd done.

## What Came Next

The Bedroom Lab ran for about eight months in that form. We moved twice, grew the group, and eventually some of the projects that came out of it turned into real things. The BrewMonitor started as a Thursday night project. The air quality map we brought to Dublin Maker was sketched out on the back of a Tesco receipt in that room.

I don't think any of us expected it to last. We certainly didn't expect it to matter. But if you're in a city with no garage culture and you want to make things, sometimes the answer is just: clear out the spare room, buy two cheap tables, and invite some friends over on a Thursday.

Cheers to Dave for sacrificing the bedroom. And to Ciarán for the Red Bulls.
