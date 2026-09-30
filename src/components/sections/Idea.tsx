import { ShieldCheck, FileCheck2, Ban } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const points = [
  {
    icon: ShieldCheck,
    title: "Certified and insured",
    body: "Inspections are performed under FDNY Certificates of Fitness S-12 (sprinkler systems, #93607281) and S-13 (standpipe systems, #93635076). Shield is fully insured, and a certificate of insurance is available on request.",
  },
  {
    icon: Ban,
    title: "No repairs. Ever.",
    body: "We never perform or sell the work we recommend. If something needs fixing, you choose the licensed contractor.",
  },
  {
    icon: FileCheck2,
    title: "Proof, not promises",
    body: "Every report includes photos of what we inspected and of the signed log book, so you never have to take anyone's word that the visit happened.",
  },
];

export function Idea() {
  return (
    <section className="border-y border-hairline bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow index="02">The idea</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-[2.6rem]">
              An inspector with nothing to sell you.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-body text-lg leading-relaxed text-slate">
              We inspect and we document. We don&apos;t repair or maintain
              systems, and we earn nothing from what the report says. That keeps
              the finding honest and the conversation simple.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map(({ icon: Icon, title, body }) => (
            <RevealItem key={title}>
              <div className="card card-hover h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 ring-1 ring-navy/10">
                  <Icon size={20} className="text-navy" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-slate">
                  {body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
