import { Box, Flex, Stack, Text } from "@mantine/core";
import React from "react";
import classes from "./ExperienceSection.module.css";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";
import classNames from "classnames";
import BadgeDisplay from "../../Shared/BadgeDisplay/BadgeDisplay";
import LinkGroup, { ILinkedItem } from "../../Shared/LinkGroup/LinkGroup";

const Experience: React.FC<IExperienceProps> = ({
   date,
   title,
   pastTitles,
   company,
   href,
   children,
   linkedProducts,
   badges,
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
               {badges?.length && <BadgeDisplay badges={badges} />}
               {linkedProducts?.length && (
                  <LinkGroup
                     groupText="Key products:"
                     linkedItems={linkedProducts}
                  />
               )}
            </Stack>
         </Box>
      </Flex>
   );
};

export interface IExperienceProps {
   date: string;
   title: string;
   pastTitles?: string[];
   company: string;
   children: React.ReactNode;
   href: string;
   linkedProducts?: ILinkedItem[];
   badges?: string[];
}

export default Experience;
