---
layout: post
title: "Maker: Map Making (Updated)"
date: 2022-06-15
categories: personal
description: Three maps I made — Enfield, the world, and the 2016 US election. One aged better than the others.
---

I've always liked maps. Not in the "I collect vintage Ordnance Survey sheets" way (though I absolutely would if I had the wall space), but in the "I want to visualise where things are and what they mean" way. Over the years, I've made three maps that I'm still oddly proud of.

## The Enfield Map

This started in 2015 when I was living in Enfield, North London, during my PhD at Imperial. I wanted a proper map of the borough — not a Google Maps screenshot, but something you'd actually want on a wall. So I pulled OpenStreetMap data, wrote a Python script to extract building footprints, roads, parks, and waterways, and rendered it in a style I liked.

The whole thing took about two weekends. The trickiest part was getting the road widths right — OSM classifies roads by type (motorway, primary, residential, etc.) but the visual weight needs to be proportional or the map looks like spaghetti. I ended up with a classification scheme that had 7 tiers of line weight. Probably overthought it.

I got it printed at 600x400mm on nice card stock at a print shop in Southgate for £12. It's still on my parents' wall. Cost per unit of satisfaction: remarkably low.

## The World Map

Same approach, bigger ambitions. I wanted a world map showing every country I'd visited, colour-coded by how long I'd spent there. The categories were: lived there (Ireland, UK), spent more than a month (France, Spain), visited properly (the bones of 15 countries), and "does a layover count?" (technically yes, so Dubai made the list).

The fun part was the projection. I went with Natural Earth projection because Mercator makes Greenland look like it could fight Africa, and I find that aesthetically offensive. Robinson was the other contender. I spent an embarrassingly long evening reading about map projections instead of writing my thesis. My supervisor, Dr. Ben Sherlock, if he ever reads this, will not be surprised.

As of 2022, the count is 23 countries. Not bad for someone who didn't leave Ireland until he was 18.

## The 2016 US Election Map

Right. This one.

On the night of the 2016 US election, I was at a friend's flat in South Kensington with about twelve people, a projector, and too much wine. The plan was: print out a large blank map of the US divided by state, and colour in each state as it was called. Blue or red. Simple.

I made the map earlier that day. Printed it at A1 size. Bought two packs of markers. We were going to watch history happen.

The early evening was great. Virginia got called, we coloured it in. The wine was flowing. People were making jokes about the electoral college. Around 11pm London time, the mood started to shift. Florida was too close. Ohio went red. The markers slowed down.

We, erm, stopped filling it out before the end of the evening.

I think we got to about 35 states before people either left or lost the will to colour. The map sat on the floor with a wine glass ring on Michigan. I kept it for a while as a sort of memento mori, then binned it during a move.

(A tangent on what happened since: that election night map turned out to be a weirdly formative experience. The gap between "what the data said would happen" and "what actually happened" stuck with me. When I started my PhD work on air quality prediction models, I kept coming back to this idea — that models are only as good as the assumptions baked into them. My PhD used optimisation algorithms to predict air quality patterns, and the first thing I learned was that the Met Office weather data we were feeding in had systematic biases that none of the existing models accounted for. The 2016 map didn't teach me that directly, but it made me allergic to overconfident predictions.)

## Why I still make things

There's something satisfying about making a physical object from data. A map, a print, something you can hold. Most of my work lives in databases and dashboards that nobody will look at in five years. The Enfield map is still on a wall in Dublin. That's a better retention rate than any SaaS product I've worked on.

I haven't made a map in a while. But I've been eyeing the new LiDAR data that Dublin City Council released. 3D terrain models of the city at 1-metre resolution. If you don't hear from me for a few weekends, that's why.
