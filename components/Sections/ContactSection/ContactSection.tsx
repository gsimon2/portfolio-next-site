import { Container } from "@mantine/core";
import React from "react";
import classes from "./ContactSection.module.css";
import { ElementIds } from "../../../constants";

const ContactSection: React.FC = () => {
   return (
      <Container
         fluid
         className="section-container"
         h={1000}
         id={ElementIds.Contact}
      >
         <h2>Contact</h2>
      </Container>
   );
};

export default ContactSection;
