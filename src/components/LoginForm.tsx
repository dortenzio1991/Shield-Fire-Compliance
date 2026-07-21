"use client";

import { useState } from "react";
import { Info } from "lucide-react";

export function LoginForm() {
  const [notice, setNotice] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to the real client portal auth provider.
    setNotice(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-hairline bg-white p-8 shadow-card"
    >
      <div>
        <label
          htmlFor="login-email"
          className="mb-1.5 block font-body text-sm font-medium text-navy"
        >
          Email
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-lg border border-hairline bg-paper px-3.5 py-2.5 font-body text-[15px] text-navy placeholder:text-slate/60 transition-colors focus:border-navy/30 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="login-password"
          className="mb-1.5 block font-body text-sm font-medium text-navy"
        >
          Password
        </label>
        <input
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="••••••••"
          className="w-full rounded-lg border border-hairline bg-paper px-3.5 py-2.5 font-body text-[15px] text-navy placeholder:text-slate/60 transition-colors focus:border-navy/30 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        />
      </div>

      <button type="submit" className="btn btn-navy mt-7 w-full py-3">
        Log in
      </button>

      {notice && (
        <div
          className="mt-5 flex items-start gap-2.5 rounded-lg border border-hairline bg-paper p-3.5"
          role="status"
        >
          <Info size={16} className="mt-0.5 shrink-0 text-gold" />
          <p className="font-body text-[13px] leading-relaxed text-slate">
            Portal access is provisioned after your first inspection. Contact us
            and we&apos;ll set up your login.
          </p>
        </div>
      )}
    </form>
  );
}
