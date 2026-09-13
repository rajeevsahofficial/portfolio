"use client";

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
      <div className="mx-auto max-w-[1500px] px-6 py-5 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-y-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              {i !== 0 && (
                <span className="hidden h-[3px] w-[3px] rounded-full bg-white/20 md:block" />
              )}
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/25 transition-colors duration-300 hover:text-white/50">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
