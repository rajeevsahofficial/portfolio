import type { NextConfig } from "next";

const SITE_URL = "https://rajeevkrsah.vercel.app";

/*
 * Security & SEO headers
 */
const securityHeaders = [
  // Prevent clickjacking
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },

  // Prevent MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // Force HTTPS for 1 year
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },

  // Referrer policy
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  // Permissions policy
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },

  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },

  // DNS prefetch
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  /*
   * Compress responses
   */
  compress: true,

  /*
   * Canonical URLs without trailing slash
   */
  trailingSlash: false,

  /*
   * Hide Next.js powered-by header
   */
  poweredByHeader: false,

  /*
   * Better hydration error detection
   */
  reactStrictMode: true,

  /*
   * Security headers
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },

      /*
       * IMPORTANT:
       * Do NOT manually add Cache-Control to /_next/static
       * in development.
       *
       * Next.js/Turbopack manages these files itself.
       */

      /*
       * Cache public images for 1 day.
       */
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },

  /*
   * www → non-www canonical redirect
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.rajeevkumar.dev",
          },
        ],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;