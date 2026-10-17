"use client";

import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const products = [
  {
    id: "boss",
    name: "BOSS",
    tagline: "Business Operating Super System",
    description:
      "An all-in-one AI-powered platform that unifies project management, team collaboration, analytics, and automation into a single intelligent operating system for modern businesses.",
    features: ["AI Task Prioritization", "Real-time Analytics", "Team Collaboration", "Workflow Automation"],
    gradientFrom: "rgba(139,92,246,0.15)",
    gradientTo: "rgba(99,102,241,0.08)",
    accentColor: "#a78bfa",
    borderColor: "rgba(139,92,246,0.2)",
    number: "01",
  },
  {
    id: "gray",
    name: "GRAY",
    tagline: "Local AI IDE & Computer Agent",
    description:
      "A privacy-first AI development environment that runs entirely on your machine. GRAY understands your codebase, suggests intelligent completions, and can autonomously execute complex programming tasks.",
    features: ["Local AI Processing", "Code Generation", "Computer Agent", "Privacy First"],
    gradientFrom: "rgba(161,161,170,0.12)",
    gradientTo: "rgba(113,113,122,0.06)",
    accentColor: "#d4d4d8",
    borderColor: "rgba(161,161,170,0.15)",
    number: "02",
  },
  {
    id: "agent-passport",
    name: "Agent Passport",
    tagline: "AI Agent Identity Platform",
    description:
      "The universal identity and authentication layer for AI agents. Verify, authorize, and manage AI agents across platforms with cryptographic identity proofs and behavioral attestations.",
    features: ["Agent Verification", "Identity Proofs", "Cross-Platform Auth", "Behavioral Attestation"],
    gradientFrom: "rgba(34,211,238,0.12)",
    gradientTo: "rgba(59,130,246,0.06)",
    accentColor: "#22d3ee",
    borderColor: "rgba(34,211,238,0.15)",
    number: "03",
  },
  {
    id: "ai-ads",
    name: "Troid X AI Ads",
    tagline: "AI-Powered Advertising Platform",
    description:
      "Harness the power of AI to create, optimize, and scale advertising campaigns that deliver measurable results. Smart targeting, creative generation, and real-time budget optimization.",
    features: ["AI Creative Generation", "Smart Targeting", "Budget Optimization", "Real-time Analytics"],
    gradientFrom: "rgba(249,115,22,0.12)",
    gradientTo: "rgba(239,68,68,0.06)",
    accentColor: "#fb923c",
    borderColor: "rgba(249,115,22,0.15)",
    number: "04",
  },
];

export default function Products() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent border border-accent/20 rounded-full mb-6">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Products that
            <span className="text-gradient"> redefine</span>
          </h2>
          <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto">
            We don&apos;t just build for clients — we build our own category-defining products
            powered by AI.
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {products.map((product, i) => (
            <AnimatedSection
              key={product.id}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                id={product.id}
                className="group relative rounded-3xl p-8 md:p-12 transition-all duration-500 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`,
                  border: `1px solid ${product.borderColor}`,
                }}
              >
                {/* Background number */}
                <span className="absolute top-6 right-8 text-[120px] md:text-[200px] font-bold leading-none select-none" style={{ color: "rgba(255,255,255,0.02)" }}>
                  {product.number}
                </span>

                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="text-xs font-mono tracking-wider uppercase" style={{ color: product.accentColor }}>
                      {product.number} / {product.tagline}
                    </span>
                    <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-white/40 leading-relaxed">
                      {product.description}
                    </p>
                    <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors group/btn">
                      Learn More
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="p-4 rounded-xl transition-all duration-300"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span className="text-sm text-white/60">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
