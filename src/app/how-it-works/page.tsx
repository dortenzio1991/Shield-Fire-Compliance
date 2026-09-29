import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { RecordCard } from "@/components/RecordCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { steps } from "@/components/sections/HowItWorks";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Shield runs your monthly inspection: schedule, inspect on site under an FDNY Certificate of Fitness, sign the log book, and send a photo-verified report after every visit.",
};

const guarantees = [
  "Photos of every checkpoint and of the signed log book",
  "Pass or fail recorded for every checkpoint",
  "A report emailed after every visit, alongside the signed log book kept on site",
  "Same-day deficiency notice",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Four steps. One independent record."
        intro="Every inspection follows the same process, whether it's a single building or a portfolio, because consistency is what makes a compliance record defensible."
      />

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <Reveal key={step.n} y={18}>
                <div className="card h-full">
                  <span className="font-mono text-sm font-medium tracking-widest text-gold">
                    {step.n} · {step.title}
                  </span>
                  <div className="mt-4 h-px w-full bg-hairline" />
                  <p className="mt-4 font-body text-[15px] leading-relaxed text-slate">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-deep-navy py-20 text-paper sm:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow">What &ldquo;on record&rdquo; means</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-4xl">
                  Every visit leaves an evidentiary trail.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 font-body text-lg leading-relaxed text-paper/70">
                  A clear, photo-verified record you can show to an owner, a
                  board, an insurer, or an FDNY inspector.
                </p>
              </Reveal>
              <ul className="mt-8 flex flex-col gap-3">
                {guarantees.map((g) => (
                  <Reveal as="li" key={g} y={10}>
                    <span className="flex items-start gap-3 font-body text-[15px] text-paper/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {g}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
            <Reveal delay={0.1} y={22}>
              <RecordCard
                title="Sample report"
                rows={[
                  { label: "Site", value: "Sample building, Brooklyn" },
                  { label: "Checkpoint", value: "STP-01" },
                  { label: "Time", value: "10:11" },
                  { label: "Status", value: "PASS", status: "pass" },
                ]}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
