import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Pricing } from "@/components/sections/Pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Honest, published pricing for independent sprinkler and standpipe compliance inspections — single, monthly recurring, and multi-site portfolio. No call-for-a-quote.",
};

const faqs = [
  {
    q: "Site size & systems",
    a: "Rates reflect the number of sprinkler and standpipe risers and checkpoints a monthly visit covers.",
  },
  {
    q: "Inspection frequency",
    a: "Single inspections, monthly recurring programs, and multi-site portfolios are each priced up front.",
  },
  {
    q: "What's never included",
    a: "No repairs, no equipment sales, no service contracts — because we hold no financial stake in any finding.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward pricing for an independent record."
        intro="You see the rate before you book. The tiers below are our published starting points — no muddy quotes, no pressure, no surprises."
      />

      <Pricing withHeading={false} />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">What affects the rate</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Simple inputs, published up front.
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {faqs.map((f) => (
              <Reveal key={f.q} y={18}>
                <div className="card h-full">
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {f.q}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-slate">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
