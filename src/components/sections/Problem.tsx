import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const doList = [
  "Monthly visual inspection of sprinkler and standpipe systems",
  "Signed log book entry at the riser, kept at the building as FDNY requires",
  "A report after every visit, with photos of each checkpoint and of the signed log book",
  "Same-day notice of any deficiency",
  "A clear deficiency record for the licensed contractor you choose",
];

const neverList = [
  "Sell or perform repairs on what we inspect",
  "Take referral fees from contractors",
  "Skip a visit or log one that didn't happen",
  "Sit on a deficiency",
  "Find extra work to bill you for",
];

export function Problem() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow index="01">The problem</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-[2.6rem]">
              Your building needs a monthly inspection. You need proof it
              happened.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-body text-lg leading-relaxed text-slate">
              Under NYC Fire Code 903.5, sprinkler systems must be inspected at
              least monthly by an FDNY Certificate of Fitness holder, with
              records kept. Too often the visit is late, skipped, or logged
              without anyone showing up. Shield makes your monthly inspection
              something you can check.
            </p>
          </Reveal>
        </div>

        {/* Comparison split */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* What Shield Does — light card, gold checks */}
          <Reveal y={20}>
            <div className="h-full rounded-2xl border border-hairline bg-white p-8 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/15 ring-1 ring-gold/30">
                  <Check size={18} strokeWidth={3} className="text-gold" />
                </span>
                <h3 className="font-display text-xl font-semibold text-navy">
                  What Shield Does
                </h3>
              </div>
              <RevealGroup className="mt-7 flex flex-col gap-4">
                {doList.map((item) => (
                  <RevealItem key={item} as="div">
                    <div className="flex items-start gap-3">
                      <Check
                        size={18}
                        strokeWidth={3}
                        className="mt-0.5 shrink-0 text-gold"
                      />
                      <span className="font-body text-[15px] leading-snug text-navy">
                        {item}
                      </span>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>

          {/* What Shield Will Never Do — Deep Navy panel, muted slashes */}
          <Reveal y={20}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-navy p-8 shadow-record">
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                    <X size={18} strokeWidth={3} className="text-paper/60" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-paper">
                    What Shield Will Never Do
                  </h3>
                </div>
                <RevealGroup className="mt-7 flex flex-col gap-4">
                  {neverList.map((item) => (
                    <RevealItem key={item} as="div">
                      <div className="flex items-start gap-3">
                        <X
                          size={18}
                          strokeWidth={3}
                          className="mt-0.5 shrink-0 text-paper/40"
                        />
                        <span className="font-body text-[15px] leading-snug text-paper/75">
                          {item}
                        </span>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
