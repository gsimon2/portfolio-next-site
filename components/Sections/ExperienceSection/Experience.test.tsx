import { render, screen } from "@test-utils";
import Experience, { IExperienceProps } from "./Experience";

const renderExperience = (props: Partial<IExperienceProps> = {}) =>
   render(
      <Experience
         date="2020 - Present"
         title="Software Engineer"
         company="Acme"
         href="https://acme.example.com"
         {...props}
      >
         {props.children ?? <p>Built great things.</p>}
      </Experience>
   );

describe("Experience", () => {
   it("renders the date, description, and a heading linking to the company", () => {
      renderExperience();

      expect(screen.getByText("2020 - Present")).toBeInTheDocument();
      expect(screen.getByText("Built great things.")).toBeInTheDocument();

      const heading = screen.getByRole("heading", {
         level: 3,
         name: "Software Engineer - Acme",
      });
      expect(heading).toBeInTheDocument();

      const link = screen.getByRole("link", { name: "Software Engineer - Acme" });
      expect(link).toHaveAttribute("href", "https://acme.example.com");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer noopener");
   });

   it("lists past titles", () => {
      renderExperience({ pastTitles: ["Junior Engineer", "Intern"] });

      expect(screen.getByText("Junior Engineer")).toBeInTheDocument();
      expect(screen.getByText("Intern")).toBeInTheDocument();
   });

   it("renders badges when provided", () => {
      renderExperience({ badges: ["React", "GraphQL"] });

      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("GraphQL")).toBeInTheDocument();
   });

   it("renders linked products when provided", () => {
      renderExperience({
         linkedProducts: [
            { name: "Screencast", href: "https://example.com/screencast" },
         ],
      });

      expect(screen.getByText("Key products:")).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Screencast" })).toHaveAttribute(
         "href",
         "https://example.com/screencast"
      );
   });

   it("omits linked products when none are provided", () => {
      renderExperience();

      expect(screen.queryByText("Key products:")).not.toBeInTheDocument();
   });
});
