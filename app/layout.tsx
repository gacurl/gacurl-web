import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteNav } from "./site-nav";

export const metadata: Metadata = {
  title: "Greg Curl / CurlTech",
  description:
    "Operational systems, practical modernization, and consulting work from Greg Curl / CurlTech."
};

const themeInitScript = `
  (() => {
    const storageKey = "gacurl-web-theme";
    const accents = ["blue", "slate", "forest", "amber", "rust"];

    const getAccent = () => {
      const now = new Date();
      const utcMidnight = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
      const dayIndex = Math.floor(utcMidnight / 86400000);
      return accents[Math.abs(dayIndex) % accents.length];
    };

    const savedTheme = window.localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : prefersDark
        ? "dark"
        : "light";

    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.accent = getAccent();
    root.style.colorScheme = theme;
  })();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="site-header__inner">
              <a className="site-brand" href="/">
                Greg Curl / CurlTech
              </a>
              <SiteNav />
            </div>
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <div className="site-footer__inner">
              <p>Operational systems and practical modernization.</p>
              <p>Greg Curl / CurlTech.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
