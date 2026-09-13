"use client";

import {
  Code2,
  MonitorSmartphone,
  Server,
  Database,
  Terminal,
  Wrench,
  Megaphone,
  BrainCircuit,
  Braces,
  FileCode2,
  Palette,
  Wind,
  Workflow,
  ShieldCheck,
  GitBranch,
  Send,
  Search,
  BarChart3,
  MousePointerClick,
  Globe2,
  Layers3,
  Cpu,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Engineering",
    icon: MonitorSmartphone,
    description: "Interfaces, interactions and modern web experiences.",
    skills: [
      { name: "React.js", icon: Code2 },
      { name: "Next.js", icon: Layers3 },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: FileCode2 },
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Palette },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Framer Motion", icon: Workflow },
      { name: "Responsive Design", icon: MonitorSmartphone },
      { name: "UI Development", icon: Palette },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    description: "APIs, application logic and secure data flows.",
    skills: [
      { name: "PHP", icon: FileCode2 },
      { name: "Laravel", icon: Server },
      { name: "RESTful APIs", icon: Globe2 },
      { name: "Axios", icon: Workflow },
      { name: "Authentication", icon: ShieldCheck },
      { name: "RBAC", icon: ShieldCheck },
      { name: "API Integration", icon: Workflow },
    ],
  },
  {
    title: "Programming",
    icon: Terminal,
    description: "Languages, problem solving and core engineering.",
    skills: [
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Python", icon: Terminal },
      { name: "PHP", icon: Code2 },
      { name: "C", icon: Cpu },
      { name: "C++", icon: Cpu },
      { name: "OOP", icon: Layers3 },
      { name: "Data Structures", icon: BrainCircuit },
      { name: "Algorithms", icon: BrainCircuit },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Structured storage and reliable data management.",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Database Design", icon: Layers3 },
      { name: "Data Handling", icon: Database },
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    description: "Tools powering my development workflow.",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: Send },
      { name: "VS Code", icon: Code2 },
      { name: "npm", icon: Terminal },
      { name: "Chrome DevTools", icon: Wrench },
    ],
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Technology meets acquisition and measurable growth.",
    skills: [
      { name: "Google Ads", icon: Search },
      { name: "Meta Ads", icon: Megaphone },
      { name: "Technical SEO", icon: Search },
      { name: "Social Media Marketing", icon: Globe2 },
      { name: "Campaign Optimization", icon: BarChart3 },
      { name: "Conversion Strategy", icon: MousePointerClick },
    ],
  },
  {
    title: "Core Concepts",
    icon: BrainCircuit,
    description: "Engineering principles behind scalable products.",
    skills: [
      { name: "DSA", icon: BrainCircuit },
      { name: "OOP", icon: Layers3 },
      { name: "REST Architecture", icon: Globe2 },
      { name: "RBAC", icon: ShieldCheck },
      { name: "Responsive Design", icon: MonitorSmartphone },
      { name: "Performance", icon: BarChart3 },
      { name: "Technical SEO", icon: Search },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 mx-auto max-w-[1500px] px-6 py-32 md:px-10 md:py-44"
    >
      <div className="grid gap-16 lg:grid-cols-[.35fr_1fr]">
        {/* LEFT */}
        <div>
          <div className="sticky top-36">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
              04 / Skills
            </p>

            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="mt-10 hidden h-28 w-28 items-center justify-center rounded-full border border-white/[0.08] lg:flex"
            >
              <Code2 size={30} strokeWidth={1.3} className="text-white/35" />
            </motion.div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/25">
              <Sparkles size={13} className="text-[#c7a7ff]" />
              Technology &amp; Expertise
            </p>

            <h2 className="max-w-5xl text-[clamp(3.8rem,7.5vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
              TOOLS BEHIND
              <br />
              <span className="text-white/20">THE CRAFT.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/38">
              My toolkit combines modern software engineering with digital
              growth — allowing me to build products that are fast, scalable,
              discoverable and designed around real business outcomes.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="mt-24">
            {skillGroups.map((group, groupIndex) => {
              const GroupIcon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.85,
                    delay: groupIndex * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group/category border-t border-white/[0.08] py-12 md:py-16"
                >
                  <div className="grid gap-10 md:grid-cols-[.4fr_1fr]">
                    {/* Category */}
                    <div>
                      <div className="flex items-start gap-5">
                        <motion.div
                          whileHover={{ rotate: 8, scale: 1.08 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                          }}
                          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.025]"
                        >
                          <div className="absolute inset-0 rounded-2xl bg-[#c7a7ff]/0 blur-xl transition duration-500 group-hover/category:bg-[#c7a7ff]/10" />
                          <GroupIcon
                            size={22}
                            strokeWidth={1.4}
                            className="relative text-white/45 transition duration-500 group-hover/category:text-[#c7a7ff]"
                          />
                        </motion.div>

                        <div>
                          <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                            0{groupIndex + 1}
                          </p>
                          <h3 className="mt-2 text-xl font-medium tracking-[-0.03em]">
                            {group.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-6 max-w-xs text-xs leading-6 text-white/28">
                        {group.description}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap content-start gap-3">
                      {group.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;

                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 25, scale: 0.94 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: skillIndex * 0.035,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ y: -6, scale: 1.035 }}
                            className="group/skill relative cursor-default overflow-hidden rounded-full border border-white/[0.09] bg-white/[0.022] px-4 py-3"
                          >
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,167,255,.16),transparent_70%)]"
                            />

                            <div className="relative z-10 flex items-center gap-2.5">
                              <SkillIcon
                                size={14}
                                strokeWidth={1.5}
                                className="text-white/28 transition-colors duration-300 group-hover/skill:text-[#c7a7ff]"
                              />
                              <span className="text-sm text-white/42 transition-colors duration-300 group-hover/skill:text-white">
                                {skill.name}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 border-t border-white/[0.08] pt-14"
          >
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-2xl leading-9 tracking-[-0.035em] text-white/65 md:text-3xl">
                Technology changes.
                <br />
                <span className="text-white/20">
                  The ability to learn doesn&apos;t.
                </span>
              </p>

              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/25">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c7a7ff] opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c7a7ff]" />
                </span>
                Always learning
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
