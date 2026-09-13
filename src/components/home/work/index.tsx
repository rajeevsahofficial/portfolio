"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    type: "Full Stack Commerce",
    title: "E-Commerce Platform",
    description:
      "A scalable commerce experience built with Next.js and Laravel — covering product management, cart, checkout, secure REST APIs and role-based access control.",
    stack: ["Next.js", "React", "Laravel", "PHP", "MySQL", "RBAC"],
    year: "2024",
  },
  {
    number: "02",
    type: "Enterprise Workflow",
    title: "Government Workflow Portal",
    description:
      "Contributed to workflow-oriented government web systems with dynamic interfaces, REST API integration, role permissions and scalable frontend architecture.",
    stack: ["React", "JavaScript", "Axios", "REST API", "RBAC"],
    year: "2023",
  },
  {
    number: "03",
    type: "Digital Growth",
    title: "Growth & Performance Systems",
    description:
      "Combined technical SEO, Google Ads and Meta Ads with conversion-focused landing page architecture to deliver measurable acquisition and business growth.",
    stack: ["Google Ads", "Meta Ads", "SEO", "Analytics", "CRO"],
    year: "2023",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      data-cursor="VIEW"
      className="relative z-10 border-t border-white/[0.06] bg-[#0a0a0a]"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-44">

        {/* section header */}
        <div className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-[1fr_.4fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
              02 / Selected Work
            </p>
            <h2 className="text-[clamp(3rem,8vw,9rem)] font-medium leading-[0.86] tracking-[-0.065em]">
              Selected
              <br />
              <span className="text-white/22">projects.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/35 lg:pb-3">
            Products and systems built around performance, security and
            real-world business outcomes.
          </p>
        </div>

        {/* project list */}
        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-white/[0.08]"
            >
              <div className="py-10 md:py-14 lg:grid lg:grid-cols-[80px_1fr_120px] lg:gap-8">

                {/* index — hidden on mobile, shown on lg */}
                <div className="hidden items-start pt-1 lg:flex">
                  <span className="text-5xl font-medium tracking-[-0.06em] text-white/[0.07] transition-colors duration-500 group-hover:text-white/15">
                    {project.number}
                  </span>
                </div>

                {/* main content */}
                <div className="min-w-0">
                  {/* type + year + number (mobile) */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* number pill — mobile only */}
                    <span className="mr-1 text-[10px] font-medium text-white/20 lg:hidden">
                      {project.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-[#c7a7ff]/60">
                      {project.type}
                    </span>
                    <span className="text-[10px] text-white/20">— {project.year}</span>
                  </div>

                  {/* title + arrow (mobile: inline row) */}
                  <div className="mt-3 flex items-start justify-between gap-4 lg:block">
                    <h3 className="text-2xl font-medium tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl md:text-4xl lg:text-5xl">
                      {project.title}
                    </h3>

                    {/* arrow — mobile only (shown inline with title) */}
                    <div className="mt-1 shrink-0 lg:hidden">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] transition-colors duration-300 group-hover:border-[#c7a7ff]/40 group-hover:bg-[#c7a7ff]/[0.06]">
                        <ArrowUpRight
                          size={15}
                          className="text-white/35 transition-colors duration-300 group-hover:text-[#c7a7ff]"
                        />
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-[14px] leading-7 text-white/37 md:text-[15px] md:leading-8">
                    {project.description}
                  </p>

                  {/* stack pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[11px] tracking-[0.05em] text-white/30 transition-colors duration-200 group-hover:border-white/15 group-hover:text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* arrow — desktop only */}
                <div className="hidden items-end justify-end lg:flex">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] transition-colors duration-300 group-hover:border-[#c7a7ff]/40 group-hover:bg-[#c7a7ff]/[0.06]"
                  >
                    <ArrowUpRight
                      size={18}
                      className="text-white/35 transition-colors duration-300 group-hover:text-[#c7a7ff]"
                    />
                  </motion.div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
