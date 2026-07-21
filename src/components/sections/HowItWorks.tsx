import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export const steps = [
  {
    n: "01",
    title: "Schedule",
    body: "Book a monthly recurring visit for your sprinkler and standpipe systems. Pricing is published — no call-for-a-quote.",
  },
  {
    n: "02",
    title: "Inspect on-site",
    body: "An inspector under an FDNY Certificate of Fitness performs a full visual inspection. Arrival is geo-tagged automatically.",
  },
  {
    n: "03",
    title: "Geo-tagged report",
    body: "Every checkpoint is timestamped and recorded on site — pass or fail — with a deficiency notification sent the same hour.",
  },
  {
    n: "04",
    title: "Same-day FDNY filing",
    body: "Your verified record is filed the same day and stored in your compliance history — never a paper logbook.",
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
              From schedule to filed record, in four steps.
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
      </Container>
    </section>
  );
}
