import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Trust } from "@/components/sections/Trust";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shield Fire Compliance exists to remove the conflict of interest from fire compliance: independent, third-party FDNY inspections of sprinkler and standpipe systems, with zero financial stake in any finding.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built to remove the conflict of interest from fire compliance."
        intro="Shield exists for one reason: the company that inspects your fire-protection systems shouldn't be the same one selling you the fix."
      />

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal y={18}>
              <div>
                <span className="eyebrow">The problem</span>
                <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  Inspection and sales don&apos;t mix.
                </h2>
                <p className="mt-5 font-body text-[17px] leading-relaxed text-slate">
                  Across the industry, fire-protection companies both inspect and
                  service the same equipment. When the inspector&apos;s paycheck
                  depends on finding — and fixing — a deficiency, the report stops
                  being neutral. Owners, insurers, and the FDNY are left trusting a
                  document written by an interested party.
                </p>
              </div>
            </Reveal>
            <Reveal y={18}>
              <div>
                <span className="eyebrow">Our answer</span>
                <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  An inspector with nothing to sell.
                </h2>
                <p className="mt-5 font-body text-[17px] leading-relaxed text-slate">
                  We only inspect, document, and file — under FDNY Certificates of
                  Fitness. We hold no repair contracts, no service agreements, and
                  no equipment partnerships. Every report is geo-tagged,
                  timestamped, and filed the same day — trustworthy precisely
                  because we have no stake in what it says.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Trust />
      <CtaBand />
    </>
  );
}
