import { AlertTriangle, Shield, CheckCircle2, XCircle } from "lucide-react";
import { SeverityBadge } from "@/components/ui/SeverityBadge";
import { cn } from "@/lib/utils";

interface Finding {
  id: string;
  title: string;
  description: string;
  severity: "critical" | "high" | "medium" | "low" | "info";
  location: string;
  status: "open" | "resolved" | "acknowledged";
}

const findings: Finding[] = [
  {
    id: "VULN-001",
    title: "Reentrancy Vulnerability",
    description: "External call made before state update in withdraw() function",
    severity: "critical",
    location: "Contract.sol:142",
    status: "open",
  },
  {
    id: "VULN-002",
    title: "Integer Overflow Risk",
    description: "Unchecked arithmetic in token transfer calculation",
    severity: "high",
    location: "Token.sol:89",
    status: "open",
  },
  {
    id: "VULN-003",
    title: "Access Control Missing",
    description: "Admin function lacks onlyOwner modifier",
    severity: "medium",
    location: "Admin.sol:45",
    status: "acknowledged",
  },
  {
    id: "VULN-004",
    title: "Floating Pragma",
    description: "Consider locking pragma to specific compiler version",
    severity: "low",
    location: "Contract.sol:1",
    status: "resolved",
  },
  {
    id: "VULN-005",
    title: "Missing Event Emission",
    description: "State change in setFee() should emit event for transparency",
    severity: "info",
    location: "Contract.sol:67",
    status: "open",
  },
];

const statusIcons = {
  open: <AlertTriangle className="h-4 w-4 text-warning" />,
  resolved: <CheckCircle2 className="h-4 w-4 text-success" />,
  acknowledged: <Shield className="h-4 w-4 text-primary" />,
};

export function SecurityAudit() {
  const criticalCount = findings.filter((f) => f.severity === "critical").length;
  const highCount = findings.filter((f) => f.severity === "high").length;
  const openCount = findings.filter((f) => f.status === "open").length;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Security Audit Findings</h2>
          <p className="text-sm text-muted-foreground">
            Automated vulnerability detection and analysis
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30">
            <XCircle className="h-3.5 w-3.5 text-destructive" />
            <span className="text-xs font-mono text-destructive">
              {criticalCount} Critical
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-warning/10 border border-warning/30">
            <AlertTriangle className="h-3.5 w-3.5 text-warning" />
            <span className="text-xs font-mono text-warning">{highCount} High</span>
          </div>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="divide-y divide-border/50">
          {findings.map((finding, index) => (
            <div
              key={finding.id}
              className={cn(
                "p-4 hover:bg-muted/30 transition-colors cursor-pointer animate-fade-in",
                { "opacity-50": finding.status === "resolved" }
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  {statusIcons[finding.status]}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {finding.id}
                      </span>
                      <SeverityBadge severity={finding.severity} />
                    </div>
                    <h3 className="font-medium">{finding.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {finding.description}
                    </p>
                  </div>
                </div>
                <code className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {finding.location}
                </code>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-muted/20 border-t border-border/50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {openCount} of {findings.length} findings require attention
            </span>
            <button className="text-sm font-medium text-primary hover:underline">
              View Full Report →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
