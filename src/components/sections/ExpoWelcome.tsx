import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

// Exact expo-handout contact details (as supplied for the expo landing page).
const EXPO_EMAIL = "alex@shieldfirecompliance.com";
const EXPO_PHONE = "(929) 412-1143";
const EXPO_PHONE_HREF = "tel:+19294121143";

const benefits = [
  {
    label: "Certified inspections:",
    body: "Performed on site by an inspector who holds FDNY Certificates of Fitness for sprinklers and standpipes.",
  },
  {
    label: "Logbook entry, every visit:",
    body: "Completed and photographed at every single visit.",
  },
  {
    label: "Same day reporting:",
    body: "A written inspection report with photos, delivered the day of service.",
  },
  {
    label: "Proactive deficiency alerts:",
    body: "Written notice of any issue right away, so nothing sits unaddressed.",
  },
];

function BookCall() {
  return (
    <Link
      href="/book"
      className="btn btn-primary w-full px-8 py-4 text-base sm:text-lg"
    >
      Book a 15 Minute Call
    </Link>
  );
}

/**
 * Expo welcome landing page body. Rendered identically at /expo-a and /expo-b
 * so Vercel Web Analytics logs each path as its own entry. Mobile-first and
 * server-rendered (no client JS) to stay fast for QR-code visitors.
 */
export function ExpoWelcome() {
  return (
    <section className="bg-paper py-12 sm:py-16">
      <Container className="max-w-xl">
        {/* Intro */}
        <span className="eyebrow">Cooperator Expo</span>
        <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl">
          Great to meet you at the Cooperator Expo.
        </h1>
        <p className="mt-5 font-body text-lg leading-relaxed text-slate">
          Shield Fire Compliance handles your mandatory monthly sprinkler and
          standpipe inspections, with documented proof that every visit actually
          happened.
        </p>

        {/* Top CTA */}
        <div className="mt-8">
          <BookCall />
        </div>

        {/* What you get */}
        <h2 className="mt-12 font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
          What you get every month:
        </h2>
        <ul className="mt-5 flex flex-col gap-4">
          {benefits.map((b) => (
            <li
              key={b.label}
              className="flex gap-3 rounded-xl border border-hairline bg-white p-4 shadow-card"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gold/15 ring-1 ring-gold/30">
                <Check size={15} className="text-gold" />
              </span>
              <p className="font-body text-[15px] leading-relaxed text-slate">
                <span className="font-semibold text-navy">{b.label}</span>{" "}
                {b.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Why switch */}
        <div className="mt-10 rounded-xl border-l-4 border-gold bg-white p-5 shadow-card">
          <p className="font-body text-[15px] leading-relaxed text-slate">
            <span className="font-semibold text-navy">
              Why boards and managers switch:
            </span>{" "}
            Most buildings already pay someone for monthly inspections. The hard
            part is proving they showed up. Every Shield visit gives you a
            dated, photographed audit trail you can verify from anywhere.
          </p>
        </div>

        {/* Offer */}
        <div className="mt-8 text-center">
          <p className="font-display text-lg font-bold text-navy">
            Expo offer: get your first month free on one building.
          </p>
          <p className="mt-2 font-body text-[15px] leading-relaxed text-slate">
            Monthly service starts at $99 per building across all five boroughs.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8">
          <BookCall />
        </div>

        {/* Contact */}
        <p className="mt-8 text-center font-body text-[15px] text-slate">
          <a
            href={`mailto:${EXPO_EMAIL}`}
            className="font-medium text-navy underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
          >
            {EXPO_EMAIL}
          </a>{" "}
          <span className="text-hairline">·</span>{" "}
          <a
            href={EXPO_PHONE_HREF}
            className="font-medium text-navy underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
          >
            {EXPO_PHONE}
          </a>
        </p>
      </Container>
    </section>
  );
}
