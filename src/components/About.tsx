"use client";

import { Zap, Shield, Users, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    desc: "We push boundaries with AI and emerging tech to deliver solutions that don't just solve today's problems — they anticipate tomorrow's.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    desc: "Enterprise-grade architecture, rigorous testing, and battle-tested infrastructure ensure your products perform at scale.",
  },
  {
    icon: Users,
    title: "Human-Centered",
    desc: "Technology should serve people. Every interface we design and system we build starts with understanding human needs.",
  },
  {
    icon: Rocket,
    title: "Velocity & Quality",
    desc: "We move fast without breaking things. Agile sprints, CI/CD pipelines, and automated quality gates keep delivery tight.",
  },
];

export default function About() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 glow-line" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <AnimatedSection direction="left">
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent border border-accent/20 rounded-full mb-6">
              About Troid X
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Engineering the
              <br />
              <span className="text-gradient">future of software</span>
            </h2>
            <p className="mt-6 text-white/40 text-lg leading-relaxed">
              Troid X is a technology company that builds intelligent software products
              and provides world-class engineering services. We specialize in AI,
              cloud-native architectures, and digital transformation.
            </p>
            <p className="mt-4 text-white/30 leading-relaxed">
              Our team combines deep technical expertise with creative vision to deliver
              solutions that are not only functional but exceptional. From startups to
              enterprises, we partner with ambitious teams to build what&apos;s next.
            </p>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "2024", label: "Founded" },
                { value: "15+", label: "Engineers" },
                { value: "Global", label: "Reach" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/30 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1} direction="scale">
                <div className="group p-6 rounded-2xl glass hover-lift h-full transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <v.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-white/90 mb-2">{v.title}</h3>
                  <p className="text-xs text-white/35 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
