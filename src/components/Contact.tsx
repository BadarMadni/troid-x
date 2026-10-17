"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section ref={ref} className="relative py-32 md:py-40">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-accent/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent/60">Contact</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Let&apos;s build
              <br />
              <span className="text-gradient">together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-white/30 max-w-md leading-relaxed"
            >
              Have a project in mind? Drop us a line and we&apos;ll get back to you within 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 space-y-6"
            >
              {[
                { icon: Mail, label: "Email", value: "hello@troidx.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                { icon: MapPin, label: "Location", value: "Global / Remote-first" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group" data-hover>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-center group-hover:border-accent/20 group-hover:bg-accent/[0.05] transition-all duration-500">
                    <item.icon size={16} className="text-white/20 group-hover:text-accent/60 transition-colors duration-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/15 uppercase tracking-[0.2em]">{item.label}</div>
                    <div className="text-sm text-white/50 group-hover:text-white/70 transition-colors">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 p-5 rounded-2xl glass inline-block"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs text-emerald-400/80 font-medium">Available for projects</span>
              </div>
              <p className="text-[11px] text-white/20">Average response time: 4 hours</p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl glass space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "John Doe" },
                  { name: "email", label: "Email", type: "email", placeholder: "john@company.com" },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label htmlFor={field.name} className="block text-[10px] text-white/20 uppercase tracking-[0.2em] mb-2">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-500"
                      placeholder={field.placeholder}
                    />
                    {focused === field.name && (
                      <motion.div
                        layoutId="input-focus"
                        className="absolute inset-0 rounded-xl border border-accent/20 pointer-events-none"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="company" className="block text-[10px] text-white/20 uppercase tracking-[0.2em] mb-2">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-500"
                  placeholder="Company Inc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] text-white/20 uppercase tracking-[0.2em] mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-500 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                data-hover
                className="group w-full py-4 bg-white text-black rounded-xl font-semibold text-sm overflow-hidden relative transition-all duration-500 flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]"
              >
                <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Send Message</span>
                <Send size={14} className="relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
