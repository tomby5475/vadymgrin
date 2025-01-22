import Head from "next/head";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
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
