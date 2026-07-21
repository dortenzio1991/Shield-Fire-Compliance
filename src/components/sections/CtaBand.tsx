import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ShieldMark } from "@/components/Logo";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-deep-navy py-20 text-paper sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 120% at 50% -20%, rgba(224,163,59,0.10), transparent 60%)",
        }}
      />
      <Container className="relative">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <ShieldMark variant="dark" className="h-12 w-auto" />
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-[2.6rem]">
              Get a compliance record with nothing to hide behind.
            </h2>
            <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-paper/70">
              Start with a month of independent sprinkler and standpipe
              inspection — geo-tagged, timestamped, and filed the same day. Free.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/book" className="btn btn-primary px-6 py-3.5 text-base">
                Get Your First Month Free
              </Link>
              <Link href="/how-it-works" className="btn btn-on-dark px-6 py-3.5 text-base">
                See how it works
              </Link>
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-eyebrow text-paper/45">
              Verified compliance. Zero conflict.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
