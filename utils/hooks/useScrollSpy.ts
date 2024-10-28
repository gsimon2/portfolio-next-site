import { useEffect, useRef, useState } from "react";

export const useScrollspy = (
   elements: Element[],
   options?: {
      offsetYPercent?: number;
   },
   p0?: never[]
): number => {
   const [currentIntersectingElementIndex, setCurrentIntersectingElementIndex] =
      useState(-1);

   const rootMargin = `0px 0px -${options?.offsetYPercent ?? 0}% 0px`;

   const observer = useRef<IntersectionObserver>();

   useEffect(() => {
      if (observer.current) {
         observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(
         (entries) => {
            const intersectingElement = entries.reverse().find((entry) => {
               return entry.intersectionRatio > 0;
            });

            const indexOfElementIntersecting = elements.findIndex(
               (element) => element === intersectingElement?.target
            );

            setCurrentIntersectingElementIndex(indexOfElementIntersecting);
         },
         {
            root: null,
            rootMargin,
         }
      );

      const { current: ourObserver } = observer;

      // observe all the elements passed as argument of the hook
      elements.forEach((element) =>
         element ? ourObserver.observe(element) : null
      );

      return () => ourObserver.disconnect();
   }, [elements, options, rootMargin]);

   return currentIntersectingElementIndex;
};
