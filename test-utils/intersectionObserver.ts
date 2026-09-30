import { act } from "@testing-library/react";

export class MockIntersectionObserver implements IntersectionObserver {
   static instances: MockIntersectionObserver[] = [];

   readonly root = null;
   readonly rootMargin: string;
   readonly thresholds = [];
   readonly observed = new Set<Element>();
   disconnected = false;

   constructor(
      private readonly callback: IntersectionObserverCallback,
      options?: IntersectionObserverInit
   ) {
      this.rootMargin = options?.rootMargin ?? "";
      MockIntersectionObserver.instances.push(this);
   }

   observe(element: Element) {
      this.observed.add(element);
   }

   unobserve(element: Element) {
      this.observed.delete(element);
   }

   disconnect() {
      this.disconnected = true;
      this.observed.clear();
   }

   takeRecords() {
      return [];
   }

   trigger(entries: { target: Element; intersectionRatio: number }[]) {
      this.callback(entries as IntersectionObserverEntry[], this);
   }
}

export function installMockIntersectionObserver() {
   const original = window.IntersectionObserver;

   beforeEach(() => {
      MockIntersectionObserver.instances = [];
      window.IntersectionObserver = MockIntersectionObserver;
   });

   afterEach(() => {
      window.IntersectionObserver = original;
   });
}

/** Simulates the given element scrolling into view for every live observer watching it. */
export function scrollIntoViewport(element: Element) {
   act(() => {
      MockIntersectionObserver.instances
         .filter((observer) => observer.observed.has(element))
         .forEach((observer) =>
            observer.trigger([{ target: element, intersectionRatio: 1 }])
         );
   });
}
