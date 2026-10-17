"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated blobs */}
      <div
        className="absolute w-[800px] h-[800px] animate-blob opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
          animationDuration: "8s",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] animate-blob opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          bottom: "-10%",
          left: "-5%",
          animationDelay: "-4s",
          animationDuration: "10s",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] animate-blob opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          top: "30%",
          left: "40%",
          animationDelay: "-2s",
          animationDuration: "12s",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  // Stagger text reveal
  const headingWords = [
    { text: "We", gradient: false },
    { text: "Build", gradient: false },
    { text: "Intelligent", gradient: true },
    { text: "Software", gradient: false },
  ];

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      <MeshGradient />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-black to-transparent z-10" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm mb-12 mt-16"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-medium text-white/40 tracking-[0.2em] uppercase">
            AI-Powered Innovation
          </span>
        </motion.div>

        {/* Main heading with word-by-word reveal */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {headingWords.map((word, i) => (
            <motion.span
              key={word.text}
              initial={{ opacity: 0, y: 80, rotateX: 40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 1 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] ${
                word.gradient ? "text-gradient" : "text-gradient-white"
              }`}
              style={{ display: "inline-block", perspective: "1000px" }}
            >
              {word.text}
            </motion.span>
          ))}
        </div>

        {/* Subtitle with blur reveal */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-10 text-lg md:text-xl text-white/30 max-w-2xl mx-auto leading-relaxed font-light"
        >
          From AI agents to enterprise platforms, we deliver cutting-edge
          software solutions that transform how businesses operate and scale.
        </motion.p>

        {/* CTAs with magnetic hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/contact"
            data-hover
            className="group relative px-10 py-5 bg-white text-black rounded-full font-semibold text-base overflow-hidden transition-all duration-500 flex items-center gap-2 hover:gap-3 hover:shadow-[0_0_50px_rgba(99,102,241,0.3)]"
          >
            <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start a Project</span>
            <ArrowUpRight
              size={18}
              className="relative z-10 transition-all group-hover:text-white group-hover:rotate-45 duration-300"
            />
          </Link>
          <Link
            href="/products"
            data-hover
            className="px-10 py-5 rounded-full border border-white/[0.08] text-white/50 text-base font-medium hover:border-white/25 hover:text-white transition-all duration-500 hover:bg-white/[0.03]"
          >
            Explore Products
          </Link>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16"
        >
          {[
            { value: 50, suffix: "+", label: "Projects Delivered" },
            { value: 4, suffix: "", label: "AI Products" },
            { value: 99, suffix: "%", label: "Client Satisfaction" },
            { value: 24, suffix: "/7", label: "Support" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 + i * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-[11px] text-white/20 uppercase tracking-[0.25em] group-hover:text-white/40 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-white/15 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
