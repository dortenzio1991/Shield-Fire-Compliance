import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { v: "100%", k: "Independent, third-party" },
  { v: "$0", k: "Earned on repairs — ever" },
  { v: "Same-day", k: "FDNY report filing" },
  { v: "NYC", k: "FDNY jurisdiction coverage" },
];

export function Trust() {
  return (
    <section className="border-y border-hairline bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow index="07">About &amp; trust</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-[2.6rem]">
                Independence isn&apos;t a slogan — it&apos;s the whole model.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 font-body text-lg leading-relaxed text-slate">
                Shield performs independent, third-party inspections of sprinkler
                and standpipe systems under FDNY Certificates of Fitness — across
                New York City. We hold no repair contracts, no equipment lines,
                and no financial stake in what any report says.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display text-xl font-medium leading-snug text-navy">
                &ldquo;The moment an inspector has something to sell you, the
                inspection stops being independent. We built Shield to be the
                exception.&rdquo;
              </blockquote>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={20}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
              {stats.map((s) => (
                <div key={s.k} className="bg-paper p-8">
                  <div className="font-display text-3xl font-bold text-navy sm:text-4xl">
                    {s.v}
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-slate">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
