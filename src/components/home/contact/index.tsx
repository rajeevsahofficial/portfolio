"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "@/components/home/shared/MagneticButton";
import { useState } from "react";
const ease = [0.16, 1, 0.3, 1] as const;
const socials = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/rajeevkrsah", handle: "github.com/rajeevkrsah" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/the-rajeev-sah", handle: "linkedin.com/in/the-rajeev-sah" },
  { label: "Email", icon: Mail, href: "mailto:rajeev855107@gmail.com", handle: "rajeev855107@gmail.com" },
];
const contacts = [
  {
    id: "01",
    label: "Email",
    value: "rajeev855107@gmail.com",
    href: "mailto:rajeev855107@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    id: "02",
    label: "Phone",
    value: "+91 9508690371",
    href: "tel:+919508690371",
    icon: Phone,
    external: false,
  },
  {
    id: "03",
    label: "GitHub",
    value: "github.com/rajeevkrsah",
    href: "https://github.com/rajeevkrsah",
    icon: FaGithub,
    external: true,
  },
  {
    id: "04",
    label: "LinkedIn",
    value: "linkedin.com/in/the-rajeev-sah",
    href: "https://www.linkedin.com/in/the-rajeev-sah",
    icon: FaLinkedin,
    external: true,
  },
];
export default function Contact() {
  const [activeContact, setActiveContact] = useState("01");
  return (
    <section
      id="contact"
      data-cursor="OPEN"
      className="relative z-10 overflow-hidden px-6 py-28 md:px-10 md:py-44"
    >
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

        <div className="relative mt-28 grid min-h-[620px] items-center border-t border-white/[0.07] md:mt-40 lg:grid-cols-[1fr_1fr]">
          {/* left */}
          <div className="relative z-10 py-20 lg:py-28">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[8px] uppercase tracking-[0.35em] text-white/20"
            >
              Have a project in mind?
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease }}
              className="mt-6 max-w-2xl text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.07em]"
            >
              Build
              <br />
              something
              <br />
              <span className="text-white/[0.18]">remarkable.</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-8 max-w-md text-base leading-8 text-white/38"
            >
              From product interfaces to full-stack applications,
              I&apos;m interested in solving meaningful problems
              with thoughtful technology.
            </motion.p>
          </div>


          <div className="">
            <div className="grid border-t border-white/[0.08] md:grid-cols-2">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                const active = activeContact === contact.id;

                return (
                  <motion.a
                    key={contact.id}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={
                      contact.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    data-cursor={contact.label.toUpperCase()}
                    onMouseEnter={() => setActiveContact(contact.id)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.7,
                      ease,
                    }}
                    className="group relative overflow-hidden border-b border-white/[0.08] p-7 transition-colors duration-500 md:p-10 lg:p-12"
                  >
                    <motion.div
                      animate={{
                        opacity: active ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-[#c7a7ff]/[0.025]"
                    />

                    <div className="relative flex items-start justify-between">
                      <div className="flex gap-5">
                        <span className="font-mono text-[8px] text-white/15">
                          {contact.id}
                        </span>

                        <div>
                          <div className="flex items-center gap-3">
                            <Icon
                              size={14}
                              className="text-white/25 transition-colors group-hover:text-[#c7a7ff]"
                            />

                            <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                              {contact.label}
                            </span>
                          </div>

                          <span className="mt-4 block break-all text-[14px] tracking-[-0.01em] text-white/50 transition-colors duration-300 group-hover:text-white md:text-[16px]">
                            {contact.value}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="text-white/15 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c7a7ff]"
                      />
                    </div>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: active ? 1 : 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#c7a7ff]/60"
                    />
                  </motion.a>
                );
              })}
            </div>

          </div>
        </div>

      </div>
      {/* Giant background word */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease }}
        className="pointer-events-none absolute left-1/2 -bottom-3 lg:-bottom-12 -translate-x-1/2 whitespace-nowrap text-[22vw] font-semibold uppercase leading-none tracking-[-0.09em] text-white/[0.018]"
      >
        Contact
      </motion.div>
    </section>
  );
}
