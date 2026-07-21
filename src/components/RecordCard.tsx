import { Check, MapPin } from "lucide-react";
import { cn } from "@/lib/cn";

type Row = { label: string; value: string; status?: "pass" | "fail" };

/**
 * The signature "verified inspection record" card — a Deep Navy tile with a
 * mono data readout, a gold check, a PASS status pill, timestamp and geo-tag.
 */
export function RecordCard({
  className,
  title = "Inspection Record",
  rows = defaultRows,
  animateCheck = false,
}: {
  className?: string;
  title?: string;
  rows?: Row[];
  animateCheck?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/10 bg-navy p-6 shadow-record sm:p-7",
        className
      )}
    >
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-paper/50">
            {title}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Verified
          </span>
        </div>

        {/* Gold check + primary readout */}
        <div className="mt-6 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30">
            <Check
              size={26}
              strokeWidth={3}
              className={cn(
                "text-gold",
                animateCheck && "motion-safe:animate-draw-check"
              )}
            />
          </span>
          <div className="min-w-0">
            <p className="font-mono text-sm text-paper/90">
              S-12 · 2026-06-30 · 09:42 · <span className="text-gold">PASS</span>
            </p>
            <p className="mt-1 font-body text-xs text-paper/50">
              Sprinkler &amp; standpipe · monthly visual inspection
            </p>
          </div>
        </div>

        {/* Data rows */}
        <dl className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.03]">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between px-4 py-2.5"
            >
              <dt className="font-mono text-[11px] uppercase tracking-wider text-paper/45">
                {row.label}
              </dt>
              <dd
                className={cn(
                  "font-mono text-sm",
                  row.status === "pass"
                    ? "font-medium text-gold"
                    : row.status === "fail"
                      ? "font-medium text-paper"
                      : "text-paper/90"
                )}
              >
                {row.status === "pass" ? (
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-gold/15 px-2 py-0.5 text-gold">
                    {row.value}
                  </span>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        {/* Geo-tag footer */}
        <div className="mt-5 flex items-center justify-between font-mono text-[11px] text-paper/45">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} className="text-gold/80" />
            40.7128° N, 74.0060° W
          </span>
          <span>Filed same day</span>
        </div>
      </div>
    </div>
  );
}

const defaultRows: Row[] = [
  { label: "Site", value: "S-12" },
  { label: "Date", value: "2026-06-30" },
  { label: "Time", value: "09:42 EDT" },
  { label: "Status", value: "PASS", status: "pass" },
];
