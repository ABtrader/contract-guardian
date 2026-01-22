import { Target, TrendingUp, ShieldAlert, Skull } from "lucide-react";
import { cn } from "@/lib/utils";

interface AttackVector {
  id: string;
  name: string;
  category: string;
  riskLevel: number;
  mitigation: string;
  exploitability: "High" | "Medium" | "Low";
}

const attackVectors: AttackVector[] = [
  {
    id: "AV-001",
    name: "Flash Loan Attack",
    category: "DeFi Exploit",
    riskLevel: 85,
    mitigation: "Implement price oracle checks with TWAP",
    exploitability: "High",
  },
  {
    id: "AV-002",
    name: "Sandwich Attack",
    category: "MEV Exploit",
    riskLevel: 72,
    mitigation: "Add slippage protection and commit-reveal",
    exploitability: "High",
  },
  {
    id: "AV-003",
    name: "Governance Takeover",
    category: "Access Control",
    riskLevel: 45,
    mitigation: "Implement timelock and multi-sig",
    exploitability: "Medium",
  },
  {
    id: "AV-004",
    name: "Oracle Manipulation",
    category: "Data Integrity",
    riskLevel: 68,
    mitigation: "Use Chainlink with circuit breakers",
    exploitability: "Medium",
  },
];

const exploitabilityColors = {
  High: "text-destructive",
  Medium: "text-warning",
  Low: "text-success",
};

export function AttackVectors() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Attack Vector Analysis</h2>
          <p className="text-sm text-muted-foreground">
            Potential exploitation paths and mitigation strategies
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-primary" />
          <span className="text-sm font-mono text-muted-foreground">
            {attackVectors.length} vectors identified
          </span>
        </div>
      </div>

      <div className="grid gap-4">
        {attackVectors.map((vector, index) => (
          <div
            key={vector.id}
            className="glass-card glow-border p-5 animate-fade-in"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "p-2.5 rounded-lg",
                    vector.riskLevel >= 70
                      ? "bg-destructive/10"
                      : vector.riskLevel >= 50
                      ? "bg-warning/10"
                      : "bg-success/10"
                  )}
                >
                  {vector.riskLevel >= 70 ? (
                    <Skull className="h-5 w-5 text-destructive" />
                  ) : (
                    <Target className="h-5 w-5 text-warning" />
                  )}
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {vector.id}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {vector.category}
                    </span>
                  </div>
                  <h3 className="font-semibold">{vector.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary">Mitigation:</span>{" "}
                    {vector.mitigation}
                  </p>
                </div>
              </div>

              <div className="text-right space-y-2">
                <div className="flex items-center gap-2 justify-end">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span
                    className={cn(
                      "text-sm font-medium",
                      exploitabilityColors[vector.exploitability]
                    )}
                  >
                    {vector.exploitability} Risk
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-mono font-bold">
                    {vector.riskLevel}%
                  </div>
                  <div className="w-24 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-500",
                        vector.riskLevel >= 70
                          ? "bg-destructive"
                          : vector.riskLevel >= 50
                          ? "bg-warning"
                          : "bg-success"
                      )}
                      style={{ width: `${vector.riskLevel}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
