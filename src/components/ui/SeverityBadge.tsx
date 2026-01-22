import { cn } from "@/lib/utils";

type Severity = "critical" | "high" | "medium" | "low" | "info";

interface SeverityBadgeProps {
  severity: Severity;
  className?: string;
}

const severityConfig = {
  critical: {
    label: "Critical",
    className: "bg-destructive/20 text-destructive border-destructive/30",
  },
  high: {
    label: "High",
    className: "bg-warning/20 text-warning border-warning/30",
  },
  medium: {
    label: "Medium",
    className: "bg-accent/20 text-accent border-accent/30",
  },
  low: {
    label: "Low",
    className: "bg-primary/20 text-primary border-primary/30",
  },
  info: {
    label: "Info",
    className: "bg-muted text-muted-foreground border-border",
  },
};

export function SeverityBadge({ severity, className }: SeverityBadgeProps) {
  const config = severityConfig[severity];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
