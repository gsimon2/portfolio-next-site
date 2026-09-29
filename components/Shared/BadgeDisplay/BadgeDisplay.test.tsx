import { render, screen } from "@test-utils";
import BadgeDisplay from "./BadgeDisplay";

describe("BadgeDisplay", () => {
   it("renders a badge for each entry", () => {
      render(<BadgeDisplay badges={["React", "TypeScript", "Next.js"]} />);

      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("Next.js")).toBeInTheDocument();
   });

   it("renders nothing inside the group when there are no badges", () => {
      const { container } = render(<BadgeDisplay badges={[]} />);

      expect(container.querySelector(".mantine-Badge-root")).toBeNull();
   });
});
