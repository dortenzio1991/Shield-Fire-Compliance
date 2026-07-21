import Link from "next/link";
import { Droplets, GaugeCircle, FileBadge, CalendarClock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export const services = [
  {
    icon: Droplets,
    title: "Sprinkler systems",
    body: "Monthly visual inspection of wet and dry sprinkler systems — gauges, valves, and control assemblies verified against code.",
  },
  {
    icon: GaugeCircle,
    title: "Standpipe systems",
    body: "Pressure, valve, and connection checks on standpipe systems, logged checkpoint by checkpoint on site.",
  },
  {
    icon: FileBadge,
    title: "FDNY C of F compliance",
    body: "Inspections performed under FDNY Certificates of Fitness, with direct FDNY documentation and recordkeeping.",
  },
  {
    icon: CalendarClock,
    title: "Recurring monthly inspections",
    body: "A standing monthly cadence that keeps your compliance record continuous — and always filed the same day.",
  },
];

export function Services() {
  return (
    <section className="border-y border-hairline bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow index="04">Services</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-[2.6rem]">
                Independent verification, system by system.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-navy"
            >
              View all services
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, body }) => (
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
