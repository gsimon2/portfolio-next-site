import React from "react";
import { Center, Container, SimpleGrid } from "@mantine/core";
import classes from "./HeroSection.module.css";
import HeroAvatar from "./HeroAvatar";

const HeroSection: React.FC = () => {
   return (
      <Container fluid className={classes.container} id="hero">
         <SimpleGrid cols={2} className={classes.grid}>
            <Center>
               <div className={classes.imageContainer}>
                  <HeroAvatar />
               </div>
            </Center>
            <Center>2</Center>
         </SimpleGrid>
      </Container>
   );
};

export default HeroSection;
