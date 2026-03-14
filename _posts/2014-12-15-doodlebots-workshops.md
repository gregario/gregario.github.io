---
layout: post
title: "Doodlebots, Retro Gameboxes, and Running STEM Workshops for 1.50 a Head"
date: 2014-12-15
categories: personal
description: Lessons from running low-cost STEM workshops at Digital Week in Rua Red, for kids and adults.
---

A seven-year-old called Saoirse held up her Doodlebot last Saturday, watched it scribble a wobbly spiral across a sheet of A3 paper, and said "it's alive!" Then she asked me if she could take it home and make it fight her brother's one.

That's the best review I've ever received for anything I've built.

## Digital Week at Rua Red

Rua Red is an arts centre in Tallaght. They run Digital Week every November, a programme of workshops and events about technology, art, and making. This year they invited us to run two workshops: Doodlebots for kids (ages 6-12) and Retro Gameboxes for adults.

We ran three Doodlebot sessions (15 kids each, 45 minutes per session) and two Gamebox sessions (10 adults each, 90 minutes). That's 65 participants over two days. The budget was tight, because of course it was, so I set myself a challenge: keep the per-head materials cost under €2.

Final tally: €1.47 per head for Doodlebots, €1.80 for Gameboxes. I'll break it down.

## Doodlebots: The Build

A Doodlebot is the simplest possible drawing robot. Here's what each kid gets:

- 1x plastic cup (those clear disposable ones, bought in bulk: €0.03 each)
- 3x marker pens (washable, Dealz multi-pack works out to about €0.12 per pen)
- 1x small vibration motor (the type from old phones, AliExpress bulk pack of 50 for €6, so €0.12 each)
- 1x coin cell battery CR2032 (bulk pack of 20 for €4, so €0.20 each)
- A bit of electrical tape (negligible cost)
- 1x googly eye (optional but absolutely essential, about €0.02 each)

Total per Doodlebot: approximately €0.61. Add paper (we used A3 sheets, about €0.10 each) and the per-head cost including materials and paper is about €0.71.

But workshops aren't just materials. You need gaffer tape to hold the paper down, spare batteries, spare motors for the ones that don't work, and marker pens for the ones that dry out because a child left the cap off for ten minutes. I budget roughly double the raw materials cost for contingency supplies. So: €1.47 per head, all in.

The assembly process is designed to take about 20 minutes for a 6-year-old with assistance:

1. Tape three markers to the outside of the cup, evenly spaced, caps pointing down (these are the legs)
2. Tape the vibration motor to the inside bottom of the cup
3. Connect the motor wires to the coin cell with electrical tape (positive to the red wire, doesn't matter which way for a motor but it's a good habit)
4. Stick a googly eye on the front
5. Remove the marker caps, place on paper, and watch it go

Step 3 is where most kids need help. The coin cell is slippery and the motor wires are thin. I pre-stripped and tinned the wires, which saves time and frustration.

## What Goes Wrong

Things that went wrong across three sessions:

- Two motors arrived dead out of the bag. Always bring spares. I bring 20% extra.
- One child taped all three markers pointing up instead of down, creating a Doodlebot that just vibrated angrily on the table without drawing anything. She declared it was "a angry one" and refused to fix it. Fair enough.
- The coin cells run out faster than you'd expect. A CR2032 driving a vibration motor lasts about 30-40 minutes. For a 45-minute session, that's cutting it fine. I brought spare batteries.
- Marker ink on clothes. The washable markers are washable, but try telling that to a parent whose child has drawn on their school jumper. We handed out old t-shirts as aprons. Next time I'll mention "wear old clothes" on the sign-up form.

## Retro Gameboxes

The adult workshop was more ambitious. Each participant built a handheld gaming device using an Arduino Nano clone and a 0.96" OLED screen. The game was a simple side-scrolling obstacle avoider, like a very basic Flappy Bird, controlled with a single button.

Materials per Gamebox:

- Arduino Nano clone: €2.80
- 0.96" I2C OLED display: €2.50 (AliExpress, again with the 4-week shipping)
- Tactile push button: €0.05
- Mini breadboard: €0.80
- 9V battery + connector: €1.50
- Jumper wires: €0.30

Total per unit: about €8. But we charged €10 per participant for this workshop, so it nearly covered costs. The €1.80 "per head" cost is the net after ticket revenue.

The code was pre-loaded on the Arduinos. Participants wired up the display and button following a printed diagram, plugged in the battery, and the game started. The wiring takes about 20 minutes. The rest of the session was playing the game and, for the keen ones, modifying the code to change the game speed or obstacle spacing.

(A tangent about OLED displays: the 0.96" screens are absurdly cheap now. Under €3 for a 128x64 pixel display with I2C interface. Two wires for data. When I started with Arduino three years ago, any kind of display output required a character LCD that cost €8 and used six pins. The fact that you can now get a graphical display for less than the price of a coffee is genuinely wonderful and I will stop gushing about it now.)

## Why STEM Outreach Matters

I'm going to be honest: I'm not great at this. I don't have teaching experience. I talk too fast when I'm explaining things. I once accidentally said "bitwise AND" to a room of eight-year-olds and had to pretend I'd sneezed.

But I think it matters, and I think the cost barrier is one of the biggest obstacles. A lot of STEM workshops charge €20-50 per child. That prices out a huge number of families, particularly in areas like Tallaght where Rua Red is based. If you can run a workshop for €1.50 a head, or free if you can get a small sponsorship to cover materials, you remove that barrier entirely.

The Doodlebot workshop is deliberately designed to be replicable. Everything in it can be sourced from Dealz and AliExpress. The instructions fit on one A4 page. Any parent, teacher, or youth group leader could run it with zero electronics experience. The total kit cost for 15 kids is about €10. I'd love to see it run in schools.

The reaction from the kids was the thing that surprised me most. Not the excitement when the Doodlebot starts drawing, although that's great. It's the moment about fifteen minutes in when they start experimenting on their own. Moving the markers to different positions. Taping the motor to different spots on the cup to change the vibration pattern. One kid attached two motors and made a Doodlebot that moved in a straight line instead of circles. Nobody told him to do that. He just figured out that two vibration sources cancel out the random wobble.

That's the whole point. Not the specific thing they built, but the moment they start asking "what happens if I change this?"

## Next Year

Rua Red have asked us back for next year. We're planning to add a soldering workshop (LED badges, same design from Dublin Maker) and possibly a simple robotics session using those cheap yellow motor chassis kits from AliExpress (€3.50 each, two motors and a battery box on a plastic frame).

Cheers to the Rua Red team, particularly Áine who organised the whole Digital Week programme. And to Saoirse, whose Doodlebot did indeed go home with her to fight her brother's. I hope it won.
