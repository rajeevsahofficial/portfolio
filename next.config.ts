import type { NextConfig } from "next";

const SITE_URL = "https://rajeevkumar.dev"; // ← update once deployed

/* ─────────────────────────────────────────────────────────────
   Security & SEO headers applied to every response
───────────────────────────────────────────────────────────── */
const securityHeaders = [
  /* Prevent clickjacking */
  { key: "X-Frame-Options",           value: "SAMEORIGIN" },

  /* Prevent MIME-type sniffing */
  { key: "X-Content-Type-Options",    value: "nosniff" },

  /* Force HTTPS for 1 year, include subdomains */
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },

  /* Disable referrer on cross-origin navigation */
  { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },

  /* Permissions policy — disable unused APIs */
  {
    key:   "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },

  /* Content Security Policy — tight for a static portfolio */
  {
    key:   "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",  // unsafe-eval needed for Framer Motion
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },

  /* X-DNS-Prefetch-Control */
  { key: "X-DNS-Prefetch-Control",    value: "on" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,

  /* ── compress all responses ── */
  compress: true,

  /* ── remove trailing slashes for canonical URLs ── */
  trailingSlash: false,

  /* ── powered-by header leaks tech stack ── */
  poweredByHeader: false,

  /* ── strict mode for better hydration error detection ── */
  reactStrictMode: true,

  /* ── security & SEO headers ── */
  async headers() {
    return [
      {
        source:  "/(.*)",
        headers: securityHeaders,
      },
      /* Cache static assets aggressively */
      {
        source:  "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      /* Cache images */
      {
        source:  "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },

  /* ── www → non-www canonical redirect ── */
  async redirects() {
    return [
      {
        source:      "/:path*",
        has:         [{ type: "host", value: `www.rajeevkumar.dev` }],
        destination: `${SITE_URL}/:path*`,
        permanent:   true,   // 308 — SEO-safe permanent redirect
      },
    ];
  },
};

export default nextConfig;
