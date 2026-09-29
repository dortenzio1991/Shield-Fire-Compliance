import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { services } from "@/components/sections/Services";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Independent, third-party inspection of sprinkler and standpipe systems under FDNY Certificates of Fitness S-12 and S-13. Monthly recurring. We inspect, we never repair.",
};

const extras = [
  {
    n: "05",
    title: "Deficiency documentation",
    body: "Each deficiency is written up clearly with photos, so any licensed contractor can act on it.",
  },
  {
    n: "06",
    title: "Reports your way",
    body: "A photo-verified report emailed after every visit, with one point of contact across every building you manage.",
  },
  {
    n: "07",
    title: "Your contractor, your choice",
    body: "We hand you the record. You choose who fixes it. We take no referral fees.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Independent verification, system by system."
        intro="We check compliance. We never sell, install, or service the equipment we inspect. Every monthly visit produces the same photo-verified, on-record report."
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
                If something fails, we tell you exactly what and why, and hand
                you a record you can take to any licensed contractor. That&apos;s
                the whole point of independent.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper pb-20 sm:pb-24">
        <Container>
          <div className="rounded-2xl border border-hairline bg-white p-6 shadow-card sm:p-8">
            <h3 className="font-display text-lg font-semibold text-navy">
              What we don&apos;t do
            </h3>
            <p className="mt-3 max-w-3xl font-body text-[15px] leading-relaxed text-slate">
              Repairs, maintenance, and system testing beyond visual inspection
              are performed by licensed Master Fire Suppression Piping
              Contractors or Master Plumbers. We inspect only.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
