import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 80% at 80% -20%, rgba(21,35,63,0.05), transparent 55%)",
        }}
      />
      <Container className="relative py-16 sm:py-20">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-slate">
              {intro}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
