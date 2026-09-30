import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export const steps = [
  {
    n: "01",
    title: "Schedule",
    body: "Set a standing monthly visit for each building. We confirm scope and your monthly rate within one business day.",
  },
  {
    n: "02",
    title: "Inspect on site",
    body: "An FDNY Certificate of Fitness holder performs the monthly visual inspection and signs the log book at the riser.",
  },
  {
    n: "03",
    title: "Photo-verified report",
    body: "Every checkpoint is marked pass or fail and photographed, along with the signed log book. Any deficiency is reported to you the same day.",
  },
  {
    n: "04",
    title: "Your records",
    body: "We email you the report after every visit, and we keep one point of contact across all of your buildings. The official record stays on the premises for at least three years, as FDNY requires.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow index="03">How it works</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-[2.6rem]">
              From first call to monthly record, in four steps.
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <RevealItem key={step.n}>
              <div className="card card-hover h-full">
                <span className="font-mono text-sm font-medium tracking-widest text-gold">
                  {step.n}
                </span>
                <div className="mt-4 h-px w-full bg-hairline" />
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2.5 font-body text-[15px] leading-relaxed text-slate">
                  {step.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl font-body text-sm leading-relaxed text-slate">
            If a defect is still uncorrected after 30 days, FDNY rules require
            the Certificate of Fitness holder to report it to the Fire
            Department. We will always tell you well before that point.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
