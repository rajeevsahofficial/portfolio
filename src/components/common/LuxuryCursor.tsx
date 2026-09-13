"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Cursor states
   idle      → small ring + tiny dot
   hover     → ring expands, fills cream, shows label
   clicking  → ring bursts then snaps back
   link      → ring shrinks to tight accent dot
───────────────────────────────────────────── */

type CursorState = "idle" | "hover" | "clicking" | "link";

export default function LuxuryCursor() {
  /* ── raw position (instant) ── */
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  /* ── smooth follower (spring) ── */
  const followerX = useSpring(rawX, { stiffness: 180, damping: 22, mass: 0.3 });
  const followerY = useSpring(rawY, { stiffness: 180, damping: 22, mass: 0.3 });

  /* ── slower outer ring (more lag = luxury feel) ── */
  const ringX = useSpring(rawX, { stiffness: 90, damping: 20, mass: 0.6 });
  const ringY = useSpring(rawY, { stiffness: 90, damping: 20, mass: 0.6 });

  const [state, setState]     = useState<CursorState>("idle");
  const [label, setLabel]     = useState("");
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const clickTimer             = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);

      const target     = e.target as HTMLElement;
      const dataCursor = target.closest("[data-cursor]") as HTMLElement | null;
      const isLink     = !!target.closest("a, button");

      if (dataCursor) {
        setState("hover");
        setLabel(dataCursor.dataset.cursor ?? "");
      } else if (isLink) {
        setState("link");
        setLabel("");
      } else {
        setState("idle");
        setLabel("");
      }
    };

    const onDown = () => {
      setState("clicking");
      if (clickTimer.current) clearTimeout(clickTimer.current);
      clickTimer.current = setTimeout(() => {
        setState("idle");
      }, 300);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove",          onMove);
    window.addEventListener("mousedown",           onDown);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove",          onMove);
      window.removeEventListener("mousedown",           onDown);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      if (clickTimer.current) clearTimeout(clickTimer.current);
    };
  }, [rawX, rawY]);

  if (!mounted) return null;

  /* ── derived values per state ── */
  const dotSize = state === "hover" ? 0 : state === "clicking" ? 10 : 5;
  const dotColor =
    state === "link" ? "#c7a7ff" : "#f2eee7";

  const followerSize =
    state === "hover"    ? 88  :
    state === "clicking" ? 40  :
    state === "link"     ? 14  : 28;

  const followerBg =
    state === "hover"
      ? "rgba(242,238,231,0.94)"
      : state === "link"
      ? "rgba(199,167,255,0.18)"
      : "rgba(242,238,231,0)";

  const followerBorder =
    state === "hover"
      ? "rgba(242,238,231,0)"
      : state === "link"
      ? "rgba(199,167,255,0.70)"
      : "rgba(242,238,231,0.25)";

  const ringSize =
    state === "clicking" ? 64 :
    state === "hover"    ? 0  : 52;

  const ringOpacity =
    state === "idle"     ? 0.07 :
    state === "clicking" ? 0.18 : 0;

  const springConfig = { type: "spring" as const, stiffness: 260, damping: 22 };
  const easeConfig   = { duration: 0.22 };

  return (
    <>
      {/* ── 1. outer breathing ring (slowest layer) ── */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? ringOpacity : 0,
          width:  ringSize,
          height: ringSize,
        }}
        transition={{
          width:   springConfig,
          height:  springConfig,
          opacity: easeConfig,
        }}
        className="
          pointer-events-none fixed left-0 top-0 z-[9996]
          hidden lg:block
          -translate-x-1/2 -translate-y-1/2
          rounded-full border border-[#f2eee7]
        "
      />

      {/* ── 2. main follower disc (mid layer) ── */}
      <motion.div
        style={{ x: followerX, y: followerY }}
        animate={{
          opacity:         visible ? 1 : 0,
          width:           followerSize,
          height:          followerSize,
          backgroundColor: followerBg,
          borderColor:     followerBorder,
          scale:           state === "clicking" ? 0.88 : 1,
        }}
        transition={{
          width:           springConfig,
          height:          springConfig,
          backgroundColor: easeConfig,
          borderColor:     easeConfig,
          scale:           { type: "spring", stiffness: 400, damping: 20 },
          opacity:         easeConfig,
        }}
        className="
          pointer-events-none fixed left-0 top-0 z-[9998]
          hidden lg:flex
          -translate-x-1/2 -translate-y-1/2
          items-center justify-center
          rounded-full border
        "
      >
        {/* label text inside follower */}
        <motion.span
          animate={{
            opacity: state === "hover" ? 1 : 0,
            scale:   state === "hover" ? 1 : 0.75,
            y:       state === "hover" ? 0 : 4,
          }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="select-none text-[9px] font-semibold uppercase tracking-[0.2em] text-black"
        >
          {label}
        </motion.span>
      </motion.div>

      {/* ── 3. precise center dot (fastest layer) ── */}
      <motion.div
        style={{ x: rawX, y: rawY }}
        animate={{
          opacity:         visible ? 1 : 0,
          width:           dotSize,
          height:          dotSize,
          backgroundColor: dotColor,
          scale:           state === "clicking" ? 1.6 : 1,
        }}
        transition={{
          width:           { duration: 0.12 },
          height:          { duration: 0.12 },
          backgroundColor: { duration: 0.15 },
          scale:           { type: "spring", stiffness: 500, damping: 18 },
          opacity:         { duration: 0.1 },
        }}
        className="
          pointer-events-none fixed left-0 top-0 z-[9999]
          hidden lg:block
          -translate-x-1/2 -translate-y-1/2
          rounded-full
        "
      />
    </>
  );
}
