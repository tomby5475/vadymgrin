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
      <body>{children}</body>
    </html>
  );
}
