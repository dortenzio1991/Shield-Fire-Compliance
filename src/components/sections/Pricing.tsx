import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export const tiers = [
  {
    name: "Single Inspection",
    price: "$249",
    unit: "per site, per visit",
    blurb: "A one-time independent check of your sprinkler and standpipe systems.",
    features: [
      "One site, one visit",
      "Geo-tagged, timestamped report",
      "Same-day FDNY filing",
      "Same-hour deficiency notification",
    ],
    cta: "Book a single inspection",
    featured: false,
  },
  {
    name: "Monthly Recurring",
    price: "$179",
    unit: "per site, per month",
    blurb: "Standing monthly compliance for continuous FDNY recordkeeping.",
    features: [
      "Recurring monthly inspections",
      "Continuous compliance history",
      "Priority scheduling",
      "Same-day FDNY filing, every visit",
      "First month free",
    ],
    cta: "Get Your First Month Free",
    featured: true,
  },
  {
    name: "Portfolio",
    price: "Custom",
    unit: "multi-site, billed together",
    blurb: "Standardized monthly inspections across every location you manage.",
    features: [
      "Unlimited sites, one schedule",
      "Consolidated compliance dashboard",
      "Dedicated account contact",
      "Published per-site rate — no surprises",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export function Pricing({
  withHeading = true,
}: {
  withHeading?: boolean;
}) {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        {withHeading && (
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow index="06">Pricing</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-[2.6rem]">
                Honest pricing, published up front.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 font-body text-lg leading-relaxed text-slate">
                No &ldquo;call for a quote.&rdquo; You see the rate before you
                book — because hiding pricing is one more thing we&apos;ll never
                do.
              </p>
            </Reveal>
          </div>
        )}

        <RevealGroup
          className={cn(
            "grid gap-6 lg:grid-cols-3",
            withHeading ? "mt-14" : "mt-0"
          )}
        >
          {tiers.map((tier) => (
            <RevealItem key={tier.name}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl p-8 transition-all duration-200",
                  tier.featured
                    ? "border border-navy bg-navy text-paper shadow-card-hover"
                    : "border border-hairline bg-white shadow-card hover:-translate-y-1 hover:shadow-card-hover"
                )}
              >
                {tier.featured && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-gold">
                    Recommended
                  </span>
                )}
                <h3
                  className={cn(
                    "font-display text-lg font-semibold",
                    tier.featured ? "text-paper" : "text-navy"
                  )}
                >
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "font-display text-4xl font-bold",
                      tier.featured ? "text-paper" : "text-navy"
                    )}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-xs",
                      tier.featured ? "text-paper/55" : "text-slate"
                    )}
                  >
                    {tier.unit}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-4 font-body text-[15px] leading-relaxed",
                    tier.featured ? "text-paper/70" : "text-slate"
                  )}
                >
                  {tier.blurb}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={17}
                        strokeWidth={3}
                        className="mt-0.5 shrink-0 text-gold"
                      />
                      <span
                        className={cn(
                          "font-body text-[14px] leading-snug",
                          tier.featured ? "text-paper/85" : "text-navy"
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className={cn(
                    "btn mt-8 w-full",
                    tier.featured ? "btn-primary" : "btn-ghost"
                  )}
                >
                  {tier.cta}
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="mt-8 text-center font-mono text-xs uppercase tracking-eyebrow text-slate">
            All plans: no repairs sold · no financial stake in any finding · ever
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
