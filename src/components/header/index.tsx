"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import MagneticButton from "@/components/home/shared/MagneticButton";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/* ─── thin horizontal line that underscores the active link ─── */
function NavUnderline() {
  return (
    <motion.span
      layoutId="nav-underline"
      className="absolute -bottom-px left-0 h-px w-full bg-[#c7a7ff]/60"
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  /* scroll-progress bar */
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.3,
  });

  /* magnetic logo */
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoX = useMotionValue(0);
  const logoY = useMotionValue(0);

  const onLogoMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bounds = logoRef.current?.getBoundingClientRect();
    if (!bounds) return;
    logoX.set((e.clientX - bounds.left - bounds.width / 2) * 0.14);
    logoY.set((e.clientY - bounds.top - bounds.height / 2) * 0.14);
  };
  const onLogoLeave = () => { logoX.set(0); logoY.set(0); };

  useEffect(() => {
    /* ── scroll progress + pill background ── */
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ── active section via IntersectionObserver ── */
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
          /* fire when section top crosses 20% from the top of viewport */
          rootMargin: "-10% 0px -80% 0px",
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  /* lock body scroll while mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ════════════ scroll-progress bar ════════════ */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[200] h-[2px] origin-left bg-[#c7a7ff]"
      />

      {/* ════════════ header shell ════════════ */}
      <header className="fixed left-0 right-0 top-0 z-[100]">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">

          {/* ── pill container ── */}
          <motion.div
            animate={{
              backgroundColor: scrolled
                ? "rgba(7,7,7,0.78)"
                : "rgba(7,7,7,0)",
              borderColor: scrolled
                ? "rgba(255,255,255,0.07)"
                : "rgba(255,255,255,0)",
              backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="
              mt-4 flex items-center justify-between
              rounded-2xl border px-0 py-3.5
              md:px-0 md:py-4
            "
          >

            {/* ── logo ── */}
            <motion.a
              ref={logoRef}
              href="/"
              onMouseMove={onLogoMove}
              onMouseLeave={onLogoLeave}
              style={{ x: logoX, y: logoY }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-2.5"
            >
              <span className="text-[20px] font-semibold tracking-[-0.02em] text-[#f2eee7] transition-opacity duration-300 group-hover:opacity-60">
                RAJEEV KUMAR
              </span>
            </motion.a>

            {/* ── desktop nav ── */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hidden items-center gap-1 md:flex"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`
                      relative px-3.5 py-2
                      text-[11px] uppercase tracking-[0.18em]
                      transition-colors duration-200
                      ${isActive
                        ? "text-[#f2eee7]"
                        : "text-white/38 hover:text-white/75"}
                    `}
                  >
                    {isActive && <NavUnderline />}
                    {link.label}
                  </a>
                );
              })}
            </motion.nav>

            {/* ── right group ── */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              {/* desktop CTA */}
              <div className="hidden md:block">
                <MagneticButton href="#contact">Let&apos;s talk</MagneticButton>
              </div>

              {/* mobile hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                className="
                  relative flex h-9 w-9 flex-col items-center justify-center gap-[5px]
                  rounded-xl border border-white/[0.09] bg-white/[0.025]
                  transition-colors duration-200 hover:border-white/20
                  md:hidden
                "
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="h-px w-[18px] bg-[#f2eee7]"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="h-px w-[18px] bg-[#f2eee7]"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="h-px w-[18px] bg-[#f2eee7]"
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* ════════════ mobile full-screen menu ════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] md:hidden"
            style={{ backdropFilter: "blur(24px)", backgroundColor: "rgba(7,7,7,0.97)" }}
          >
            {/* inner scroll container — starts below the header pill (~72px) */}
            <div className="flex h-full flex-col overflow-y-auto pt-[72px]">

              {/* nav list */}
              <nav className="flex flex-1 flex-col px-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{
                      delay: i * 0.055 + 0.05,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      group flex items-center justify-between
                      border-b border-white/[0.07] py-6
                      text-[clamp(1.9rem,8vw,3.2rem)] font-medium
                      tracking-[-0.04em] text-white/55
                      transition-colors duration-200 hover:text-[#f2eee7]
                    "
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 transition-colors duration-200 group-hover:text-[#c7a7ff]">
                      0{i + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* bottom action row */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: navLinks.length * 0.055 + 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center justify-between border-t border-white/[0.07] px-6 py-8"
              >
                <MagneticButton href="#contact">
                  Let&apos;s talk
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
