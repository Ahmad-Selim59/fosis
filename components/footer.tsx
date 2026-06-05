import Link from "next/link";
import { Container } from "@/components/ui/container";
import { routes } from "@/lib/routes";

const footerColumns = [
  {
    title: "For Students",
    links: [
      { label: "Islamic Resources", href: routes.islamicResources },
      { label: "FOSIS Report", href: routes.fosisReport },
    ],
  },
  {
    title: "For ISocs",
    links: [
      { label: "ISoc Affiliations", href: routes.affiliate },
      { label: "FOSIS Services", href: routes.forIsocs },
      { label: "ISoc Resources", href: routes.isocResources },
    ],
  },
  {
    title: "Organisation",
    links: [
      { label: "About Us", href: routes.about },
      { label: "Explore Our Projects", href: routes.projects },
      { label: "Contact Us", href: routes.contact },
    ],
  },
];

const socialLinks = [
  {
    label: "X / Twitter",
    href: "https://x.com",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
];

function FooterLogo() {
  return (
    <div className="mb-6 flex h-20 w-16 items-center justify-center">
      <svg
        className="h-full w-full text-white"
        viewBox="0 0 80 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M40 5 C20 5 8 25 8 45 C8 70 40 95 40 95 C40 95 72 70 72 45 C72 25 60 5 40 5Z"
          stroke="currentColor"
          strokeWidth="3"
        />
        <text
          x="40"
          y="58"
          textAnchor="middle"
          fill="currentColor"
          fontSize="14"
          fontWeight="700"
          fontFamily="var(--font-inter), sans-serif"
        >
          FOSIS
        </text>
      </svg>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mustard sm:mb-5">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 sm:gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-footer-muted transition-colors hover:text-brand-mustard"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-footer-navy">
      <Container className="pt-10 pb-8 sm:pt-16 lg:pt-20 lg:pb-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-8 lg:gap-10">
          <div className="col-span-2 flex flex-col items-center text-center md:col-span-1 md:items-start md:text-left">
            <FooterLogo />
            <p className="mb-2 max-w-xs text-sm leading-relaxed text-footer-muted">
              The Federation of Student Islamic Societies
            </p>
            <p className="mb-3 text-sm font-semibold text-brand-mustard sm:mb-4">
              Est. 1963
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-footer-muted">
              The UK&apos;s national body representing Muslim students in higher
              and further education.
            </p>
          </div>

          {footerColumns.map((column, index) => (
            <div
              key={column.title}
              className={index === footerColumns.length - 1 ? "col-span-2 md:col-span-1" : undefined}
            >
              <FooterColumn {...column} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:mt-14 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 sm:pt-10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-footer-muted transition-colors hover:text-brand-mustard"
            >
              <svg
                className="h-4 w-4 shrink-0 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {social.icon}
              </svg>
              {social.label}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-sm text-footer-muted sm:mt-10 sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
          <p>© 2026 FOSIS. All rights reserved.</p>
          <p>
            Representing{" "}
            <span className="font-semibold text-brand-mustard">350,000</span>{" "}
            Muslim Students
          </p>
        </div>
      </Container>
    </footer>
  );
}
