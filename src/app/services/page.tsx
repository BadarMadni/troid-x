"use client";

import {
  Brain, Code2, Globe, Smartphone, Bot, Palette,
  Cloud, Plug, ShoppingCart, Megaphone, BarChart3, PenTool,
  Building2, Layers, Cpu, ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: Brain, title: "AI Development & Engineering", desc: "Custom AI/ML models, NLP, computer vision, and deep learning solutions tailored to your business domain and use cases.", category: "AI" },
  { icon: Bot, title: "AI Agents & Automation", desc: "Intelligent autonomous agents that automate complex workflows, make decisions, and continuously learn from data.", category: "AI" },
  { icon: BarChart3, title: "AI-Powered Advertising", desc: "Smart advertising campaigns powered by machine learning for maximum ROI across all digital platforms.", category: "AI" },
  { icon: Code2, title: "Custom Software Development", desc: "Bespoke software solutions built from scratch with modern architectures, clean code, and scalable infrastructure.", category: "Development" },
  { icon: Globe, title: "Web Design & Development", desc: "High-performance, visually stunning web applications built with the latest frameworks and best practices.", category: "Development" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications that users love, built with React Native and Flutter.", category: "Development" },
  { icon: Layers, title: "SaaS Development", desc: "Multi-tenant SaaS platforms with subscription management, analytics dashboards, and seamless scaling.", category: "Development" },
  { icon: Building2, title: "CRM & ERP Development", desc: "Enterprise resource planning and customer relationship systems that streamline your operations.", category: "Development" },
  { icon: ShoppingCart, title: "E-commerce Development", desc: "Full-featured online stores with payment processing, inventory management, and order fulfillment.", category: "Development" },
  { icon: Cpu, title: "Enterprise Software Solutions", desc: "Mission-critical enterprise applications built for maximum reliability, security, and performance at scale.", category: "Development" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, GCP, Azure infrastructure with CI/CD pipelines, monitoring, auto-scaling, and cost optimization.", category: "Infrastructure" },
  { icon: Plug, title: "API & System Integration", desc: "Seamless integration between systems, third-party APIs, and microservices architectures.", category: "Infrastructure" },
  { icon: Palette, title: "UI/UX Design & Product Design", desc: "Human-centered design that balances beauty with usability, accessibility, and conversion.", category: "Design" },
  { icon: PenTool, title: "Branding & Graphic Design", desc: "Complete brand identity systems from logo design to comprehensive visual style guidelines.", category: "Design" },
  { icon: Megaphone, title: "Digital Marketing & SEO", desc: "Data-driven marketing strategies with SEO, content marketing, paid campaigns, and analytics.", category: "Marketing" },
];

const categories = ["All", "AI", "Development", "Infrastructure", "Design", "Marketing"];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="max-w-3xl mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent border border-accent/20 rounded-full mb-6">
            Services
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            End-to-end
            <br />
            <span className="text-gradient">tech services</span>
          </h1>
          <p className="mt-6 text-lg text-white/40 max-w-xl leading-relaxed">
            From concept to deployment, we provide comprehensive technology services
            that help you build, scale, and innovate faster.
          </p>
        </AnimatedSection>

        {/* Category pills */}
        <AnimatedSection className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ${
                i === 0
                  ? "bg-white text-black"
                  : "border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </span>
          ))}
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.04}>
              <div className="group relative p-6 rounded-2xl glass hover-lift h-full transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500">
                      <service.icon size={20} className="text-white/50 group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/20 font-medium">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-20 text-center">
          <div className="p-12 rounded-3xl glass">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need something specific?
            </h3>
            <p className="text-white/40 mb-8 max-w-md mx-auto">
              We customize our services to match your exact requirements. Let&apos;s discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
