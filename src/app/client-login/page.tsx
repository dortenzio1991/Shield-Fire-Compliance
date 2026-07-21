import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LoginForm } from "@/components/LoginForm";
import { ShieldMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Client login",
  description:
    "Log in to your Shield Fire Compliance client portal to view inspection records, download filed reports, and track upcoming visits.",
  robots: { index: false, follow: true },
};

export default function ClientLoginPage() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-md">
          <div className="text-center">
            <ShieldMark className="mx-auto h-11 w-auto" />
            <span className="mt-6 inline-block font-mono text-xs uppercase tracking-eyebrow text-gold">
              Client portal
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy">
              Log in to your records.
            </h1>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-slate">
              View inspection history, download filed FDNY reports, and track
              upcoming monthly visits.
            </p>
          </div>

          <div className="mt-8">
            <LoginForm />
          </div>

          <p className="mt-6 text-center font-body text-sm text-slate">
            Not a client yet?{" "}
            <Link
              href="/book"
              className="font-medium text-navy underline decoration-gold underline-offset-4 hover:text-gold"
            >
              Book your first inspection
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
