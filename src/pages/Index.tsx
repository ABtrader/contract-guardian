import { Header } from "@/components/dashboard/Header";
import { PerformanceMetrics } from "@/components/dashboard/PerformanceMetrics";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { SecurityAudit } from "@/components/dashboard/SecurityAudit";
import { AttackVectors } from "@/components/dashboard/AttackVectors";
import { ProtocolEnhancements } from "@/components/dashboard/ProtocolEnhancements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scan-line">
      {/* Background gradient effect */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-6 py-8 space-y-10">
          <PerformanceMetrics />
          <PerformanceChart />
          <div className="grid gap-10 lg:grid-cols-2">
            <SecurityAudit />
            <AttackVectors />
          </div>
          <ProtocolEnhancements />
        </main>

        <footer className="border-t border-border/50 mt-16">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-mono">ContractGuard v2.4.1</span>
                <span className="text-border">|</span>
                <span>Last audit: Block #18,547,329</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-primary transition-colors">Documentation</a>
                <a href="#" className="hover:text-primary transition-colors">API</a>
                <a href="#" className="hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
