"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Users, Rocket } from "lucide-react";

const values = [
  { icon: Zap, title: "Innovation First", desc: "We push boundaries with AI and emerging tech to deliver solutions that anticipate tomorrow." },
  { icon: Shield, title: "Built to Last", desc: "Enterprise-grade architecture, rigorous testing, and battle-tested infrastructure at scale." },
  { icon: Users, title: "Human-Centered", desc: "Every interface and system starts with deeply understanding human needs." },
  { icon: Rocket, title: "Velocity & Quality", desc: "Agile sprints, CI/CD pipelines, and automated quality gates deliver excellence at speed." },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,1) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-accent/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent/60">About</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Engineering the
              <br />
              <span className="text-gradient">future of</span>
              <br />
              <span className="text-white/20">software</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-white/30 text-base leading-relaxed max-w-lg"
            >
              Troid X is a technology company that builds intelligent software products
              and provides world-class engineering services. We specialize in AI,
              cloud-native architectures, and digital transformation.
            </motion.p>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex gap-10"
            >
              {[
                { value: "2024", label: "Founded" },
                { value: "15+", label: "Engineers" },
                { value: "Global", label: "Reach" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-500">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Values as stacked cards */}
          <div className="space-y-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 rounded-2xl glass hover-lift transition-all duration-700 flex items-start gap-5"
                data-hover
              >
                <div className="w-11 h-11 rounded-xl bg-accent/[0.06] border border-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-500">
                  <v.icon size={20} className="text-accent/60 group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{v.title}</h3>
                  <p className="mt-1 text-xs text-white/25 leading-relaxed group-hover:text-white/40 transition-colors">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
