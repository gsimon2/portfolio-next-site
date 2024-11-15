import {
   Card,
   Image as MantineImage,
   Title,
   Box,
   Text,
} from "@mantine/core";
import React from "react";
import classes from "./ProjectSection.module.css";
import BadgeDisplay from "../../Shared/BadgeDisplay/BadgeDisplay";
import { IProject } from '../../../content/projects';

const ProjectCard: React.FC<IProject> = ({
   title,
   images,
   badges,
   body,
   summary,
   link,
}) => {
   return (
      <Card
         className={classes.card}
         withBorder
         component="a"
         href={link}
      >
         <Card.Section>
            {images?.length && (
               <MantineImage src={images[0]} alt="Project image" />
            )}
         </Card.Section>

         <Title order={3} className={classes.projectTitleText}>
            {title}
         </Title>

         {badges?.length && (
            <Box my="sm">
               <BadgeDisplay badges={badges} />
            </Box>
         )}

         <Text lineClamp={3} component='div'>{summary ?? body}</Text>
      </Card>
   );
};

export default ProjectCard;
