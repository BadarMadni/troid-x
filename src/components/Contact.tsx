"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative py-32">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent border border-accent/20 rounded-full mb-6">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Let&apos;s build
            <span className="text-gradient"> together</span>
          </h2>
          <p className="mt-6 text-lg text-white/40 max-w-xl mx-auto">
            Have a project in mind? We&apos;d love to hear about it. Drop us a line and
            we&apos;ll get back to you within 24 hours.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@troidx.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                { icon: MapPin, label: "Location", value: "Global / Remote-first" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-accent/30 transition-colors">
                    <item.icon size={18} className="text-white/40 group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm text-white/70 mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability indicator */}
            <div className="p-5 rounded-2xl glass">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">Available for projects</span>
              </div>
              <p className="text-xs text-white/30">
                We&apos;re currently accepting new projects. Average response time: 4 hours.
              </p>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="Company Inc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black rounded-xl font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
