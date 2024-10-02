"use client";
import { useEffect, useMemo, useState } from "react";
import { sections } from '../constants';

export const useGetInViewSection = () => {
   const [section, setSection] = useState<string>("");

   const options = useMemo(
      () => ({
         root: null,
         rootMargin: "0px",
         threshold: 0.75,
      }),
      []
   );

   useEffect(() => {
      for (let section of sections) {
         const observer = new IntersectionObserver((entries) => {
            for (let entry of entries) {
               if (entry.isIntersecting) {
                  setSection(section.id);
               }
            }
         }, options);

         try {
            observer.observe(document.querySelector(section.id) as Element);
         } catch (e) {}
      }
   }, [options]);

   return section;
};
