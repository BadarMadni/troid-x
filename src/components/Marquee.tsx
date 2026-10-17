"use client";

const words = [
  "AI Development",
  "Cloud Engineering",
  "SaaS Products",
  "Digital Transformation",
  "Machine Learning",
  "Web3 Integration",
  "UI/UX Design",
  "DevOps",
  "Mobile Apps",
  "Enterprise Solutions",
];

export default function Marquee() {
  return (
    <div className="relative py-8 border-t border-b border-white/[0.03] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span key={i} className="mx-8 text-sm font-light text-white/10 uppercase tracking-[0.3em] flex items-center gap-8">
            {word}
            <span className="w-1.5 h-1.5 rounded-full bg-white/[0.06]" />
          </span>
        ))}
      </div>
    </div>
  );
}
