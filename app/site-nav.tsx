"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const storageKey = "gacurl-web-theme";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function SiteNav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const rootTheme = document.documentElement.dataset.theme;
    setTheme(rootTheme === "dark" ? "dark" : "light");
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";

  function handleThemeToggle() {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    applyTheme(updatedTheme);
    window.localStorage.setItem(storageKey, updatedTheme);
    setTheme(updatedTheme);
  }

  return (
    <div className="site-nav-wrap">
      <nav aria-label="Primary" className="site-nav">
        <ul className="site-nav__list">
          {links.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className="site-nav__link"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        aria-label={`Switch to ${nextTheme} mode`}
        aria-pressed={theme === "dark"}
        className="theme-toggle"
        onClick={handleThemeToggle}
        type="button"
      >
        <span aria-hidden="true" className="theme-toggle__icon">
          <span className="theme-toggle__sun" />
          <span className="theme-toggle__moon" />
          <span className="theme-toggle__spark" />
        </span>
      </button>
    </div>
  );
}
