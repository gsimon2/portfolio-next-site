import { Anchor, Group } from "@mantine/core";
import React from "react";
import classes from "./Navbar.module.css";

const Navbar: React.FC = () => {
   return (
      <nav className={classes.navbar}>
         <Group justify='flex-end' className={classes.group}>
            <Anchor href="#hero">Home</Anchor>
            <Anchor href="#About">About</Anchor>
            <Anchor href="#Projects">Projects</Anchor>
            <Anchor href="#Contact">Contact</Anchor>
         </Group>
      </nav>
   );
};

export default Navbar;
