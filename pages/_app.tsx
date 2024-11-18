import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import "../global.css";
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: any) {
   return (
      <MantineProvider theme={theme} defaultColorScheme="dark">
         <Notifications />
         <SpeedInsights />
         <Component {...pageProps} />
      </MantineProvider>
   );
}
