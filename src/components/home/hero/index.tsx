"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

import {
  SiGoogleads,
  SiLaravel,
  SiMeta,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
} from "react-icons/si";

/* =========================================================
   TYPES
========================================================= */

type Tool = {
  name: string;
  label: string;
  color: string;
  icon: React.ReactNode;
  x: number;
  y: number;
};

/* =========================================================
   TECHNOLOGIES
========================================================= */

const tools: Tool[] = [
  {
    name: "Next.js",
    label: "NEXT.JS",
    color: "#ffffff",
    icon: <SiNextdotjs />,
    x: 50,
    y: 0,
  },
  {
    name: "Laravel",
    label: "LARAVEL",
    color: "#FF2D20",
    icon: <SiLaravel />,
    x: 85,
    y: 15,
  },
  {
    name: "MySQL",
    label: "MYSQL",
    color: "#4479A1",
    icon: <SiMysql />,
    x: 100,
    y: 50,
  },
  {
    name: "PHP",
    label: "PHP",
    color: "#777BB4",
    icon: <SiPhp />,
    x: 85,
    y: 85,
  },
  {
    name: "Google Ads",
    label: "GOOGLE ADS",
    color: "#4285F4",
    icon: <SiGoogleads />,
    x: 50,
    y: 100,
  },
  {
    name: "Meta Ads",
    label: "META ADS",
    color: "#1877F2",
    icon: <SiMeta />,
    x: 15,
    y: 85,
  },
  {
    name: "Node.js",
    label: "NODE.JS",
    color: "#68A063",
    icon: <SiNodedotjs />,
    x: 0,
    y: 50,
  },
  {
    name: "React",
    label: "REACT",
    color: "#61DAFB",
    icon: <SiReact />,
    x: 15,
    y: 15,
  },
];

/* =========================================================
   ORBIT RING
========================================================= */

function OrbitRing({
  size,
  duration,
  reverse = false,
  dashed = false,
}: {
  size: string;
  duration: number;
  reverse?: boolean;
  dashed?: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${dashed
        ? "border border-dashed border-white/[0.065]"
        : "border border-white/[0.075]"
        }`}
      style={{
        width: size,
        height: size,
      }}
    >
      <span
        className="
          absolute
          left-1/2
          top-0
          h-1.5
          w-1.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c7a7ff]
          shadow-[0_0_12px_#c7a7ff]
        "
      />
    </motion.div>
  );
}

/* =========================================================
   TOOL NODE
========================================================= */

function ToolNode({
  tool,
  index,
}: {
  tool: Tool;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        delay: 0.7 + index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        absolute
        z-30
        -translate-x-1/2
        -translate-y-1/2
      "
      style={{
        left: `${tool.x}%`,
        top: `${tool.y}%`,
      }}
    >
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4 + index * 0.25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.15,
        }}
        whileHover={{
          scale: 1.12,
        }}
        className="group relative"
      >
        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-4
            rounded-full
            opacity-0
            blur-xl
            transition-opacity
            duration-500
            group-hover:opacity-40
          "
          style={{
            backgroundColor: tool.color,
          }}
        />

        {/* Icon */}

        <div
          className="
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.10]
            bg-[#0b0b0d]/95
            shadow-[0_10px_35px_rgba(0,0,0,0.55)]
            backdrop-blur-xl

            sm:h-11
            sm:w-11

            md:h-12
            md:w-12
          "
        >
          <span
            className="
              relative
              z-10
              text-[17px]
              transition-transform
              duration-300
              group-hover:scale-110

              sm:text-[18px]

              md:text-[20px]
            "
            style={{
              color: tool.color,
            }}
          >
            {tool.icon}
          </span>
        </div>

        {/* Label */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-full
            mt-2
            -translate-x-1/2
            whitespace-nowrap
            text-center
            text-[6px]
            uppercase
            tracking-[0.28em]
            text-white/25
            transition-colors
            duration-300
            group-hover:text-white/70

            sm:text-[7px]
          "
        >
          {tool.label}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const [time, setTime] = useState("");

  /* =======================================================
     MOUSE PARALLAX
  ======================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  const visualX = useTransform(
    smoothX,
    [-500, 500],
    [-12, 12]
  );

  const visualY = useTransform(
    smoothY,
    [-500, 500],
    [-12, 12]
  );

  /* =======================================================
     MOUSE
  ======================================================= */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(
        event.clientX -
        window.innerWidth / 2
      );

      mouseY.set(
        event.clientY -
        window.innerHeight / 2
      );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080808]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.022]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1500px]
          items-center
          px-5
          pb-16
          pt-20

          md:px-10
          md:pt-32

          lg:px-14
          lg:pt-28
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-16

            lg:grid-cols-[0.9fr_1fr]
            lg:gap-4

            xl:grid-cols-[0.85fr_1.15fr]
            xl:gap-8
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-30
              max-w-xl
              lg:max-w-none
            "
          >
            {/* Heading */}

            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 50,
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
                  max-w-5xl
                  text-[clamp(3.4rem,7vw,8rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.065em]
                "
              >
                Creating
                <br />

                <span className="text-white/20">
                  Digital
                </span>

                <br />

                Experiences
              </motion.h1>
            </div>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.8,
              }}
              className="
                mt-5
                max-w-lg
                text-[12px]
                leading-7
                text-white/35

                sm:text-[13px]

                md:leading-8
              "
            >
              I design and engineer digital products,
              scalable web applications and growth
              systems that turn complex ideas into
              meaningful experiences.
            </motion.p>

            {/* Actions */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.65,
                duration: 0.8,
              }}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-7
              "
            >
              {/* Work */}

              <Link
                href="#work"
                data-cursor="VIEW"
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.12]
                  bg-white/[0.04]
                  px-6
                  py-3.5
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                  text-white/70
                  transition-all
                  duration-500

                  hover:border-[#c7a7ff]/40
                  hover:bg-white/[0.07]
                  hover:text-white

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#c7a7ff]/50
                "
              >
                <span className="relative z-10">
                  Explore work
                </span>

                <ArrowUpRight
                  size={13}
                  className="
                    relative
                    z-10
                    text-[#c7a7ff]
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.06]
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />
              </Link>

              {/* Email */}

              <a
                href="mailto:rajeev855107@gmail.com"
                data-cursor="EMAIL"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                  text-white/25
                  transition-colors
                  duration-300
                  hover:text-white/70

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#c7a7ff]/40
                "
              >
                <Mail
                  size={12}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />

                Let's talk
              </a>
            </motion.div>

            {/* =================================================
                STATS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="
                mt-12
                grid
                max-w-lg
                grid-cols-3
                border-y
                border-white/[0.07]
                py-5
              "
            >
              {/* Experience */}

              <div>
                <span
                  className="
                    block
                    text-xl
                    tracking-[-0.04em]
                    text-white/80
                  "
                >
                  3+
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[7px]
                    uppercase
                    tracking-[0.25em]
                    text-white/25
                  "
                >
                  Years Experience
                </span>
              </div>

              {/* Projects */}

              <div
                className="
                  border-l
                  border-white/[0.07]
                  pl-5
                "
              >
                <span
                  className="
                    block
                    text-xl
                    tracking-[-0.04em]
                    text-white/80
                  "
                >
                  20+
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[7px]
                    uppercase
                    tracking-[0.25em]
                    text-white/25
                  "
                >
                  Digital Projects
                </span>
              </div>

              {/* Curiosity */}

              <div
                className="
                  border-l
                  border-white/[0.07]
                  pl-5
                "
              >
                <span
                  className="
                    block
                    text-xl
                    tracking-[-0.04em]
                    text-white/80
                  "
                >
                  ∞
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[7px]
                    uppercase
                    tracking-[0.25em]
                    text-white/25
                  "
                >
                  Curiosity
                </span>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              ORBIT SYSTEM
          ================================================= */}

          <motion.div
            style={{
              x: visualX,
              y: visualY,
            }}
            className="
              relative
              mx-auto
              aspect-square
              w-full
              max-w-[360px]

              sm:max-w-[430px]

              md:max-w-[500px]

              lg:max-w-[470px]

              xl:max-w-[560px]
            "
          >
            {/* Orbit container */}

            <div
              className="
                absolute
                inset-[5%]
              "
            >
              <OrbitRing
                size="100%"
                duration={32}
              />

              <OrbitRing
                size="78%"
                duration={24}
                reverse
                dashed
              />

              <OrbitRing
                size="57%"
                duration={18}
              />

              <OrbitRing
                size="38%"
                duration={13}
                reverse
              />
            </div>

            {/* =================================================
                CENTER
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-30
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              {/* Glow */}

              <motion.div
                aria-hidden="true"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.12, 0.25, 0.12],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -inset-16
                  rounded-full
                  bg-[#8b5cf6]/20
                  blur-[65px]

                  md:-inset-20
                "
              />

              {/* Center */}

              <motion.div
                whileHover={{
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  relative
                  flex
                  h-[145px]
                  w-[145px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#c7a7ff]/25
                  bg-[#09090b]/95
                  shadow-[0_0_80px_rgba(139,92,246,0.08)]
                  backdrop-blur-xl

                  sm:h-[175px]
                  sm:w-[175px]

                  md:h-[195px]
                  md:w-[195px]

                  lg:h-[200px]
                  lg:w-[200px]

                  xl:h-[220px]
                  xl:w-[220px]
                "
              >
                {/* Inner border */}

                <div
                  className="
                    hidden
                    md:block
                    absolute
                    inset-8
                    rounded-full
                    border
                    border-white/[0.045]
                  "
                />

                {/* Rotating highlight */}

                <motion.div
                  aria-hidden="true"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-[-1px]
                    rounded-full
                  "
                >
                  <span
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-1.5
                      w-1.5
                      -translate-x-1/2
                      rounded-full
                      bg-[#c7a7ff]
                      shadow-[0_0_15px_#c7a7ff]
                    "
                  />
                </motion.div>

                {/* Center content */}

                <div
                  className="
                    relative
                    z-10
                    text-center
                  "
                >
                  <span
                    className="
                      block
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/30

                      sm:text-[9px]
                    "
                  >
                    Building
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[11px]
                      text-white/60

                      sm:text-xs
                    "
                  >
                    Digital Systems
                  </span>

                  <div
                    className="
                      mx-auto
                      my-4
                      h-px
                      w-7
                      bg-[#c7a7ff]

                      sm:my-5
                      sm:w-9
                    "
                  />

                  <div
                    className="
                      text-[6px]
                      uppercase
                      tracking-[0.3em]
                      text-white/30

                      sm:text-[7px]
                    "
                  >
                    <span
                      className="
                        block
                        text-[8px]
                        text-white/30

                        sm:text-[9px]
                      "
                    >
                      Full Stack
                    </span>

                    Developer
                  </div>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                TOOL NODES
            ================================================= */}

            {tools.map((tool, index) => (
              <ToolNode
                key={tool.name}
                tool={tool}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}