"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const technologies = [
  "React", "Next.js", "TypeScript", "Python", "Node.js", "Go",
  "TensorFlow", "PyTorch", "AWS", "GCP", "Docker", "Kubernetes",
  "PostgreSQL", "Redis", "GraphQL", "Rust",
];

export default function TechStack() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-xs text-white/20 uppercase tracking-[0.3em] font-medium">
            Technologies We Work With
          </span>
        </AnimatedSection>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6"
          >
            {[...technologies, ...technologies, ...technologies].map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="shrink-0 px-6 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm text-white/30 hover:text-white/60 hover:border-white/[0.15] transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
