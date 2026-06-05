"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navDropdowns, routes, type NavDropdown } from "@/lib/routes";

const navLinks = [
  { label: "Explore FOSIS Projects", href: routes.projects },
  { label: "Contact Us", href: routes.contact },
];

const SCROLL_THRESHOLD = 10;

const navItemClass =
  "shrink-0 whitespace-nowrap text-[12px] font-medium tracking-wide transition-colors xl:text-[13px]";

function FosisLogo() {
  return (
    <div className="flex shrink-0 items-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-sm border-2 border-white p-1">
        <svg
          className="h-full w-full"
          fill="none"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M50 5 L10 35 V85 L50 95 L90 85 V35 L50 5Z"
            stroke="white"
            strokeWidth="6"
          />
          <path
            d="M50 15 V85 M30 30 V80 M70 30 V80"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </div>
      <span className="ml-2 text-2xl font-bold tracking-tighter">FOSIS</span>
    </div>
  );
}

function NavDropdown({
  dropdown,
  isActive,
  isDropdownActive,
}: {
  dropdown: NavDropdown;
  isActive: (href: string) => boolean;
  isDropdownActive: (dropdown: NavDropdown) => boolean;
}) {
  const active = isDropdownActive(dropdown);

  const triggerClass = active
    ? "text-brand-mustard"
    : "text-white group-hover:text-brand-mustard";

  const chevronClass = active
    ? "text-brand-mustard group-hover:rotate-180"
    : "text-gray-400 group-hover:rotate-180 group-hover:text-brand-mustard";

  return (
    <div className="group relative shrink-0 px-1">
      <button
        type="button"
        className={`${navItemClass} relative flex cursor-default items-center pb-1 ${triggerClass} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-mustard after:transition-all ${
          active ? "after:w-full" : "after:w-0 group-hover:after:w-full"
        }`}
      >
        {dropdown.label}
        <span className={`ml-1 text-[10px] transition-transform ${chevronClass}`}>
          ▼
        </span>
      </button>

      <div className="pointer-events-none absolute left-1/2 top-full z-50 hidden w-max -translate-x-1/2 pt-2 group-hover:block group-hover:pointer-events-auto">
        <div className="w-max border-t-2 border-brand-mustard bg-brand-navy py-3 shadow-xl">
          <ul className="flex flex-col">
            {dropdown.children.map((child) => {
              const childActive = isActive(child.href);

              return (
                <li key={child.label}>
                  <Link
                    href={child.href}
                    aria-current={childActive ? "page" : undefined}
                    className={`block whitespace-nowrap px-5 py-2.5 text-sm transition-colors ${
                      childActive
                        ? "font-medium text-brand-mustard"
                        : "text-gray-300 hover:text-brand-mustard"
                    }`}
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function NavLink({
  label,
  href,
  isActive,
}: {
  label: string;
  href: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${navItemClass} px-1 ${
        isActive
          ? "text-brand-mustard"
          : "text-white hover:text-brand-mustard"
      }`}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const isActive = (href: string) => pathname === href;

  const isDropdownActive = (dropdown: NavDropdown) =>
    dropdown.children.some((child) => isActive(child.href));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < SCROLL_THRESHOLD) {
        return;
      }

      if (currentScrollY <= 0) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
        setMobileOpen(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-padding mx-auto max-w-7xl">
        <div className="flex h-20 items-center gap-8 lg:gap-14">
          <Link href={routes.home} className="shrink-0">
            <FosisLogo />
          </Link>

          <nav className="hidden min-w-0 flex-1 flex-nowrap items-center justify-end gap-x-5 xl:flex 2xl:gap-x-7">
            {navDropdowns.map((dropdown) => (
              <NavDropdown
                key={dropdown.label}
                dropdown={dropdown}
                isActive={isActive}
                isDropdownActive={isDropdownActive}
              />
            ))}
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                {...link}
                isActive={isActive(link.href)}
              />
            ))}
          </nav>

          <div className="ml-auto shrink-0 xl:hidden">
            <button
              type="button"
              className="rounded-md p-2 text-gray-400 hover:text-white focus:outline-none"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="border-t border-white/10 py-4 xl:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium">
              <Link
                href={routes.home}
                aria-current={isActive(routes.home) ? "page" : undefined}
                className={
                  isActive(routes.home)
                    ? "text-brand-mustard"
                    : "text-white hover:text-brand-mustard"
                }
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              {navDropdowns.map((dropdown) => {
                const dropdownActive = isDropdownActive(dropdown);

                return (
                  <div key={dropdown.label} className="flex flex-col gap-2">
                    <span
                      className={
                        dropdownActive
                          ? "text-brand-mustard"
                          : "text-white"
                      }
                    >
                      {dropdown.label}
                    </span>
                    <div className="flex flex-col gap-2 border-l border-white/10 pl-4">
                      {dropdown.children.map((child) => {
                        const childActive = isActive(child.href);

                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            aria-current={childActive ? "page" : undefined}
                            className={`text-sm transition-colors ${
                              childActive
                                ? "font-medium text-brand-mustard"
                                : "text-gray-300 hover:text-brand-mustard"
                            }`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={
                    isActive(link.href)
                      ? "text-brand-mustard"
                      : "text-white hover:text-brand-mustard"
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
