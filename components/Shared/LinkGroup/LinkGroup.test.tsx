import { render, screen } from "@test-utils";
import LinkGroup from "./LinkGroup";

const linkedItems = [
   { name: "GitHub", href: "https://github.com/gsimon2" },
   { name: "Website", href: "https://example.com" },
];

describe("LinkGroup", () => {
   it("renders each item as an external link", () => {
      render(<LinkGroup linkedItems={linkedItems} />);

      for (const { name, href } of linkedItems) {
         const link = screen.getByRole("link", { name });
         expect(link).toHaveAttribute("href", href);
         expect(link).toHaveAttribute("target", "_blank");
         expect(link).toHaveAttribute("rel", "noreferrer noopener");
      }
   });

   it("shows the group label when groupText is provided", () => {
      render(
         <LinkGroup groupText="Key products:" linkedItems={linkedItems} />
      );

      expect(screen.getByText("Key products:")).toBeInTheDocument();
   });

   it("omits the group label when groupText is not provided", () => {
      render(<LinkGroup linkedItems={linkedItems} />);

      expect(screen.queryByText("Key products:")).not.toBeInTheDocument();
   });
});
