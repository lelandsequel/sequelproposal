import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconTarget, IconRocket, IconChartBar, IconUsers, IconSearch, IconArrowRight } from "@tabler/icons-react";

export default function Proposal() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary/30">
      {/* Slide 1: Executive Summary */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-24 py-20 border-b border-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="max-w-4xl relative z-10">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary uppercase tracking-widest px-4 py-1">
            Strictly Confidential Proposal
          </Badge>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-none mb-8">
            The Heritage <span className="text-primary">Dominance.</span>
          </h1>
          <p className="text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
            This is not just a presentation; it is a fully functional high-performance engine designed to outperform every competitor in Lake George Village.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-slate-900">
            <div>
              <p className="text-slate-500 uppercase text-xs tracking-widest mb-2">Prepared By</p>
              <p className="text-xl font-bold">C&L Strategy</p>
            </div>
            <div>
              <p className="text-slate-500 uppercase text-xs tracking-widest mb-2">Client</p>
              <p className="text-xl font-bold">The Heritage of Lake George</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: The Challenge */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 lg:px-24 py-32 bg-slate-900/30">
        <div className="max-w-5xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 tracking-tight">The "Digital Drift" Problem</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-950 border-slate-800 p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-red-400 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400" /> Current State
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-slate-400">
                <p>• Static WordPress build (Slow & Vulnerable)</p>
                <p>• Missing hyper-local landmark traffic</p>
                <p>• Failing the "AI Search" (AEO) test</p>
                <p>• 4.2s average load time = 40% bounce rate</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20 p-8 shadow-2xl">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-primary flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" /> The C&L Standard
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <p>• Custom Hono/Bun Stack (Sub-300ms load)</p>
                <p>• 100+ Programmatic Landmark Landing Pages</p>
                <p>• Full AEO Structured Data Integration</p>
                <p>• Built to capture the "intent-based" traveler</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Slide 3: pSEO Moat */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-24 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.heritageoflakegeorge.com/wp-content/uploads/2019/04/photos-page.jpg')] opacity-10 grayscale scale-110" />
        <div className="max-w-4xl relative z-10">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8">Building the <span className="text-primary italic">Moat.</span></h2>
          <p className="text-2xl text-slate-400 mb-12">
            Most hotels target "Lake George Hotels." We target the specific intent of your guests. We've already built **102 custom landing pages** specifically for landmarks around you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {["Shepard Park", "Million Dollar Beach", "Prospect Mountain", "Americade HQ", "Mini Golf", "Steamboat Co.", "Adirondack Winery", "Magic Forest"].map((item) => (
              <Badge key={item} variant="secondary" className="bg-slate-800 text-slate-300 py-2 justify-center">
                {item}
              </Badge>
            ))}
          </div>
          <Button size="lg" className="rounded-full px-8 py-8 text-lg group" onClick={() => window.location.href = "/"}>
            Explore the Prototype <IconArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Slide 4: Roadmap */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-24 py-32 bg-slate-900/50">
        <div className="max-w-5xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16">The 4-Phase Dominance Plan</h2>
          <div className="space-y-8">
            {[
              { phase: "Phase 1", title: "Technical Foundation", desc: "Prototype live today. High-fidelity infrastructure & pSEO build.", status: "COMPLETE" },
              { phase: "Phase 2", title: "Content Expansion", desc: "Generating deep-content blocks for all 100+ guides.", status: "IN PROGRESS" },
              { phase: "Phase 3", title: "AEO & Local Sync", desc: "Google My Business synchronization and AI-search engine optimization.", status: "PENDING" },
              { phase: "Phase 4", title: "Seasonal Scaling", desc: "Quarterly updates to capture Winter Carnival, Americade, and Summer peaks.", status: "PENDING" },
            ].map((step, i) => (
              <div key={i} className="flex gap-8 items-start p-8 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-primary/50 transition-colors">
                <div className="text-primary font-black text-2xl opacity-50">{step.phase}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <Badge variant={step.status === "COMPLETE" ? "default" : "outline"}>{step.status}</Badge>
                  </div>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-32 px-6 text-center border-t border-slate-900">
        <h2 className="text-5xl font-bold mb-8">Ready to Own the Map?</h2>
        <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
          This isn't a cost; it's a digital asset that works 24/7 to fill your rooms. Transition from prototype to production today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button size="lg" className="rounded-full px-12 py-8 text-xl" onClick={() => window.location.href = "mailto:hello@cl-strategy.com"}>
            Approve Implementation
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-12 py-8 text-xl border-slate-800" onClick={() => window.location.href = "/"}>
            Back to Site Preview
          </Button>
        </div>
        <div className="mt-32 text-slate-600 uppercase text-xs tracking-[0.2em]">
          © 2026 C&L Strategy • cl-strategy.com
        </div>
      </footer>
    </div>
  );
}

