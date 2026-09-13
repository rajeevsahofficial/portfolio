"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, MapPin, ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/home/shared/MagneticButton";
import RevealText from "@/components/home/shared/RevealText";

const stats = [
  { value: "3+",  label: "Years\nExperience"   },
  { value: "10+", label: "Projects\nDelivered"  },
  { value: "3",   label: "Domains\nMastered"    },
  { value: "∞",   label: "Problems\nSolved"     },
];

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen px-6 pb-16 pt-28 md:px-10 md:pt-36">
      <div className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-[1500px] flex-col justify-between">

        {/* ── top grid ── */}
        <div className="grid gap-10 lg:grid-cols-[1.6fr_.4fr]">

          {/* left — name block */}
          <div>
            {/* availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] px-4 py-2"
            >
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8fffbb] opacity-60" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#8fffbb]" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/50">
                Available for selected opportunities
              </span>
            </motion.div>

            {/* display name */}
            <h1 className="text-[clamp(5rem,14vw,13rem)] font-medium leading-[0.76] tracking-[-0.075em]">
              <RevealText delay={0.05}>RAJEEV</RevealText>
              <RevealText delay={0.15}>
                {/* outlined / ghost second line */}
                <span
                  className="text-transparent"
                  style={{
                    WebkitTextStroke: "1px rgba(242,238,231,0.22)",
                  }}
                >
                  KUMAR
                </span>
              </RevealText>
            </h1>
          </div>

          {/* right — descriptor */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-end"
          >
            <div className="max-w-xs lg:pb-5">
              {/* role tag */}
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#c7a7ff]">
                Software Development Engineer
              </p>

              <p className="text-lg leading-8 tracking-[-0.02em] text-white/58">
                Engineering digital products where technology, refined design
                and measurable growth intersect.
              </p>

              <div className="mt-7 flex items-center gap-2 text-[11px] text-white/30">
                <MapPin size={12} strokeWidth={1.5} />
                Purnia, Bihar, India
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── bottom strip ── */}
        <div className="mt-20">

          {/* stat row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mb-12 grid grid-cols-2 gap-px border border-white/[0.07] bg-white/[0.07] md:grid-cols-4"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col gap-1 bg-[#070707] px-6 py-5"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl font-medium tracking-[-0.04em] text-[#f2eee7]"
                >
                  {s.value}
                </motion.span>
                <span className="whitespace-pre-line text-[10px] uppercase tracking-[0.22em] text-white/28">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA row */}
          <div className="flex items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
              className="flex flex-wrap gap-3"
            >
              <MagneticButton light href="#work">
                Explore work
              </MagneticButton>
              <MagneticButton href="mailto:rajeev855107@gmail.com">
                Email me
              </MagneticButton>
            </motion.div>

            {/* scroll indicator */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              href="#about"
              className="group hidden flex-col items-center gap-3 text-white/25 transition-colors hover:text-white/60 lg:flex"
            >
              <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                <ArrowDownRight size={22} strokeWidth={1.2} />
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
