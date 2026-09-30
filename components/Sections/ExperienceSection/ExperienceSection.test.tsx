import { render, screen } from "@test-utils";
import ExperienceSection from "./ExperienceSection";

describe("ExperienceSection", () => {
   it("renders the section heading", () => {
      render(<ExperienceSection />);

      expect(
         screen.getByRole("heading", { level: 2, name: "Experience" })
      ).toBeInTheDocument();
   });

   it("renders each job in the work history", () => {
      render(<ExperienceSection />);

      expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
      expect(
         screen.getByRole("link", { name: /Indeed/ })
      ).toHaveAttribute("href", "https://www.indeed.com/hire");
      expect(
         screen.getByRole("link", { name: /TechSmith/ })
      ).toHaveAttribute("href", "https://www.techsmith.com/");
      expect(
         screen.getByRole("link", { name: /Michigan State University/ })
      ).toBeInTheDocument();
   });

   it("links to the full resume", () => {
      render(<ExperienceSection />);

      expect(
         screen.getByRole("link", { name: "Check out my full resume" })
      ).toHaveAttribute(
         "href",
         "https://github.com/gsimon2/Resume2/raw/main/Resume2.pdf"
      );
   });
});
