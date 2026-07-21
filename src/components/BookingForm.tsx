"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type Errors = Partial<Record<"name" | "email" | "address", string>>;

const services = [
  "Sprinkler systems",
  "Standpipe systems",
  "FDNY Certificate of Fitness compliance",
  "Recurring monthly inspections",
  "Not sure — help me choose",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function BookingForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) next.email = "Enter a valid email address.";
    if (!address) next.address = "Please enter the site address.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    // TODO: wire this up to a real booking endpoint / CRM.
    // Stubbed submit — simulate a network round-trip, then show success.
    window.setTimeout(() => setStatus("success"), 700);
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-hairline bg-white p-8 text-center shadow-card">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
          <CheckCircle2 className="text-gold" size={30} />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-navy">
          Request received.
        </h3>
        <p className="mt-3 font-body text-[15px] leading-relaxed text-slate">
          Thanks — your request is in. We&apos;ll confirm scope, pricing, and a
          visit window within one business day.
        </p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-eyebrow text-slate">
          REC · RECEIVED · ON RECORD
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-hairline bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            className={inputCls(!!errors.name)}
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Company / property" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Properties LLC"
            className={inputCls(false)}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={inputCls(!!errors.email)}
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(212) 555-0148"
            className={inputCls(false)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Site address"
          htmlFor="address"
          error={errors.address}
          required
        >
          <input
            id="address"
            name="address"
            type="text"
            autoComplete="street-address"
            placeholder="Street, borough, NY, ZIP"
            className={inputCls(!!errors.address)}
            aria-invalid={!!errors.address}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Service needed" htmlFor="service">
          <select id="service" name="service" className={inputCls(false)}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred date" htmlFor="date">
          <input
            id="date"
            name="date"
            type="date"
            className={inputCls(false)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Additional notes" htmlFor="notes">
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Number of risers, access instructions, or anything else we should know."
            className={`${inputCls(false)} resize-y`}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary mt-7 w-full py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          "Request booking"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-body text-sm font-medium text-navy"
      >
        {label}
        {required && <span className="ml-0.5 text-gold">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 font-body text-xs text-[#b23b2e]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-paper px-3.5 py-2.5 font-body text-[15px] text-navy",
    "placeholder:text-slate/60 transition-colors",
    "focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60",
    hasError ? "border-[#b23b2e]" : "border-hairline focus:border-navy/30",
  ].join(" ");
}
