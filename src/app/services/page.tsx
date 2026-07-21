import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { services } from "@/components/sections/Services";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Independent, third-party inspection of sprinkler and standpipe systems under FDNY Certificates of Fitness — monthly recurring, with same-day filing. We inspect. We never repair.",
};

const extras = [
  {
    n: "05",
    title: "Deficiency documentation",
    body: "When a system fails, we document exactly what and why — with photo evidence, a timestamp, and a same-hour notification.",
  },
  {
    n: "06",
    title: "Contractor referral",
    body: "If a repair is genuinely needed, we hand you a clean record to take to any licensed contractor of your choosing. We never do the work ourselves.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Independent verification, system by system."
        intro="We check compliance — we never sell, install, or service the equipment we inspect. Book a single inspection or a recurring monthly cycle; every visit produces the same on-record report."
      />

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, body }, i) => (
              <RevealItem key={title}>
                <div className="card card-hover h-full">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 ring-1 ring-navy/10">
                      <Icon size={20} className="text-navy" />
                    </span>
                    <span className="font-mono text-xs tracking-widest text-gold">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                    {title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-slate">
                    {body}
                  </p>
                </div>
              </RevealItem>
            ))}
            {extras.map((e) => (
              <RevealItem key={e.n}>
                <div className="card card-hover h-full">
                  <span className="font-mono text-xs tracking-widest text-gold">
                    {e.n}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                    {e.title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-slate">
                    {e.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-deep-navy py-20 text-paper sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">The line we don&apos;t cross</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-4xl">
                We will never quote you a repair.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 font-body text-lg leading-relaxed text-paper/70">
                If something fails, we tell you exactly what and why — and hand
                you a record you can take to any licensed contractor. That&apos;s
                the whole point of independent.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
