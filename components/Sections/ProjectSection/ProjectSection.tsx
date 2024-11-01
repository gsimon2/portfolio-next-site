import { Box, Container } from "@mantine/core";
import React from "react";
import classes from "./ProjectSection.module.css";
import { ElementIds } from "../../../constants";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../content/projects";

const ProjectSection: React.FC = () => {
   return (
      <Container fluid className="section-container" id={ElementIds.Projects}>
         <h2>Top Projects</h2>
         <Box className={classes.projectsContainer}>
            {projects
               .filter((project) => project.isTopProject)
               .map((project) => (
                  <ProjectCard key={project.title} {...project} />
               ))}
         </Box>
         <Box className={classes.linkContainer}>
            <Link href="/projectList" className="link">
               Full project list
               <IconExternalLink className="externalLinkIcon" stroke={2} />
            </Link>
         </Box>
      </Container>
   );
};

export default ProjectSection;
