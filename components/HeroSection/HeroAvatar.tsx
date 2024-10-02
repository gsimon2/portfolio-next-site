'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./HeroSection.module.css";

const HeroAvatar: React.FC = () => {
   const [avatarSrc, setAvatarSrc] = useState<string>("/assets/avatar.svg");

   useEffect(() => {
      setTimeout(() => {
         setAvatarSrc("/assets/avatar-happy.svg");
      }, 1650);
   }, []);
   
   return (
      <Image
         className={classes.avatar}
         src={avatarSrc}
         alt={"avatar of Glen Simon"}
         fill
         priority
      />
   );
};

export default HeroAvatar;
