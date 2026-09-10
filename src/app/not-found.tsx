"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Home } from "lucide-react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import LuxuryCursor from "@/components/common/LuxuryCursor";

export default function NotFound() {
    const [mounted, setMounted] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 80,
        damping: 20,
        mass: 0.6,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 80,
        damping: 20,
        mass: 0.6,
    });

    const moveX = useTransform(smoothX, [-500, 500], [-25, 25]);
    const moveY = useTransform(smoothY, [-500, 500], [-20, 20]);

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    if (!mounted) {
        return (
            <main className="relative min-h-screen overflow-hidden bg-[#070707] text-[#f2eee7]" />
        );
    }

    return (
        <main
            data-cursor="LOST?"
            className="relative flex min-h-screen flex-col overflow-hidden bg-[#070707] text-[#f2eee7]"
        >  {/* GRID */}
            <LuxuryCursor />
            {/* TOP NAV */}
            <header className="relative z-20 flex items-center justify-between px-6 py-7 md:px-10">
                <Link
                    href="/"
                    className="text-sm font-semibold tracking-[-0.02em]"
                >
                    RAJEEV SAH
                </Link>

                <p className="hidden text-[10px] uppercase tracking-[0.3em] text-white/25 md:block">
                    Error / 404
                </p>
            </header>

            {/* MAIN CONTENT */}
            <section className="relative z-10 flex flex-1 items-center">
                <div className="mx-auto w-full max-w-[1500px] px-6 pb-14 md:px-10">
                    <div className="grid items-end gap-14 lg:grid-cols-[1fr_.38fr]">
                        {/* LEFT */}
                        <div>
                            <div className="mb-8 flex items-center gap-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c7a7ff] opacity-40" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c7a7ff]" />
                                </span>

                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                                    Page not found
                                </span>
                            </div>

                            {/* 404 */}
                            <div className="relative">
                                <motion.h1
                                    initial={{
                                        opacity: 0,
                                        y: 90,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="
                    select-none
                    text-[clamp(10rem,28vw,31rem)]
                    font-medium
                    leading-[0.67]
                    tracking-[-0.095em]
                    text-[#f2eee7]
                  "
                                >
                                    404
                                </motion.h1>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.6,
                                duration: 0.9,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="lg:pb-12"
                        >
                            <p className="text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
                                You&apos;ve wandered beyond
                                <span className="text-white/25"> the interface.</span>
                            </p>

                            <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
                                The page you&apos;re looking for may have been moved,
                                renamed, deleted, or perhaps it never existed.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <Link
                                    href="/"
                                    data-cursor="HOME"
                                    className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#f2eee7]
                    px-6
                    py-4
                    text-sm
                    font-medium
                    text-black
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                  "
                                >
                                    <Home size={15} />

                                    Back home

                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </Link>

                                <button
                                    onClick={() => window.history.back()}
                                    data-cursor="BACK"
                                    className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/[0.1]
                    bg-white/[0.02]
                    px-6
                    py-4
                    text-sm
                    text-white/60
                    transition
                    hover:border-white/20
                    hover:text-white
                  "
                                >
                                    <ArrowLeft
                                        size={15}
                                        className="transition-transform duration-300 group-hover:-translate-x-1"
                                    />

                                    Go back
                                </button>
                            </div>
                        </motion.div>
                    </div>


                </div>
            </section>
            {/* BOTTOM META */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 1,
                    duration: 0.8,
                }}
                className="relative z-20 shrink-0 px-6 pb-7 md:px-10 md:pb-8"
            >
                <div
                    className="
      mx-auto
      flex
      max-w-[1500px]
      flex-col
      justify-between
      gap-4
      border-t
      border-white/[0.06]
      pt-7
      text-[9px]
      uppercase
      tracking-[0.25em]
      text-white/20
      md:flex-row
    "
                >
                    <span>Lost in the digital space</span>

                    <span>Rajeev Sah © 2026</span>

                    <span>Purnia / Bihar / India</span>
                </div>
            </motion.footer>
        </main>
    );
}