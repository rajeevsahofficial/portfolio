"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  X,
  Mail,
  Phone,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface ContactPopupProps {
  open: boolean;
  onClose: () => void;
}

type FormState = "idle" | "submitting" | "success";

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as const;

const socials = [
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/rajeevkrsah",
    handle: "rajeevkrsah",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/the-rajeev-sah",
    handle: "the-rajeev-sah",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:rajeev855107@gmail.com",
    handle: "rajeev855107@gmail.com",
  },
];

const FIELDS = [
  { id: "name",    label: "Full Name",    type: "text",  placeholder: "John Smith" },
  { id: "email",   label: "Work Email",   type: "email", placeholder: "john@company.com" },
  { id: "company", label: "Company",      type: "text",  placeholder: "Optional" },
];

/* ─────────────────────────────────────────────
   FIELD COMPONENT
───────────────────────────────────────────── */
function Field({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
  index,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  index: number;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 + index * 0.06, duration: 0.5, ease }}
    >
      <label
        htmlFor={id}
        className="mb-2 block text-[9px] uppercase tracking-[0.28em] text-white/35"
      >
        {label}
        {required && <span className="ml-1 text-[#c7a7ff]">*</span>}
      </label>
      <div
        className={`
          relative overflow-hidden rounded-xl border transition-colors duration-200
          ${focused
            ? "border-[#c7a7ff]/40 bg-white/[0.04]"
            : "border-white/[0.08] bg-white/[0.025]"}
        `}
      >
        {/* focus glow */}
        <motion.div
          animate={{ opacity: focused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute inset-0 rounded-xl bg-[#c7a7ff]/[0.04]"
        />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="
            relative z-10 w-full bg-transparent px-4 py-3.5
            text-[13px] text-[#f2eee7] placeholder-white/20
            outline-none
          "
        />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ContactPopup({ open, onClose }: ContactPopupProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [msgFocused, setMsgFocused] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);

  /* ── close on Escape ── */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  /* ── lock body scroll ── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ── reset form when closed ── */
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setForm({ name: "", email: "", company: "", message: "" });
        setFormState("idle");
      }, 400);
    }
  }, [open]);

  const set = (key: keyof typeof form) => (v: string) =>
    setForm((prev) => ({ ...prev, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    /* Simulate async send — swap with your real API call */
    await new Promise((r) => setTimeout(r, 1600));
    setFormState("success");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ══════════════ BACKDROP ══════════════ */}
          <motion.div
            key="backdrop"
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* ══════════════ PANEL ══════════════ */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Contact form"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.97 }}
            transition={{ duration: 0.42, ease }}
            className="
              fixed inset-x-4 bottom-0 top-[4.5rem] z-[310] mx-auto
              flex max-w-[980px] flex-col overflow-hidden
              rounded-2xl border border-white/[0.08]
              bg-[#0a0a0a]
              shadow-[0_40px_120px_rgba(0,0,0,0.9)]
              sm:inset-x-6
              md:inset-x-10
              lg:inset-x-auto lg:left-1/2 lg:top-[5rem]
              lg:h-auto lg:max-h-[88vh] lg:-translate-x-1/2
              lg:w-[90vw]
            "
          >
            {/* ── top strip ── */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/[0.07] px-7 py-5 md:px-10">
              <div className="flex items-center gap-3">
                <span className="relative flex h-[7px] w-[7px]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8fffbb] opacity-60" />
                  <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#8fffbb]" />
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                  Currently available for new projects
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="
                  flex h-8 w-8 items-center justify-center rounded-lg
                  border border-white/[0.08] bg-white/[0.025]
                  text-white/40
                  transition-colors duration-200
                  hover:border-white/20 hover:text-white
                "
              >
                <X size={14} />
              </button>
            </div>

            {/* ── scrollable body ── */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid lg:grid-cols-[1fr_380px]">

                {/* ════════ LEFT — FORM ════════ */}
                <div className="border-b border-white/[0.07] px-7 py-8 md:px-10 md:py-10 lg:border-b-0 lg:border-r">

                  <AnimatePresence mode="wait">
                    {formState === "success" ? (
                      /* ── success state ── */
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="flex flex-col items-center justify-center gap-6 py-16 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                        >
                          <CheckCircle2 size={48} className="text-[#8fffbb]" strokeWidth={1.3} />
                        </motion.div>
                        <div>
                          <p className="text-xl font-medium tracking-[-0.03em]">
                            Message sent.
                          </p>
                          <p className="mt-2 text-sm text-white/38">
                            I&apos;ll get back to you within 24 hours.
                          </p>
                        </div>
                        <button
                          onClick={onClose}
                          className="
                            mt-2 rounded-full border border-white/[0.1]
                            bg-white/[0.04] px-6 py-3 text-[11px]
                            uppercase tracking-[0.22em] text-white/50
                            transition-colors hover:text-white
                          "
                        >
                          Close
                        </button>
                      </motion.div>
                    ) : (
                      /* ── form ── */
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.45, ease }}
                        >
                          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.05em]">
                            Let&apos;s build something
                            <br />
                            <span className="text-white/25">remarkable.</span>
                          </h2>
                        </motion.div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                          {FIELDS.map((f, i) => (
                            <div key={f.id} className={f.id === "company" ? "sm:col-span-2 md:col-span-1" : ""}>
                              <Field
                                {...f}
                                value={form[f.id as keyof typeof form]}
                                onChange={set(f.id as keyof typeof form)}
                                required={f.id !== "company"}
                                index={i}
                              />
                            </div>
                          ))}
                        </div>

                        {/* message */}
                        <motion.div
                          className="mt-4"
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.36, duration: 0.5, ease }}
                        >
                          <label
                            htmlFor="message"
                            className="mb-2 block text-[9px] uppercase tracking-[0.28em] text-white/35"
                          >
                            Message <span className="text-[#c7a7ff]">*</span>
                          </label>
                          <div
                            className={`
                              relative overflow-hidden rounded-xl border transition-colors duration-200
                              ${msgFocused
                                ? "border-[#c7a7ff]/40 bg-white/[0.04]"
                                : "border-white/[0.08] bg-white/[0.025]"}
                            `}
                          >
                            <motion.div
                              animate={{ opacity: msgFocused ? 1 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="pointer-events-none absolute inset-0 rounded-xl bg-[#c7a7ff]/[0.04]"
                            />
                            <textarea
                              id="message"
                              rows={4}
                              required
                              placeholder="Describe your project, idea or question..."
                              value={form.message}
                              onChange={(e) => set("message")(e.target.value)}
                              onFocus={() => setMsgFocused(true)}
                              onBlur={() => setMsgFocused(false)}
                              className="
                                relative z-10 w-full resize-none bg-transparent
                                px-4 py-3.5 text-[13px] text-[#f2eee7]
                                placeholder-white/20 outline-none
                              "
                            />
                          </div>
                        </motion.div>

                        {/* submit */}
                        <motion.div
                          className="mt-6"
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.42, duration: 0.5, ease }}
                        >
                          <button
                            type="submit"
                            disabled={formState === "submitting"}
                            className="
                              group flex items-center gap-3 rounded-full
                              bg-[#f2eee7] px-7 py-4
                              text-[11px] font-semibold uppercase tracking-[0.22em] text-black
                              transition-all duration-300
                              hover:bg-white hover:shadow-[0_0_40px_rgba(242,238,231,0.18)]
                              disabled:opacity-60
                            "
                          >
                            {formState === "submitting" ? (
                              <>
                                <Loader2 size={14} className="animate-spin" />
                                Sending…
                              </>
                            ) : (
                              <>
                                <Send size={13} />
                                Send message
                                <ArrowUpRight
                                  size={13}
                                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                              </>
                            )}
                          </button>
                        </motion.div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>

                {/* ════════ RIGHT — INFO ════════ */}
                <div className="px-7 py-8 md:px-10 md:py-10">

                  {/* label */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-[9px] uppercase tracking-[0.32em] text-white/25"
                  >
                    Direct contact
                  </motion.p>

                  {/* direct links */}
                  <div className="mt-5 flex flex-col gap-1">
                    {[
                      { label: "Email", value: "rajeev855107@gmail.com", href: "mailto:rajeev855107@gmail.com", icon: Mail },
                      { label: "Phone", value: "+91 9508690371",          href: "tel:+919508690371",            icon: Phone },
                    ].map(({ label, value, href, icon: Icon }, i) => (
                      <motion.a
                        key={label}
                        href={href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + i * 0.07, duration: 0.45, ease }}
                        className="
                          group flex items-center gap-4 rounded-xl
                          border border-white/[0.07] bg-white/[0.025]
                          px-5 py-4
                          transition-colors duration-200
                          hover:border-white/[0.14] hover:bg-white/[0.04]
                        "
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                          <Icon size={14} className="text-white/40 transition-colors group-hover:text-[#c7a7ff]" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[8px] uppercase tracking-[0.28em] text-white/25">{label}</p>
                          <p className="mt-0.5 truncate text-[12px] text-white/55 transition-colors group-hover:text-white/80">
                            {value}
                          </p>
                        </div>
                        <ArrowUpRight size={12} className="ml-auto shrink-0 text-white/15 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c7a7ff]" />
                      </motion.a>
                    ))}
                  </div>

                  {/* divider */}
                  <div className="my-7 h-px bg-white/[0.07]" />

                  {/* socials */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.38, duration: 0.5 }}
                    className="mb-4 text-[9px] uppercase tracking-[0.32em] text-white/25"
                  >
                    Elsewhere
                  </motion.p>

                  <div className="flex flex-col gap-3">
                    {socials.map(({ label, icon: Icon, href, handle }, i) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.42 + i * 0.06, duration: 0.45, ease }}
                        className="group flex items-center gap-3 text-white/30 transition-colors duration-200 hover:text-white/70"
                      >
                        <Icon size={14} />
                        <span className="text-[11px] tracking-[0.02em]">{handle}</span>
                        <ArrowUpRight
                          size={10}
                          className="ml-auto opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-[#c7a7ff]"
                        />
                      </motion.a>
                    ))}
                  </div>

                  {/* divider */}
                  <div className="my-7 h-px bg-white/[0.07]" />

                  {/* response time */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-4"
                  >
                    <p className="text-[9px] uppercase tracking-[0.28em] text-white/25">
                      Response time
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/60">
                      Within 24 hours
                    </p>
                    <p className="mt-2 text-[11px] leading-5 text-white/25">
                      Based in Purnia, Bihar, India — IST (UTC +5:30)
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
