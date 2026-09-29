import {
   act,
   installMockIntersectionObserver,
   render,
   screen,
   scrollIntoViewport,
} from "@test-utils";
import { ElementIds } from "../../../constants";
import Skill from "./Skill";

installMockIntersectionObserver();

const renderSkill = (appearanceDelay?: number) => {
   const utils = render(
      <div id={ElementIds.skillDisplay}>
         <Skill
            imgSrc="/assets/skill-icons/react.svg"
            text="React"
            appearanceDelay={appearanceDelay}
         />
      </div>
   );
   const skill = screen.getByText("React").parentElement!;
   const skillDisplay = document.getElementById(ElementIds.skillDisplay)!;
   return { ...utils, skill, skillDisplay };
};

describe("Skill", () => {
   beforeEach(() => jest.useFakeTimers());
   afterEach(() => jest.useRealTimers());

   it("renders the skill icon and label", () => {
      renderSkill();

      expect(screen.getByRole("img", { name: "React icon" })).toHaveAttribute(
         "src",
         "/assets/skill-icons/react.svg"
      );
      expect(screen.getByText("React")).toBeInTheDocument();
   });

   it("stays hidden until the skill display scrolls into view", () => {
      const { skill } = renderSkill(100);

      act(() => jest.advanceTimersByTime(1000));

      expect(skill).not.toHaveClass("skillAppear");
   });

   it("appears after its delay once the skill display is in view", () => {
      const { skill, skillDisplay } = renderSkill(100);

      scrollIntoViewport(skillDisplay);
      act(() => jest.advanceTimersByTime(99));
      expect(skill).not.toHaveClass("skillAppear");

      act(() => jest.advanceTimersByTime(1));
      expect(skill).toHaveClass("skillAppear");
   });

   it("falls back to a random delay when none is provided", () => {
      jest.spyOn(Math, "random").mockReturnValue(0);
      const { skill, skillDisplay } = renderSkill();

      scrollIntoViewport(skillDisplay);
      act(() => jest.advanceTimersByTime(25));

      expect(skill).toHaveClass("skillAppear");
   });
});
