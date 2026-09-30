import { render as testingLibraryRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

type RenderOptions = Parameters<typeof testingLibraryRender>[1];

export function render(ui: React.ReactNode, options?: RenderOptions) {
   return {
      user: userEvent.setup(),
      ...testingLibraryRender(<>{ui}</>, {
         wrapper: ({ children }: { children: React.ReactNode }) => (
            <MantineProvider theme={theme} env="test">
               {children}
            </MantineProvider>
         ),
         ...options,
      }),
   };
}
