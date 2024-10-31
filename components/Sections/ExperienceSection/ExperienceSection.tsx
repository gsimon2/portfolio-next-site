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
               title="Senior Software Engineer"
               pastTitles={["Software Engineer 2"]}
               company="Indeed"
               href="https://www.indeed.com/hire"
               chips={[
                  "React",
                  "TypeScript",
                  "Storybook",
                  "GraphQL",
                  "Datadog",
               ]}
            >
               <Text>
                  Helped led a team of engineers to tackle high-stakes projects
                  with agile practices, emphasizing efficiency and effective
                  project management while focusing on both team and product
                  impact. My work included creating a suite of reusable modules
                  that improved job search functionality across over 15 product
                  surfaces, serving an average of 5 million sessions each week
                  with exceptional reliability. I encouraged continuous learning
                  through code pairing, technical deep dive presentations, and
                  open office sessions, supporting team development. Through
                  collaborative cross-team efforts and real-time data insights,
                  I helped deliver quality-driven, scalable solutions for
                  business-critical initiatives.
               </Text>
            </Experience>
            <Experience
               date="2019 - 2022"
               title="Software Engineer 2"
               pastTitles={["Software Engineer"]}
               company="TechSmith"
               href="https://www.techsmith.com/"
               chips={["C#", ".NET", "React", "TypeScript", "Storybook"]}
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
               chips={["Python", "ROS", "Genetic Algorithms"]}
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
               href="/resume"
               target="_blank"
               rel="noreferrer noopener"
               className="link"
            >
               Check out my full Resume
               <IconExternalLink className="externalLinkIcon" stroke={2} />
            </Link>
         </Box>
      </Container>
   );
};

export default ExperienceSection;
