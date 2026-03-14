---
layout: post
title: "BrewMonitor: An Arduino-Powered Cloud Brewing Controller for 17 Euros"
date: 2014-10-15
categories: personal
description: Building a cloud-connected fermentation temperature monitor with an Arduino, an ESP8266, and a waterproof thermometer for under twenty euros.
---

I lost a batch of stout last month. Five litres of perfectly good porter, ruined because the temperature in my fermentation bucket crept up to 28°C while I was at work and I didn't know until I tasted the result. Off-flavours everywhere. Banana esters and fusel alcohols. Undrinkable.

Commercial fermentation monitors exist. The Tilt hydrometer is about €120. The BrewPi system, which is brilliant, requires a Raspberry Pi, a relay board, and a proper temperature-controlled fridge setup that costs the bones of €200-300 all in. I'm fermenting in a plastic bucket in my kitchen. That's a bit much.

So I built my own for €17.

## The Hardware

Three components, all ordered from AliExpress with the usual 3-4 week shipping wait:

- **Arduino Nano clone**: €2.80. These are everywhere. They work identically to the genuine article for this kind of application.
- **ESP8266 WiFi module** (ESP-01): €2.50. This little board has become the default way to get an Arduino online. It's fiddly to set up but once it's running, it's solid.
- **DS18B20 waterproof temperature sensor**: €1.20. Comes with a stainless steel probe on a cable. Accurate to ±0.5°C, which is more than good enough for fermentation monitoring.
- **Assorted bits**: a 4.7kΩ resistor (pull-up for the DS18B20 data line), some jumper wires, a USB phone charger for power, and a small plastic enclosure box from Dealz (€1.50). Call it €10 for these odds and ends if you're buying from scratch, but I had most of it in the parts bin already.

Realistic total if you're starting from zero: about €17-20 depending on shipping.

## The Wiring

The DS18B20 uses the OneWire protocol, which means you need exactly one data pin plus power and ground. I used pin D2 on the Nano. The 4.7kΩ pull-up resistor goes between the data line and 3.3V. That's the entire sensor circuit.

The ESP8266 is more involved. It runs on 3.3V, not 5V, so you need a voltage divider or a regulator on the TX/RX lines between the Nano and the ESP. I used a simple resistor divider (1kΩ and 2kΩ) on the Nano's TX line going to the ESP's RX. The ESP's TX goes directly to the Nano's RX because 3.3V is high enough to register as logic HIGH on the Nano's 5V pins.

The ESP communicates via AT commands over serial. If you've never used AT commands before, they're a holdover from the modem era. You send text strings like `AT+CWJAP="MyWiFi","password"` and the module responds with `OK` or `ERROR`. It feels archaic. It works.

## The Software

The Arduino code does three things on a loop:

1. Read the temperature from the DS18B20 (takes about 750ms because the sensor needs conversion time)
2. Format the reading as a JSON string
3. Send it to a cloud API via the ESP8266

The cloud bit deserves some explanation. I'm using ThingSpeak, which is a free IoT data platform. You create a channel, get an API key, and POST data to their endpoint. They handle storage, graphing, and alerts. The free tier allows one update every 15 seconds, which is plenty for fermentation monitoring. Temperature doesn't change that fast.

(A tangent about ThingSpeak: it was originally built by a guy called Hans Scharler at ioBridge, and MathWorks acquired it. The fact that a free, reliable IoT data platform exists that accepts HTTP POSTs from an ESP8266 is one of those quiet miracles of the modern internet. I've been running data to it for three weeks and it hasn't missed a reading.)

The reading interval is set to 60 seconds. Every minute, the Arduino wakes the sensor, reads the temperature, formats the HTTP POST request, and sends it through the ESP. The ThingSpeak dashboard shows me a live graph of my fermentation temperature from anywhere with a browser.

## The Alert System

ThingSpeak has a feature called ThingHTTP and React that lets you trigger webhooks based on conditions. I set up a React that fires when the temperature goes above 24°C or below 16°C (the acceptable range for the ale yeast I'm using, Safale US-05). When it triggers, it hits an IFTTT webhook that sends me a push notification on my phone.

Total cost of the alert system: free. ThingSpeak free tier, IFTTT free tier.

## The Enclosure

The electronics are in a small plastic project box from Dealz. I drilled two holes: one for the USB power cable, one for the DS18B20 sensor cable. Hot glue on both holes for strain relief. It's not beautiful. It's not IP-rated. It lives on a shelf next to the fermentation bucket, which is inside the kitchen cupboard under the counter, so it doesn't need to be weather-resistant.

The sensor probe hangs into the fermentation bucket through the lid. I drilled a small hole in the bucket lid and fed the cable through with a rubber grommet for a seal. The probe sits in the wort during fermentation.

## Does It Work?

Three weeks in, it works brilliantly. I've got continuous temperature logs for my current batch of pale ale. The graph shows a clear spike in temperature during active fermentation (days 2-4, peaking at 22.1°C) followed by a gradual decline as fermentation slowed. The yeast is doing exactly what it should.

I can also see the daily temperature cycle in the kitchen. The overnight low is about 17°C and the afternoon high (with the oven on) hits about 23°C. That's a 6°C swing, which is honestly more than I expected. It explains some of the inconsistency in my earlier brews.

The alert fired once, on day 3, when active fermentation pushed the temperature to 24.3°C. I wrapped the bucket in a wet towel and pointed a fan at it, which brought it down to 21°C within about an hour. Without the monitor, I'd have missed that entirely and ended up with more off-flavours.

## What's Next

This is version 1. It monitors temperature. It doesn't control it. The next step would be to add a relay that switches a heating pad or a cooling fan based on the readings, making it a proper temperature controller rather than just a monitor. That adds maybe €5-8 for a relay module and a heating mat.

I'd also like to add a second DS18B20 to measure ambient room temperature alongside the wort temperature. The OneWire protocol supports multiple sensors on the same data pin, so it's just a matter of wiring in another probe.

But for now, for €17, I've got a cloud-connected fermentation monitor that tells me exactly what my beer is doing while I'm at work. That's hard to argue with.

The stout I lost last month cost me about €8 in ingredients and five hours of brew day. If this thing saves even one batch, it's paid for itself twice over.
