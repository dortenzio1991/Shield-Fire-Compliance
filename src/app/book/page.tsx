import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Book an inspection",
  description:
    "Book an independent sprinkler and standpipe compliance inspection under an FDNY Certificate of Fitness. Tell us your site — we confirm scope and scheduling within one business day.",
};

const afterSteps = [
  {
    n: "1",
    title: "Confirm",
    body: "We confirm scope, standard, and a published all-in rate by email.",
  },
  {
    n: "2",
    title: "Schedule",
    body: "We lock in a monthly visit window that works for your building access.",
  },
  {
    n: "3",
    title: "Inspect & file",
    body: "Geo-tagged, timestamped inspection — filed to the FDNY the same day.",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book an inspection"
        title="Tell us about your site."
        intro="Fill in the details below and we'll confirm scope, pricing, and scheduling within one business day. Your first month of monthly recurring inspection is free."
      />

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <Reveal y={18}>
              <BookingForm />
            </Reveal>

            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-slate">
                  Response time
                  <span className="text-hairline">·</span>
                  <span className="text-gold">1 business day</span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-navy">
                  What happens after you submit
                </h2>
              </Reveal>
              <div className="mt-8 flex flex-col gap-6">
                {afterSteps.map((s) => (
                  <Reveal key={s.n} y={14}>
                    <div className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy font-mono text-sm font-medium text-paper">
                        {s.n}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-navy">
                          {s.title}
                        </h3>
                        <p className="mt-1 font-body text-[15px] leading-relaxed text-slate">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
