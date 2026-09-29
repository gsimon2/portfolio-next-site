import { NextRouter, useRouter } from "next/router";
import { render, screen, within } from "@test-utils";
import { projects } from "../../content/projects";
import ProjectListPage from "../../pages/projectList";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));

describe("Project list page", () => {
   beforeEach(() => {
      jest
         .mocked(useRouter)
         .mockReturnValue({ route: "/projectList" } as NextRouter);
   });

   it("renders the navbar, breadcrumbs, and heading", () => {
      render(<ProjectListPage />);

      expect(screen.getByRole("navigation")).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
         "href",
         "/#projects"
      );
      expect(
         screen.getByRole("heading", { level: 2, name: "All Projects" })
      ).toBeInTheDocument();
   });

   it("renders a table row for every project", () => {
      render(<ProjectListPage />);

      const table = screen.getByRole("table", { name: "My recent projects" });
      const [, ...rows] = within(table).getAllByRole("row");

      expect(rows).toHaveLength(projects.length);
      rows.forEach((row, index) => {
         const { title, year, link, badges } = projects[index];
         const cells = within(row);

         expect(cells.getByText(title)).toBeInTheDocument();
         expect(cells.getByText(year)).toBeInTheDocument();
         expect(cells.getByText(badges[0])).toBeInTheDocument();
         expect(cells.getByRole("link", { name: "View" })).toHaveAttribute(
            "href",
            link
         );
      });
   });
});
