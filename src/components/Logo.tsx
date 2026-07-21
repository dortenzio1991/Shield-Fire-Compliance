import Link from "next/link";

type Variant = "light" | "dark";

/**
 * Shield mark whose face is a checkmark.
 * Shield body = Brand Navy (or Paper on dark), check = Verify Gold.
 */
export function ShieldMark({
  className = "",
  variant = "light",
  animateCheck = false,
}: {
  className?: string;
  variant?: Variant;
  animateCheck?: boolean;
}) {
  const shield = variant === "dark" ? "#F7F9FB" : "#15233F";
  return (
    <svg
      viewBox="0 0 40 44"
      className={className}
      role="img"
      aria-label="Shield Fire Compliance mark"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 1.5 3 8.2v13.1c0 10.2 6.9 17.3 17 21.2 10.1-3.9 17-11 17-21.2V8.2L20 1.5Z"
        fill={shield}
      />
      <path
        d="M20 1.5 3 8.2v13.1c0 10.2 6.9 17.3 17 21.2 10.1-3.9 17-11 17-21.2V8.2L20 1.5Z"
        stroke={variant === "dark" ? "rgba(247,249,251,0.25)" : "rgba(11,23,48,0.15)"}
        strokeWidth="0.75"
      />
      <path
        d="m12 21.5 5.4 5.6L28 15.5"
        stroke="#E0A33B"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={48}
        strokeDasharray={48}
        strokeDashoffset={animateCheck ? 48 : 0}
        className={animateCheck ? "motion-safe:animate-draw-check" : ""}
      />
    </svg>
  );
}

export function Logo({
  variant = "light",
  href = "/",
  className = "",
}: {
  variant?: Variant;
  href?: string;
  className?: string;
}) {
  const wordColor = variant === "dark" ? "text-paper" : "text-navy";
  const subColor = variant === "dark" ? "text-paper/55" : "text-slate";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${"Shield"} Fire Compliance — home`}
    >
      <ShieldMark
        variant={variant}
        className="h-9 w-auto transition-transform duration-200 group-hover:-translate-y-0.5"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-[0.14em] ${wordColor}`}
        >
          SHIELD
        </span>
        <span
          className={`mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.22em] ${subColor}`}
        >
          Fire Compliance
        </span>
      </span>
    </Link>
  );
}
