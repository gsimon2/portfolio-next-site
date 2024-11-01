import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <ColorSchemeScript />
         </Head>
         <body>
            <Main />
            <NextScript />
            <SpeedInsights />
         </body>
      </Html>
   );
}
