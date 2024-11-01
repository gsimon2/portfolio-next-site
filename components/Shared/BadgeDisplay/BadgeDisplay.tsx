import { Badge, Group } from "@mantine/core";
import React from "react";
import classes from "./BadgeDisplay.module.css";

const BadgeDisplay: React.FC<IBadgeDisplayProps> = ({ badges }) => {
   return (
      <Group className={classes.badgeContainer}>
         {badges.map((badge) => (
            <Badge key={badge} className={classes.badge} variant="light">
               {badge}
            </Badge>
         ))}
      </Group>
   );
};

export interface IBadgeDisplayProps {
   badges: string[];
}

export default BadgeDisplay;
