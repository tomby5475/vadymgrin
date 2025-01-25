import Head from "next/head";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Vadym Grin</title>
        <meta property="og:title" content="Vadym Grin" />
        <meta
          property="og:description"
          content="Design can save the world. Website manifesto by designer, mentor, and writer Vadym Grin."
        />
        <meta
          property="og:image"
          content="https://vadymgrin.vercel.app/images/personal-social.png"
        />
        <meta property="og:url" content="https://vadymgrin.vercel.app/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vadym Grin Social Preview" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
