import { Center, Container, SimpleGrid, Space, Text } from "@mantine/core";
import React from "react";
import classes from "./AboutSection.module.css";
import SkillsDisplay from "./SkillsDisplay";
import { ElementIds } from "../../../constants";

const AboutSection: React.FC = () => {
   return (
      <Container fluid id={ElementIds.About} className="section-container">
         <h2>About Me</h2>
         <SimpleGrid cols={{ base: 1, sm: 2 }} className={classes.grid}>
            <Center className={classes.textContainer}>
               <Text>
                  Hey, I&apos;m Glen! I&apos;m currently crafting cloud
                  solutions as a Software Engineer at Indeed, where I get to
                  build and enhance web applications that make a real difference
                  in people&apos;s lives. What drives me is taking ideas from
                  concept to reality, whether it&apos;s developing enterprise
                  solutions at work or creating custom modules for the Foundry
                  VTT community. I love seeing how my code can enhance
                  others&apos; experiences, especially when it helps fellow
                  gamers dive deeper into their adventures.
               </Text>
               <Space h="lg" />
               <Text>
                  When I&apos;m not coding, you&apos;ll find me on the mats
                  practicing Brazilian Jiu-Jitsu, hitting the trails for a run,
                  or planning my next camping expedition. I&apos;m based in
                  Portland, Michigan, where I live with my amazing wife Mae, our
                  son Wesley, and our adventurous pup Loki. My evenings are
                  often split between lifting weights, leveling up in video
                  games, and running Pathfinder campaigns for my friends. This
                  mix of physical activity, creative storytelling, and technical
                  problem-solving keeps me energized and brings fresh
                  perspectives to my development work.
               </Text>
            </Center>
            <Center>
               <SkillsDisplay />
            </Center>
         </SimpleGrid>
      </Container>
   );
};

export default AboutSection;
