"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";
import LuxuryCursor from "@/components/common/LuxuryCursor";
import Header from "@/components/header";
import Hero from "@/components/home/hero";
import Statement from "@/components/home/statement";
import About from "@/components/home/about";
import Marquee from "@/components/home/marquee";
import Experience from "@/components/home/experience";
import Work from "@/components/home/work";
import Skills from "@/components/home/skills";
import Expertise from "@/components/home/expertise";
import Education from "@/components/home/education";
import Contact from "@/components/home/contact";
import Footer from "@/components/home/footer";

export default function Home() {
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

  if (!mounted) {
    return (
      <main className="relative overflow-hidden bg-[#070707] text-[#f2eee7]" />
    );
  }

  return (
    <main className="relative overflow-hidden bg-[#070707] text-[#f2eee7]">
      <LuxuryCursor />
      <Header />

      {/* Mouse spotlight */}
      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
      />

      {/* Grid background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.22]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:76px_76px]" />
      </div>

      <Hero />
      <Statement />
      <About />
      <Marquee />
      <Work />
      <Experience />
      <Skills />
      <Expertise />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
