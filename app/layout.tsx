import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "gacurl-web",
  description: "A minimal foundation for the gacurl-web site."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
