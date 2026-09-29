import { render, screen } from "@test-utils";
import ShieldGroup from "./ShieldGroup";

describe("ShieldGroup", () => {
   it("renders an image for each shield", () => {
      const shields = [
         { src: "https://img.shields.io/downloads.svg", alt: "Total Downloads" },
         { src: "https://img.shields.io/language.svg", alt: "top language badge" },
      ];

      render(<ShieldGroup shields={shields} />);

      for (const { src, alt } of shields) {
         expect(screen.getByRole("img", { name: alt })).toHaveAttribute(
            "src",
            src
         );
      }
   });
});
