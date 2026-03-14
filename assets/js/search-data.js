// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-the-ai-product-factory-using-claude-code-as-a-game-development-studio",
        
          title: "The AI Product Factory: Using Claude Code as a Game Development Studio",
        
        description: "The three-mode workflow that turns Claude Code into a one-person game development studio, and why context engineering matters more than prompting.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2026/02/15/ai-product-factory/";
          
        },
      },{id: "post-building-a-brewery-sim-in-godot-with-ai-pair-programming",
        
          title: "Building a Brewery Sim in Godot with AI Pair Programming",
        
        description: "BeerBrew Tycoon, a brewery management sim built in Godot 4 where AI writes 95% of the code and I&#39;m the product owner.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2026/01/15/brewery-sim-ai-pair-programming/";
          
        },
      },{id: "post-leading-ai-transformation-what-the-role-actually-looks-like",
        
          title: "Leading AI Transformation: What the Role Actually Looks Like",
        
        description: "Six months into leading AI transformation at Oneview, from Technical PM to owning the AI strategy, and what the role involves when you strip away the buzzwords.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2025/09/15/head-of-ai-transformation/";
          
        },
      },{id: "post-building-an-ai-sdlc-standards-for-how-we-ship-ai-features",
        
          title: "Building an AI SDLC: Standards for How We Ship AI Features",
        
        description: "Developing a company-wide framework for conceiving, building, and shipping AI features in healthcare software.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2025/06/15/building-ai-sdlc/";
          
        },
      },{id: "post-80-faster-how-multi-agent-workflows-changed-our-product-process",
        
          title: "80% Faster: How Multi-Agent Workflows Changed Our Product Process",
        
        description: "Leading company-wide AI transformation, starting with an 80% reduction in PRD-to-user-story conversion time using multi-agent workflows.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2025/05/15/80-percent-faster/";
          
        },
      },{id: "post-joining-oneview-healthcare-ai-in-connected-care",
        
          title: "Joining Oneview Healthcare: AI in Connected Care",
        
        description: "Platform team lead at a connected care company serving major hospital systems, and why healthcare is the hardest place to ship software.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2025/03/01/joining-oneview-healthcare/";
          
        },
      },{id: "post-prompt-engineering-is-dead-long-live-context-engineering",
        
          title: "Prompt Engineering is Dead, Long Live Context Engineering",
        
        description: "What actually matters when building AI systems isn&#39;t clever prompts, it&#39;s structured context. The discipline that replaced prompt engineering.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2025/01/15/context-engineering/";
          
        },
      },{id: "post-productbuilder-what-i-learned-building-a-multi-agent-platform-from-scratch",
        
          title: "ProductBuilder: What I Learned Building a Multi-Agent Platform from Scratch",
        
        description: "Technical lessons from building a multi-agent orchestration platform with LangGraph, covering architecture decisions, context patterns, and where RAG falls apart.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2024/12/15/productbuilder/";
          
        },
      },{id: "post-leaving-enterprise-why-i-took-a-career-break-to-build-ai-systems",
        
          title: "Leaving Enterprise: Why I Took a Career Break to Build AI Systems",
        
        description: "Five months off to go deep on AI agents, RAG, and multi-agent orchestration. Why hands-on building is the only way to understand the ecosystem.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2024/09/15/leaving-enterprise/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-in-ai-before-it-was-trendy-a-timeline",
        
          title: "In AI Before It Was Trendy: A Timeline",
        
        description: "A decade of working in AI, from sensor networks to planning algorithms to everyone suddenly discovering ChatGPT.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2023/10/15/in-ai-before-it-was-trendy/";
          
        },
      },{id: "post-hot-take-why-enterprise-ai-projects-fail-it-39-s-not-the-ai",
        
          title: "Hot Take: Why Enterprise AI Projects Fail (It&#39;s Not the AI)",
        
        description: "After a decade in AI across startups and enterprise, I can tell you the model is never the problem.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2023/06/15/why-enterprise-ai-projects-fail/";
          
        },
      },{id: "post-building-a-saas-product-for-plumbers-who-accidentally-own-fleets",
        
          title: "Building a SaaS Product for Plumbers Who Accidentally Own Fleets",
        
        description: "How we built Vandy, a fleet management SaaS for small businesses who never wanted to manage fleets in the first place.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2023/02/15/building-saas-for-plumbers/";
          
        },
      },{id: "post-joining-zf-group-product-management-inside-a-giant",
        
          title: "Joining ZF Group: Product Management Inside a Giant",
        
        description: "Moving from startup founder to senior PM at a 150,000-person company. Culture shock doesn&#39;t begin to cover it.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2022/10/15/joining-zf-group/";
          
        },
      },{id: "post-maker-map-making-updated",
        
          title: "Maker: Map Making (Updated)",
        
        description: "Three maps I made (Enfield, the world, and the 2016 US election). One aged better than the others.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2022/06/15/maker-map-making/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-what-i-learned-from-running-an-ai-startup-for-three-years",
        
          title: "What I Learned from Running an AI Startup for Three Years",
        
        description: "An honest retrospective on AutoPlan. What worked, what didn&#39;t, and what I&#39;d do differently.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2022/02/15/what-i-learned-running-ai-startup/";
          
        },
      },{id: "post-the-honest-state-of-autoplan-year-two",
        
          title: "The Honest State of AutoPlan: Year Two",
        
        description: "An honest look at what&#39;s working, what isn&#39;t, and what it&#39;s actually like building an AI startup in 2021.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/09/15/honest-state-of-autoplan/";
          
        },
      },{id: "post-planning-law-diploma-what-i-learned-and-why-engineers-should-study-law",
        
          title: "Planning Law Diploma: What I Learned and Why Engineers Should Study Law",
        
        description: "Completing the King&#39;s Inns diploma in Environmental and Planning Law, and why legal frameworks are basically state machines.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/05/15/planning-law-diploma/";
          
        },
      },{id: "post-enterprise-ireland-nvidia-inception-and-the-autoplan-stack",
        
          title: "Enterprise Ireland, Nvidia Inception, and the AutoPlan Stack",
        
        description: "On accumulating impressive logos, what they actually mean, and what they don&#39;t.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/01/15/enterprise-ireland-nvidia-inception/";
          
        },
      },{id: "post-autoplan-and-the-european-space-agency-why-esa-invests-in-planning-tech",
        
          title: "AutoPlan and the European Space Agency: Why ESA Invests in Planning Tech",
        
        description: "Becoming an ESA BIC recipient, and what the European Space Agency has to do with planning applications.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2020/10/15/autoplan-esa/";
          
        },
      },{id: "post-ndrc-and-new-frontiers-what-startup-accelerators-actually-give-you",
        
          title: "NDRC and New Frontiers: What Startup Accelerators Actually Give You",
        
        description: "Having done three accelerator programmes, here&#39;s what you actually get beyond the money and the press release.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2020/07/15/ndrc-new-frontiers/";
          
        },
      },{id: "post-founding-autoplan-ai-for-the-planning-system-in-a-pandemic",
        
          title: "Founding AutoPlan: AI for the Planning System (in a Pandemic)",
        
        description: "Launching an AI startup for planning applications in March 2020, which was either perfect timing or terrible timing depending on the day.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2020/04/15/founding-autoplan/";
          
        },
      },{id: "post-going-back-to-law-school-why-a-phd-in-computing-needs-planning-law",
        
          title: "Going Back to Law School: Why a PhD in Computing Needs Planning Law...",
        
        description: "Starting the Advanced Diploma in Environmental and Planning Law at King&#39;s Inns, and why it makes more sense than it sounds.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2020/01/15/going-back-to-law-school/";
          
        },
      },{id: "post-hot-take-the-internet-is-making-us-sad",
        
          title: "Hot Take: The Internet is Making Us Sad",
        
        description: "A half-baked theory about blue light, JPEG compression, and why staring at screens might be making us miserable. With honest corrections.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2019/11/15/the-internet-is-making-us-sad/";
          
        },
      },{id: "post-entrepreneur-first-singapore-same-programme-different-continent",
        
          title: "Entrepreneur First Singapore: Same Programme, Different Continent",
        
        description: "Doing Entrepreneur First a second time, in Singapore, and what the difference in ecosystem taught me about startups.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2019/08/15/entrepreneur-first-singapore/";
          
        },
      },{id: "post-submitting-my-phd-thesis-4-years-of-energy-neutral-sensors",
        
          title: "Submitting My PhD Thesis: 4 Years of Energy Neutral Sensors",
        
        description: "On finishing a PhD at Imperial College London, surviving the viva, and what &quot;energy neutral sensor systems&quot; actually means.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2019/05/15/submitting-phd-thesis/";
          
        },
      },{id: "post-entrepreneur-first-london-finding-a-co-founder-in-12-weeks",
        
          title: "Entrepreneur First London: Finding a Co-Founder in 12 Weeks",
        
        description: "What it&#39;s actually like inside Entrepreneur First&#39;s LD12 cohort, where you start with people and hope the ideas follow.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2019/02/15/entrepreneur-first-london/";
          
        },
      },{id: "post-the-alan-turing-institute-adaptive-machine-learning-for-changing-environments",
        
          title: "The Alan Turing Institute: Adaptive Machine Learning for Changing Environments",
        
        description: "Working on meta-learning at the UK&#39;s national AI research institute, with applications from smart cities to autonomous vehicles.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2018/10/15/alan-turing-institute/";
          
        },
      },{id: "post-leaving-domus-starting-glanaer-smart-cities-consultancy",
        
          title: "Leaving Domus, Starting Glanaer: Smart Cities Consultancy",
        
        description: "Why Domus.ai wound down and what the UK smart cities landscape looks like from inside.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2018/07/15/leaving-domus-starting-glanaer/";
          
        },
      },{id: "post-jamming-attacks-on-water-networks-our-ieee-paper-on-cyber-physical-resilience",
        
          title: "Jamming Attacks on Water Networks: Our IEEE Paper on Cyber-Physical Resilience",
        
        description: "Retrofitting water networks with wireless sensors and then trying to break them with jamming attacks.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2018/04/15/jamming-attacks-water-networks/";
          
        },
      },{id: "post-ces-2018-climo-wins-an-innovation-award-for-smart-cities",
        
          title: "CES 2018: Climo Wins an Innovation Award for Smart Cities",
        
        description: "Seeing research turn into a product at CES, and what it feels like to win an innovation award.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2018/01/15/ces-climo-innovation-award/";
          
        },
      },{id: "post-solar-tracking-for-wireless-sensors-from-masters-thesis-to-ieee-globecom",
        
          title: "Solar Tracking for Wireless Sensors: From Masters Thesis to IEEE GLOBECOM",
        
        description: "Full circle from an MSc thesis at DCU to a GLOBECOM paper on adaptive solar tracking for sensor nodes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/11/15/solar-tracking-globecom/";
          
        },
      },{id: "post-tales-from-the-wild-our-paper-on-why-iot-deployments-fail",
        
          title: "Tales from the Wild: Our Paper on Why IoT Deployments Fail",
        
        description: "A paper about failures, because nobody else was writing them up.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/09/15/tales-from-the-wild/";
          
        },
      },{id: "post-my-phd-paper-got-into-icdcs-battery-health-and-long-term-sensing",
        
          title: "My PhD Paper Got into ICDCS: Battery Health and Long-Term Sensing",
        
        description: "Batteries degrade, energy neutral systems slowly fail, and we turned it into an optimisation problem.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/06/15/icdcs-battery-health/";
          
        },
      },{id: "post-founding-domus-ai-can-ai-fix-the-uk-planning-system",
        
          title: "Founding Domus.ai: Can AI Fix the UK Planning System?",
        
        description: "Starting an AI company to tackle planning applications while doing a PhD at Imperial.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/03/15/founding-domus-ai/";
          
        },
      },{id: "post-accurate-models-of-energy-harvesting-for-smart-environments",
        
          title: "Accurate Models of Energy Harvesting for Smart Environments",
        
        description: "Why existing energy models for sensor nodes are wrong, and what we did about it.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/01/15/accurate-energy-harvesting-models/";
          
        },
      },{id: "post-what-actually-happens-when-you-deploy-sensors-in-the-wild",
        
          title: "What Actually Happens When You Deploy Sensors in the Wild",
        
        description: "A preview of the &quot;Tales from the Wild&quot; paper, three case studies from the London Living Lab covering air quality, microclimate, and urban bat monitoring.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2016/11/15/sensors-in-the-wild/";
          
        },
      },{id: "post-ireland-39-s-representative-the-epo-innovation-contest",
        
          title: "Ireland&#39;s Representative: The EPO Innovation Contest",
        
        description: "Representing Ireland at the European Patent Office Innovation Contest, exploring transparent phase change materials for building insulation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2016/07/15/epo-innovation-contest/";
          
        },
      },{id: "post-sensors-batteries-and-why-39-deploy-and-forget-39-is-a-lie",
        
          title: "Sensors, Batteries, and Why &#39;Deploy and Forget&#39; is a Lie",
        
        description: "The core problem of my PhD taking shape. Battery degradation in wireless sensor networks and why existing energy harvesting models assume batteries last forever.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2016/03/15/sensors-batteries-deploy-and-forget/";
          
        },
      },{id: "post-api-month-day-1-11-and-why-i-stopped",
        
          title: "API Month: Day 1-11 (and Why I Stopped)",
        
        description: "A consolidation of my API Month experiment, eleven days of building things with public APIs, from Citymapper to the ISS, and an honest account of why I stopped.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2015/12/15/api-month/";
          
        },
      },{id: "post-starting-a-phd-at-imperial-why-i-went-back-to-school",
        
          title: "Starting a PhD at Imperial: Why I Went Back to School",
        
        description: "Joining the AESE lab at Imperial College London under Prof Julie McCann, and why the battery problem in IoT convinced me to go back to academia.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2015/10/15/starting-phd-imperial/";
          
        },
      },{id: "post-the-london-living-lab-deploying-hundreds-of-air-quality-sensors-across-a-city",
        
          title: "The London Living Lab: Deploying Hundreds of Air Quality Sensors Across a City...",
        
        description: "Technical architect on the London Living Lab, deploying hundreds of air quality, weather, and environmental sensors across London and learning what breaks at scale.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2015/08/15/london-living-lab/";
          
        },
      },{id: "post-we-won-global-datafest-social-cycle-and-organising-a-30-city-hackathon",
        
          title: "We Won: Global Datafest, Social Cycle, and Organising a 30-City Hackathon",
        
        description: "Organising the Global Urban Datafest hackathon in London with IBM and Stanford, and accidentally winning the global prize with Social Cycle.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2015/05/15/global-datafest/";
          
        },
      },{id: "post-leaving-dublin-for-london-intel-labs-and-the-internet-of-things",
        
          title: "Leaving Dublin for London: Intel Labs and the Internet of Things",
        
        description: "Joining Intel Labs ICRI Cities as a design technologist, working at the intersection of Intel, UCL, and Imperial on the Internet of School Things.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2015/02/15/leaving-dublin-for-london/";
          
        },
      },{id: "post-doodlebots-retro-gameboxes-and-running-stem-workshops-for-1-50-a-head",
        
          title: "Doodlebots, Retro Gameboxes, and Running STEM Workshops for 1.50 a Head",
        
        description: "Lessons from running low-cost STEM workshops at Digital Week in Rua Red, for kids and adults.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2014/12/15/doodlebots-workshops/";
          
        },
      },{id: "post-battleshots-laser-cut-drinking-games-and-why-making-things-should-be-fun",
        
          title: "BattleShots: Laser-Cut Drinking Games and Why Making Things Should Be Fun",
        
        description: "Designing and laser-cutting a BattleShots drinking game from acrylic, with a bill of materials under thirty euros.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2014/11/15/battleshots/";
          
        },
      },{id: "post-brewmonitor-an-arduino-powered-cloud-brewing-controller-for-17-euros",
        
          title: "BrewMonitor: An Arduino-Powered Cloud Brewing Controller for 17 Euros",
        
        description: "Building a cloud-connected fermentation temperature monitor with an Arduino, an ESP8266, and a waterproof thermometer for under twenty euros.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2014/10/15/brewmonitor/";
          
        },
      },{id: "post-second-patent-a-novel-indoor-solar-system",
        
          title: "Second Patent: A Novel Indoor Solar System",
        
        description: "Patent WO2014041040 granted, covering the interface between dye-sensitised solar cells and ultra-low-power IoT devices.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2014/08/15/second-patent-indoor-solar/";
          
        },
      },{id: "post-dublin-maker-leds-maps-and-a-robot-called-frankie",
        
          title: "Dublin Maker: LEDs, Maps, and a Robot Called Frankie",
        
        description: "Prepping for Dublin Maker Faire with an LED air quality map, a robot, and more hot glue than any reasonable person should use.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2014/06/15/dublin-maker/";
          
        },
      },{id: "post-patent-granted-making-solar-cells-you-can-print",
        
          title: "Patent Granted: Making Solar Cells You Can Print",
        
        description: "On being named on a European patent for printable dye-sensitised solar cells, and what it was like inside an Irish energy startup.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2014/04/15/patent-granted-solar-cells/";
          
        },
      },{id: "post-the-bedroom-laboratory-why-we-built-a-hackerspace-in-a-bedroom",
        
          title: "The Bedroom Laboratory: Why We Built a Hackerspace in a Bedroom",
        
        description: "The origin story of the Bedroom Lab, born from a hackathon and a Dublin apartment with no garage.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2014/02/15/the-bedroom-laboratory/";
          
        },
      },{id: "projects-autoplan",
          title: 'AutoPlan',
          description: "AI PlanTech startup helping architects navigate planning complexity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/autoplan/";
            },},{id: "projects-the-bedroom-laboratory",
          title: 'The Bedroom Laboratory',
          description: "A maker collective born from a small Dublin apartment and too many soldering irons.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bedroom-laboratory/";
            },},{id: "projects-beerbrew-tycoon",
          title: 'BeerBrew Tycoon',
          description: "A brewery management sim built in Godot with AI doing most of the coding.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/beerbrew-tycoon/";
            },},{id: "projects-brewmonitor",
          title: 'BrewMonitor',
          description: "An Arduino-powered, cloud-based homebrewing controller for 17 euros.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brewmonitor/";
            },},{id: "projects-london-living-lab",
          title: 'London Living Lab',
          description: "Hundreds of air quality sensors deployed across London to understand the environment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/london-living-lab/";
            },},{id: "projects-solar-tracking-for-iot",
          title: 'Solar Tracking for IoT',
          description: "From MSc thesis to IEEE GLOBECOM paper — low-cost solar tracking for wireless sensors.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/solar-tracking/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gregario", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gregjackson2", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=FFjIW-wAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
