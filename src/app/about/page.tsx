"use client";

import { Zap, Shield, Users, Rocket, Target, Lightbulb, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: Zap, title: "Innovation First", desc: "We push boundaries with AI and emerging technology to deliver solutions that anticipate the future." },
  { icon: Shield, title: "Built to Last", desc: "Enterprise-grade architecture with rigorous testing and battle-tested infrastructure for reliability at scale." },
  { icon: Users, title: "Human-Centered", desc: "Every interface we design and system we build starts with deeply understanding human needs." },
  { icon: Rocket, title: "Velocity & Quality", desc: "Agile sprints, CI/CD pipelines, and automated quality gates deliver excellence at speed." },
  { icon: Target, title: "Results-Driven", desc: "We measure success by outcomes — business metrics, user satisfaction, and competitive advantage." },
  { icon: Lightbulb, title: "Continuous Learning", desc: "Our team stays on the cutting edge, constantly exploring new technologies and methodologies." },
];

const timeline = [
  { year: "2024", title: "Founded", desc: "Troid X was born from a vision to make AI-powered software accessible to every business." },
  { year: "2024", title: "First Products", desc: "Launched BOSS and GRAY — our flagship business OS and local AI IDE products." },
  { year: "2025", title: "Agent Passport", desc: "Released the AI Agent Identity Platform, creating a new category in agent infrastructure." },
  { year: "2025", title: "Global Expansion", desc: "Expanded services globally, serving clients across 4 continents with a remote-first team." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="max-w-3xl mb-24">
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent border border-accent/20 rounded-full mb-6">
            About
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Engineering the
            <br />
            <span className="text-gradient">future of software</span>
          </h1>
          <p className="mt-6 text-lg text-white/40 max-w-xl leading-relaxed">
            Troid X is a technology company that builds intelligent software products
            and provides world-class engineering services. We believe AI should
            amplify human capability, not replace it.
          </p>
        </AnimatedSection>

        {/* Mission */}
        <AnimatedSection className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Our Mission
              </h2>
              <p className="text-white/40 leading-relaxed mb-4">
                To democratize access to intelligent software by building products and services
                that empower businesses of all sizes to harness the power of AI and modern technology.
              </p>
              <p className="text-white/30 leading-relaxed">
                We&apos;re a team of engineers, designers, and strategists who are passionate about
                pushing the boundaries of what&apos;s possible. Our work spans from AI-powered
                micro-services to full-scale enterprise platforms, always with a focus on
                quality, performance, and user experience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "15+", label: "Team Members" },
                { value: "4", label: "AI Products" },
                { value: "4+", label: "Continents Served" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl glass text-center hover-lift transition-all duration-500"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/30 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="mt-4 text-white/40 max-w-lg mx-auto">
              The principles that guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl glass hover-lift h-full transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <v.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-base font-semibold text-white/90 mb-2">{v.title}</h3>
                  <p className="text-sm text-white/35 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-white/[0.06]" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1} direction="left">
                  <div className="relative flex gap-6 items-start">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-surface-lighter border border-white/[0.1] flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <div className="pt-1.5">
                      <span className="text-xs font-mono text-accent tracking-wider">{item.year}</span>
                      <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                      <p className="text-sm text-white/35 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="p-12 rounded-3xl glass">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to join the team?
            </h3>
            <p className="text-white/40 mb-8 max-w-md mx-auto">
              We&apos;re always looking for talented engineers, designers, and thinkers
              who want to build the future of software.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-accent hover:text-white transition-all"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
