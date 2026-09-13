"use client";

import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function MagneticButton({
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
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-4 text-sm font-medium transition ${
        light
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
