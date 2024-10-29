import { Center, Container, SimpleGrid, Space, Text } from "@mantine/core";
import React from "react";
import classes from "./AboutSection.module.css";
import SkillsDisplay from './SkillsDisplay';
import { ElementIds } from '../../constants';

const AboutSection: React.FC = () => {
   return (
      <Container fluid id={ElementIds.About} className={classes.sectionContainer}>
         <h2>About Me</h2>
         <SimpleGrid cols={{ base: 1, sm: 2 }} className={classes.grid}>
            <Center className={classes.textContainer}>
               <Text>
                  Hey, I&apos;m Glen! Currently I am working as a Cloud Software
                  Engineer at Indeed. I really enjoy creating new web
                  applications and expanding current ones to make our customers’
                  lives a little easier. I find that taking even a small idea
                  and bringing it to fruition is very exciting and allows me to
                  be passionate about my work. My goal is to be able to chase
                  this passion with more significant and impactful projects
                  until I can help provide millions of people with something
                  that they truly enjoy using.
               </Text>
               <Space h="lg" />
               <Text>
                  I live in Portland, Michigan with my beautiful fiancé Mae and
                  our pupper Loki. In my spare time, I enjoy hiking, kayaking,
                  and playing sports. When I am not outside, you can generally
                  find me on the computer programming small projects, prepping
                  role-playing adventures for my friends, or playing video
                  games.
               </Text>
               <Space h="lg" />
            </Center>
            <Center>
              <SkillsDisplay />
            </Center>
         </SimpleGrid>
      </Container>
   );
};

export default AboutSection;
