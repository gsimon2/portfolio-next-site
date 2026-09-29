import { randomIntFromInterval } from "./randomInt";

describe("randomIntFromInterval", () => {
   it.each([0, 0.5, 0.9999])(
      "maps Math.random() = %p to an integer within the inclusive range",
      (random) => {
         jest.spyOn(Math, "random").mockReturnValue(random);

         const value = randomIntFromInterval(5, 10);

         expect(Number.isInteger(value)).toBe(true);
         expect(value).toBeGreaterThanOrEqual(5);
         expect(value).toBeLessThanOrEqual(10);
      }
   );

   it("can return both the min and the max", () => {
      jest
         .spyOn(Math, "random")
         .mockReturnValueOnce(0)
         .mockReturnValueOnce(0.9999);

      expect(randomIntFromInterval(25, 500)).toBe(25);
      expect(randomIntFromInterval(25, 500)).toBe(500);
   });
});
