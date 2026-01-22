import { Lightbulb, ArrowUpRight, GitBranch, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Enhancement {
  id: string;
  title: string;
  description: string;
  category: "Security" | "Performance" | "Gas Optimization" | "Architecture";
  impact: "Critical" | "High" | "Medium";
  effort: "Low" | "Medium" | "High";
  specification: string;
  status: "Proposed" | "In Review" | "Approved" | "Implemented";
}

const enhancements: Enhancement[] = [
  {
    id: "PEP-001",
    title: "Implement CEI Pattern",
    description:
      "Refactor withdraw functions to follow Checks-Effects-Interactions pattern",
    category: "Security",
    impact: "Critical",
    effort: "Low",
    specification:
      "1. Move all external calls to end of function\n2. Update state before external calls\n3. Add reentrancy guard as backup",
    status: "Approved",
  },
  {
    id: "PEP-002",
    title: "Batch Processing Implementation",
    description: "Add multicall functionality for gas-efficient bulk operations",
    category: "Gas Optimization",
    impact: "High",
    effort: "Medium",
    specification:
      "1. Implement delegatecall-based multicall\n2. Add payable modifier for ETH handling\n3. Return array of results",
    status: "In Review",
  },
  {
    id: "PEP-003",
    title: "Upgrade to EIP-2612 Permits",
    description: "Enable gasless approvals using signed permits",
    category: "Performance",
    impact: "Medium",
    effort: "Medium",
    specification:
      "1. Extend ERC20 with permit function\n2. Implement EIP-712 typed data signing\n3. Add nonce tracking per address",
    status: "Proposed",
  },
  {
    id: "PEP-004",
    title: "Diamond Proxy Architecture",
    description: "Migrate to EIP-2535 for modular upgradability",
    category: "Architecture",
    impact: "High",
    effort: "High",
    specification:
      "1. Implement DiamondCut facet\n2. Create modular function selectors\n3. Add fallback routing logic",
    status: "Proposed",
  },
];

const categoryColors = {
  Security: "bg-destructive/10 text-destructive border-destructive/30",
  Performance: "bg-primary/10 text-primary border-primary/30",
  "Gas Optimization": "bg-success/10 text-success border-success/30",
  Architecture: "bg-accent/10 text-accent border-accent/30",
};

const impactColors = {
  Critical: "text-destructive",
  High: "text-warning",
  Medium: "text-primary",
};

const statusConfig = {
  Proposed: { icon: Lightbulb, color: "text-muted-foreground" },
  "In Review": { icon: GitBranch, color: "text-primary" },
  Approved: { icon: CheckCircle2, color: "text-success" },
  Implemented: { icon: CheckCircle2, color: "text-success" },
};

export function ProtocolEnhancements() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Protocol Enhancement Proposals</h2>
          <p className="text-sm text-muted-foreground">
            Detailed specifications for security and performance improvements
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          <span>Submit Proposal</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {enhancements.map((enhancement, index) => {
          const StatusIcon = statusConfig[enhancement.status].icon;
          return (
            <div
              key={enhancement.id}
              className="glass-card glow-border overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-5 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {enhancement.id}
                      </span>
                      <span
                        className={cn(
                          "text-xs px-2 py-0.5 rounded-full border",
                          categoryColors[enhancement.category]
                        )}
                      >
                        {enhancement.category}
                      </span>
                    </div>
                    <h3 className="font-semibold">{enhancement.title}</h3>
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-1.5",
                      statusConfig[enhancement.status].color
                    )}
                  >
                    <StatusIcon className="h-4 w-4" />
                    <span className="text-xs font-medium">{enhancement.status}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {enhancement.description}
                </p>

                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground">Impact:</span>
                    <span className={cn("font-medium", impactColors[enhancement.impact])}>
                      {enhancement.impact}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground">Effort:</span>
                    <span className="font-medium">{enhancement.effort}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted/20 border-t border-border/50">
                <h4 className="text-xs font-medium text-muted-foreground mb-2">
                  Specification
                </h4>
                <pre className="text-xs font-mono text-foreground/80 whitespace-pre-wrap">
                  {enhancement.specification}
                </pre>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
