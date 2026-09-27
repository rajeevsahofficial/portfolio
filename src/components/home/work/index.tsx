"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    type: "Photography & Creative",
    title: "ShotSquare",
    description:
      "A premium photography platform designed around visual storytelling, showcasing wedding, portrait, fashion, travel and nature photography with an immersive project-driven experience.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Responsive UI"],
    year: "2026",
    url: "https://www.shotsquare.com/",
  },
  {
    number: "02",
    type: "Healthcare Platform",
    title: "My Child Therapy",
    description:
      "A healthcare-focused digital experience designed to connect families with child development and mental health services through a clear, accessible and trust-oriented interface.",
    stack: ["Next.js", "React", "Tailwind CSS", "REST API", "SEO"],
    year: "2026",
    url: "https://www.mychildtherapy.org/",
  },
  {
    number: "03",
    type: "Medical Practice",
    title: "Dr. Sonam Tyagi",
    description:
      "A modern medical practice website presenting advanced bariatric, general, gastrointestinal and metabolic surgical services with consultation-focused user journeys.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "SEO"],
    year: "2026",
    url: "https://dr-sonam-tyagi.vercel.app/",
  },
  {
    number: "04",
    type: "Industrial Solutions",
    title: "Aura Synergy India",
    description:
      "A product-focused industrial website showcasing GridSquare ceiling systems, wall paneling, cleanroom solutions and specialized building components for commercial and institutional projects.",
    stack: ["Next.js", "React", "Tailwind CSS", "Product UI", "SEO"],
    year: "2026",
    url: "https://www.aurasynergyindia.com/",
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
        {/* Section Header */}
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
            Digital experiences built for real businesses — combining
            performance, design, usability and scalable frontend architecture.
          </p>
        </div>

        {/* Project List */}
        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border-t border-white/[0.08]"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Visit ${project.title}`}
              >
                <div className="py-10 md:py-14 lg:grid lg:grid-cols-[80px_1fr_120px] lg:gap-8">
                  {/* Number — Desktop */}
                  <div className="hidden items-start pt-1 lg:flex">
                    <span className="text-5xl font-medium tracking-[-0.06em] text-white/[0.07] transition-colors duration-500 group-hover:text-white/15">
                      {project.number}
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="min-w-0">
                    {/* Type + Year + Number */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="mr-1 text-[10px] font-medium text-white/20 lg:hidden">
                        {project.number}
                      </span>

                      <span className="text-[10px] uppercase tracking-[0.28em] text-[#c7a7ff]/60">
                        {project.type}
                      </span>

                      <span className="text-[10px] text-white/20">
                        — {project.year}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="mt-3 flex items-start justify-between gap-4 lg:block">
                      <h3 className="text-2xl font-medium tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl md:text-4xl lg:text-5xl">
                        {project.title}
                      </h3>

                      {/* Mobile Arrow */}
                      <div className="mt-1 shrink-0 lg:hidden">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] transition-all duration-300 group-hover:border-[#c7a7ff]/40 group-hover:bg-[#c7a7ff]/[0.06]">
                          <ArrowUpRight
                            size={15}
                            className="text-white/35 transition-colors duration-300 group-hover:text-[#c7a7ff]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 max-w-3xl text-[14px] leading-7 text-white/37 md:text-[15px] md:leading-8">
                      {project.description}
                    </p>

                    {/* Stack */}
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

                    {/* Visit Project */}
                    <div className="mt-7 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/20 transition-colors duration-300 group-hover:text-[#c7a7ff]/70">
                      <ExternalLink size={12} />
                      <span>Visit Project</span>
                    </div>
                  </div>

                  {/* Desktop Arrow */}
                  <div className="hidden items-end justify-end lg:flex">
                    <motion.div
                      whileHover={{
                        rotate: 12,
                        scale: 1.08,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] transition-all duration-300 group-hover:border-[#c7a7ff]/40 group-hover:bg-[#c7a7ff]/[0.06]"
                    >
                      <ArrowUpRight
                        size={18}
                        className="text-white/35 transition-colors duration-300 group-hover:text-[#c7a7ff]"
                      />
                    </motion.div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}