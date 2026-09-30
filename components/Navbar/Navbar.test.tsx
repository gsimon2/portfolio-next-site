import { NextRouter, useRouter } from "next/router";
import {
   fireEvent,
   installMockIntersectionObserver,
   render,
   screen,
   scrollIntoViewport,
} from "@test-utils";
import { ElementIds, sections } from "../../constants";
import { projects } from "../../content/projects";
import Navbar from "./Navbar";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));

installMockIntersectionObserver();

const mockRoute = (route: string) =>
   jest.mocked(useRouter).mockReturnValue({ route } as NextRouter);

const renderWithSections = () =>
   render(
      <>
         <Navbar />
         {sections.map((section) => (
            <section key={section.id} id={section.id} />
         ))}
      </>
   );

const getSection = (id: ElementIds) => document.getElementById(id)!;

describe("Navbar", () => {
   beforeEach(() => mockRoute("/"));

   it.each([
      ["Home", `/#${ElementIds.Hero}`],
      ["About", `/#${ElementIds.About}`],
      ["Experience", `/#${ElementIds.Experience}`],
      ["Contact", `/#${ElementIds.Contact}`],
   ])("links %s to its section", (name, href) => {
      renderWithSections();

      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
   });

   describe("on the home page", () => {
      it("smooth scrolls to the section instead of navigating", async () => {
         const { user } = renderWithSections();
         const scrollIntoView = jest.spyOn(
            getSection(ElementIds.Experience),
            "scrollIntoView"
         );

         await user.click(screen.getByRole("link", { name: "Experience" }));

         expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
      });

      it("prevents the default link navigation", () => {
         renderWithSections();

         const allowedNavigation = fireEvent.click(
            screen.getByRole("link", { name: "About" })
         );

         expect(allowedNavigation).toBe(false);
      });
   });

   describe("on other pages", () => {
      beforeEach(() => mockRoute("/projectList"));

      it("lets the link navigate back to the home page section", () => {
         renderWithSections();
         const scrollIntoView = jest.spyOn(
            getSection(ElementIds.About),
            "scrollIntoView"
         );

         const allowedNavigation = fireEvent.click(
            screen.getByRole("link", { name: "About" })
         );

         expect(allowedNavigation).toBe(true);
         expect(scrollIntoView).not.toHaveBeenCalled();
      });
   });

   describe("active section highlighting", () => {
      it("highlights the link for the section currently in view", () => {
         renderWithSections();

         scrollIntoViewport(getSection(ElementIds.About));

         expect(screen.getByRole("link", { name: "About" })).toHaveClass(
            "achorActive"
         );
         expect(screen.getByRole("link", { name: "Home" })).not.toHaveClass(
            "achorActive"
         );
      });

      it("highlights the Projects menu while the projects section is in view", () => {
         renderWithSections();

         scrollIntoViewport(getSection(ElementIds.Projects));

         expect(screen.getByRole("button", { name: "Projects" })).toHaveClass(
            "achorActive"
         );
      });

      it("highlights the Projects menu on the project list page", () => {
         mockRoute("/projectList");
         render(
            <>
               <Navbar />
               <div id={ElementIds.projectListPage} />
            </>
         );

         scrollIntoViewport(getSection(ElementIds.projectListPage));

         expect(screen.getByRole("button", { name: "Projects" })).toHaveClass(
            "achorActive"
         );
      });
   });

   describe("projects menu", () => {
      it("is closed by default", () => {
         renderWithSections();

         expect(screen.queryByRole("menu")).not.toBeInTheDocument();
      });

      it("lists top projects, all projects, and every individual project", async () => {
         const { user } = renderWithSections();

         await user.click(screen.getByRole("button", { name: "Projects" }));

         expect(
            await screen.findByRole("menuitem", { name: "Top Projects" })
         ).toHaveAttribute("href", `/#${ElementIds.Projects}`);
         expect(
            screen.getByRole("menuitem", { name: "All Projects" })
         ).toHaveAttribute("href", "/projectList");
         for (const { title, link } of projects) {
            expect(
               screen.getByRole("menuitem", { name: title })
            ).toHaveAttribute("href", link);
         }
      });

      it("smooth scrolls to top projects when on the home page", async () => {
         const { user } = renderWithSections();
         const scrollIntoView = jest.spyOn(
            getSection(ElementIds.Projects),
            "scrollIntoView"
         );

         await user.click(screen.getByRole("button", { name: "Projects" }));
         await user.click(
            await screen.findByRole("menuitem", { name: "Top Projects" })
         );

         expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
      });
   });
});
