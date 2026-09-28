"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/rajeevkrsah",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/the-rajeev-sah",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:rajeev855107@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#050505] px-5 py-8 sm:px-7 md:px-10 md:py-9">
      <div className="mx-auto max-w-[1500px]">

        {/* Main row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div className="group">
            <p className="text-[13px] font-medium tracking-[-0.02em] text-white/70 transition-colors duration-300 group-hover:text-white">
              RAJEEV KUMAR
            </p>

            <p className="mt-2 pl-4 text-[8px] uppercase tracking-[0.28em] text-white/20">
              Designed & built with intention
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  data-cursor={social.label.toUpperCase()}
                  whileHover={{ y: -2 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.015] text-white/25 transition-all duration-300 hover:border-[#c7a7ff]/25 hover:bg-[#c7a7ff]/[0.06] hover:text-[#c7a7ff]"
                >
                  <Icon size={14} />

                  <span className="sr-only">
                    {social.label}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">

            <p className="text-[8px] uppercase tracking-[0.22em] text-white/20">
              © 2026 · India
            </p>

            <span className="hidden h-3 w-px bg-white/[0.08] sm:block" />

            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -2 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="group flex w-fit items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-white/25 transition-colors duration-300 hover:text-white/70"
              aria-label="Back to top"
            >
              <span>Back to top</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.07] transition-all duration-300 group-hover:border-[#c7a7ff]/30 group-hover:bg-[#c7a7ff]/[0.06]">
                <ArrowUpRight
                  size={10}
                  className="-rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}