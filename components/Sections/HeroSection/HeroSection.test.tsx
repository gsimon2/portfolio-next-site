import { render, screen } from "@test-utils";
import { ElementIds } from "../../../constants";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
   it("renders the greeting and tagline", () => {
      render(<HeroSection />);

      expect(
         screen.getByRole("heading", { name: "Hey, I'm Glen!" })
      ).toBeInTheDocument();
      expect(
         screen.getByRole("heading", { name: "I do cool things with code." })
      ).toBeInTheDocument();
      expect(
         screen.getByRole("img", { name: "avatar of Glen Simon" })
      ).toBeInTheDocument();
   });

   it("smooth scrolls to the About section when the call to action is clicked", async () => {
      const aboutSection = document.createElement("section");
      aboutSection.id = ElementIds.About;
      document.body.appendChild(aboutSection);
      const scrollIntoView = jest.spyOn(aboutSection, "scrollIntoView");

      const { user } = render(<HeroSection />);
      await user.click(
         screen.getByRole("button", { name: "Learn more about me!" })
      );

      expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
      aboutSection.remove();
   });
});
