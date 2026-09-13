"use client";

import { motion } from "framer-motion";

const stackA = [
  "NEXT.JS", "REACT", "JAVASCRIPT", "TYPESCRIPT", "TAILWIND",
  "REST APIs", "LARAVEL", "PHP", "MYSQL", "MONGODB",
  "GOOGLE ADS", "META ADS", "TECHNICAL SEO",
];

const stackB = [
  "FRAMER MOTION", "NODE.JS", "AXIOS", "RBAC", "UI / UX",
  "PERFORMANCE", "CONVERSION", "ANALYTICS", "DSA", "OOP",
  "GIT", "POSTMAN", "FIGMA",
];

function MarqueeRow({
  items,
  reverse = false,
  duration = 34,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden py-3">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
        className="flex w-max gap-12 whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-12 text-[1.1rem] font-medium uppercase tracking-[0.12em] text-white/[0.11] md:text-2xl"
          >
            <span className="transition-colors duration-300 hover:text-white/30">
              {item}
            </span>
            <span className="h-[3px] w-[3px] rounded-full bg-[#c7a7ff]/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative z-10 overflow-hidden border-y border-white/[0.06]">
      <MarqueeRow items={stackA} duration={38} />
      <div className="border-t border-white/[0.04]" />
      <MarqueeRow items={stackB} reverse duration={44} />
    </section>
  );
}
