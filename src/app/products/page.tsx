"use client";

import { ArrowUpRight, Cpu, Eye, Shield, Zap } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const products = [
  {
    id: "boss",
    name: "BOSS",
    tagline: "Business Operating Super System",
    description:
      "An all-in-one AI-powered business operating system that unifies project management, team collaboration, analytics, financial tracking, and workflow automation into a single intelligent platform.",
    longDesc:
      "BOSS replaces the chaos of 10+ disconnected tools with one unified command center. AI prioritizes your team's tasks, surfaces insights before you ask, and automates repetitive workflows so you can focus on what matters.",
    features: [
      "AI-powered task prioritization and scheduling",
      "Real-time business analytics and dashboards",
      "Team collaboration with smart notifications",
      "Automated workflow engine with custom triggers",
      "Financial tracking and invoice management",
      "Integration hub for 200+ third-party tools",
    ],
    gradient: "from-violet-500/10 via-indigo-500/10 to-purple-500/10",
    accent: "violet",
    icon: Cpu,
  },
  {
    id: "gray",
    name: "GRAY",
    tagline: "Local AI IDE & Computer Agent",
    description:
      "A privacy-first AI development environment that runs entirely on your local machine. GRAY understands your codebase contextually and can autonomously execute complex programming tasks.",
    longDesc:
      "Unlike cloud-based AI coding tools, GRAY processes everything locally. Your code never leaves your machine. It indexes your entire repository, understands architectural patterns, and generates code that fits seamlessly.",
    features: [
      "100% local AI processing — zero cloud dependency",
      "Full codebase context awareness and indexing",
      "Autonomous code generation and refactoring",
      "Computer agent for system-level automation",
      "Multi-language support with deep framework knowledge",
      "Git-aware with intelligent conflict resolution",
    ],
    gradient: "from-gray-500/10 via-zinc-500/10 to-neutral-500/10",
    accent: "gray",
    icon: Eye,
  },
  {
    id: "agent-passport",
    name: "Agent Passport",
    tagline: "AI Agent Identity Platform",
    description:
      "The universal identity, authentication, and authorization layer for AI agents. Verify, manage, and govern AI agents across platforms with cryptographic identity proofs.",
    longDesc:
      "As AI agents proliferate, knowing who or what you're interacting with becomes critical. Agent Passport provides verifiable identity for AI agents, enabling trust, accountability, and interoperability across systems.",
    features: [
      "Cryptographic agent identity and verification",
      "Cross-platform authentication and authorization",
      "Behavioral attestation and trust scoring",
      "Compliance-ready audit trails and logging",
      "Agent capability declaration and discovery",
      "Zero-knowledge proofs for privacy-preserving verification",
    ],
    gradient: "from-cyan-500/10 via-blue-500/10 to-teal-500/10",
    accent: "cyan",
    icon: Shield,
  },
  {
    id: "ai-ads",
    name: "Troid X AI Ads",
    tagline: "AI-Powered Advertising Platform",
    description:
      "Harness AI to create, optimize, and scale advertising campaigns that deliver measurable results with smart targeting, creative generation, and real-time budget optimization.",
    longDesc:
      "Our AI analyzes millions of data points to identify your ideal audience, generates high-converting creative variations, and continuously optimizes spend across channels to maximize your return on ad spend.",
    features: [
      "AI-generated ad creatives and copy variations",
      "Predictive audience targeting and lookalikes",
      "Real-time budget optimization across channels",
      "A/B testing with automatic winner selection",
      "Cross-platform campaign management",
      "Detailed performance analytics and attribution",
    ],
    gradient: "from-orange-500/10 via-red-500/10 to-amber-500/10",
    accent: "orange",
    icon: Zap,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="max-w-3xl mb-24">
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent border border-accent/20 rounded-full mb-6">
            Products
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Our
            <br />
            <span className="text-gradient">products</span>
          </h1>
          <p className="mt-6 text-lg text-white/40 max-w-xl leading-relaxed">
            Category-defining products built with AI at the core. Each one is designed
            to solve real problems at scale.
          </p>
        </AnimatedSection>

        {/* Products */}
        <div className="space-y-32">
          {products.map((product, i) => (
            <AnimatedSection key={product.id} delay={0.1}>
              <div
                id={product.id}
                className={`relative rounded-3xl bg-gradient-to-br ${product.gradient} border border-white/[0.06] overflow-hidden`}
              >
                {/* Background element */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-3xl" />

                <div className="relative p-8 md:p-16">
                  {/* Number */}
                  <span className="text-xs font-mono text-white/20 tracking-widest">
                    0{i + 1}
                  </span>

                  <div className="mt-6 grid lg:grid-cols-2 gap-12">
                    {/* Info */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <product.icon size={24} className="text-white/60" />
                        <span className="text-xs uppercase tracking-widest text-white/30">
                          {product.tagline}
                        </span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {product.name}
                      </h2>
                      <p className="text-white/50 leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <p className="text-white/30 text-sm leading-relaxed">
                        {product.longDesc}
                      </p>

                      <div className="mt-8 flex gap-3">
                        <button className="px-6 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2">
                          Request Access
                          <ArrowUpRight size={14} />
                        </button>
                        <button className="px-6 py-3 rounded-full border border-white/[0.1] text-white/60 text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <span className="text-xs uppercase tracking-widest text-white/20 mb-4 block">
                        Key Features
                      </span>
                      {product.features.map((feature, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.12] transition-all duration-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span className="text-sm text-white/50">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in our products?
          </h3>
          <p className="text-white/40 mb-8 max-w-md mx-auto">
            Get early access or schedule a demo to see how our products can transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-accent hover:text-white transition-all"
          >
            Schedule a Demo
            <ArrowUpRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
