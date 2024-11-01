import { Group, Image as MantineImage } from '@mantine/core';
import React from 'react';

const ShieldGroup: React.FC<IShieldGroupProps> = ({shields}) => {

   return (
      <Group>
         {shields.map((shield) => (
            <MantineImage
               key={shield.alt}
               h={18}
               src={shield.src}
               alt={shield.alt}
            />
         ))}
   </Group>
   );
};

export interface IShield {
   src: string;
   alt: string;
}

export interface IShieldGroupProps {
   shields: IShield[];
}

export default ShieldGroup;