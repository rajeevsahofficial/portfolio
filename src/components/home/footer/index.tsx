"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-white/[0.06] px-6 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* left — brand + tagline */}
          <div>
            <p className="text-sm font-semibold tracking-[-0.02em] text-white/70">
              RAJEEV KUMAR
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/22">
              Software Engineer × Digital Growth
            </p>
          </div>

          {/* center — socials */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="GitHub"
              className="text-white/25 transition-colors duration-200 hover:text-white/65"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/25 transition-colors duration-200 hover:text-white/65"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="mailto:rajeev855107@gmail.com"
              aria-label="Email"
              className="text-white/25 transition-colors duration-200 hover:text-white/65"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* right — meta + back to top */}
          <div className="flex items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
              © 2026 · Purnia, Bihar
            </p>

            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-white/25 transition-colors duration-200 hover:text-white/60"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUpRight size={12} className="-rotate-45" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
