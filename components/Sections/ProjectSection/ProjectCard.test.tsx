import { render, screen } from "@test-utils";
import { IProject } from "../../../content/projects";
import ProjectCard from "./ProjectCard";

const project: IProject = {
   id: "test_project",
   year: "2024",
   title: "Test Project",
   link: "/projects/test_project",
   body: <p>The full project description.</p>,
   badges: ["React", "TypeScript"],
   images: ["/first.png", "/second.png"],
};

describe("ProjectCard", () => {
   it("links the whole card to the project page", () => {
      render(<ProjectCard {...project} />);

      expect(screen.getByRole("link")).toHaveAttribute(
         "href",
         "/projects/test_project"
      );
   });

   it("renders the title, badges, and first image", () => {
      render(<ProjectCard {...project} />);

      expect(
         screen.getByRole("heading", { level: 3, name: "Test Project" })
      ).toBeInTheDocument();
      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();

      const images = screen.getAllByRole("img", { name: "Project image" });
      expect(images).toHaveLength(1);
      expect(images[0]).toHaveAttribute("src", "/first.png");
   });

   it("shows the summary instead of the body when one is provided", () => {
      render(<ProjectCard {...project} summary={<p>A short summary.</p>} />);

      expect(screen.getByText("A short summary.")).toBeInTheDocument();
      expect(
         screen.queryByText("The full project description.")
      ).not.toBeInTheDocument();
   });

   it("falls back to the body when there is no summary", () => {
      render(<ProjectCard {...project} />);

      expect(
         screen.getByText("The full project description.")
      ).toBeInTheDocument();
   });

   it("renders no image when the project has none", () => {
      render(<ProjectCard {...project} images={undefined} />);

      expect(screen.queryByRole("img")).not.toBeInTheDocument();
   });
});
