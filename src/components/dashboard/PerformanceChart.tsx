import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const performanceData = [
  { time: "00:00", gas: 45000, latency: 8, throughput: 2100 },
  { time: "04:00", gas: 42000, latency: 7, throughput: 2400 },
  { time: "08:00", gas: 48000, latency: 12, throughput: 1900 },
  { time: "12:00", gas: 52000, latency: 15, throughput: 1700 },
  { time: "16:00", gas: 38000, latency: 6, throughput: 2800 },
  { time: "20:00", gas: 41000, latency: 9, throughput: 2500 },
  { time: "24:00", gas: 44000, latency: 10, throughput: 2300 },
];

const gasBreakdown = [
  { name: "Storage", value: 18500, fill: "hsl(199, 89%, 48%)" },
  { name: "Compute", value: 12000, fill: "hsl(263, 70%, 50%)" },
  { name: "Memory", value: 8500, fill: "hsl(142, 76%, 36%)" },
  { name: "Calldata", value: 5000, fill: "hsl(38, 92%, 50%)" },
];

export function PerformanceChart() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Execution Analytics</h2>
        <p className="text-sm text-muted-foreground">
          24-hour performance metrics and gas consumption breakdown
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 glass-card p-5">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Throughput & Latency Over Time
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="throughputGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(263, 70%, 50%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(263, 70%, 50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 17%)" />
                <XAxis
                  dataKey="time"
                  stroke="hsl(215, 20%, 55%)"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  yAxisId="left"
                  stroke="hsl(215, 20%, 55%)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="hsl(215, 20%, 55%)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 8%)",
                    border: "1px solid hsl(217, 33%, 17%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="throughput"
                  stroke="hsl(199, 89%, 48%)"
                  fill="url(#throughputGradient)"
                  strokeWidth={2}
                />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="latency"
                  stroke="hsl(263, 70%, 50%)"
                  fill="url(#latencyGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">Throughput (TPS)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-muted-foreground">Latency (ms)</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-5">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Gas Consumption Breakdown
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gasBreakdown} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 17%)" />
                <XAxis
                  type="number"
                  stroke="hsl(215, 20%, 55%)"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  stroke="hsl(215, 20%, 55%)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  width={60}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 8%)",
                    border: "1px solid hsl(217, 33%, 17%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  formatter={(value: number) => [`${value.toLocaleString()} gas`, "Usage"]}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total Gas Used</span>
              <span className="font-mono font-medium">44,000 gas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
