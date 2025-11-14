import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import "../global.css";
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

export default function App({ Component, pageProps }: any) {
   return (
      <>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
         </Head>
         <MantineProvider theme={theme} defaultColorScheme="dark">
            <Notifications />
            <SpeedInsights />
            <Component {...pageProps} />
         </MantineProvider>
      </>
   );
}
