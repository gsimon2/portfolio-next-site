"use client";
import { Anchor, Group } from "@mantine/core";
import React from "react";
import classes from "./Navbar.module.css";
import { useGetInViewSection } from "../../utils/useGetInViewSection";
import classNames from "classnames";
import { sections } from "../../constants";

const Navbar: React.FC = () => {
   const sectionInView = useGetInViewSection();

   const getAnchorClassName = (section: string) => {
      return classNames(classes.anchor, {
         [classes.achorActive]: sectionInView === section,
      });
   };

   return (
      <nav className={classNames(".navbar", classes.navbar)}>
         <Group justify="flex-end" className={classes.group} component={"ul"}>
            {sections.map((section) => (
               <li key={section.name}>
                  <Anchor
                     href={section.id}
                     className={getAnchorClassName(section.id)}
                  >
                     <span>{section.name}</span>
                  </Anchor>
               </li>
            ))}
         </Group>
      </nav>
   );
};

export default Navbar;
