import { render, screen } from "@test-utils";
import { projects } from "../../../content/projects";
import ProjectSection from "./ProjectSection";

describe("ProjectSection", () => {
   it("renders the section heading", () => {
      render(<ProjectSection />);

      expect(
         screen.getByRole("heading", { level: 2, name: "Top Projects" })
      ).toBeInTheDocument();
   });

   it("shows a card for each top project only", () => {
      render(<ProjectSection />);

      const topProjects = projects.filter((project) => project.isTopProject);
      const otherProjects = projects.filter((project) => !project.isTopProject);
      const cardLinks = screen
         .getAllByRole("link")
         .filter((link) => link.getAttribute("href")?.startsWith("/projects/"));

      expect(cardLinks).toHaveLength(topProjects.length);
      for (const { title, link } of topProjects) {
         const heading = screen.getByRole("heading", { level: 3, name: title });
         expect(heading.closest("a")).toHaveAttribute("href", link);
      }
      for (const { title } of otherProjects) {
         expect(
            screen.queryByRole("heading", { level: 3, name: title })
         ).not.toBeInTheDocument();
      }
   });

   it("links to the full project list", () => {
      render(<ProjectSection />);

      expect(
         screen.getByRole("link", { name: "Full project list" })
      ).toHaveAttribute("href", "/projectList");
   });
});
