"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socials = [
  {
    label: "Call",
    href: "tel:+919508690371",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919508690371",
    icon: FaWhatsapp,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rajeev__sah/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/the-rajeev-sah",
    icon: FaLinkedinIn,
  },
];

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-5 z-[100] md:bottom-8 md:right-7">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative flex flex-col items-center
          rounded-[22px]
          border border-white/[0.08]
          bg-[#080808]/75
          p-1.5
        "
      >
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.label}
              href={social.href}
              target={
                social.href.startsWith("http") ? "_blank" : undefined
              }
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={social.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.08,
                duration: 0.4,
              }}
              whileHover={{
                scale: 1.08,
                x: 3,
              }}
              whileTap={{ scale: 0.92 }}
              className="
                group relative
                flex h-10 w-10
                items-center justify-center
                rounded-[15px]
                text-white/35
                transition-all duration-300
                hover:bg-white/[0.06]
                hover:text-[#c7a7ff]
                sm:h-11 sm:w-11
              "
            >
              {/* hover glow */}
              <span
                className="
                  pointer-events-none absolute inset-1
                  rounded-[12px]
                  bg-[#c7a7ff]/0
                  blur-md
                  transition-all duration-300
                  group-hover:bg-[#c7a7ff]/10
                "
              />

              <Icon
                size={16}
                strokeWidth={1.8}
                className="
                  relative z-10
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}