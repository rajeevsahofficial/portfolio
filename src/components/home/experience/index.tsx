"use client";

import { motion } from "framer-motion";

const tags = [
  "React.js", "Next.js", "Laravel", "PHP", "MySQL",
  "REST APIs", "RBAC", "Axios", "Technical SEO", "JavaScript",
];

const bullets = [
  {
    label: "API Integration",
    text: "Integrated RESTful APIs using Axios and React Hooks for dynamic, data-driven workflows.",
  },
  {
    label: "Access Control",
    text: "Designed and implemented role-based access control across multi-module enterprise applications.",
  },
  {
    label: "Gov. Portal",
    text: "Contributed to government workflow portals with scalable frontend architecture and interface design.",
  },
  {
    label: "Technical SEO",
    text: "Applied technical SEO and performance optimisation across client web properties.",
  },
  {
    label: "Client Work",
    text: "Translated complex business requirements into practical, user-centred technical solutions.",
  },
  {
    label: "UI & Graphics",
    text: "Created UI components and supporting graphics that improved product clarity and user experience.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-[1500px] px-6 py-32 md:px-10 md:py-44"
    >
      <div className="grid gap-16 lg:grid-cols-[.35fr_1fr]">

        {/* sticky label */}
        <div>
          <p className="sticky top-36 text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
            03 / Experience
          </p>
        </div>

        {/* content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/[0.08] pt-8"
          >
            {/* ── header row ── */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/28">
                  WellSkool Health Services Pvt. Ltd.
                </p>
                <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                  Software Development
                  <br />
                  <span className="text-white/28">Engineer</span>
                </h2>
              </div>

              {/* date badge */}
              <div className="shrink-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2">
                  <span className="relative flex h-[6px] w-[6px]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c7a7ff] opacity-50" />
                    <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#c7a7ff]" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                    Dec 2022 — Mar 2026
                  </span>
                </div>
              </div>
            </div>

            {/* ── responsibility bullets ── */}
            <div className="mt-14 grid gap-0 divide-y divide-white/[0.06] md:grid-cols-2 md:divide-y-0">
              {bullets.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col gap-1.5 py-5 md:border-t md:border-white/[0.06] md:px-0 md:py-7"
                >
                  {/* label row */}
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#c7a7ff]/50 transition-colors duration-300 group-hover:text-[#c7a7ff]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-4 bg-white/[0.12]" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40 transition-colors duration-300 group-hover:text-white/70">
                      {b.label}
                    </span>
                  </div>

                  {/* description */}
                  <p className="text-sm leading-7 text-white/32 transition-colors duration-300 group-hover:text-white/52">
                    {b.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ── tech stack pills ── */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-2 border-t border-white/[0.07] pt-8"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.09] bg-white/[0.022] px-3.5 py-1.5 text-[11px] tracking-[0.05em] text-white/35 transition-colors duration-200 hover:border-white/20 hover:text-white/65"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
