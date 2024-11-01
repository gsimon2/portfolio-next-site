import React from "react";
import { Button, Center, Container, SimpleGrid, Text } from "@mantine/core";
import classes from "./HeroSection.module.css";
import HeroAvatar from "./HeroAvatar";
import { ElementIds } from "../../../constants";

const HeroSection: React.FC = () => {
   return (
      <Container fluid className={classes.container} id={ElementIds.Hero}>
         <SimpleGrid cols={{ base: 1, sm: 2 }} className={classes.grid}>
            <Center className={classes.imageCenter}>
               <div className={classes.imageContainer}>
                  <HeroAvatar />
               </div>
            </Center>
            <Center className={classes.heroTextContainer}>
               <h2>Hey, I&apos;m Glen!</h2>
               <h3>I do cool things with code.</h3>
            </Center>
         </SimpleGrid>
         <Center className={classes.buttonContainer}>
            <Button
               size="xl"
               onClick={() => {
                  document
                     .getElementById(ElementIds.About)
                     ?.scrollIntoView({ behavior: "smooth" });
               }}
            >
               Learn more about me!
            </Button>
         </Center>
      </Container>
   );
};

export default HeroSection;
