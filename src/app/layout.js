import Head from "next/head";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Vadym Grin",
  description: "Design can save the world. Website manifesto by designer, mentor, and writer Vadym Grin.",
  openGraph: {
    title: "Vadym Grin",
    type: "website",
    description: "Design can save the world. Website manifesto by designer, mentor, and writer Vadym Grin.",
    url: "https://vadimgrin.com/",
    images: [
      {
        url: "https://vadimgrin.com/images/personal-social.png",
        width: 1200,
        height: 630,
        alt: "Vadym Grin Social Preview",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Vadym Grin</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body>
        {children}
        <Script
          id="hotjar"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3442557,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </body>
    </html>
  );
}
