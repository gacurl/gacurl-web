import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "./site-nav";

export const metadata: Metadata = {
  title: "gacurl-web",
  description: "A calm, professional web foundation for gacurl-web."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="site-header__inner">
              <a className="site-brand" href="/">
                gacurl-web
              </a>
              <SiteNav />
            </div>
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <div className="site-footer__inner">
              <p>Independent digital work, structured with care.</p>
              <p>Built on a deliberately minimal Next.js foundation.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
