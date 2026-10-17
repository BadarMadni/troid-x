"use client";

import {
  Brain, Code2, Globe, Smartphone, Bot, Palette,
  Cloud, Plug, ShoppingCart, Megaphone, BarChart3, PenTool,
  Building2, Layers, Cpu,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  { icon: Brain, title: "AI Development & Engineering", desc: "Custom AI/ML models, NLP, computer vision, and deep learning solutions tailored to your domain." },
  { icon: Code2, title: "Custom Software Development", desc: "Bespoke software built from the ground up with modern architectures and clean code." },
  { icon: Globe, title: "Web Design & Development", desc: "High-performance web applications with stunning interfaces and seamless experiences." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile apps that users love, built with React Native and Flutter." },
  { icon: Bot, title: "AI Agents & Automation", desc: "Intelligent agents that automate workflows, make decisions, and learn from data." },
  { icon: Palette, title: "UI/UX Design & Product Design", desc: "Human-centered design that balances aesthetics with usability and accessibility." },
  { icon: Layers, title: "SaaS Development", desc: "Scalable multi-tenant SaaS platforms with subscription management and analytics." },
  { icon: Building2, title: "CRM & ERP Development", desc: "Enterprise resource planning and customer management systems that streamline operations." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, GCP, Azure infrastructure with CI/CD pipelines, monitoring, and auto-scaling." },
  { icon: Plug, title: "API & System Integration", desc: "Seamless integration between systems, third-party APIs, and microservices architectures." },
  { icon: ShoppingCart, title: "E-commerce Development", desc: "Full-featured online stores with payment processing, inventory, and order management." },
  { icon: Megaphone, title: "Digital Marketing & SEO", desc: "Data-driven marketing strategies with SEO, content marketing, and analytics." },
  { icon: BarChart3, title: "AI-Powered Advertising", desc: "Smart ad campaigns optimized by AI for maximum ROI across all platforms." },
  { icon: PenTool, title: "Branding & Graphic Design", desc: "Complete brand identity systems from logos to comprehensive style guidelines." },
  { icon: Cpu, title: "Enterprise Software Solutions", desc: "Mission-critical enterprise applications built for reliability, security, and scale." },
];

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-bg" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent border border-accent/20 rounded-full mb-6">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Services that
            <span className="text-gradient"> scale</span>
          </h2>
          <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto">
            End-to-end technology services designed to accelerate your digital transformation
            and give you a competitive edge.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.05}>
              <div className="group relative p-6 rounded-2xl glass hover-lift cursor-pointer transition-all duration-500">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors duration-500">
                    <service.icon size={20} className="text-white/50 group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <h3 className="text-base font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed group-hover:text-white/50 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
