"use client";
import { Anchor, Group } from "@mantine/core";
import React, { useState } from "react";
import classes from "./Navbar.module.css";
import classNames from "classnames";
import { sections } from "../../constants";
import { useScrollspy } from "../../utils/hooks/useScrollSpy";

const Navbar: React.FC = () => {
   const [elements, setElements] = useState<Element[]>([]);
   const currentActiveIndex = useScrollspy(elements, {
      offsetYPercent: 30,
   });

   React.useEffect(() => {
      const widgetElements = sections.map((section) =>
         document.querySelector(`${section.id}`)
      );

      setElements(widgetElements as Element[]);
   }, []);


   return (
      <nav className={classNames(".navbar", classes.navbar)}>
         <Group justify="flex-end" className={classes.group} component={"ul"}>
            {sections.map((section, index) => (
               <li key={section.name}>
                  <Anchor
                     href={section.id}
                     className={classNames(classes.anchor, {
                        [classes.achorActive]: currentActiveIndex === index,
                     })}
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
