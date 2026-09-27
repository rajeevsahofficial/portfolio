"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "@/components/home/shared/MagneticButton";

const socials = [
  { label: "GitHub",   icon: FaGithub,  href: "https://github.com/rajeevkrsah",                              handle: "github.com/rajeevkrsah" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/the-rajeev-sah",                              handle: "linkedin.com/in/the-rajeev-sah" },
  { label: "Email",    icon: Mail,       href: "mailto:rajeev855107@gmail.com",  handle: "rajeev855107@gmail.com" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      data-cursor="OPEN"
      className="relative z-10 overflow-hidden px-6 py-32 md:px-10 md:py-44"
    >
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#c7a7ff]/[0.055] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[#c7a7ff]/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">

        {/* section label */}
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#c7a7ff]">
          07 / Contact
        </p>

        {/* headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-7xl text-[clamp(4rem,10.5vw,11.5rem)] font-medium leading-[0.82] tracking-[-0.075em]"
        >
          LET&apos;S CREATE
          <br />
          <span className="text-white/20">SOMETHING</span>
          <br />
          REMARKABLE.
        </motion.h2>

        {/* availability + response note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8fffbb] opacity-60" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#8fffbb]" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">
              Currently available
            </span>
          </div>
          <span className="hidden h-[3px] w-[3px] rounded-full bg-white/15 md:block" />
          <span className="text-[11px] uppercase tracking-[0.24em] text-white/25">
            Usually responds within 24 hrs
          </span>
        </motion.div>

        {/* bottom action row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-[1fr_auto]"
        >
          {/* primary CTAs */}
          <div className="flex flex-wrap gap-3">
            <MagneticButton light href="mailto:rajeev855107@gmail.com">
              <Mail size={15} />
              Start a conversation
            </MagneticButton>
            <MagneticButton href="tel:+919508690371">
              <Phone size={15} />
              +91 9508690371
            </MagneticButton>
          </div>

          {/* social links with labels */}
          <div className="flex flex-col justify-end gap-3">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  aria-label={s.label}
                  className="group flex items-center gap-3 text-white/28 transition-colors duration-200 hover:text-white/75"
                >
                  <Icon size={15} />
                  <span className="text-[11px] tracking-[0.04em]">{s.handle}</span>
                  <ArrowUpRight
                    size={11}
                    className="opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
