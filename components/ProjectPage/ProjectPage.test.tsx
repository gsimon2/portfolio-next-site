import { render, screen } from "@test-utils";
import { IProject } from "../../content/projects";
import ProjectPage from "./ProjectPage";

const project: IProject = {
   id: "test_project",
   year: "2021 - Now",
   title: "Test Project",
   link: "/projects/test_project",
   body: <p>The full project description.</p>,
   extras: <a href="https://github.com/example">GitHub</a>,
   badges: ["React", "TypeScript"],
   images: ["/first.png", "/second.png", "/third.png"],
};

const getMainImage = () =>
   screen.getAllByRole("img", { name: "Project image" })[0];

const getThumbnails = () =>
   screen.getAllByRole("img", { name: "Project image" }).slice(1);

describe("ProjectPage", () => {
   it("renders the project details", () => {
      render(<ProjectPage {...project} />);

      expect(
         screen.getByRole("heading", { level: 1, name: "Test Project" })
      ).toBeInTheDocument();
      expect(screen.getByText("2021 - Now")).toBeInTheDocument();
      expect(
         screen.getByText("The full project description.")
      ).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
   });

   it("shows the first image as the main image with a thumbnail for each image", () => {
      render(<ProjectPage {...project} />);

      expect(getMainImage()).toHaveAttribute("src", "/first.png");
      expect(getThumbnails().map((img) => img.getAttribute("src"))).toEqual(
         project.images
      );
   });

   it("swaps the main image when a thumbnail is clicked", async () => {
      const { user } = render(<ProjectPage {...project} />);

      await user.click(getThumbnails()[2]);
      expect(getMainImage()).toHaveAttribute("src", "/third.png");

      await user.click(getThumbnails()[1]);
      expect(getMainImage()).toHaveAttribute("src", "/second.png");
   });

   it("omits thumbnails when there is only one image", () => {
      render(<ProjectPage {...project} images={["/only.png"]} />);

      const images = screen.getAllByRole("img", { name: "Project image" });
      expect(images).toHaveLength(1);
      expect(images[0]).toHaveAttribute("src", "/only.png");
   });

   it("renders no images when the project has none", () => {
      render(<ProjectPage {...project} images={[]} />);

      expect(
         screen.queryByRole("img", { name: "Project image" })
      ).not.toBeInTheDocument();
   });
});
