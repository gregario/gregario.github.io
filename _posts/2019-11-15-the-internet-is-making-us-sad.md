---
layout: post
title: "Hot Take: The Internet is Making Us Sad"
date: 2019-11-15
categories: opinion
description: A half-baked theory about blue light, JPEG compression, and why staring at screens might be making us miserable. With honest corrections.
---

I've been thinking about blue. Not in a sad way, although give it a few paragraphs. In a biological, optical, slightly-unhinged way.

Here's the thesis, and I want to be upfront: parts of this hold up, and parts of it don't. I'm going to present the whole thing and then be honest about where I got it wrong, because I think the parts that do hold up are interesting enough to survive the parts that don't.

## The Human Blue Problem

Start with your eyes. You have three types of cone cells: red, green, and blue. But they're not distributed equally. Only about 2% of your cones are blue-sensitive (S-cones), compared to roughly 32% green and 64% red. We are, as a species, genuinely rubbish at seeing blue. We fake it by combining signals from our other cones, and our brains paper over the gaps.

This isn't controversial. It's basic physiology. You can look it up in any ophthalmology textbook.

Now, there's a brilliant tangent here about the ancient Greeks. Homer described the sea as "wine-dark." Not blue. Wine-dark. There's been a long-running academic argument about whether the ancient Greeks could perceive blue at all, or whether they simply lacked a word for it. The linguist Guy Deutscher wrote a whole book about this ("Through the Language Glass," worth a read). The evidence suggests that blue as a named colour category appeared relatively late in most languages. The Egyptians had it early because they had lapis lazuli, which cost the bones of £25,000 per kilogram in today's money. Everyone else apparently looked at the sky and went "yeah, that's sort of light-dark-ish."

This is genuinely interesting and, as far as I can tell, well-supported by the linguistic evidence.

## The Compression Claim (Where I Got It Wrong)

Here's where my original theory goes sideways. I originally argued that JPEG compression, through chroma subsampling, disproportionately destroys blue channel information. The logic was: JPEG converts RGB to YCbCr colour space, then subsamples the chroma channels (Cb and Cr) while keeping luminance (Y) at full resolution. Since blue contributes less to perceived luminance, I reasoned, the blue information gets hit hardest.

This is wrong, or at least dramatically overstated. Chroma subsampling affects both chroma channels roughly equally. Cb (blue-difference) and Cr (red-difference) are both subsampled at the same rate, typically 4:2:0. The compression is lossy across all colour information, not preferentially anti-blue. A friend who actually works in image processing pointed this out, and they were right.

So scratch that part. The internet isn't systematically stripping blue from your images any more than it's stripping red. Sorry.

## What Might Actually Be Happening

But here's what I think does hold up, and it's arguably more interesting than the compression story.

We spend an average of 7 hours per day looking at screens, according to a 2019 report by eMarketer. Seven hours. That's 7 hours not looking at sky, not looking at water, not looking at the natural world where blue exists at intensities and subtleties that no display can reproduce.

Our circadian rhythms are regulated by melanopsin-containing retinal ganglion cells that are specifically sensitive to short-wavelength (blue) light around 480nm. These cells tell your brain whether it's day or night. When you stare at a screen that emits blue light at the wrong time of day, you suppress melatonin production and mess with your sleep. This is well-established science, not a hot take.

But here's the bit I can't prove and find interesting anyway: I wonder whether the quality of blue matters, not just the quantity. A screen emitting 480nm blue light from an LED backlight is not the same experience as standing outside and seeing blue scattered across an entire hemisphere of sky. The sky is blue because of Rayleigh scattering across 100km of atmosphere. Your phone screen is blue because of a specific phosphor or LED emitting at a specific peak wavelength. Same colour name, completely different visual experience.

We evolved under one. We now spend most of our time under the other. I don't think our visual system treats them as equivalent, and I don't think we fully understand the implications of that swap.

## The Honest Summary

So here's what I've got:

**Holds up:** We're biologically under-equipped for blue perception. Ancient languages reflect this. We spend a huge chunk of our lives looking at screens instead of sky. Screen blue and sky blue are meaningfully different stimuli. Circadian disruption from screen use is real and measured.

**Doesn't hold up:** JPEG compression disproportionately targeting blue. That was wrong, and I should have checked it more carefully before building a theory on it.

**Uncertain:** Whether the qualitative difference between screen-blue and sky-blue has psychological effects beyond circadian disruption. I suspect yes, but suspicion isn't evidence.

The fix, annoyingly, is the same fix your gran would suggest: go outside more. Look at the sky. Give your ancient blue-deficient eyes something real to work with.

I'm writing this indoors, on a screen, at 11pm. Do as I say, not as I do.
