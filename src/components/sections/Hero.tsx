import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RecordCard } from "@/components/RecordCard";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* subtle radial wash — Paper only, no gold background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 85% -10%, rgba(21,35,63,0.05), transparent 55%)",
        }}
      />
      <Container className="relative grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        {/* Left column — copy */}
        <div>
          <Reveal>
            <span className="eyebrow">Zero conflict of interest</span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-[2.4rem] font-bold leading-[1.06] tracking-tight text-navy sm:text-[3.4rem]">
              Monthly sprinkler and standpipe inspections.
              <br />
              On time, on record.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-slate">
              NYC Fire Code requires a monthly inspection by an FDNY Certificate
              of Fitness holder. We show up when we say we will, sign your
              on-site log book, and send you a report with photos proving the
              visit happened. We only inspect, so we never have a reason to find
              work that isn&apos;t there.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/book" className="btn btn-primary px-6 py-3.5 text-base">
                Get your first month free
              </Link>
              <Link
                href="/how-it-works"
                className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-navy"
              >
                See how it works
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 font-mono text-xs uppercase tracking-eyebrow text-slate">
              Photo verified · Signed on site · Report after every visit · FDNY
              S-12 and S-13
            </p>
          </Reveal>
        </div>

        {/* Right column — verified record visual */}
        <Reveal delay={0.15} y={24}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-navy/10 to-transparent"
            />
            <RecordCard animateCheck />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
