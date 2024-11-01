import { Group, Text } from "@mantine/core";
import React from "react";
import Link from "next/link";
import classNames from "classnames";
import classes from "./LinkGroup.module.css";
import { IconLink } from "@tabler/icons-react";

export interface ILinkedItem {
   name: string;
   href: string;
}

const LinkGroup: React.FC<ILinkGroupProps> = ({ groupText, linkedItems }) => {
   return (
      <Group>
         {!!groupText && <Text>Key products:</Text>}
         {linkedItems.map((linkedItem) => (
            <Link
               key={linkedItem.name}
               href={linkedItem.href}
               target="_blank"
               rel="noreferrer noopener"
               className={classNames("link", classes.linkedItem)}
            >
               {linkedItem.name}
               <IconLink stroke={2} />
            </Link>
         ))}
      </Group>
   );
};

export interface ILinkGroupProps {
   groupText?: string;
   linkedItems: ILinkedItem[];
}

export default LinkGroup;
