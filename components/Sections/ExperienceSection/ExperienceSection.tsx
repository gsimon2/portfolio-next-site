import { Container } from "@mantine/core";
import React from "react";
import { ElementIds } from "../../../constants";
import classes from "./ExperienceSection.module.css";

const ExperienceSection: React.FC = () => {
   return (
      <Container
         fluid
         className="section-container"
         h={1000}
         id={ElementIds.Experience}
      >
         <h2>Experience</h2>
      </Container>
   );
};

export default ExperienceSection;
