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

  /*
    Coordinates are percentages of the orbit container.

    50 / 0       = top
    85 / 15      = top-right
    100 / 50     = right
    85 / 85      = bottom-right
    50 / 100     = bottom
    15 / 85      = bottom-left
    0 / 50       = left
    15 / 15      = top-left
  */
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
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        ${dashed
          ? "border border-dashed border-white/[0.065]"
          : "border border-white/[0.075]"
        }
      `}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* orbit point */}
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
        scale: 0.55,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        delay: 0.8 + index * 0.08,
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
          scale: 1.1,
        }}
        className="group relative"
      >
        {/* =================================================
            ICON CIRCLE
        ================================================= */}

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
          {/* hover glow */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              opacity-0
              blur-xl
              transition-opacity
              duration-300
              group-hover:opacity-30
            "
            style={{
              backgroundColor: tool.color,
            }}
          />

          {/* icon */}
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

        {/* =================================================
            LABEL
        ================================================= */}

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
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 25,
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

  const glowX = useTransform(
    smoothX,
    [-500, 500],
    [-30, 30]
  );

  const glowY = useTransform(
    smoothY,
    [-500, 500],
    [-30, 30]
  );

  /* =======================================================
     TIME
  ======================================================= */

  useEffect(() => {
    const updateTime = () => {
      const current = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

      setTime(current);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     MOUSE
  ======================================================= */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(
        event.clientX - window.innerWidth / 2
      );

      mouseY.set(
        event.clientY - window.innerHeight / 2
      );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [mouseX, mouseY]);

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080808]
        text-white
      "
    >
      {/* BACKGROUND  */}

      <div className="pointer-events-none absolute inset-0">
        {/* grid */}
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
      {/* Main  */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1600px]
          items-center
          px-5
          pb-16
          pt-28

          sm:px-7

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
            gap-14

            lg:grid-cols-[0.9fr_1fr]
            lg:gap-4

            xl:grid-cols-[0.85fr_1.15fr]
            xl:gap-8
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div
            className="
              relative
              z-30
              max-w-xl
              lg:max-w-none
            "
          >
            {/* heading */}
            <div className="overflow-hidden">
              <h2 className="max-w-5xl text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                Creating
                <br />
                <span className="text-white/22">Digital</span>
                <br />
                Experiences
              </h2>
            </div>

            {/* description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="
                mt-8
                max-w-lg
                text-[12px]
                leading-7
                text-white/35

                sm:text-[13px]

                md:leading-8
              "
            >
              I build scalable web applications,
              refined user experiences and digital
              systems that connect technology with
              real business growth.
            </motion.p>

            {/* buttons */}
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
                mt-8
                flex
                flex-wrap
                items-center
                gap-6
              "
            >
              <Link
                href="#work"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  border-b
                  border-[#c7a7ff]/50
                  pb-3
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-white/65
                  transition-colors
                  hover:text-white
                "
              >
                Explore my work

                <ArrowUpRight
                  size={14}
                  className="
                    text-[#c7a7ff]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>

              <a
                href="mailto:rajeev855107@gmail.com"
                className="
                  flex
                  items-center
                  gap-2
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                  transition-colors
                  hover:text-white/60
                "
              >
                <Mail size={11} />

                Let's talk
              </a>
            </motion.div>

 
        {/* ── technology strip ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-10 hidden items-center gap-0 md:flex"
            >
              {[
                { label: "React",   dot: true  },
                { label: "Next.js", dot: true  },
                { label: "Laravel", dot: true  },
                { label: "APIs",    dot: true  },
                { label: "Growth",  dot: false },
              ].map(({ label, dot }) => (
                <span key={label} className="flex items-center">
                  <span className="text-[9px] uppercase tracking-[0.28em] text-white/20 transition-colors duration-200 hover:text-white/50">
                    {label}
                  </span>
                  {dot && (
                    <span className="mx-3 h-[3px] w-[3px] rounded-full bg-white/[0.12]" />
                  )}
                </span>
              ))}
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
              max-w-[380px]

              sm:max-w-[430px]

              md:max-w-[500px]

              lg:max-w-[470px]

              xl:max-w-[560px]
            "
          >
            {/* ===============================================
                ORBIT CONTAINER

                All tool coordinates are percentages of this
                container. This guarantees alignment.
            =============================================== */}

            <div
              className="
                absolute
                inset-[5%]
              "
            >
              {/* outer orbit */}
              <OrbitRing
                size="100%"
                duration={32}
              />

              {/* dashed orbit */}
              <OrbitRing
                size="78%"
                duration={24}
                reverse
                dashed
              />

              {/* inner orbit */}
              <OrbitRing
                size="57%"
                duration={18}
              />

              {/* center orbit */}
              <OrbitRing
                size="38%"
                duration={13}
                reverse
              />
            </div>

            {/* ===============================================
                DECORATIVE PARTICLES
            =============================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[4%]
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-0
                  h-1
                  w-1
                  -translate-x-1/2
                  rounded-full
                  bg-white/50
                "
              />

              <span
                className="
                  absolute
                  bottom-[10%]
                  right-[15%]
                  h-1
                  w-1
                  rounded-full
                  bg-[#c7a7ff]
                  shadow-[0_0_10px_#c7a7ff]
                "
              />

              <span
                className="
                  absolute
                  left-[12%]
                  top-[70%]
                  h-1
                  w-1
                  rounded-full
                  bg-white/30
                "
              />
            </motion.div>

            {/* ===============================================
                CENTER
            =============================================== */}

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
              {/* center glow */}
              <motion.div
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

              {/* center circle */}
              <div
                className="
                  relative
                  flex
                  h-[150px]
                  w-[150px]
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
                {/* inner border */}
                <div
                  className="
                    absolute
                    inset-8
                    rounded-full
                    border
                    border-white/[0.045]
                  "
                />

                {/* rotating highlight */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
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

                {/* center content */}
                <div
                  className="
                    relative
                    z-10
                    text-center
                  "
                >
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-white/30">
                    Building
                  </span>

                  <span className="mt-1 block text-xs text-white/60">
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

                  <p
                    className="
                      block
                      text-[6px]
                      uppercase
                      tracking-[0.3em]
                      text-white/30

                      sm:text-[7px]
                    "
                  >
                    <span className="block text-[9px] uppercase tracking-[0.3em] text-white/30"> Full Stack</span>
                    Developer
                  </p>
                </div>
              </div>
            </div>

            {/* ===============================================
                TOOL NODES
            =============================================== */}

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