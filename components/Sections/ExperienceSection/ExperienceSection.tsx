import { Box, Container, Space, Text } from "@mantine/core";
import React from "react";
import { ElementIds } from "../../../constants";
import classes from "./ExperienceSection.module.css";
import Experience from "./Experience";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

const ExperienceSection: React.FC = () => {
   return (
      <Container fluid className="section-container" id={ElementIds.Experience}>
         <h2>Experience</h2>
         <Box>
            <Experience
               date="2022 - Present"
               title="Staff Software Engineer - Tech Lead"
               pastTitles={["Senior Software Engineer - Tech Lead", "Senior Software Engineer", "Software Engineer 2"]}
               company="Indeed"
               href="https://www.indeed.com/hire"
               badges={[
                  "React",
                  "TypeScript",
                  "Storybook",
                  "GraphQL",
                  "Datadog",
               ]}
            >
               <Text>
                  Tech Lead for Indeed's Job Management team — engineers building the micro-frontends that roughly 1
                  million employers use each week to find, organize, and post their jobs. I designed the @proctor GraphQL
                  directive, a client-side pattern for feature-flagging fields in GraphQL queries (adopted across teams,
                  eliminating a class of production incidents), and built scopeSha for zero-config deployment visibility
                  in DataDog RUM across Indeed's frontend teams. I also lead jobman-common, a suite of pipeline tooling
                  and enhancements used across our 30+ team repos. My work spans architectural stewardship —
                  observability, SLOs, incident response — and engineering enablement. I invest in the engineers around me
                  through code review, pairing sessions, design reviews, whiteboards, and 1:1 mentorship. My deepest
                  expertise is in GraphQL/Apollo, micro-frontend architecture, A/B testing, and AI-assisted developer
                  tooling.
               </Text>
            </Experience>
            <Experience
               date="2019 - 2022"
               title="Software Engineer 2"
               pastTitles={["Software Engineer"]}
               company="TechSmith"
               href="https://www.techsmith.com/"
               badges={["C#", ".NET", "React", "TypeScript", "Storybook"]}
               linkedProducts={[
                  {
                     name: "Screencast",
                     href: "https://www.techsmith.com/screencast.html"
                  },
                  {
                     name: "Video Review (No longer available)",
                     href: "https://www.techsmith.com/learn/tutorials/video-review/",
                  },
                  {
                     name: "Knowmia (No longer available)",
                     href: "https://www.techsmith.com/learn/tutorials/knowmia/welcome/"
                  }
               ]}
            >
               <Text>
                  Contributed to developing and enhancing a range of web
                  solutions, from single-page applications and component
                  libraries to micro front-end components. My responsibilities
                  included creating and maintaining .NET APIs and implementing
                  web jobs to support backend processes. Through a major
                  refactoring effort, I optimized our authorization processes,
                  reducing token requests by orders of magnitude, which
                  significantly improved scalability. Additionally, I helped
                  design and launch a cloud-based content delivery system for
                  our desktop applications, enabling seamless in-app content
                  integration and enhancing the user experience.
               </Text>
            </Experience>
            <Experience
               date="2017 - 2019"
               title="Graduate Research Assistant"
               company="Software Engineering and Network Systems Lab - Michigan State University"
               href="https://engineering.msu.edu/about/departments/cse/research#accordionsoftwareengineeringandnetworksystemslaboratory_researchgroupaccordion"
               badges={["Python", "ROS", "Genetic Algorithms"]}
            >
               <Text>
                  Served as a Graduate Research Assistant, where I developed
                  Evo-ROS, a framework that combines evolutionary search
                  capabilities with the Robot Operating System (ROS). My work
                  included integrating custom control software with ROS to
                  enable autonomous driving in a simulated environment,
                  advancing the research in applying genetic algorithms to
                  autonomous systems.
               </Text>
            </Experience>
         </Box>
         <Box className={classes.resumeLinkContainer}>
            <Link
               href="https://github.com/gsimon2/Resume2/raw/main/Resume2.pdf"
               target="_blank"
               rel="noreferrer noopener"
               className="link"
            >
               Check out my full resume
               <IconExternalLink className="externalLinkIcon" stroke={2} />
            </Link>
         </Box>
      </Container>
   );
};

export default ExperienceSection;
