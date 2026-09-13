"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "3+",  label: "Years of professional\nexperience"       },
  { number: "10+", label: "Products &\nsystems shipped"              },
  { number: "3",   label: "Engineering, marketing\n& growth domains" },
];

export default function About() {
  return (
    <section
      id="about"
      data-cursor="EXPLORE"
      className="relative z-10 mx-auto max-w-[1500px] px-6 py-32 md:px-10 md:py-44"
    >
      <div className="grid gap-20 lg:grid-cols-[.35fr_1fr]">

        {/* sticky label */}
        <div>
          <p className="sticky top-36 text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
            01 / About
          </p>
        </div>

        <div>
          {/* headline */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl text-[clamp(2.6rem,5.5vw,6.2rem)] font-medium leading-[1.02] tracking-[-0.055em]"
          >
            I engineer
            <span className="text-white/25"> scalable digital systems </span>
            that look refined, perform fast and contribute to
            <span className="text-white/25"> real business growth.</span>
          </motion.p>

          {/* body copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid gap-10 border-t border-white/[0.07] pt-10 md:grid-cols-2"
          >
            <p className="max-w-md text-base leading-8 text-white/42">
              With 3+ years of hands-on experience, I&apos;ve built
              frontend systems, API-driven applications, secure RBAC flows,
              enterprise workflow portals and full-stack web products.
            </p>

            <p className="max-w-md text-base leading-8 text-white/42">
              I also bring technical SEO, Google Ads and Meta Ads expertise —
              allowing me to approach every build from both an engineering
              and commercial growth perspective.
            </p>
          </motion.div>

          {/* stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid gap-px border border-white/[0.07] bg-white/[0.07] md:grid-cols-3"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#070707] px-7 py-7 transition-colors duration-300 hover:bg-white/[0.025]"
              >
                <p className="text-[2.8rem] font-medium leading-none tracking-[-0.05em] text-[#f2eee7] transition-colors duration-300 group-hover:text-[#c7a7ff]">
                  {s.number}
                </p>
                <p className="mt-3 whitespace-pre-line text-[11px] uppercase tracking-[0.22em] text-white/30">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
