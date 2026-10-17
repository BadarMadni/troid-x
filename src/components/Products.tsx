"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Cpu, Eye, Shield, Zap } from "lucide-react";

const products = [
  {
    id: "boss",
    name: "BOSS",
    tagline: "Business Operating Super System",
    description:
      "An all-in-one AI-powered platform that unifies project management, team collaboration, analytics, and automation into one intelligent operating system.",
    features: ["AI Task Prioritization", "Real-time Analytics", "Team Collaboration", "Workflow Automation"],
    icon: Cpu,
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(99,102,241,0.05))",
    accentColor: "#a78bfa",
    number: "01",
  },
  {
    id: "gray",
    name: "GRAY",
    tagline: "Local AI IDE & Computer Agent",
    description:
      "A privacy-first AI development environment that runs entirely on your machine. GRAY understands your codebase and autonomously executes complex tasks.",
    features: ["100% Local Processing", "Code Generation", "Computer Agent", "Privacy First"],
    icon: Eye,
    gradient: "linear-gradient(135deg, rgba(161,161,170,0.12), rgba(113,113,122,0.04))",
    accentColor: "#d4d4d8",
    number: "02",
  },
  {
    id: "agent-passport",
    name: "Agent Passport",
    tagline: "AI Agent Identity Platform",
    description:
      "The universal identity and authentication layer for AI agents. Verify, authorize, and manage AI agents across platforms with cryptographic proofs.",
    features: ["Agent Verification", "Identity Proofs", "Cross-Platform Auth", "Trust Scoring"],
    icon: Shield,
    gradient: "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(59,130,246,0.04))",
    accentColor: "#22d3ee",
    number: "03",
  },
  {
    id: "ai-ads",
    name: "AI Ads",
    tagline: "AI-Powered Advertising Platform",
    description:
      "Harness AI to create, optimize, and scale advertising campaigns. Smart targeting, creative generation, and real-time budget optimization.",
    features: ["AI Creative Gen", "Smart Targeting", "Budget Optimization", "Real-time Analytics"],
    icon: Zap,
    gradient: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(239,68,68,0.04))",
    accentColor: "#fb923c",
    number: "04",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      id={product.id}
      className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.01]"
      style={{
        background: product.gradient,
        border: "1px solid rgba(255,255,255,0.04)",
      }}
      data-hover
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ boxShadow: `inset 0 0 0 1px ${product.accentColor}30, 0 0 60px -20px ${product.accentColor}20` }}
      />

      {/* Big background number */}
      <span
        className="absolute -top-8 -right-4 text-[220px] md:text-[300px] font-black leading-none select-none pointer-events-none opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700"
      >
        {product.number}
      </span>

      <div className="relative p-8 md:p-14">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <product.icon size={18} style={{ color: product.accentColor }} className="opacity-60" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/20">
              {product.tagline}
            </span>
          </div>
          <span className="text-xs font-mono" style={{ color: `${product.accentColor}60` }}>
            {product.number}
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Info - 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter group-hover:tracking-tight transition-all duration-700">
              {product.name}
            </h3>
            <p className="mt-5 text-white/30 leading-relaxed max-w-lg text-base">
              {product.description}
            </p>
            <div className="mt-8">
              <button
                className="inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-all duration-300 group/btn"
                data-hover
              >
                <span className="border-b border-white/10 pb-0.5 group-hover/btn:border-white/40 transition-colors">
                  Learn More
                </span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </button>
            </div>
          </div>

          {/* Features - 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-2">
            {product.features.map((feature, j) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + j * 0.08 + 0.3 }}
                className="p-4 rounded-xl transition-all duration-500 group-hover:border-white/[0.08]"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div className="w-1 h-1 rounded-full mb-3 opacity-60" style={{ background: product.accentColor }} />
                <span className="text-xs text-white/40">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headingRef} className="mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-accent/40" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent/60">
              Products
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
          >
            Products that
            <span className="text-gradient"> redefine</span>
            <br />
            <span className="text-white/20">industries</span>
          </motion.h2>
        </div>

        <div className="space-y-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
