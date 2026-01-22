import { cn } from "@/lib/utils";

type Status = "online" | "processing" | "warning" | "error" | "idle";

interface StatusIndicatorProps {
  status: Status;
  label?: string;
  className?: string;
}

const statusConfig = {
  online: {
    color: "bg-success",
    label: "Online",
    animate: true,
  },
  processing: {
    color: "bg-primary",
    label: "Processing",
    animate: true,
  },
  warning: {
    color: "bg-warning",
    label: "Warning",
    animate: false,
  },
  error: {
    color: "bg-destructive",
    label: "Error",
    animate: true,
  },
  idle: {
    color: "bg-muted-foreground",
    label: "Idle",
    animate: false,
  },
};

export function StatusIndicator({
  status,
  label,
  className,
}: StatusIndicatorProps) {
  const config = statusConfig[status];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="relative flex h-2.5 w-2.5">
        {config.animate && (
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              config.color
            )}
          />
        )}
        <span
          className={cn(
            "relative inline-flex rounded-full h-2.5 w-2.5",
            config.color
          )}
        />
      </span>
      <span className="text-sm text-muted-foreground">
        {label || config.label}
      </span>
    </div>
  );
}
