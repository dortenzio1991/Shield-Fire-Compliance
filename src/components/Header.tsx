"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { nav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-paper/90 backdrop-blur transition-shadow",
        scrolled ? "border-hairline shadow-sm" : "border-transparent"
      )}
    >
      <Container className="flex h-[68px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3.5 py-2 font-body text-sm font-medium transition-colors",
                  active
                    ? "text-navy"
                    : "text-slate hover:text-navy"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/client-login"
            className="rounded-md px-3.5 py-2 font-body text-sm font-medium text-slate transition-colors hover:text-navy"
          >
            Client login
          </Link>
          <Link href="/book" className="btn btn-navy ml-2">
            Book inspection
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Mobile slide-down menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-hairline bg-paper transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 font-body text-base font-medium text-navy hover:bg-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/client-login"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-2.5 font-body text-base font-medium text-navy hover:bg-white"
          >
            Client login
          </Link>
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="btn btn-navy mt-3 w-full"
          >
            Book inspection
          </Link>
        </Container>
      </div>
    </header>
  );
}
