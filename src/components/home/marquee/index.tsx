"use client";

import MarqueeRow from "@/components/common/MarqueeRow";
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



export default function Marquee() {
  return (
    <section className="relative z-10 overflow-hidden border-y border-white/[0.06]">
      <MarqueeRow items={stackA} duration={38} />
      <div className="border-t border-white/[0.04]" />
      <MarqueeRow items={stackB} reverse duration={44} />
    </section>
  );
}
