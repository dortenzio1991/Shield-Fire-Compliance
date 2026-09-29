import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type Tier = {
  name: string;
  priceLabel: string;
  price: string;
  unit: string;
  descriptor: string;
  features: string[];
  cta: string;
  featured: boolean;
  badge?: string;
};

export const tiers: Tier[] = [
  {
    name: "Sprinkler",
    priceLabel: "Starting at",
    price: "$99",
    unit: "per month",
    descriptor: "Single sprinkler riser",
    features: [
      "Monthly visual inspection of your sprinkler system",
      "Log book signed on site",
      "Photo-verified report after every visit",
      "Same-day deficiency notice",
      "First month free",
    ],
    cta: "Get your first month free",
    featured: false,
  },
  {
    name: "Sprinkler and standpipe",
    priceLabel: "Starting at",
    price: "$125",
    unit: "per month",
    descriptor: "Single riser plus standpipe",
    features: [
      "Monthly visual inspection of sprinkler and standpipe systems",
      "Log book signed on site",
      "Photo-verified report after every visit",
      "Same-day deficiency notice",
      "First month free",
    ],
    cta: "Get your first month free",
    featured: true,
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
                Straightforward pricing.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 font-body text-lg leading-relaxed text-slate">
                Pricing starts at the rates below and depends on your
                building&apos;s size and number of risers. We confirm your exact
                monthly rate within one business day, before anything is signed.
              </p>
            </Reveal>
          </div>
        )}

        <RevealGroup
          className={cn(
            "mx-auto grid max-w-3xl gap-6 sm:grid-cols-2",
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
                {tier.badge && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-gold">
                    {tier.badge}
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
                <span
                  className={cn(
                    "mt-4 font-mono text-[11px] uppercase tracking-wider",
                    tier.featured ? "text-paper/55" : "text-slate"
                  )}
                >
                  {tier.priceLabel}
                </span>
                <div className="mt-1 flex items-baseline gap-2">
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
                    "mt-3 font-body text-[15px] leading-relaxed",
                    tier.featured ? "text-paper/70" : "text-slate"
                  )}
                >
                  {tier.descriptor}
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
          <p className="mx-auto mt-8 max-w-2xl text-center font-body text-[15px] leading-relaxed text-slate">
            Managing several buildings? Each building gets its own schedule and
            rate, with one point of contact for all of them.{" "}
            <Link
              href="/book"
              className="font-medium text-navy underline underline-offset-4 hover:text-gold"
            >
              Talk to us
            </Link>
            .
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-center font-mono text-xs uppercase tracking-eyebrow text-slate">
            Every plan: no repairs sold · no referral fees · no stake in any
            finding
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
