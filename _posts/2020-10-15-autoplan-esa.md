---
layout: post
title: "AutoPlan and the European Space Agency: Why ESA Invests in Planning Tech"
date: 2020-10-15
categories: professional
description: Becoming an ESA BIC recipient, and what the European Space Agency has to do with planning applications.
---

"You're working with the space agency? On planning applications?"

I get this reaction a lot. It's a reasonable reaction. The European Space Agency conjures images of rockets, satellites, astronauts in jumpsuits. Not a guy in Dublin trying to make planning permission less painful. But ESA's investment in AutoPlan makes perfect sense once you understand what ESA BIC actually is.

ESA BIC (Business Incubation Centre) is the European Space Agency's programme for startups that use space technology or space data in non-space applications. The key phrase is "non-space applications." ESA isn't investing in AutoPlan because they want to build houses on Mars (though I'd take that contract). They're investing because satellite imagery and geospatial data are fundamental to what AutoPlan does, and that data comes from space.

## The Connection

When you're assessing whether a proposed development complies with planning rules, you need to understand the site and its context. What's nearby? How has the area changed over time? Is the site in a flood plain? What's the land cover? Are there protected habitats adjacent?

Satellite imagery answers these questions at scale. Copernicus, the EU's Earth observation programme, provides free, regularly updated imagery of every square metre of Europe. Sentinel-2 satellites capture multispectral imagery at 10-metre resolution every five days. That's enough to track land use changes, identify green infrastructure, monitor construction activity, and assess environmental context.

AutoPlan uses this data to build a spatial understanding of development sites. Instead of an architect manually checking whether a proposed house is within 50 metres of a watercourse (which matters for environmental assessment screening), we can compute it automatically from satellite-derived data layers. Instead of a planner manually comparing aerial photos to verify what was on a site before development, we can pull up a time series of satellite imagery going back years.

This is why ESA cares. They've spent billions putting satellites in orbit. They want people to build useful things with the data those satellites collect. Planning technology is a perfect use case.

## The Application Process

Getting into ESA BIC involved a competitive application and pitch. The panel included ESA representatives and business mentors. They wanted to see two things: a viable business case, and a genuine connection to space technology. I've seen applicants get rejected because their use of space data was superficial, essentially "we could use a satellite image as a background layer in our app." That's not integration; that's wallpaper.

AutoPlan's use of geospatial data was central to the product, which I think is why the application went well. Also, I'd spent enough time during the PhD working with sensor data and spatial analysis that I could speak credibly about the technical integration.

The panel asked surprisingly detailed questions. One ESA representative wanted to know which Sentinel-2 bands I was using for land cover classification (bands 2, 3, 4, and 8, if you're curious, which gives you visible spectrum plus near-infrared). Another asked about the revisit time requirements for monitoring construction compliance. These weren't people who needed to be sold on the technology. They were people who understood it and wanted to know if I understood it too.

## What ESA BIC Support Looks Like

The ESA BIC programme provides several things. There's a financial contribution of €50,000, which came as a grant (no equity taken, which is brilliant). There's access to ESA's technical expertise, which in practice means you can consult with ESA engineers about data processing pipelines, satellite data access, and geospatial analysis methods. And there's the brand association, which, like the NDRC and Enterprise Ireland logos, signals credibility.

Here's a tangent: the ESA logo is surprisingly effective in customer meetings. I've sat in rooms with architects and planning consultants who were politely sceptical about AI (fair enough, most AI pitches in 2020 were aspirational at best) but visibly impressed when the European Space Agency came up. There's something about the space agency that carries authority across domains. People trust rocket scientists, even when the person in the room is not, technically, a rocket scientist.

The technical support was genuinely useful. ESA connected me with their EO (Earth Observation) data access team, who helped me set up efficient pipelines for pulling Sentinel-2 imagery. Without that guidance, I'd have spent weeks figuring out the Copernicus Open Access Hub API, which is functional but not what you'd call intuitive. Their documentation assumes a level of familiarity with satellite data formats (GeoTIFF, JP2, SAFE containers) that most software engineers don't have.

## The Bigger Picture

Being an ESA BIC recipient positioned AutoPlan in a specific way: as a company building on European public infrastructure. The satellites are European. The data is open. The planning systems we're serving are European. There's something satisfying about building on that foundation, a publicly funded data layer being used to improve a public process.

It also meant I now had three logos on my slide deck: NDRC, Enterprise Ireland, and ESA. The slide deck was looking more credible by the month. The product was getting there too, but honestly, in early-stage startups, the logos arrive before the product is ready for them. That's normal. It's also slightly terrifying. You're accumulating expectations faster than you're accumulating capability, and the gap between the two is where impostor syndrome lives.

But the ESA connection was real, the technology integration was genuine, and the satellite data made AutoPlan materially better. Sometimes the impressive-sounding thing is also the substantive thing. I'll take that.
