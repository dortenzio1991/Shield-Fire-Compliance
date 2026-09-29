import { Check, Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type Log = {
  id: string;
  system: string;
  time: string;
  status: "PASS" | "FAIL";
};

const logs: Log[] = [
  { id: "SPR-01", system: "Sprinkler · Riser A", time: "09:42", status: "PASS" },
  { id: "SPR-02", system: "Sprinkler · Riser B", time: "09:58", status: "PASS" },
  { id: "STP-01", system: "Standpipe · Stair 2", time: "10:11", status: "PASS" },
  { id: "STP-02", system: "Standpipe · Stair 3", time: "10:24", status: "FAIL" },
  { id: "SPR-03", system: "Sprinkler · Cellar", time: "10:40", status: "PASS" },
];

export function VerifiedRecord() {
  return (
    <section className="bg-deep-navy py-20 text-paper sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left — copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-eyebrow">
                <span className="text-paper/45">05</span>
                <span className="text-white/20">·</span>
                <span className="text-gold">The verified record</span>
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-[2.6rem]">
                Every inspection, on the record.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-paper/70">
                Photographed. Signed on site. In your inbox after every visit.
                Each checkpoint is marked pass or fail with a photo, and the
                signed log book is photographed too, so you can see exactly what
                was checked.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-9 grid grid-cols-2 gap-6">
                {[
                  { icon: Camera, k: "Photo verified", v: "Every visit" },
                  { icon: Check, k: "Signed on site", v: "Every log book" },
                ].map(({ icon: Icon, k, v }) => (
                  <div key={k}>
                    <Icon size={18} className="text-gold" />
                    <dt className="mt-2 font-display text-base font-semibold text-paper">
                      {k}
                    </dt>
                    <dd className="font-mono text-[11px] uppercase tracking-wider text-paper/45">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Right — sample report UI */}
          <Reveal delay={0.1} y={24}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy/40 shadow-record backdrop-blur">
              {/* window chrome */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-paper/45">
                  Sample report
                </span>
              </div>

              {/* meta bar */}
              <div className="border-b border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[11px] text-paper/55">
                <span>
                  Site: Sample building, Brooklyn · FDNY C of F S-12 #93607281 ·
                  S-13 #93635076
                </span>
              </div>

              {/* log rows */}
              <div className="divide-y divide-white/10">
                <div className="grid grid-cols-[64px_1fr_58px_64px] gap-2 px-5 py-2.5 font-mono text-[10px] uppercase tracking-wider text-paper/40">
                  <span>ID</span>
                  <span>System</span>
                  <span>Time</span>
                  <span className="text-right">Status</span>
                </div>
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className="grid grid-cols-[64px_1fr_58px_64px] items-center gap-2 px-5 py-3 font-mono text-[13px] text-paper/85"
                  >
                    <span className="text-paper/60">{log.id}</span>
                    <span className="truncate text-paper/80">{log.system}</span>
                    <span className="text-paper/55">{log.time}</span>
                    <span className="text-right">
                      <span
                        className={cn(
                          "inline-flex rounded-md px-2 py-0.5 text-[11px] font-medium",
                          log.status === "PASS"
                            ? "bg-gold/15 text-gold"
                            : "bg-white/10 text-paper"
                        )}
                      >
                        {log.status}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              {/* photo strip */}
              <div className="flex items-center gap-1.5 border-t border-white/10 bg-white/[0.02] px-5 py-2.5 font-mono text-[11px] text-paper/55">
                <Camera size={12} className="text-gold/80" />
                Photos: 12 · Log book signed and photographed
              </div>

              {/* footer */}
              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-5 py-3.5 font-mono text-[11px] text-paper/50">
                <span>4 pass · 1 deficiency · property manager notified 10:25</span>
                <span className="inline-flex items-center gap-1.5 text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Sent
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
