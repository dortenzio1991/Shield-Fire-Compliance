"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { site } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "address", string>>;

const services = [
  "Sprinkler only (from $99/mo)",
  "Sprinkler and standpipe (from $125/mo)",
  "Several buildings",
  "Not sure yet",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Formspree form ID, supplied via env (NEXT_PUBLIC_FORMSPREE_ID). When unset,
// the form shows a visible error and never silently drops a submission.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null;

export function BookingForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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

    if (!ENDPOINT) {
      setStatus("error");
      setErrorMsg(
        `This form isn't connected yet. Please email us at ${site.email} and we'll get right back to you.`
      );
      return;
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(
          `Something went wrong sending your request. Please email us at ${site.email}.`
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        `We couldn't reach the server. Please check your connection or email us at ${site.email}.`
      );
    }
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
          Thanks, your request is in. We&apos;ll confirm scope, your monthly
          rate, and a visit window within one business day.
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
            placeholder="(929) 412-1143"
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
        <Field label="Number of risers (if known)" htmlFor="risers">
          <input
            id="risers"
            name="risers"
            type="text"
            inputMode="numeric"
            placeholder="e.g. 2"
            className={inputCls(false)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Preferred start date" htmlFor="date">
          <input id="date" name="date" type="date" className={inputCls(false)} />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Additional notes" htmlFor="notes">
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Access instructions, building details, or anything else we should know."
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

      {status === "error" && (
        <div
          className="mt-5 flex items-start gap-2.5 rounded-lg border border-[#e3b7b1] bg-[#fbf1ef] p-3.5"
          role="alert"
        >
          <AlertCircle size={16} className="mt-0.5 shrink-0 text-[#b23b2e]" />
          <p className="font-body text-[13px] leading-relaxed text-[#8a2f24]">
            {errorMsg}
          </p>
        </div>
      )}
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
