import { NextRouter, useRouter } from "next/router";
import { render, screen } from "@test-utils";
import { projects } from "../../content/projects";
import ProjectIndexPage from "../../pages/projects/[projectId]";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));

const mockProjectId = (projectId: string) =>
   jest.mocked(useRouter).mockReturnValue({
      route: "/projects/[projectId]",
      query: { projectId },
   } as unknown as NextRouter);

describe("Project detail page", () => {
   it("renders the project matching the route's projectId", () => {
      const project = projects.find((p) => p.id === "lyons_bjj_website")!;
      mockProjectId(project.id);

      render(<ProjectIndexPage />);

      expect(
         screen.getByRole("heading", { level: 1, name: project.title })
      ).toBeInTheDocument();
      expect(screen.getByText(project.year)).toBeInTheDocument();
   });

   it("includes the project in the breadcrumbs", () => {
      const project = projects.find((p) => p.id === "lyons_bjj_website")!;
      mockProjectId(project.id);

      render(<ProjectIndexPage />);

      expect(
         screen.getByRole("link", { name: "Project List" })
      ).toHaveAttribute("href", "/projectList");
      const breadcrumb = screen
         .getAllByRole("link", { name: project.title })
         .find((link) => link.closest(".mantine-Breadcrumbs-root"));
      expect(breadcrumb).toHaveAttribute("href", project.link);
   });

   it("renders no project content for an unknown projectId", () => {
      mockProjectId("does_not_exist");

      render(<ProjectIndexPage />);

      expect(screen.getByRole("navigation")).toBeInTheDocument();
      expect(screen.queryByRole("heading", { level: 1 })).not.toBeInTheDocument();
   });
});
