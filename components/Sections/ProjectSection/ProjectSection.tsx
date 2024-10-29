import { Container } from "@mantine/core";
import React from "react";
import classes from "./ProjectSection.module.css";
import { ElementIds } from "../../../constants";

const ProjectSection: React.FC = () => {
   return (
      <Container
         fluid
         className="section-container"
         h={1000}
         id={ElementIds.Projects}
      >
         <h2>Projects</h2>
      </Container>
   );
};

export default ProjectSection;
