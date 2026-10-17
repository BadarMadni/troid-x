"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const technologies = [
  "React", "Next.js", "TypeScript", "Python", "Node.js", "Go",
  "TensorFlow", "PyTorch", "AWS", "GCP", "Docker", "Kubernetes",
  "PostgreSQL", "Redis", "GraphQL", "Rust", "Swift", "Flutter",
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Divider line with glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] glow-line" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <span className="text-[10px] text-white/15 uppercase tracking-[0.4em] font-medium">
            Our Technology Stack
          </span>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="px-5 py-2.5 rounded-full border border-white/[0.04] bg-white/[0.01] text-sm text-white/20 hover:text-white/60 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-500"
              data-hover
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
