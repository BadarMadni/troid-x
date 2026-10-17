"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const socials = [
  { icon: XIcon, href: "#", label: "X" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: GithubIcon, href: "#", label: "GitHub" },
];

const footerLinks = {
  Company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ],
  Products: [
    { name: "BOSS", href: "/products#boss" },
    { name: "GRAY", href: "/products#gray" },
    { name: "Agent Passport", href: "/products#agent-passport" },
    { name: "AI Ads", href: "/products#ai-ads" },
  ],
  Services: [
    { name: "AI Development", href: "/services" },
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "Cloud & DevOps", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-24 border-b border-white/[0.04]">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
                Ready to build
                <br />
                <span className="text-gradient">the future?</span>
              </h2>
              <p className="mt-6 text-white/25 text-base max-w-md">
                Let&apos;s transform your ideas into intelligent, scalable solutions.
              </p>
            </div>
            <Link
              href="/contact"
              data-hover
              className="group flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-base font-semibold overflow-hidden relative transition-all duration-500 hover:shadow-[0_0_50px_rgba(99,102,241,0.3)]"
            >
              <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start a Project</span>
              <ArrowUpRight size={18} className="relative z-10 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block" data-hover>
              <span className="text-2xl font-bold tracking-tighter">
                Troid<span className="text-gradient-accent"> X</span>
              </span>
            </Link>
            <p className="mt-4 text-xs text-white/15 leading-relaxed max-w-xs">
              Building intelligent software that powers the next generation of businesses.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  data-hover
                  className="p-2.5 rounded-full border border-white/[0.04] text-white/20 hover:text-white hover:border-white/15 hover:bg-white/[0.03] transition-all duration-500"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/15 mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      data-hover
                      className="text-sm text-white/25 hover:text-white/70 transition-colors duration-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/15">&copy; 2025 Troid X. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[11px] text-white/15 hover:text-white/40 transition-colors" data-hover>Privacy</a>
            <a href="#" className="text-[11px] text-white/15 hover:text-white/40 transition-colors" data-hover>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
