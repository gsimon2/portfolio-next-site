import { Box, Container, SimpleGrid } from "@mantine/core";
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
               chips={["React", "TypeScript", "Node.js", "GraphQL"]}
            >
               I did some stuff I did some stuff I did some stuff I did some
               stuff I did some stuff I did some stuff I did some stuff I did
               some stuff
            </Experience>
            <Experience
               date="2022 - Present"
               title="Senior Software Engineer"
               pastTitles={["Software Engineer 2"]}
               company="Indeed"
               href="https://www.indeed.com/hire"
               chips={["React", "TypeScript", "Node.js", "GraphQL"]}
               linkedProducts={[
                  {
                     name: "Indeed",
                     href: "https://www.indeed.com/hire",
                  },
               ]}
            >
               I did some stuff I did some stuff I did some stuff I did some
               stuff I did some stuff I did some stuff I did some stuff I did
               some stuff
            </Experience>
            <Experience
               date="2022 - Present"
               title="Senior Software Engineer"
               pastTitles={["Software Engineer 2"]}
               company="Indeed"
               href="https://www.indeed.com/hire"
            >
               I did some stuff I did some stuff I did some stuff I did some
               stuff I did some stuff I did some stuff I did some stuff I did
               some stuff
            </Experience>
            <Experience
               date="2022 - Present"
               title="Senior Software Engineer"
               pastTitles={["Software Engineer 2"]}
               company="Indeed"
               href="https://www.indeed.com/hire"
            >
               I did some stuff I did Boxe stuff I did some stuff I did some
               stuff I did some stuff I did some stuff I did some stuff I did
               some stuff
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
