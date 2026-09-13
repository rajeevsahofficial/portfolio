"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Server, Terminal, Megaphone } from "lucide-react";

const disciplines = [
  {
    icon: MonitorSmartphone,
    title: "Frontend Engineering",
    description:
      "React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, responsive UI architecture.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: Server,
    title: "Backend & Data",
    description:
      "PHP, Laravel, RESTful APIs, Axios, MySQL, MongoDB, RBAC and authentication workflows.",
    tags: ["Laravel", "PHP", "MySQL", "REST APIs"],
  },
  {
    icon: Terminal,
    title: "Programming",
    description:
      "JavaScript, TypeScript, Python, PHP, C, C++, OOP, data structures & algorithms.",
    tags: ["DSA", "OOP", "Python", "C++"],
  },
  {
    icon: Megaphone,
    title: "Digital Growth",
    description:
      "Google Ads, Meta Ads, Technical SEO, social media marketing and conversion-focused strategy.",
    tags: ["Google Ads", "Meta Ads", "SEO", "CRO"],
  },
];

export default function Expertise() {
  return (
    <section className="relative z-10 mx-auto max-w-[1500px] px-6 py-32 md:px-10 md:py-44">
      <div className="grid gap-16 lg:grid-cols-[.35fr_1fr]">

        {/* sticky label */}
        <div>
          <p className="sticky top-36 text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
            05 / Expertise
          </p>
        </div>

        <div>
          {/* headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="max-w-5xl text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Engineering.
              <br />
              <span className="text-white/22">Growth.</span>
              <br />
              Execution.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/38">
              Four interlocking disciplines that together let me design,
              build and grow digital products end-to-end.
            </p>
          </motion.div>

          {/* discipline cards */}
          <div className="mt-16 grid gap-px border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
            {disciplines.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden bg-[#070707] p-8 transition-colors duration-300 hover:bg-white/[0.018]"
                >
                  {/* hover glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_0%_0%,rgba(199,167,255,.07),transparent_60%)]" />

                  <div className="relative">
                    {/* icon */}
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.025] transition-colors duration-300 group-hover:border-[#c7a7ff]/35 group-hover:bg-[#c7a7ff]/[0.06]">
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                        className="text-white/38 transition-colors duration-300 group-hover:text-[#c7a7ff]"
                      />
                    </div>

                    <h3 className="text-lg font-medium tracking-[-0.025em]">
                      {d.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/35 transition-colors duration-300 group-hover:text-white/48">
                      {d.description}
                    </p>

                    {/* tag pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {d.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-white/25 transition-colors duration-200 group-hover:border-[#c7a7ff]/20 group-hover:text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
