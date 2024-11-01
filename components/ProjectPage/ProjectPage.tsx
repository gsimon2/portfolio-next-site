import React, { useState } from "react";
import {
   Box,
   Image as MantineImage,
   Paper,
   SimpleGrid,
   Title,
   Text,
} from "@mantine/core";
import BadgeDisplay from "../Shared/BadgeDisplay/BadgeDisplay";
import { IProject } from "../../content/projects";

const ProjectPage: React.FC<IProject> = ({
   images,
   title,
   body,
   extras,
   badges,
   year,
}) => {
   const [mainImageIndex, setMainImageIndex] = useState(0);

   return (
      <Paper
         withBorder
         p={{ base: "md", md: "xl" }}
         mt="lg"
      >
         <Title order={1} py="sm">
            {title}
         </Title>
         {!!images?.length && (
            <MantineImage src={images[mainImageIndex]} alt="Project image" />
         )}
         {images && images?.length > 1 && (
            <SimpleGrid cols={3}>
               {images.map((image, index) => (
                  <MantineImage
                     src={image}
                     key={image}
                     radius="sm"
                     alt="Project image"
                     style={{ cursor: "pointer" }}
                     onClick={() => setMainImageIndex(index)}
                  />
               ))}
            </SimpleGrid>
         )}
         <Text my="sm">{year}</Text>
         {extras}
         <Box my="sm">{body}</Box>
         {badges?.length && (
            <Box my="sm">
               <BadgeDisplay badges={badges} />
            </Box>
         )}
      </Paper>
   );
};

export default ProjectPage;
