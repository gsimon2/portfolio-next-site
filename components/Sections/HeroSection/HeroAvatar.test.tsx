import { act, render, screen } from "@test-utils";
import HeroAvatar from "./HeroAvatar";

describe("HeroAvatar", () => {
   beforeEach(() => jest.useFakeTimers());
   afterEach(() => jest.useRealTimers());

   it("starts with the neutral avatar and switches to the happy avatar", () => {
      render(<HeroAvatar />);

      const avatar = screen.getByRole("img", { name: "avatar of Glen Simon" });
      expect(avatar).toHaveAttribute("src", "/assets/avatar.svg");

      act(() => jest.advanceTimersByTime(1649));
      expect(avatar).toHaveAttribute("src", "/assets/avatar.svg");

      act(() => jest.advanceTimersByTime(1));
      expect(avatar).toHaveAttribute("src", "/assets/avatar-happy.svg");
   });
});
