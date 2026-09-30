import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Trust } from "@/components/sections/Trust";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

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
                  Most buildings use a full service vendor that both inspects and
                  repairs. Many of them do good work. But when the same company
                  finds the problem and quotes the fix, you are trusting a report
                  written by an interested party.
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
                  We only inspect and document, under FDNY Certificates of
                  Fitness S-12 and S-13. We hold no repair contracts, no service
                  agreements, and no equipment partnerships. Every visit is
                  signed in the log book on site and backed by photos in your
                  report.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="border-t border-hairline bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <span className="eyebrow">The founder</span>
            <div className="mt-8 grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
              {/*
                TODO: replace the initials placeholder below with Alex's
                headshot. Drop the file at public/team/alex-dortenzio.jpg and
                swap this block for a next/image, e.g.:
                <Image src="/team/alex-dortenzio.jpg" alt="Alex Dortenzio" ... />
              */}
              <div
                aria-label="Headshot placeholder for Alex Dortenzio"
                className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-navy font-display text-4xl font-bold tracking-tight text-gold ring-1 ring-navy/10"
              >
                AD
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-navy">
                  Alex Dortenzio, Founder
                </h2>
                <p className="mt-4 font-body text-[17px] leading-relaxed text-slate">
                  Alex holds FDNY Certificates of Fitness S-12 for sprinkler
                  systems (#{site.s12}) and S-13 for standpipe systems (#
                  {site.s13}) and performs Shield&apos;s inspections himself.
                  Before Shield, he spent his career in B2B operations and
                  account management, most recently as Director of Demand
                  Platform Operations at OpenX. He started Shield to give
                  property managers a monthly inspection they can actually
                  verify.
                </p>
                <p className="mt-5 font-body text-[15px] leading-relaxed text-slate">
                  Fully insured. Certificate of insurance available on request.
                </p>
                <p className="mt-4 font-mono text-[13px] text-slate">
                  <a href={site.phoneHref} className="hover:text-gold">
                    {site.phone}
                  </a>{" "}
                  ·{" "}
                  <a href={`mailto:${site.email}`} className="hover:text-gold">
                    {site.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Trust />
      <CtaBand />
    </>
  );
}
