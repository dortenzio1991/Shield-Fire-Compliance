import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const doList = [
  "Monthly visual inspection of sprinkler & standpipe systems",
  "Same-day digital compliance reports",
  "Direct FDNY documentation and recordkeeping",
  "Same-hour deficiency notification, every time",
  "Honest referral to a licensed contractor if repair is ever needed",
];

const neverList = [
  "Sell or perform repair work on what we inspect",
  "Have any financial stake in finding a deficiency",
  "Lock your compliance history in a paper logbook",
  "Delay reporting a real deficiency, for any reason",
  'Hide our pricing behind a "call for a quote"',
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
              Most fire safety companies inspect and repair. That&apos;s the
              problem.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-body text-lg leading-relaxed text-slate">
              When the company that finds the deficiency also gets paid to fix
              it, every finding is a little bit suspect. We removed that conflict
              entirely — by design.
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
