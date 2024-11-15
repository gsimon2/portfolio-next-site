"use client";
import { Anchor, Button, Group, Menu } from "@mantine/core";
import React, { useState } from "react";
import classes from "./Navbar.module.css";
import classNames from "classnames";
import { ElementIds, sections } from "../../constants";
import { useScrollspy } from "../../utils/hooks/useScrollSpy";
import { projects } from "../../content/projects";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
   const router = useRouter();
   const [elements, setElements] = useState<Element[]>([]);
   const currentActiveIndex = useScrollspy(elements, {
      offsetYPercent: 50,
   });

   React.useEffect(() => {
      const widgetElements = sections.map((section) =>
         document.querySelector(`#${section.id}`)
      );

      setElements(widgetElements as Element[]);
   }, []);

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      if ((router.route === "/")) {
         e.preventDefault();
         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <nav className={classNames(".navbar", classes.navbar)}>
         <Group justify="flex-end" className={classes.group}>
            <Anchor
               href={`/#${ElementIds.Hero}`}
               onClick={(e) => handleClick(e, ElementIds.Hero)}
               className={classNames(classes.anchor, {
                  [classes.achorActive]: currentActiveIndex === 0,
               })}
            >
               <span>Home</span>
            </Anchor>
            <Anchor
               href={`/#${ElementIds.About}`}
               onClick={(e) => handleClick(e, ElementIds.About)}
               className={classNames(classes.anchor, {
                  [classes.achorActive]: currentActiveIndex === 1,
               })}
            >
               <span>About</span>
            </Anchor>
            <Anchor
               href={`/#${ElementIds.Experience}`}
               onClick={(e) => handleClick(e, ElementIds.Experience)}
               className={classNames(classes.anchor, {
                  [classes.achorActive]: currentActiveIndex === 2,
               })}
            >
               <span>Experience</span>
            </Anchor>
            <Menu>
               <Menu.Target>
                  <Button
                     variant="transparent"
                     radius={0}
                     className={classNames(classes.anchor, {
                        [classes.achorActive]: currentActiveIndex === 3,
                     })}
                  >
                     Projects
                  </Button>
               </Menu.Target>
               <Menu.Dropdown>
                  <Menu.Item
                     component="a"
                     href={`#${ElementIds.Projects}`}
                     onClick={(e) => handleClick(e, ElementIds.Projects)}
                  >
                     Top Projects
                  </Menu.Item>
                  <Menu.Item component="a" href="/projectList">
                     All Projects
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Label>Individual Projects</Menu.Label>
                  {projects.map((project) => (
                     <Menu.Item
                        component="a"
                        href={project.link}
                        key={project.id}
                     >
                        {project.title}
                     </Menu.Item>
                  ))}
               </Menu.Dropdown>
            </Menu>
            <Anchor
               href={`/#${ElementIds.Contact}`}
               onClick={(e) => handleClick(e, ElementIds.Contact)}
               className={classNames(classes.anchor, {
                  [classes.achorActive]: currentActiveIndex === 4,
               })}
            >
               <span>Contact</span>
            </Anchor>
         </Group>
      </nav>
   );
};

export default Navbar;
