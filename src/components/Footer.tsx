import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Book inspection", href: "/book" },
      { label: "Client login", href: "/client-login" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-deep-navy text-paper">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-paper/60">
              {site.promise} Independent, third-party inspection of sprinkler
              and standpipe systems under FDNY Certificates of Fitness.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-eyebrow text-paper/45">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-paper/75 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-mono text-xs uppercase tracking-eyebrow text-paper/45">
              Contact
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-body text-sm text-paper/75 transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="font-body text-sm text-paper/75 transition-colors hover:text-gold"
                >
                  {site.phone}
                </a>
              </li>
              <li className="font-body text-sm text-paper/60">{site.coverage}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-body text-xs text-paper/50">
            © {year} {site.name}. All rights reserved.
          </span>
          <span className="font-mono text-xs uppercase tracking-eyebrow text-paper/45">
            REC · <span className="text-gold">VERIFIED</span> · ON RECORD
          </span>
        </div>
      </Container>
    </footer>
  );
}
