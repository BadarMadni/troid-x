"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain, Code2, Globe, Smartphone, Bot, Palette,
  Cloud, Plug, ShoppingCart, Megaphone, BarChart3, PenTool,
  Building2, Layers, Cpu,
} from "lucide-react";

const services = [
  { icon: Brain, title: "AI Development", desc: "Custom AI/ML models, NLP & deep learning", size: "large" },
  { icon: Code2, title: "Custom Software", desc: "Bespoke solutions with modern architectures", size: "small" },
  { icon: Globe, title: "Web Development", desc: "High-performance web applications", size: "small" },
  { icon: Bot, title: "AI Agents & Automation", desc: "Intelligent autonomous agents that automate complex workflows", size: "large" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native & cross-platform mobile applications", size: "small" },
  { icon: Palette, title: "UI/UX Design", desc: "Human-centered design that converts", size: "small" },
  { icon: Layers, title: "SaaS Development", desc: "Multi-tenant platforms built to scale globally", size: "large" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, GCP, Azure with CI/CD", size: "small" },
  { icon: Plug, title: "API Integration", desc: "Seamless system interconnection", size: "small" },
  { icon: Building2, title: "CRM & ERP", desc: "Enterprise systems that streamline operations and drive growth", size: "large" },
  { icon: ShoppingCart, title: "E-commerce", desc: "Full-featured online stores", size: "small" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven growth strategies", size: "small" },
  { icon: BarChart3, title: "AI Advertising", desc: "Smart campaigns for maximum ROI", size: "small" },
  { icon: PenTool, title: "Branding", desc: "Complete brand identity systems", size: "small" },
  { icon: Cpu, title: "Enterprise Solutions", desc: "Mission-critical applications at scale", size: "small" },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const isLarge = service.size === "large";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl glass hover-lift overflow-hidden transition-all duration-700 ${
        isLarge ? "md:col-span-2 md:row-span-1" : ""
      }`}
      data-hover
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative p-6 md:p-8 h-full flex flex-col">
        <div className="flex items-start justify-between mb-auto">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:bg-accent/[0.08] group-hover:border-accent/20 transition-all duration-700">
            <service.icon size={22} className="text-white/30 group-hover:text-accent transition-colors duration-700" strokeWidth={1.5} />
          </div>
          <span className="text-[10px] font-mono text-white/10 tracking-wider group-hover:text-white/20 transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors duration-500">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-white/25 leading-relaxed group-hover:text-white/45 transition-colors duration-500">
            {service.desc}
          </p>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-4 border-t border-white/[0.03] group-hover:border-accent/10 transition-colors duration-700">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/10 group-hover:text-accent/50 transition-colors duration-500">
            Learn more →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div ref={headingRef} className="mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-accent/40" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent/60">
              Services
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              What we
              <br />
              <span className="text-gradient">do best</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/25 text-base leading-relaxed max-w-md md:ml-auto"
            >
              End-to-end technology services designed to accelerate your digital
              transformation and give you a competitive edge.
            </motion.p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
