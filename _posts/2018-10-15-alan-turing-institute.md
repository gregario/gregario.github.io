---
layout: post
title: "The Alan Turing Institute: Adaptive Machine Learning for Changing Environments"
date: 2018-10-15
categories: academic
description: Working on meta-learning at the UK's national AI research institute, with applications from smart cities to autonomous vehicles.
---

When someone tells you there's a desk for you at the Alan Turing Institute, you don't say no. You say "when do I start?" and then you quietly panic about whether you're clever enough to be there.

The Turing Institute is the UK's national institute for data science and artificial intelligence, based in the British Library in London. The building alone is worth the visit: you're doing machine learning research in the same building where people are reading first-edition Shakespeare folios. There's a certain atmosphere to the place that makes you feel like what you're doing matters, even when what you're doing is debugging a Python script at 4pm on a Thursday.

## The Project

I was part of a research project on adaptive machine learning for changing environments. The core problem is one that anyone who's deployed ML in the real world has encountered: your model works brilliantly on the data it was trained on, and then the world changes and it stops working.

This is called distribution shift, concept drift, or (if you're being dramatic about it) the reason your production model is wrong and nobody noticed for three months.

The specific flavour we were interested in was environments that change systematically. Not random noise, but genuine shifts in the underlying data distribution. A smart city air quality model trained on summer data that needs to work in winter. A precision farming model that was trained during a wet year and now has to cope with a drought. An autonomous vehicle perception system that works in daylight but struggles at dusk.

The approach was meta-learning: algorithms that learn how to learn, so they can adapt quickly when the environment shifts. Rather than training a single model and hoping it generalises, you train a model that knows how to update itself when it detects that the world has changed. Think of it as the difference between giving someone a fish and teaching them to fish, except the fish keep evolving and the lake occasionally freezes over.

## The Application Domains

The project had three main application areas, which is both a strength (broad impact) and a weakness (three times the domain knowledge required).

**Smart cities** was the one I knew best, given the PhD work and the Climo deployments. Urban environments change constantly: traffic patterns shift with road works, air quality varies with weather and seasons, energy demand fluctuates with temperature and events. A model trained on "normal" conditions needs to adapt when conditions stop being normal. We worked with urban sensor data from London and explored how quickly a meta-learning system could adapt to seasonal transitions compared to a standard retrained model.

**Precision farming** was new to me and utterly fascinating. We collaborated with NIAB (the National Institute of Agricultural Botany) in Cambridge, who had field trial data going back decades. The challenge here is that every growing season is different (different weather, different soil moisture, different pest pressure) and a crop yield model from last year isn't necessarily useful this year. The farmers we spoke to had a healthy scepticism about any model that claimed to predict their yields, which I found refreshing after the uncritical AI enthusiasm at most conferences.

**Autonomous vehicles** were the most high-profile application and the one I contributed least to. The perception challenge is real: a self-driving car needs to handle rain, fog, night, roadworks, and pedestrians wearing unusual clothing (there was genuinely a discussion about how well the models handled people in hi-vis vests, because the training data was biased toward normal clothing). I mostly stayed out of this workstream because other team members had much deeper expertise, and also because the autonomous vehicle space in 2018 was so overhyped that I found it difficult to separate the actual research problems from the marketing.

## Singapore and NIAB

Two collaborations from the project stand out. The Singapore Housing and Development Board (HDB) was interested in using adaptive ML for building energy management. Singapore's public housing is extraordinary: about 80% of the population lives in HDB flats, and the Board manages the bones of 1 million units. Even small efficiency gains in energy management translate into enormous absolute savings. We worked with their data on HVAC energy consumption and explored how meta-learning could adapt cooling strategies to changing occupancy patterns.

The NIAB work was more hands-on. I actually visited the trial fields in Cambridge, which was a useful corrective to the abstraction of working with datasets. Seeing the actual wheat growing in the actual field that generated your data changes how you think about it. One of the NIAB researchers told me: "The problem with your models is that they don't know about soil." He was right. Our features included temperature, rainfall, and solar radiation, but soil is a complex, living system that doesn't reduce neatly to a column in a CSV file.

I spent a mildly embarrassing amount of time trying to incorporate soil moisture data into our meta-learning framework. The sensor data was noisy, the spatial variability was enormous (two sensors 10 metres apart could give wildly different readings), and the temporal dynamics were nonlinear. In the end, we used a simplified soil moisture index and got modest improvements. Not the breakthrough I'd hoped for, but science is like that more often than the papers suggest.

## Being at the Turing

The Turing Institute gathers researchers from across the UK's top universities. The person at the next desk might be from Oxford working on privacy-preserving computation, or from Edinburgh working on natural language understanding, or from Warwick working on statistical methodology. The cross-pollination is genuine. I learned more about Bayesian approaches to distribution shift from a coffee conversation than from any paper I read that year.

There's also a slight impostor syndrome that comes with being at the national AI institute. Everyone seems to know more than you. Their papers have more citations. Their code runs faster. Their ideas are more elegant. I eventually realised this is universal, everyone there feels the same way, because the selection process guarantees that you're surrounded by people who are very good at things you're not.

The research project produced several papers and some genuine methodological contributions to adaptive learning. More importantly for me, it broadened my perspective beyond IoT and sensor networks into the wider world of machine learning in production. The problems are the same everywhere: models drift, environments change, and the gap between "works in the notebook" and "works in the field" is where all the interesting engineering lives.

That gap has been the through-line of most of my research. Whether it's sensor batteries that degrade, air quality readings that drift, or ML models that go stale, the common thread is that real-world systems change, and our tools need to change with them. The Turing project was where that thread became explicit, and I'm grateful for the opportunity to pull on it with some very smart people.
