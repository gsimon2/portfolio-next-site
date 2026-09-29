import { render, screen } from "@test-utils";
import AboutSection from "./AboutSection";

const skills = [
   "Typescript",
   "CSS",
   "React",
   "HTML",
   "JavaScript",
   "Git",
   "Storybook",
   "NextJS",
   "Vercel",
   "Datadog",
];

describe("AboutSection", () => {
   it("renders the heading and bio", () => {
      render(<AboutSection />);

      expect(
         screen.getByRole("heading", { level: 2, name: "About Me" })
      ).toBeInTheDocument();
      expect(screen.getByText(/Hey, I'm Glen!/)).toBeInTheDocument();
      expect(screen.getByText(/Brazilian Jiu-Jitsu/)).toBeInTheDocument();
   });

   it("displays every skill with its icon", () => {
      render(<AboutSection />);

      for (const skill of skills) {
         expect(screen.getByText(skill)).toBeInTheDocument();
         expect(
            screen.getByRole("img", { name: `${skill} icon` })
         ).toBeInTheDocument();
      }
   });
});
