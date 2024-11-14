import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import "../global.css";

export default function App({ Component, pageProps }: any) {
   return (
      <MantineProvider theme={theme} defaultColorScheme="dark">
         <Component {...pageProps} />
      </MantineProvider>
   );
}
