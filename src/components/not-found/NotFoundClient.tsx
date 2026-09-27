"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Home } from "lucide-react";
import { motion } from "framer-motion"
export default function NotFoundClient() {

  return (
    <main
      data-cursor="LOST?"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#070707] text-[#f2eee7]"
    >
      {/* grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:76px_76px]" />
      </div>

      {/* main content */}
      <section className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1500px] px-6 pb-14 md:px-10">
          <div className="grid items-end gap-14 lg:grid-cols-[1fr_.38fr]">

            {/* left */}
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

              <motion.h1
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="select-none text-[clamp(10rem,28vw,31rem)] font-medium leading-[0.67] tracking-[-0.095em] text-[#f2eee7]"
              >
                404
              </motion.h1>
            </div>

            {/* right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:pb-12"
            >
              <p className="text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
                You&apos;ve wandered beyond
                <span className="text-white/25"> the interface.</span>
              </p>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
                The page you&apos;re looking for may have been moved, renamed,
                deleted, or perhaps it never existed.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/"
                  data-cursor="HOME"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#f2eee7] px-6 py-4 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1"
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
                  className="group inline-flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.02] px-6 py-4 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
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
    </main>
  );
}
