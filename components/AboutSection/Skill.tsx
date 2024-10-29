"use client";
import { Box, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./AboutSection.module.css";
import { useScrollspy } from "../../utils/hooks/useScrollSpy";
import classNames from "classnames";
import { randomIntFromInterval } from "../../utils/hooks/randomInt";
import { ElementIds } from "../../constants";

const Skill: React.FC<ISkillProps> = ({ imgSrc, text, appearanceDelay }) => {
   const [elements, setElements] = useState<Element[]>([]);
   const [isInView, setIsInView] = useState(false);
   const currentActiveIndex = useScrollspy(elements, {
      offsetYPercent: 30,
   });

   useEffect(() => {
      if (currentActiveIndex === 0) {
         setTimeout(
            () => setIsInView(true),
            appearanceDelay ?? randomIntFromInterval(25, 500)
         );
      }
   }, [appearanceDelay, currentActiveIndex]);

   useEffect(() => {
      setElements([
         document.getElementById(ElementIds.skillDisplay),
      ] as Element[]);
   }, []);

   return (
      <Box
         className={classNames(classes.skill, {
            [classes.skillAppear]: isInView,
         })}
      >
         <Image
            src={imgSrc}
            alt={`${text} icon`}
            width={75}
            height={75}
            className={classes.skillIcon}
         />
         <Text className={classes.skillText}>{text}</Text>
      </Box>
   );
};

export interface ISkillProps {
   imgSrc: string;
   text: string;
   appearanceDelay?: number;
}

export default Skill;
