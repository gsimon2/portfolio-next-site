import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <ColorSchemeScript />
            <meta
               name="description"
               content="Glen A Simon's modern portfolio showcasing professional software development projects and expertise in Next.js, React, TypeScript, and full-stack development. View live demos and detailed technical implementations."
            />
            <meta
               name="keywords"
               content="Glen A Simon, Software Engineer, Full Stack Developer, Next.js, React, TypeScript, Mantine UI, Web Development, Portfolio"
            />
            <meta name="author" content="Glen A Simon" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta
               property="og:title"
               content="Glen A Simon | Software Engineer Portfolio"
            />
            <meta
               property="og:description"
               content="Glen A Simon's modern portfolio showcasing professional software development projects and expertise in Next.js, React, TypeScript, and full-stack development."
            />
            <meta property="og:image" content="/favicon.png" />

            {/* <!-- Twitter --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
               name="twitter:title"
               content="Glen A Simon | Software Engineer Portfolio"
            />
            <meta
               name="twitter:description"
               content="Glen A Simon's modern portfolio showcasing professional software development projects and expertise in Next.js, React, TypeScript, and full-stack development."
            />
            <meta name="twitter:image" content="/favicon.png" />

            {/* <!-- Additional SEO --> */}
            <meta name="robots" content="index, follow" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <link rel="canonical" href="https://www.glenasimon.com" />
            <link rel="shortcut icon" href="/favicon.png" />
            <link
               rel="icon"
               href="/favicon.png"
               type="image/<generated>"
               sizes="<generated>"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
