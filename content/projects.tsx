import {
   Stack,
   Text,
   Box,
   Title,
   List,
   ListItem,
   Image as MantineImage,
} from "@mantine/core";
import LinkGroup from "../components/Shared/LinkGroup/LinkGroup";
import ShieldGroup from "../components/Shared/ShieldGroup/ShieldGroup";

export type IProject = {
   id: string;
   year: string;
   title: string;
   link: string;
   body: React.ReactNode;
   summary?: React.ReactNode;
   extras?: React.ReactNode;
   badges: string[];
   images?: string[];
   isTopProject?: boolean;
};

export const projects: IProject[] = [
   {
      id: "portfolio_next_site",
      year: "2024",
      title: "Modern Portfolio Website",
      link: "/projects/portfolio_next_site",
      body: (
         <>
            <Text>
               I developed this modern portfolio website using Next.js and
               React, leveraging the powerful Mantine UI component library for a
               polished and responsive design. The site showcases my
               professional journey and technical projects while implementing
               best practices in TypeScript development and component
               architecture.
            </Text>
            <Text mt="md">
               Built with performance and maintainability in mind, the site
               utilizes Next.js for optimized routing and server-side rendering
               capabilities. The project demonstrates clean code organization,
               type safety, and modern deployment practices through
               Vercel&apos;s hosting platform. This implementation serves as
               both a professional showcase and a practical example of
               contemporary web development techniques.
            </Text>
         </>
      ),
      badges: ["Next.js", "React", "TypeScript", "Mantine UI", "Vercel"],
      images: [],
      extras: (
         <LinkGroup
            linkedItems={[
               {
                  name: "GitHub",
                  href: "https://github.com/gsimon2/portfolio-next-site",
               },
               {
                  name: "Website",
                  href: "https://portfolio-next-site-omega.vercel.app/",
               },
            ]}
         />
      ),
   },
   {
      id: "foundry_modules",
      isTopProject: true,
      year: "2021 - Now",
      title: "Foundry VTT Modules",
      link: "/projects/foundry_modules",
      badges: [
         "Javascript",
         "Handlebars",
         "Foundry VTT",
         "GSAP",
         "Sockets",
         "Community Driven",
      ],
      images: [
         "/assets/projects/foundry-fallback.png",
      ],
      summary: (
         <Text>
            I&apos;ve created a variety of modules for the Foundry Virtual
            Tabletop system. These are all written as indepent javascript
            modules using the Handlebars template system for UI. Each was
            spurred by a personal need or desire for enhanced functionality and
            have expanded as they received a small following in the community.
            Every module is written in Javascript and uses Handlebars as these
            are the standard for Foundry VTT. Other technologies are used on a
            as needed basis, such as: sockets, GSAP, file handling, and more.
         </Text>
      ),
      extras: (
         <LinkGroup
            linkedItems={[
               {
                  name: "Foundry VTT",
                  href: "https://foundryvtt.com/",
               },
               {
                  name: "Available Modules",
                  href: "https://foundryvtt.com/search/?type=package&q=glen+simon",
               },
            ]}
         />
      ),
      body: (
         <Box>
            <Text>
               I&apos;ve created a variety of modules for the Foundry Virtual
               Tabletop system. These are all written as indepent javascript
               modules using the Handlebars template system for UI. Each was
               spurred by a personal need or desire for enhanced functionality
               and have expanded as they received a small following in the
               community. Other technologies are used on a as needed basis, such
               as: sockets, GSAP, file handling, and more.
            </Text>
            <Box mt="xl">
               <Title order={2} mb="md">
                  Dramatic Rolls
               </Title>
               <MantineImage
                  src="https://github.com/user-attachments/assets/7799e746-6e8b-4667-a889-c9aa4f4e7bcd"
                  alt="Dramatic Rolls Demo"
                  mah="500px"
                  fit="contain"
               />
               <Box my="sm">
                  <ShieldGroup
                     shields={[
                        {
                           src: "https://img.shields.io/github/downloads/gsimon2/dramatic-rolls/module.zip",
                           alt: "Total Downloads",
                        },
                        {
                           src: "https://img.shields.io/github/downloads/gsimon2/dramatic-rolls/latest/module.zip",
                           alt: "Latest Downloads",
                        },
                        {
                           src: "https://img.shields.io/github/last-commit/gsimon2/dramatic-rolls?color=orange&label=Last%20Updated&style=plastic",
                           alt: "last updated badge",
                        },
                        {
                           src: "https://img.shields.io/github/languages/top/gsimon2/dramatic-rolls?style=plastic",
                           alt: "top language badge",
                        },
                     ]}
                  />
               </Box>
               <Box my="sm">
                  <LinkGroup
                     linkedItems={[
                        {
                           name: "GitHub",
                           href: "https://github.com/gsimon2/dramatic-rolls",
                        },
                        {
                           name: "Foundry Module Page",
                           href: "https://foundryvtt.com/packages/dramatic-rolls",
                        },
                     ]}
                  />
               </Box>
               <Text>
                  Dramatic Rolls is an exciting module for FoundryVTT that adds
                  a touch of drama and excitement to your natural 20s and
                  natural 1s! Enhance your gaming experience with customizable
                  sound effects, eye-catching animations, and confetti
                  explosions that celebrate critical successes and emphasize
                  critical failures. Whether you&apos;re landing a perfect hit
                  or fumbling spectacularly, Dramatic Rolls ensures these
                  pivotal moments are marked with flair, creating memorable
                  experiences for both players and Game Masters alike.
               </Text>
               <Text mt="md">
                  For users of the Pathfinder 2e game system, Dramatic Rolls
                  offers additional options to trigger effects based on critical
                  successes and failures, even when the result isn&apos;t from a
                  natural 20 or 1. This feature takes into account the
                  Pathfinder 2e degree of success system, allowing for more
                  nuanced and system-specific dramatic moments during gameplay.
               </Text>
            </Box>
            <Box mt="xl">
               <Title order={2} mb="md">
                  Hide Player UI
               </Title>
               <MantineImage
                  src="https://github.com/user-attachments/assets/41420e2b-07c7-41f9-ab35-13c4ca915283"
                  alt="Hide Player UI Demo"
                  mah="500px"
                  fit="contain"
               />
               <Box my="sm">
                  <ShieldGroup
                     shields={[
                        {
                           src: "https://img.shields.io/github/downloads/gsimon2/hide-player-ui/module.zip",
                           alt: "Total Downloads",
                        },
                        {
                           src: "https://img.shields.io/github/downloads/gsimon2/hide-player-ui/latest/module.zip",
                           alt: "Latest Downloads",
                        },
                        {
                           src: "https://img.shields.io/github/last-commit/gsimon2/hide-player-ui?color=orange&label=Last%20Updated&style=plastic",
                           alt: "last updated badge",
                        },
                        {
                           src: "https://img.shields.io/github/languages/top/gsimon2/hide-player-ui?style=plastic",
                           alt: "top language badge",
                        },
                     ]}
                  />
               </Box>
               <Box my="sm">
                  <LinkGroup
                     linkedItems={[
                        {
                           name: "GitHub",
                           href: "https://github.com/gsimon2/hide-player-ui",
                        },
                        {
                           name: "Foundry Module Page",
                           href: "https://foundryvtt.com/packages/hide-player-ui",
                        },
                     ]}
                  />
               </Box>
               <Text>
                  Hide Player UI is a powerful module for FoundryVTT that gives
                  users and GMs fine-grained control over the visibility of
                  Foundry&apos;s user interface elements. This module is perfect
                  for optimizing screen real estate, especially when
                  broadcasting maps or using Foundry on shared displays.
               </Text>
            </Box>
            <Box mt="xl">
               <Title order={2} mb="md">
                  Close Player Art
               </Title>
               <MantineImage
                  src="https://github.com/user-attachments/assets/84da7f10-9bc2-4787-9fa1-ff5df4bdc782"
                  alt="Close Player Art Demo"
                  mah="500px"
                  fit="contain"
               />
               <Box my="sm">
                  <ShieldGroup
                     shields={[
                        {
                           src: "https://img.shields.io/github/downloads/gsimon2/close-player-art/module.zip",
                           alt: "Total Downloads",
                        },
                        {
                           src: "https://img.shields.io/github/downloads/gsimon2/close-player-art/latest/module.zip",
                           alt: "Latest Downloads",
                        },
                        {
                           src: "https://img.shields.io/github/last-commit/gsimon2/close-player-art?color=orange&label=Last%20Updated&style=plastic",
                           alt: "last updated badge",
                        },
                        {
                           src: "https://img.shields.io/github/languages/top/gsimon2/close-player-art?style=plastic",
                           alt: "top language badge",
                        },
                     ]}
                  />
               </Box>
               <Box my="sm">
                  <LinkGroup
                     linkedItems={[
                        {
                           name: "GitHub",
                           href: "https://github.com/gsimon2/close-player-art",
                        },
                        {
                           name: "Foundry Module Page",
                           href: "https://foundryvtt.com/packages/close-player-art",
                        },
                     ]}
                  />
               </Box>
               <Text>
                  A simple module for FoundryVTT that adds a configurable hotkey
                  (Default ` - backtick) for the GM to close open image popouts
                  on player screens.
               </Text>
            </Box>
            <Box mt="xl">
               <Title order={2} mb="md">
                  Playlist Drag and Drop
               </Title>
               <MantineImage
                  src="https://github.com/gsimon2/playlist-drag-and-drop/raw/main/playlist-drag-and-drop-demo.gif"
                  alt="Playlist Drag and Drop  Demo"
                  mah="500px"
                  fit="contain"
               />
               <Box my="sm">
                  <ShieldGroup
                     shields={[
                        {
                           src: "https://img.shields.io/github/downloads/gsimon2/playlist-drag-and-drop/module.zip",
                           alt: "Total Downloads",
                        },
                        {
                           src: "https://img.shields.io/github/downloads/gsimon2/playlist-drag-and-drop/latest/module.zip",
                           alt: "Latest Downloads",
                        },
                        {
                           src: "https://img.shields.io/github/last-commit/gsimon2/playlist-drag-and-drop?color=orange&label=Last%20Updated&style=plastic",
                           alt: "last updated badge",
                        },
                        {
                           src: "https://img.shields.io/github/languages/top/gsimon2/playlist-drag-and-drop?style=plastic",
                           alt: "top language badge",
                        },
                     ]}
                  />
               </Box>
               <Box my="sm">
                  <LinkGroup
                     linkedItems={[
                        {
                           name: "GitHub",
                           href: "https://github.com/gsimon2/playlist-drag-and-drop",
                        },
                        {
                           name: "Foundry Module Page",
                           href: "https://foundryvtt.com/packages/playlist-drag-and-drop",
                        },
                     ]}
                  />
               </Box>
               <Text>
                  A simple module for FoundryVtt that allows dragging playlist
                  soundtracks from the sidebar and dropping them onto the map as
                  ambient sounds. Default sound volume, radius, eaasing, and
                  repeat settings can be configured via the configure settings
                  menu. If desired the CTRL, ALT, or CTRL + ALT keys can be
                  require to enable to dragging of sound tracks onto the scene.
                  This was requested to promote higher compatibility with other
                  modules that impact the playlist functionality.
               </Text>
            </Box>
            <Box mt="xl">
               <Title order={2} mb="md">
                  Pathfinder 2e Inspire Courage Button
               </Title>
               <MantineImage
                  src="https://github.com/gsimon2/pf2e-inspire-courage/raw/main/demo.gif"
                  alt="Pathfinder 2e Inspire Courage Button  Demo"
                  mah="500px"
                  fit="contain"
               />
               <Box my="sm">
                  <ShieldGroup
                     shields={[
                        {
                           src: "https://img.shields.io/github/downloads/gsimon2/pf2e-inspire-courage/module.zip",
                           alt: "Total Downloads",
                        },
                        {
                           src: "https://img.shields.io/github/downloads/gsimon2/pf2e-inspire-courage/latest/module.zip",
                           alt: "Latest Downloads",
                        },
                        {
                           src: "https://img.shields.io/github/last-commit/gsimon2/pf2e-inspire-courage?color=orange&label=Last%20Updated&style=plastic",
                           alt: "last updated badge",
                        },
                        {
                           src: "https://img.shields.io/github/languages/top/gsimon2/pf2e-inspire-courage?style=plastic",
                           alt: "top language badge",
                        },
                     ]}
                  />
               </Box>
               <Box my="sm">
                  <LinkGroup
                     linkedItems={[
                        {
                           name: "GitHub",
                           href: "https://github.com/gsimon2/pf2e-inspire-courage",
                        },
                        {
                           name: "Foundry Module Page",
                           href: "https://foundryvtt.com/packages/pf2e-inspire-courage",
                        },
                     ]}
                  />
               </Box>
               <Text>
                  A simple module for FoundryVtt that adds a button to character
                  token HUDs that allows for the toggling of Inspire Courage.
                  This utilizes the PF2e &quot;Inspire Courage&quot; spell
                  effect. Only applies to to actual character actors, not NPCs
                  due to how spell effect interact with their sheet. When
                  inspire courage is active, the inspire courage effect icon
                  will appear on the token and the spell effect will be added to
                  the actor&apos;s sheet. The bonus to attack and damage rolls
                  will automatically apply.
               </Text>
            </Box>
         </Box>
      ),
   },
   {
      id: "lyons_bjj_website",
      isTopProject: true,
      year: "2024",
      title: "Lyons BJJ Academy Website",
      link: "/projects/lyons_bjj_website",
      images: ["/assets/projects/lyons-bjj.png"],
      body: (
         <>
            <Text>
               Developed a modern, professional website for Lyons Brazilian
               Jiu-Jitsu academy using Next.js and React, featuring a clean and
               responsive design built with Material-UI (MUI). The site serves
               as the primary online presence for the academy located in
               Portland, MI, showcasing class schedules, photo galleries, and
               student testimonials.
            </Text>
            <Text mt="md">
               The website integrates with the Google Places API to display
               real-time student reviews and implements dynamic content
               management for testimonials and academy information. Built with
               TypeScript for enhanced code reliability, the site features a
               mobile-responsive navigation system, custom theming with a
               professional dark mode aesthetic, and optimized image handling
               for the photo gallery section. The architecture emphasizes
               maintainability and performance while providing an intuitive user
               experience for both prospective and current students.
            </Text>
         </>
      ),
      badges: [
         "Next.js",
         "React",
         "TypeScript",
         "Material UI",
         "Google Places API",
         "Emotion"
      ],
      extras: (
         <LinkGroup
            linkedItems={[
               {
                  name: "Website",
                  href: "https://lyonsbjj.org",
               },
            ]}
         />
      ),
   },
   {
      id: "superior_plumbing_mt",
      isTopProject: true,
      year: "2024",
      title: "Superior Plumbing Service Website",
      link: "/projects/superior_plumbing_mt",
      body: (
         <>
            <Text>
               Developed a professional business website for Superior Plumbing
               Service in Montana using Next.js and React, featuring a clean,
               modern design built with Material UI components. The site
               integrates Google Business reviews, contact forms, and service
               information while maintaining responsive design across all device
               sizes.
            </Text>
            <Text mt="md">
               The implementation includes dynamic theme customization,
               optimized image handling, and seamless integration with external
               services. A custom lightweight API was built around Resend to
               enable direct customer inquiries through an intuitive contact
               form, streamlining communication between potential customers and
               the business. Additional features include Google Reviews display
               using a Masonry layout and comprehensive contact information
               management. The site demonstrates professional-grade component
               architecture with TypeScript for enhanced maintainability and
               type safety.
            </Text>
         </>
      ),
      badges: [
         "Next.js",
         "React",
         "TypeScript",
         "Material UI",
         "Google Places API",
         "Emotion",
         "API",
         "Resend",
      ],
      images: ["/assets/projects/superior-plumbing.png"],
      extras: (
         <LinkGroup
            linkedItems={[
               {
                  name: "Website",
                  href: "https://superiorplumbingmt.com",
               },
            ]}
         />
      ),
   },
   {
      id: "parallax_scrolling_website",
      year: "2022",
      title: "Parallax Scrolling Website",
      link: "/projects/parallax_scrolling_website",
      body: (
         <>
            <Text>
               I made a simple website to promote a friend&apos;s novel. I
               wanted to explore parallax scrolling and implemented it on the
               desktop version of the site. A mobile-friendly version of the
               site is loaded for small screens that does not apply this
               scrolling effect to help accommodate reduced processing
               capabilities.
            </Text>
            <Text mt="md">
               The site is built using React with TypeScript for enhanced code
               reliability and maintainability. Material-UI (MUI) components
               provide a polished, modern interface while enabling responsive
               design through built-in media queries. The component-based
               architecture allows for clean, reusable code patterns, while
               CSS-in-JS styling offers flexible theming options. The site is
               hosted on GitHub Pages, making it easily accessible while
               maintaining version control and deployment automation.
            </Text>
         </>
      ),
      extras: (
         <Stack>
            <ShieldGroup
               shields={[
                  {
                     src: "https://img.shields.io/github/last-commit/gsimon2/winds-of-shadow?color=orange&label=Last%20Updated&style=plastic",
                     alt: "last updated badge",
                  },
                  {
                     src: "https://img.shields.io/github/languages/top/gsimon2/winds-of-shadow?style=plastic",
                     alt: "top language badge",
                  },
               ]}
            />
            <LinkGroup
               linkedItems={[
                  {
                     name: "GitHub",
                     href: "https://github.com/gsimon2/winds-of-shadow",
                  },
                  {
                     name: "Website",
                     href: "https://gsimon2.github.io/winds-of-shadow",
                  },
               ]}
            />
         </Stack>
      ),
      badges: [
         "React",
         "TypeScript",
         "Github Pages",
         "Material-UI",
         "Responsive Design",
         "CSS-in-JS",
         "Parallax Scrolling Effects",
      ],
      images: ["/assets/projects/parallax-scrolling-website-demo.gif"],
   },
   {
      id: "twitch_stream_watcher_script",
      isTopProject: true,
      year: "2022",
      title: "Twitch Stream Watcher Script",
      link: "/projects/twitch_stream_watcher_script",
      body: (
         <Box>
            <Text>
               A browser automation tool built with Puppeteer that watches
               Twitch streams and automatically collects channel points. The
               script handles user authentication, monitors streams for bonus
               opportunities, and maintains session persistence.
            </Text>

            <Box mt="md">
               <Title order={3}>Technical Highlights</Title>
               <List>
                  <ListItem>
                     Browser automation using Puppeteer and Chrome DevTools
                     Protocol
                  </ListItem>
                  <ListItem>
                     CLI-based configuration with secure credential handling
                  </ListItem>
                  <ListItem>
                     Intelligent polling system for bonus point detection
                  </ListItem>
                  <ListItem>
                     Real-time point balance tracking and statistics
                  </ListItem>
               </List>
            </Box>

            <Box mt="md">
               <Title order={3}>Solutions</Title>
               <List>
                  <ListItem>
                     Dynamic element detection in modern web interfaces
                  </ListItem>
                  <ListItem>Stable long-running browser sessions</ListItem>
                  <ListItem>
                     Webscrapping of Twitch&apos;s point collection system
                  </ListItem>
               </List>
            </Box>
         </Box>
      ),
      badges: [
         "Javascript",
         "Node.js",
         "Puppeteer",
         "Chrome automation",
         "Web scraping",
         "DOM manipulation",
         "Browser automation",
         "Twitch integration",
      ],
      images: [
         "https://raw.githubusercontent.com/gsimon2/twitchStreamWatcher/main/demo.png",
      ],
      extras: (
         <LinkGroup
            linkedItems={[
               {
                  name: "GitHub",
                  href: "https://github.com/gsimon2/twitchStreamWatcher",
               },
            ]}
         />
      ),
   },
   {
      id: "portfolio_website_v1",
      year: "2021",
      title: "Portfolio Website V1",
      link: "/projects/portfolio_website_v1",
      body: (
         <>
            <Text>
               I created this website to supplement my resume, encourage further
               learning in designing front-end projects, and act as a reference
               guide for practices I’ve picked up while working in React. I
               boot-strapped it using Create React App with the TypeScript
               template, using React Router Dom for routing and Material UI as a
               component library supplemented with Styled Components.
            </Text>
            <Text mt="md">
               Application state is tracked via React Redux, and I hosted it on
               GitHub Pages with GitHub Actions for build and deployment. I even
               bought a personal domain to share it more easily.
            </Text>
         </>
      ),
      badges: [
         "React",
         "TypeScript",
         "Material UI",
         "GitHub Pages",
         "GitHub Actions",
         "Styled Components",
         "React Router Dom",
         "Create React App",
      ],
      extras: (
         <LinkGroup
            linkedItems={[
               {
                  name: "GitHub",
                  href: "https://github.com/gsimon2/gsimon2.github.io",
               },
               {
                  name: "Website",
                  href: "https://gsimon2.github.io",
               },
            ]}
         />
      ),
      images: ["/assets/projects/personal-website-development.png"],
   },
   {
      id: "evolution_novelty_search_resilience_autonomous_systems",
      year: "2019",
      title: "Applying Evolution and Novelty Search to Enhance the Resilience of Autonomous Systems",
      link: "/projects/evolution_novelty_search_resilience_autonomous_systems",
      body: (
         <>
            <Text>
               A paper I contributed to during graduate school. It was published
               in the &quot;IEEE/ACM 14th International Symposium on Software
               Engineering for Adaptive and Self-Managing Systems (SEAMS),&quot;
               held in Montreal, QC, Canada, in May 2019.
            </Text>
            <Text mt="md">
               <strong>Abstract:</strong>
               <br />
               We investigate the integration of evolutionary algorithms and
               novelty search to improve the performance and resilience of
               autonomous systems. We developed two tools for this purpose:
               Evo-ROS and Enki. Evo-ROS combines evolutionary search with
               physics-based simulations of autonomous systems based on the
               Robot Operating System (ROS). Enki uses novelty search to
               identify operational scenarios that lead to diverse behaviors in
               the target system. Together, these tools automate exploration of
               the operational landscape, identify poor performance areas, and
               evolve system parameters for enhanced response to adverse
               conditions.
            </Text>
            <Text mt="md">
               This paper presents a case study of the throttle controller on
               AutoRally, a 1:5-scale autonomous vehicle developed at Georgia
               Tech for aggressive autonomous driving studies. Preliminary
               results show the proposed methods effectively identifying and
               characterizing troublesome input speed signals, enabling
               development of control systems better suited to varying
               conditions through autonomous mode-switching.
            </Text>
         </>
      ),
      extras: (
         <Stack>
            <LinkGroup
               linkedItems={[
                  {
                     name: "Paper",
                     href: "https://github.com/gsimon2/EvoRos-Enki/blob/main/Enki___Evo_ROS_Integration.pdf",
                  },
               ]}
            />
         </Stack>
      ),
      badges: [
         "Academic Paper",
         "ROS",
         "Evolutionary Algorithms",
         "Novelty Search",
         "Autonomous Systems",
         "Control Systems",
      ],
      images: [
         "https://github.com/gsimon2/EvoRos-Enki/blob/main/fig_evoros_enki_dfd.jpg?raw=true",
      ],
   },
   {
      id: "evo_ros_integration_robot_operating_system",
      year: "2018",
      title: "Evo-ROS: Integration of Evolution and the Robot Operating System",
      link: "/projects/evo_ros_integration_robot_operating_system",
      body: (
         <>
            <Text>
               A paper that I was the lead author on during graduate school,
               published in the &quot;Proceedings of the Genetic and
               Evolutionary Computation Conference Companion,&quot;
               pp.1386-1393, in Kyoto, Japan, in July 2018.
            </Text>
            <Text mt="md">
               <strong>Abstract:</strong>
               <br />
               This paper introduces the Evo-ROS framework, designed to bridge
               the gap between evolutionary algorithms and traditional robotics.
               Evo-ROS combines evolutionary algorithms with physics-based
               evaluations using the Robot Operating System (ROS) and the Gazebo
               simulation environment. The framework aims to provide
               evolutionary robotics researchers access to the extensive
               real-world components and capabilities of ROS and enable ROS
               developers to leverage evolutionary search in design and testing.
            </Text>
            <Text mt="md">
               We detail the Evo-ROS structure and operation, presenting a case
               study that optimizes sonar sensor placement on unmanned ground
               vehicles prone to reduced sensing capacity due to component
               failures and physical damage. This case study highlights
               Evo-ROS’s current capabilities and offers insights into areas for
               future development.
            </Text>
         </>
      ),
      extras: (
         <Stack>
            <LinkGroup
               linkedItems={[
                  {
                     name: "Conference Paper",
                     href: "https://gsimon2.github.io/EvoRos-Paper/",
                  },
               ]}
            />
         </Stack>
      ),
      badges: [
         "Academic Paper",
         "Evolutionary Robotics",
         "ROS",
         "Gazebo Simulation",
         "Sensor Optimization",
         "Autonomous Systems",
      ],
      images: [
         "https://github.com/gsimon2/EvoRos-Paper/blob/main/Figures/Workflow.png?raw=true",
      ],
   },
   {
      id: "custom_fitbit_watchface",
      year: "2018",
      title: "Custom Fitbit Watchface",
      link: "/projects/custom_fitbit_watchface",
      body: (
         <>
            <Text>
               A custom Fitbit watch face I designed for my fiancé while we were
               dating. It features a simple display with a background image of
               our dog, Loki. By tapping the screen&apos;s sides in a specific
               sequence, a custom message appears, adding a unique and personal
               touch.
            </Text>
         </>
      ),
      extras: (
         <Stack>
            <ShieldGroup
               shields={[
                  {
                     src: "https://img.shields.io/github/languages/top/gsimon2/fitbit-watchface?style=plastic",
                     alt: "top language badge",
                  },
               ]}
            />
            <LinkGroup
               linkedItems={[
                  {
                     name: "GitHub Repository",
                     href: "https://github.com/gsimon2/fitbit-watchface",
                  },
               ]}
            />
         </Stack>
      ),
      badges: [
         "Fitbit SDK",
         "Custom Watchface",
         "JavaScript",
         "Interactive UI",
      ],
      images: [
         "https://github.com/gsimon2/fitbit-watchface/blob/main/demo.gif?raw=true",
      ],
   },
   {
      id: "population_mapping_via_wifi",
      year: "2017",
      title: "Population Mapping via Wi-Fi Network Analysis",
      link: "/projects/population_mapping_via_wifi",
      body: (
         <>
            <Text>
               This project involved developing a system to map and predict
               population density based on Wi-Fi network usage within Michigan
               State University’s Engineering Building. The work, completed as a
               final project for CSE 824: Advanced Computer Networking and
               Communications, utilized a network of access points to identify
               user locality without relying on GPS data.
            </Text>
            <Text mt="md">
               The project included creating a model for population distribution
               visualized with heatmaps, providing insights into network
               congestion and user movement patterns. The findings support
               infrastructure improvements by highlighting congestion hotspots
               and optimizing access point placement.
            </Text>
         </>
      ),
      extras: (
         <Stack>
            <LinkGroup
               linkedItems={[
                  {
                     name: "Full Report",
                     href: "https://github.com/gsimon2/population-mapping-via-wifi/blob/main/Population_Mapping_via_Wi_Fi_Network_Analysis__normalsize_The_Final_Report.pdf",
                  },
               ]}
            />
         </Stack>
      ),
      badges: [
         "Academic Paper",
         "Wi-Fi Network Analysis",
         "Population Density Modeling",
         "Heatmap Visualization",
         "Predictive Modeling",
         "Computer Networking",
      ],
      images: [
         "https://github.com/gsimon2/population-mapping-via-wifi/blob/main/heat_map_first_floor_110717_6pm.png?raw=true",
      ],
   },
   {
      id: "bomber_dodger",
      year: "2016",
      title: "Bomber Dodger",
      link: "/projects/bomber_dodger",
      body: (
         <>
            <Text>
               Bomber Dodger is an entertaining game developed as a project for
               my CSE 471 Media Processing and Multimedia course at Michigan
               State University. The game was written in C# and explores
               fundamental multimedia concepts through interactive gameplay.
            </Text>
            <Text mt="md">
               The project demonstrates skills in multimedia processing,
               including game design principles and dynamic media handling in a
               desktop environment. It was designed as a submission for an
               academic project, highlighting practical applications of C# in
               media-oriented programming.
            </Text>
         </>
      ),
      extras: (
         <Stack>
            <ShieldGroup
               shields={[
                  {
                     src: "https://img.shields.io/github/languages/top/gsimon2/bomber-dodger?style=plastic",
                     alt: "top language badge",
                  },
               ]}
            />
            <LinkGroup
               linkedItems={[
                  {
                     name: "GitHub",
                     href: "https://github.com/gsimon2/bomber-dodger",
                  },
               ]}
            />
         </Stack>
      ),
      badges: [
         "Game Development",
         "C#",
         "Media Processing",
         "Interactive Design",
         "Academic Project",
      ],
      images: [
         "https://github.com/gsimon2/bomber-dodger/blob/main/demo.gif?raw=true",
      ],
   },
   {
      id: "orthopaedic_exercise_feedback_system",
      year: "2016",
      title: "Orthopaedic Exercise Feedback System",
      link: "/projects/orthopaedic_exercise_feedback_system",
      body: (
         <>
            <Text>
               This project was developed as part of Michigan State
               University&apos;s ECE 480 Senior Design course. Working with a
               small team, we created a cyber-physical rehabilitation station
               equipped with a touchscreen computer to guide patients through
               exercise routines while monitoring and recording their
               performance. The system logged session data to a SQL database,
               allowing therapists to review progress and adjust therapy
               regimens remotely through an online portal.
            </Text>
            <Text mt="md">
               This feedback system offers a solution to common rehabilitation
               issues by ensuring correct form through integrated hardware that
               can halt incorrect movement. The system allows therapists to
               assign and track patient exercises in real-time, addressing the
               challenges of adherence and proper form in therapeutic settings.
            </Text>
         </>
      ),
      extras: (
         <Stack>
            <ShieldGroup
               shields={[
                  {
                     src: "https://img.shields.io/github/languages/top/gsimon2/ProjectBaymaxWebsite?style=plastic",
                     alt: "top language badge",
                  },
               ]}
            />
            <LinkGroup
               linkedItems={[
                  {
                     name: "GitHub",
                     href: "https://github.com/gsimon2/ProjectBaymaxWebsite",
                  },
                  {
                     name: "Paper",
                     href: "https://github.com/gsimon2/ProjectBaymaxWebsite/blob/master/ECE480%20Project%20Final%20Report%20-%202016-12-04.pdf",
                  },
               ]}
            />
         </Stack>
      ),
      badges: [
         "Cyber-Physical Systems",
         "SQL Database",
         "Touchscreen Interface",
         "Real-Time Feedback",
         "Therapy Monitoring",
         "Senior Design Project",
         "Remote Progress Tracking",
      ],
      images: [
         "https://github.com/gsimon2/ProjectBaymaxWebsite/blob/master/project-overview-diagram.png?raw=true",
      ],
   },
];
