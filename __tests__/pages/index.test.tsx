import { NextRouter, useRouter } from "next/router";
import { render, screen } from "@test-utils";
import { ElementIds } from "../../constants";
import IndexPage from "../../pages/index";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));

describe("Home page", () => {
   beforeEach(() => {
      jest.mocked(useRouter).mockReturnValue({ route: "/" } as NextRouter);
   });

   it("renders the navbar and every section", () => {
      const { container } = render(<IndexPage />);

      expect(screen.getByRole("navigation")).toBeInTheDocument();
      for (const id of [
         ElementIds.Hero,
         ElementIds.About,
         ElementIds.Experience,
         ElementIds.Projects,
         ElementIds.Contact,
      ]) {
         expect(container.querySelector(`#${id}`)).toBeInTheDocument();
      }
      expect(
         screen.getByRole("heading", { name: "Hey, I'm Glen!" })
      ).toBeInTheDocument();
      expect(
         screen.getByRole("heading", { level: 2, name: "Top Projects" })
      ).toBeInTheDocument();
   });
});
