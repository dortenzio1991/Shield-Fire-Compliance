import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-eyebrow",
        className
      )}
    >
      {index && <span className="text-slate">{index}</span>}
      {index && <span aria-hidden className="text-hairline">—</span>}
      <span className="text-gold">{children}</span>
    </span>
  );
}
