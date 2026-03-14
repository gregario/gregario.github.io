---
layout: post
title: "Starting a PhD at Imperial: Why I Went Back to School"
date: 2015-10-15
categories: academic
description: Joining the AESE lab at Imperial College London under Prof Julie McCann, and why the battery problem in IoT convinced me to go back to academia.
---

Last Tuesday I sat in a lecture theatre at Imperial College London and a professor asked me to introduce myself. "I'm Greg, I'm a first-year PhD student," I said, and immediately felt like a fraud. Three months ago I had a job at Intel. Now I'm a student again, with a student card, a student discount at Pret, and a student's dawning realisation that I have no idea what I'm doing.

I'm 28. Most of the other first-years are 22. This is fine. Everything is fine.

## Why Leave Intel?

I get asked this a lot, usually with a slightly concerned expression. Intel Labs was a great job. The pay was good (considerably better than a PhD stipend of £16,500, which I try not to think about). The work was interesting. The team was brilliant.

But here's the thing. During the London Living Lab project, I kept running into the same problem: batteries. We'd deploy a sensor node, it would run beautifully for three weeks, and then the battery would die. Or we'd plug it in to mains power, which solved the battery problem but created a new one — you can only put sensors where there are plug sockets, which is a surprisingly limiting constraint when you're trying to monitor an entire city.

The Internet of Things has this vision of 50 billion connected devices by 2025. That's not my number; that's Cisco's, and honestly it might be conservative. But here's the question nobody was asking loudly enough: how do you power 50 billion devices? You can't put batteries in all of them. You definitely can't send someone to change 50 billion batteries. And you can't plug them all in.

Energy harvesting — solar, vibration, thermal, RF — is the obvious answer. Stick a solar panel on your sensor, harvest enough energy to take a reading every few minutes, job done. Except it's not that simple, and the gap between "obvious answer" and "actually works in practice" is where PhDs live.

## The AESE Lab

I'm working in the Adaptive Embedded Systems Engineering (AESE) group under Professor Julie McCann. Julie is one of those people who makes you feel simultaneously very clever and very stupid. She'll ask a question that seems simple, you'll start answering it, and then realise halfway through that you don't actually understand the thing you thought you understood.

The group does work on wireless sensor networks, IoT, edge computing, and energy management. There are about 15 of us — a mix of PhD students, postdocs, and research assistants. The lab culture is collaborative, which I appreciate. Coming from Intel, where things were structured and corporate, the informality of a university lab took some adjusting. Nobody tells you what to work on each day. There are no standups, no Jira tickets, no sprint reviews. Just you, a vague research question, and a supervisory meeting every two weeks where you try to convince Julie you've made progress.

## Energy Neutral Operation

The concept I'm circling around is called Energy Neutral Operation, or ENO. The idea is straightforward: a sensor node should harvest at least as much energy as it consumes over a given period. If it does, it can theoretically run forever without battery replacement.

"Theoretically" is doing a lot of heavy lifting in that sentence.

The problem — and this is what I want my PhD to address — is that almost all the existing ENO research assumes the battery is a perfect component. Charge it up, use the energy, charge it again. In these models, the battery just works. It doesn't degrade, it doesn't lose capacity, it doesn't behave differently in cold weather or after 500 charge cycles.

But real batteries do all of those things. A lithium-ion cell loses the bones of 20% of its capacity after 500 full charge-discharge cycles. A nickel-metal hydride battery performs measurably worse below 0°C. A supercapacitor has high self-discharge. These aren't edge cases; they're the normal operating conditions for a sensor deployed outdoors for years.

So if your ENO algorithm assumes a perfect battery, and your battery is slowly dying, eventually your node goes dark. And you're back to sending someone out with a replacement, which is exactly what ENO was supposed to avoid.

## First Encounters

It's early days. I'm reading papers at the rate of about three a day, which sounds productive until you realise I understand approximately 40% of what I'm reading. The maths in some of these energy harvesting papers is properly heavy. I haven't done serious calculus since undergrad, and it shows.

Quick tangent: the Imperial College library is absurdly beautiful. It's all glass and light and quiet spaces. I've spent more time in there in three weeks than I spent in my university library during my entire undergraduate degree. The coffee, however, is £3.20 for a flat white, which at PhD stipend rates means each coffee costs me roughly 0.02% of my annual income. I've started bringing a flask.

I don't know exactly where this PhD is going yet. That's terrifying and exciting. I know it's about energy, batteries, wireless sensor networks, and the gap between theoretical models and what actually happens in the field. I know Julie has pointed me at some interesting papers on battery-aware scheduling. I know that the Living Lab gave me a gut feeling about what breaks in practice.

Four years. That's how long a PhD takes. Ask me again in four years whether leaving Intel was the right call. For now, I'm going to go read another paper I only half understand, drink my flask coffee, and try to remember that 28-year-old PhD students are perfectly normal. Right?
