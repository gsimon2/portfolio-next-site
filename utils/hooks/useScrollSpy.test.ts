import {
   act,
   installMockIntersectionObserver,
   MockIntersectionObserver,
   renderHook,
} from "@test-utils";
import { useScrollspy } from "./useScrollSpy";

installMockIntersectionObserver();

const createElements = (count: number) =>
   Array.from({ length: count }, () => document.createElement("section"));

const latestObserver = () => MockIntersectionObserver.instances.at(-1)!;

describe("useScrollspy", () => {
   it("returns -1 before anything intersects", () => {
      const { result } = renderHook(() => useScrollspy(createElements(3)));

      expect(result.current).toBe(-1);
   });

   it("observes every provided element", () => {
      const elements = createElements(3);

      renderHook(() => useScrollspy(elements));

      expect([...latestObserver().observed]).toEqual(elements);
   });

   it("skips missing elements", () => {
      const [first] = createElements(1);

      renderHook(() =>
         useScrollspy([first, null as unknown as Element])
      );

      expect([...latestObserver().observed]).toEqual([first]);
   });

   it("applies offsetYPercent as a bottom root margin", () => {
      renderHook(() =>
         useScrollspy(createElements(1), { offsetYPercent: 50 })
      );

      expect(latestObserver().rootMargin).toBe("0px 0px -50% 0px");
   });

   it("returns the index of the intersecting element", () => {
      const elements = createElements(3);
      const { result } = renderHook(() => useScrollspy(elements));

      act(() =>
         latestObserver().trigger([
            { target: elements[1], intersectionRatio: 1 },
         ])
      );

      expect(result.current).toBe(1);
   });

   it("prefers the last intersecting entry when several intersect", () => {
      const elements = createElements(3);
      const { result } = renderHook(() => useScrollspy(elements));

      act(() =>
         latestObserver().trigger([
            { target: elements[0], intersectionRatio: 0.5 },
            { target: elements[2], intersectionRatio: 0.2 },
            { target: elements[1], intersectionRatio: 0 },
         ])
      );

      expect(result.current).toBe(2);
   });

   it("resets to -1 when no entry is intersecting", () => {
      const elements = createElements(2);
      const { result } = renderHook(() => useScrollspy(elements));

      act(() =>
         latestObserver().trigger([
            { target: elements[0], intersectionRatio: 1 },
         ])
      );
      act(() =>
         latestObserver().trigger([
            { target: elements[0], intersectionRatio: 0 },
         ])
      );

      expect(result.current).toBe(-1);
   });

   it("disconnects the observer on unmount", () => {
      const { unmount } = renderHook(() => useScrollspy(createElements(1)));
      const observer = latestObserver();

      unmount();

      expect(observer.disconnected).toBe(true);
   });
});
