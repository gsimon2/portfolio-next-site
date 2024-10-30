import { Badge, Box, Flex, Group, Stack, Text } from "@mantine/core";
import React from "react";
import classes from "./ExperienceSection.module.css";
import Link from "next/link";
import { IconExternalLink, IconLink } from "@tabler/icons-react";
import classNames from "classnames";

const Experience: React.FC<IExperienceProps> = ({
   date,
   title,
   pastTitles,
   company,
   href,
   children,
   linkedProducts,
   chips,
}) => {
   return (
      <Flex className={classes.experienceContainer}>
         <Box className={classes.date}>{date}</Box>
         <Box>
            <Stack>
               <h3 className={classes.jobTitleHeader}>
                  <Link
                     className={classNames(classes.jobTitleText, "link")}
                     href={href}
                     target="_blank"
                     rel="noreferrer noopener"
                  >
                     {`${title} - ${company}`}
                     <IconExternalLink
                        className="externalLinkIcon"
                        stroke={2}
                     />
                  </Link>
               </h3>
               {pastTitles?.map((pastTitle) => (
                  <Text span key={pastTitle} className={classes.pastJobTitle}>
                     {pastTitle}
                  </Text>
               ))}
               <Box className={classes.childrenContainer}>{children}</Box>
               {chips?.length && (
                  <Group>
                     {chips.map((chip) => (
                        <Badge
                           key={chip}
                           className={classes.chip}
                           variant="light"
                        >
                           {chip}
                        </Badge>
                     ))}
                  </Group>
               )}
               {/* linked products */}
               {linkedProducts?.length && (
                  <Group>
                     {linkedProducts.map((linkedProduct) => (
                        <Link
                           key={linkedProduct.name}
                           href={linkedProduct.href}
                           target="_blank"
                           rel="noreferrer noopener"
                           className={classNames("link", classes.linkedProduct)}
                        >
                           {linkedProduct.name}
                           <IconLink stroke={2} />
                        </Link>
                     ))}
                  </Group>
               )}
            </Stack>
         </Box>
      </Flex>
   );
};

interface ILinkedProduct {
   name: string;
   href: string;
}

export interface IExperienceProps {
   date: string;
   title: string;
   pastTitles?: string[];
   company: string;
   children: React.ReactNode;
   href: string;
   linkedProducts?: ILinkedProduct[];
   chips?: string[];
}

export default Experience;
