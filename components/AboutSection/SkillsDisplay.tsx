import React from "react";
import Skill from "./Skill";
import classes from "./AboutSection.module.css";
import { Box, Group, SimpleGrid } from "@mantine/core";
import { ElementIds } from "../../constants";

const SkillsDisplay: React.FC = () => {
   return (
      <Box id={ElementIds.skillDisplay}>
         <Group justify="center" className={classes.skillGroup}>
            <Skill
               imgSrc="/assets/skill-icons/typescript.svg"
               text="Typescript"
               appearanceDelay={25}
            />
            <Skill
               imgSrc="/assets/skill-icons/css.svg"
               text="CSS"
               appearanceDelay={125}
            />
         </Group>
         <Group justify="center" className={classes.skillGroup}>
            <Skill
               imgSrc="/assets/skill-icons/react.svg"
               text="React"
               appearanceDelay={125}
            />
            <Skill
               imgSrc="/assets/skill-icons/html5.svg"
               text="HTML"
               appearanceDelay={200}
            />
            {/* <Skill imgSrc="/assets/skill-icons/jest.svg" text="Jest" /> */}
            <Skill
               imgSrc="/assets/skill-icons/javascript.png"
               text="JavaScript"
               appearanceDelay={300}
            />
         </Group>
         <Group justify="center" className={classes.skillGroup}>
            <Skill
               imgSrc="/assets/skill-icons/git.svg"
               text="Git"
               appearanceDelay={300}
            />
            <Skill
               imgSrc="/assets/skill-icons/storybook.svg"
               text="Storybook"
               appearanceDelay={400}
            />
            <Skill
               imgSrc="/assets/skill-icons/nextjs.svg"
               text="NextJS"
               appearanceDelay={475}
            />
         </Group>
         <Group justify="center" className={classes.skillGroup}>
            <Skill
               imgSrc="/assets/skill-icons/vercel.svg"
               text="Vercel"
               appearanceDelay={400}
            />
            <Skill
               imgSrc="/assets/skill-icons/datadog.png"
               text="Datadog"
               appearanceDelay={475}
            />
         </Group>
      </Box>
   );
};

export default SkillsDisplay;
