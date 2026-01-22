import { Zap, Clock, Cpu, HardDrive } from "lucide-react";
import { MetricCard } from "@/components/ui/MetricCard";

const metrics = [
  {
    title: "Gas Efficiency",
    value: "94.2%",
    subtitle: "Avg. optimization score",
    icon: <Zap className="h-5 w-5" />,
    trend: { value: 2.4, isPositive: true },
    variant: "primary" as const,
  },
  {
    title: "Execution Time",
    value: "12.4ms",
    subtitle: "Average per transaction",
    icon: <Clock className="h-5 w-5" />,
    trend: { value: 8.1, isPositive: true },
    variant: "success" as const,
  },
  {
    title: "Throughput",
    value: "2,847",
    subtitle: "TPS (Transactions/sec)",
    icon: <Cpu className="h-5 w-5" />,
    trend: { value: 5.2, isPositive: true },
    variant: "default" as const,
  },
  {
    title: "Storage Used",
    value: "847 KB",
    subtitle: "Contract bytecode",
    icon: <HardDrive className="h-5 w-5" />,
    trend: { value: 1.8, isPositive: false },
    variant: "warning" as const,
  },
];

export function PerformanceMetrics() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Performance Benchmarks</h2>
          <p className="text-sm text-muted-foreground">
            Real-time execution metrics from latest contract analysis
          </p>
        </div>
        <span className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full">
          Updated 2m ago
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>
    </section>
  );
}
