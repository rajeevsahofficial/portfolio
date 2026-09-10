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
  ArrowUpRight,
  MapPin,
  ArrowDownRight,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LuxuryCursor from "@/components/common/LuxuryCursor";

const stack = [
  "NEXT.JS",
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "TAILWIND",
  "REST APIs",
  "LARAVEL",
  "PHP",
  "MYSQL",
  "MONGODB",
  "GOOGLE ADS",
  "META ADS",
  "TECHNICAL SEO",
];

const projects = [
  {
    number: "01",
    type: "FULL STACK COMMERCE",
    title: "E-Commerce Platform",
    description:
      "A scalable commerce experience built with Next.js and Laravel, covering product management, cart, checkout, secure REST APIs and role-based access control.",
    stack: "NEXT.JS / REACT / LARAVEL / PHP / MYSQL / RBAC",
  },
  {
    number: "02",
    type: "ENTERPRISE WORKFLOW",
    title: "Government Workflow Portal",
    description:
      "Contributed to workflow-oriented web systems with dynamic interfaces, REST API integration, role permissions and scalable frontend architecture.",
    stack: "REACT / JAVASCRIPT / AXIOS / REST API / RBAC",
  },
  {
    number: "03",
    type: "DIGITAL GROWTH",
    title: "Growth & Performance Systems",
    description:
      "Combining technical SEO, Google Ads, Meta Ads and landing page thinking to create digital experiences focused on measurable acquisition and business growth.",
    stack: "GOOGLE ADS / META ADS / SEO / ANALYTICS / CRO",
  },
];
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
function MagneticButton({
  children,
  href,
  light = false,
}: {
  children: React.ReactNode;
  href: string;
  light?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const move = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    x.set((e.clientX - bounds.left - bounds.width / 2) * 0.16);
    y.set((e.clientY - bounds.top - bounds.height / 2) * 0.16);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ x, y }}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-4 text-sm font-medium transition ${light
        ? "bg-[#f2eee7] text-black"
        : "border border-white/15 bg-white/[0.025] text-white"
        }`}
    >
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </motion.a>
  );
}

function RevealText({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "120%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}


export default function Home() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.3,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const spotlight = useMotionTemplate`radial-gradient(
    420px circle at ${mouseX}px ${mouseY}px,
    rgba(164, 120, 255, 0.09),
    transparent 68%
  )`;

  return (
    <main className="relative overflow-hidden bg-[#070707] text-[#f2eee7]">
      <LuxuryCursor />
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#c7a7ff]"
      />

      {mounted && (
        <motion.div
          style={{ background: spotlight }}
          className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
        />
      )}

      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.22]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:76px_76px]" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50">
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 md:px-10">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            href="#"
            className="text-sm font-semibold tracking-[-0.02em]"
          >
            RAJEEV KUMAR
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.18em] text-white/40 md:flex"
          >
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </motion.div>

          <MagneticButton href="#contact">Let&apos;s talk</MagneticButton>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 min-h-screen px-6 pb-16 pt-32 md:px-10">
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1500px] flex-col justify-between">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_.5fr]">
            <div>
              <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/35">
                <span className="h-2 w-2 rounded-full bg-[#8fffbb]" />
                Available for selected opportunities
              </div>

              <h1 className="text-[clamp(5rem,14vw,13rem)] font-medium leading-[0.76] tracking-[-0.075em]">
                <RevealText delay={0.05}>RAJEEV</RevealText>
                <RevealText delay={0.15}>
                  <span className="text-white/28">KUMAR</span>
                </RevealText>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.8,
              }}
              className="flex items-end"
            >
              <div className="max-w-sm lg:pb-6">
                <p className="text-xl leading-8 tracking-[-0.025em] text-white/65">
                  Software engineer crafting digital products where technology,
                  design and measurable growth meet.
                </p>

                <div className="mt-8 flex items-center gap-3 text-xs text-white/32">
                  <MapPin size={14} />
                  Purnia, Bihar, India
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              <MagneticButton light href="#work">
                Explore work
              </MagneticButton>

              <MagneticButton href="mailto:rajeev855107@gmail.com">
                Email me
              </MagneticButton>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              href="#about"
              className="hidden h-28 w-28 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:rotate-12 hover:border-white/30 hover:text-white lg:flex"
            >
              <ArrowDownRight size={28} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="relative z-10 border-y border-white/[0.07]">
        <div className="mx-auto max-w-[1500px] px-6 py-7 md:px-10">
          <div className="flex flex-wrap justify-between gap-8 text-[10px] uppercase tracking-[0.3em] text-white/25">
            <span>Software Development Engineer</span>
            <span>React / Next.js</span>
            <span>Performance & SEO</span>
            <span>Google Ads / Meta Ads</span>
            <span>03+ Years Experience</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        data-cursor="EXPLORE"
        className="relative z-10 mx-auto max-w-[1500px] px-6 py-32 md:px-10 md:py-44"
      >
        <div className="grid gap-20 lg:grid-cols-[.35fr_1fr]">
          <div>
            <p className="sticky top-36 text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
              01 / About
            </p>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-6xl text-[clamp(2.7rem,5.7vw,6.4rem)] font-medium leading-[1.02] tracking-[-0.055em]"
            >
              I engineer
              <span className="text-white/25"> scalable digital systems </span>
              that look refined, perform fast and contribute to
              <span className="text-white/25"> real business growth.</span>
            </motion.p>

            <div className="mt-20 grid gap-12 border-t border-white/[0.07] pt-10 md:grid-cols-2">
              <p className="max-w-md text-base leading-8 text-white/42">
                With 3+ years of professional experience, I&apos;ve worked on
                frontend systems, API-driven applications, secure RBAC flows,
                enterprise workflows and full-stack web products.
              </p>

              <p className="max-w-md text-base leading-8 text-white/42">
                My background also includes technical SEO, Google Ads, Meta Ads
                and digital campaign strategy, allowing me to approach software
                from both an engineering and commercial perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative z-10 overflow-hidden border-y border-white/[0.06] py-8">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 34,
            ease: "linear",
          }}
          className="flex w-max gap-16 whitespace-nowrap"
        >
          {[...stack, ...stack].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-16 text-4xl font-medium tracking-[-0.04em] text-white/12 md:text-6xl"
            >
              <span>{item}</span>
              <span className="h-2 w-2 rounded-full bg-[#c7a7ff]/40" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="relative z-10 mx-auto max-w-[1500px] px-6 py-32 md:px-10 md:py-44"
      >
        <div className="grid gap-16 lg:grid-cols-[.35fr_1fr]">
          <div>
            <p className="sticky top-36 text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
              02 / Experience
            </p>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="border-t border-white/[0.08] pt-8"
            >
              <div className="grid gap-8 md:grid-cols-[.35fr_1fr]">
                <div>
                  <p className="text-sm text-white/28">
                    DEC 2022 — MAR 2026
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/28">
                    WellSkool Health Services Pvt. Ltd.
                  </p>

                  <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                    Software Development Engineer
                  </h2>

                  <div className="mt-12 grid gap-6 text-sm leading-7 text-white/40 md:grid-cols-2">
                    <p>
                      Integrated RESTful APIs using Axios and React Hooks for
                      dynamic workflows and reliable data handling.
                    </p>
                    <p>
                      Implemented role-based access control for secure,
                      structured permissions across application modules.
                    </p>
                    <p>
                      Contributed to government workflow systems with scalable
                      frontend architecture and interface implementation.
                    </p>
                    <p>
                      Applied technical SEO and performance-oriented practices
                      across web properties.
                    </p>
                    <p>
                      Worked directly with clients to translate business
                      requirements into practical technical solutions.
                    </p>
                    <p>
                      Created UI elements and supporting graphics to improve
                      product clarity and user experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* WORK */}
      <section
        id="work"
        data-cursor="VIEW"
        className="relative z-10 border-t border-white/[0.06] bg-[#0a0a0a]"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-32 md:px-10 md:py-44">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
                03 / Selected Work
              </p>

              <h2 className="text-[clamp(4rem,8vw,9rem)] font-medium leading-[0.86] tracking-[-0.065em]">
                Selected
                <br />
                <span className="text-white/22">projects.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/35">
              Products and systems designed around performance, scalability and
              real-world usability.
            </p>
          </div>

          <div>
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.05,
                }}
                className="group border-t border-white/[0.08] py-14 md:py-20"
              >
                <div className="grid gap-10 lg:grid-cols-[.2fr_.95fr_.65fr]">
                  <div>
                    <p className="text-6xl font-medium tracking-[-0.06em] text-white/10">
                      {project.number}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#c7a7ff]/70">
                      {project.type}
                    </p>

                    <h3 className="mt-5 text-4xl font-medium tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-3 md:text-6xl">
                      {project.title}
                    </h3>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-white/37">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between gap-10">
                    <p className="text-xs leading-6 tracking-[0.08em] text-white/25">
                      {project.stack}
                    </p>

                    <motion.button
                      whileHover={{ rotate: 10, scale: 1.08 }}
                      className="flex h-14 w-14 items-center justify-center self-start rounded-full border border-white/12"
                    >
                      <ArrowUpRight size={19} />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
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
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-10 hidden h-28 w-28 items-center justify-center rounded-full border border-white/[0.08] lg:flex"
              >
                <Code2
                  size={30}
                  strokeWidth={1.3}
                  className="text-white/35"
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* Heading */}
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/25">
                <Sparkles
                  size={13}
                  className="text-[#c7a7ff]"
                />
                Technology & Expertise
              </p>

              <h2 className="max-w-5xl text-[clamp(3.8rem,7.5vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                TOOLS BEHIND
                <br />

                <span className="text-white/20">
                  THE CRAFT.
                </span>
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-8 text-white/38">
                My toolkit combines modern software engineering with
                digital growth — allowing me to build products that are
                fast, scalable, discoverable and designed around real
                business outcomes.
              </p>
            </motion.div>

            {/* Categories */}
            <div className="mt-24">
              {skillGroups.map((group, groupIndex) => {
                const GroupIcon = group.icon;

                return (
                  <motion.div
                    key={group.title}
                    initial={{
                      opacity: 0,
                      y: 70,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
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
                          {/* Large Icon */}
                          <motion.div
                            whileHover={{
                              rotate: 8,
                              scale: 1.08,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 18,
                            }}
                            className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.025]"
                          >
                            {/* Icon glow */}
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
                              initial={{
                                opacity: 0,
                                y: 25,
                                scale: 0.94,
                              }}
                              whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 0.5,
                                delay: skillIndex * 0.035,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              whileHover={{
                                y: -6,
                                scale: 1.035,
                              }}
                              className="group/skill relative cursor-default overflow-hidden rounded-full border border-white/[0.09] bg-white/[0.022] px-4 py-3"
                            >
                              {/* Hover background */}
                              <motion.div
                                initial={{
                                  opacity: 0,
                                }}
                                whileHover={{
                                  opacity: 1,
                                }}
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
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
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
      {/* SKILLS */}
      <section className="relative z-10 mx-auto max-w-[1500px] px-6 py-32 md:px-10 md:py-44">
        <div className="grid gap-16 lg:grid-cols-[.35fr_1fr]">
          <div>
            <p className="sticky top-36 text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
              05 / Expertise
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Engineering.
              <br />
              <span className="text-white/22">Growth.</span>
              <br />
              Execution.
            </h2>

            <div className="mt-20 grid gap-14 border-t border-white/[0.08] pt-10 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium">Frontend Engineering</h3>
                <p className="mt-4 leading-8 text-white/35">
                  React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3,
                  Tailwind CSS, responsive UI architecture.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Backend & Data</h3>
                <p className="mt-4 leading-8 text-white/35">
                  PHP, Laravel, RESTful APIs, Axios, MySQL, MongoDB, RBAC and
                  authentication workflows.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Programming</h3>
                <p className="mt-4 leading-8 text-white/35">
                  JavaScript, TypeScript, Python, PHP, C, C++, OOP and data
                  structures & algorithms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Digital Growth</h3>
                <p className="mt-4 leading-8 text-white/35">
                  Google Ads, Meta Ads, Technical SEO, social media marketing
                  and conversion-focused digital strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="relative z-10 border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1500px] px-6 py-32 md:px-10">
          <p className="mb-14 text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
            06 / Education
          </p>

          <div className="grid gap-14 md:grid-cols-2">
            <div className="border-t border-white/[0.08] pt-7">
              <p className="text-xs text-white/25">2020 — 2024</p>
              <h3 className="mt-8 text-3xl font-medium tracking-[-0.035em]">
                Nalanda College of Engineering
              </h3>
              <p className="mt-3 text-white/35">Chandi, Nalanda, Bihar</p>
              <p className="mt-8 text-sm text-white/40">
                B.Tech — Electrical & Electronics Engineering
              </p>
              <p className="mt-2 text-sm text-white/22">CGPA 7.37</p>
            </div>

            <div className="border-t border-white/[0.08] pt-7">
              <p className="text-xs text-white/25">2017 — 2019</p>
              <h3 className="mt-8 text-3xl font-medium tracking-[-0.035em]">
                Jawahar Navodaya Vidyalaya
              </h3>
              <p className="mt-3 text-white/35">Kishanganj, Bihar</p>
              <p className="mt-8 text-sm text-white/40">
                Higher Secondary Certificate — Class XII
              </p>
              <p className="mt-2 text-sm text-white/22">71.2%</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        data-cursor="OPEN"
        className="relative z-10 min-h-screen overflow-hidden px-6 py-32 md:px-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(199,167,255,.13),transparent_30%)]" />

        <div className="relative mx-auto flex min-h-[75vh] max-w-[1500px] flex-col justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
              07 / Contact
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="mt-14 max-w-7xl text-[clamp(4.5rem,11vw,12rem)] font-medium leading-[0.82] tracking-[-0.075em]"
            >
              LET&apos;S CREATE
              <br />
              <span className="text-white/20">SOMETHING</span>
              <br />
              REMARKABLE.
            </motion.h2>
          </div>

          <div className="mt-20 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-wrap gap-4">
              <MagneticButton
                light
                href="mailto:rajeev855107@gmail.com"
              >
                <Mail size={16} />
                Start a conversation
              </MagneticButton>

              <MagneticButton href="tel:+919508690371">
                <Phone size={16} />
                +91 9508690371
              </MagneticButton>
            </div>

            <div className="flex items-end gap-5">
              <a
                href="#"
                className="text-white/30 transition hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="#"
                className="text-white/30 transition hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="mailto:rajeev855107@gmail.com"
                className="text-white/30 transition hover:text-white"
                aria-label="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-white/20 md:flex-row">
          <span>© 2026 Rajeev Sah</span>
          <span>Software Engineer × Digital Growth</span>
          <span>Purnia, Bihar, India</span>
        </div>
      </footer>
    </main>
  );
}