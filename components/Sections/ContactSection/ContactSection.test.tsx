import { Notifications } from "@mantine/notifications";
import { render, screen } from "@test-utils";
import ContactSection from "./ContactSection";

const renderContactSection = () =>
   render(
      <>
         <Notifications />
         <ContactSection />
      </>
   );

describe("ContactSection", () => {
   it("renders the section heading", () => {
      renderContactSection();

      expect(
         screen.getByRole("heading", { level: 2, name: "Contact" })
      ).toBeInTheDocument();
   });

   it.each([
      ["Email", "mailto:glen.a.simon@gmail.com"],
      ["GitHub", "https://github.com/gsimon2"],
      ["LinkedIn", "https://www.linkedin.com/in/glen-a-simon/"],
   ])("links to %s in a new tab", (name, href) => {
      renderContactSection();

      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
   });

   it("copies the email address and confirms it when the email link is clicked", async () => {
      const { user } = renderContactSection();

      await user.click(screen.getByRole("link", { name: "Email" }));

      await expect(navigator.clipboard.readText()).resolves.toBe(
         "glen.a.simon@gmail.com"
      );
      expect(await screen.findByText("Email Copied")).toBeInTheDocument();
      expect(screen.getByText("Email copied to clipboard")).toBeInTheDocument();
   });
});
