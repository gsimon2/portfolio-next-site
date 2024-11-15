import { ActionIcon, Center, Container, Group } from "@mantine/core";
import React from "react";
import classes from "./ContactSection.module.css";
import { ElementIds } from "../../../constants";
import {
   IconMail,
   IconBrandGithub,
   IconBrandLinkedin,
} from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

const ContactSection: React.FC = () => {
   const variant = "outline";
   const size = "xl";
   const contactEmail = "glen.a.simon@gmail.com";

   const handleClick = () => {
      navigator.clipboard.writeText(contactEmail);
      notifications.show({
         title: "Email Copied",
         message: "Email copied to clipboard",
      });
   };

   return (
      <Container fluid className="section-container" id={ElementIds.Contact}>
         <h2>Contact</h2>
         <Center>
            <Group>
               <ActionIcon
                  component="a"
                  target="_blank"
                  href={`mailto:${contactEmail}`}
                  onClick={handleClick}
                  variant={variant}
                  size={size}
               >
                  <IconMail />
               </ActionIcon>
               <ActionIcon
                  component="a"
                  target="_blank"
                  href="https://github.com/gsimon2"
                  variant={variant}
                  size={size}
               >
                  <IconBrandGithub />
               </ActionIcon>
               <ActionIcon
                  component="a"
                  target="_blank"
                  href="https://www.linkedin.com/in/glen-a-simon/"
                  variant={variant}
                  size={size}
               >
                  <IconBrandLinkedin />
               </ActionIcon>
            </Group>
         </Center>
      </Container>
   );
};

export default ContactSection;
