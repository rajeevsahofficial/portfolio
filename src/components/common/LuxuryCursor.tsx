"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";


export default function LuxuryCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const followerX = useSpring(mouseX, {
    stiffness: 220,
    damping: 28,
    mass: 0.25,
  });

  const followerY = useSpring(mouseY, {
    stiffness: 220,
    damping: 28,
    mass: 0.25,
  });

  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement;
      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        setActive(true);
        setLabel(cursorTarget.dataset.cursor || "");
      } else {
        setActive(false);
        setLabel("");
      }
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* precise center dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: active ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          hidden
          h-[5px]
          w-[5px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#f2eee7]
          lg:block
        "
      />

      {/* elegant follower */}
      <motion.div
        style={{
          x: followerX,
          y: followerY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          width: active ? 86 : 26,
          height: active ? 86 : 26,
          backgroundColor: active
            ? "rgba(242,238,231,0.92)"
            : "rgba(242,238,231,0)",
          borderColor: active
            ? "rgba(242,238,231,0)"
            : "rgba(242,238,231,0.28)",
        }}
        transition={{
          width: {
            type: "spring",
            stiffness: 240,
            damping: 24,
          },
          height: {
            type: "spring",
            stiffness: 240,
            damping: 24,
          },
          backgroundColor: {
            duration: 0.25,
          },
          borderColor: {
            duration: 0.25,
          },
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          hidden
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          lg:flex
        "
      >
        <motion.span
          animate={{
            opacity: active ? 1 : 0,
            scale: active ? 1 : 0.8,
          }}
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-black
          "
        >
          {label}
        </motion.span>
      </motion.div>
    </>
  );
}