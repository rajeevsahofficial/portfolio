"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const entries = [
  {
    period: "2020 — 2024",
    badge: "B.Tech",
    institution: "Nalanda College of Engineering",
    location: "Chandi, Nalanda, Bihar",
    degree: "Electrical & Electronics Engineering",
    result: "CGPA 7.37",
  },
  {
    period: "2017 — 2019",
    badge: "Class XII",
    institution: "Jawahar Navodaya Vidyalaya",
    location: "Kishanganj, Bihar",
    degree: "Higher Secondary Certificate — Science",
    result: "71.2%",
  },
];

export default function Education() {
  return (
    <section className="relative z-10 border-y border-white/[0.06]">
      <div className="mx-auto max-w-[1500px] px-6 py-32 md:px-10">

        {/* header */}
        <div className="mb-16 flex items-end justify-between">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
            06 / Education
          </p>
          <GraduationCap size={18} strokeWidth={1.3} className="text-white/20" />
        </div>

        <div className="grid gap-px border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
          {entries.map((e, i) => (
            <motion.div
              key={e.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden bg-[#070707] p-8 transition-colors duration-300 hover:bg-white/[0.018]"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_100%_0%,rgba(199,167,255,.06),transparent_55%)]" />

              <div className="relative">
                {/* top row */}
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[11px] text-white/28">{e.period}</p>
                  <span className="rounded-full border border-[#c7a7ff]/25 bg-[#c7a7ff]/[0.06] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#c7a7ff]/70">
                    {e.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#f2eee7] md:text-3xl">
                  {e.institution}
                </h3>
                <p className="mt-2 text-sm text-white/30">{e.location}</p>

                {/* divider */}
                <div className="my-6 h-px w-full bg-white/[0.07]" />

                <p className="text-sm text-white/42">{e.degree}</p>
                <p className="mt-2 text-sm font-medium text-[#c7a7ff]/60">{e.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
