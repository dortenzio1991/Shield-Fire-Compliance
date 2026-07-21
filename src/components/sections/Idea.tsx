import { ShieldCheck, FileCheck2, Ban } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const points = [
  {
    icon: ShieldCheck,
    title: "An independent third party",
    body: "We hold FDNY Certificates of Fitness and inspect on your behalf — with no equipment to sell and no repair contract waiting at the end.",
  },
  {
    icon: Ban,
    title: "No repairs. Ever.",
    body: "We never perform the work we recommend. If something needs fixing, we refer you to a licensed contractor of your choosing.",
  },
  {
    icon: FileCheck2,
    title: "A record you can trust",
    body: "Because we have zero stake in what the report says, the finding is the finding — geo-tagged, timestamped, and filed the same day.",
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
              An independent check, not a fire company.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-body text-lg leading-relaxed text-slate">
              Independence is the entire pitch. We inspect, we document, and we
              file — and we never sell the repairs. That&apos;s what makes the
              report trustworthy to you, your insurer, and the FDNY.
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
