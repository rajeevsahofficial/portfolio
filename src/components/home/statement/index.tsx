"use client";

import MarqueeRow from "@/components/common/MarqueeRow";
import { motion } from "framer-motion";

const items = [
  "Software Development Engineer",
  "React / Next.js",
  "Performance & SEO",
  "Google Ads / Meta Ads",
  "03+ Years Experience",
];

export default function Statement() {
  return (
    <section className="relative z-10 overflow-hidden border-y border-white/[0.07]">
        <MarqueeRow items={items} duration={38} />
    </section>
  );
}
