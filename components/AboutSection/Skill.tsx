"use client";
import { Box, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./AboutSection.module.css";
import { useScrollspy } from "../../utils/hooks/useScrollSpy";
import classNames from "classnames";
import { randomIntFromInterval } from '../../utils/hooks/randomInt';

const Skill: React.FC<ISkillProps> = ({ imgSrc, imgAlt, text }) => {
   const [elements, setElements] = useState<Element[]>([]);
   const [isInView, setIsInView] = useState(false);
   const currentActiveIndex = useScrollspy(elements, {
      offsetYPercent: 30,
   });

   useEffect(() => {
      if (currentActiveIndex === 0) {
         setTimeout(() => setIsInView(true), randomIntFromInterval(25, 500));
      }
   }, [currentActiveIndex]);

   useEffect(() => {
      setElements([document.querySelector("#skill-grid")] as Element[]);
   }, []);

   return (
      <Box
         className={classNames(classes.skill, {
            [classes.skillAppear]: isInView,
         })}
      >
         <Image
            src={imgSrc}
            alt={imgAlt}
            width={75}
            height={75}
            className={classes.skillIcon}
         />
         <Text>{text}</Text>
      </Box>
   );
};

export interface ISkillProps {
   imgSrc: string;
   imgAlt: string;
   text: string;
}

export default Skill;
