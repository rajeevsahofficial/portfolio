import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import LuxuryCursor from "@/components/common/LuxuryCursor";
import Footer from "@/components/footer";

/* =========================================================
   FONTS
========================================================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   SITE CONFIGURATION
========================================================= */

const SITE_URL = "https://rajeevkrsah.vercel.app";

const SITE_NAME = "Rajeev Kumar";

const SITE_TITLE =
  "Rajeev Kumar — Software Development Engineer & Full Stack Developer";

const SITE_DESCRIPTION =
  "Rajeev Kumar is a Software Development Engineer and Full Stack Developer specializing in React, Next.js, Laravel, PHP, REST APIs, technical SEO, Google Ads and Meta Ads.";

const SITE_LOCALE = "en_IN";

const OG_IMAGE = "/og-image.png";

/* =========================================================
   SOCIAL PROFILES
========================================================= */

const SOCIAL_PROFILES = [
  "https://github.com/rajeevkrsah",
  "https://www.linkedin.com/in/the-rajeev-sah",
];

/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080808",
  colorScheme: "dark",
};

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* -------------------------------------------------------
     TITLE
  ------------------------------------------------------- */

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  /* -------------------------------------------------------
     DESCRIPTION
  ------------------------------------------------------- */

  description: SITE_DESCRIPTION,

  /* -------------------------------------------------------
     KEYWORDS
     
     These describe the actual professional areas represented
     on the website. Avoid keyword stuffing.
  ------------------------------------------------------- */

  keywords: [
    /* Personal brand */
    "Rajeev Kumar",
    "Rajeev Sah",
    "Rajeev Kumar Developer",
    "Rajeev Kumar Software Engineer",
    "Rajeev Kumar Portfolio",
    "Rajeev Kumar Full Stack Developer",
    "Rajeev Kumar Web Developer",

    /* Development */
    "Software Development Engineer",
    "Full Stack Developer",
    "Full Stack Developer India",
    "Web Developer India",
    "Software Engineer India",
    "React Developer",
    "React Developer India",
    "Next.js Developer",
    "Next.js Developer India",
    "Laravel Developer",
    "Laravel Developer India",
    "PHP Developer",
    "PHP Developer India",
    "JavaScript Developer",
    "TypeScript Developer",

    /* Backend / architecture */
    "REST API Developer",
    "REST API Development",
    "MySQL Developer",
    "RBAC",
    "Web Application Development",

    /* SEO / Digital */
    "Technical SEO",
    "Technical SEO Developer",
    "SEO Developer India",
    "Google Ads Specialist",
    "Meta Ads Specialist",
    "Digital Growth",
    "Conversion Rate Optimization",

    /* Location */
    "Software Engineer Bihar",
    "Web Developer Bihar",
    "Full Stack Developer Bihar",
  ],

  /* -------------------------------------------------------
     AUTHORS
  ------------------------------------------------------- */

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,

  publisher: SITE_NAME,

  /* -------------------------------------------------------
     CANONICAL
  ------------------------------------------------------- */

  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },

  /* -------------------------------------------------------
     ROBOTS
  ------------------------------------------------------- */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* =======================================================
     OPEN GRAPH
  ======================================================= */

  openGraph: {
    type: "website",

    locale: SITE_LOCALE,

    url: SITE_URL,

    siteName: `${SITE_NAME} — Portfolio`,

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Software Development Engineer & Full Stack Developer`,
        type: "image/png",
      },
    ],
  },

  /* =======================================================
     TWITTER / X
  ======================================================= */

  twitter: {
    card: "summary_large_image",

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,

    images: [OG_IMAGE],

    creator: "@rajeevkumar",
  },

  /* =======================================================
     ICONS
  ======================================================= */

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  /* =======================================================
     WEB APP MANIFEST
  ======================================================= */

  manifest: "/site.webmanifest",

  /* =======================================================
     CATEGORY
  ======================================================= */

  category: "technology",

  /* =======================================================
     OTHER
  ======================================================= */

  other: {
    "format-detection": "telephone=no",
  },
};

/* =========================================================
   PERSON STRUCTURED DATA
========================================================= */

const personSchema = {
  "@context": "https://schema.org",

  "@type": "Person",

  "@id": `${SITE_URL}/#person`,

  name: SITE_NAME,

  givenName: "Rajeev",

  familyName: "Kumar",

  alternateName: [
    "Rajeev Sah",
    "Rajeev Kumar Developer",
    "Rajeev Kumar Software Engineer",
  ],

  url: SITE_URL,

  image: `${SITE_URL}${OG_IMAGE}`,

  email: "rajeev855107@gmail.com",

  jobTitle: "Software Development Engineer",

  description:
    "Software Development Engineer and Full Stack Developer specializing in React, Next.js, Laravel, PHP, REST APIs, technical SEO and digital growth.",

  address: {
    "@type": "PostalAddress",

    addressLocality: "Purnia",

    addressRegion: "Bihar",

    addressCountry: "IN",
  },

  knowsAbout: [
    "Software Development",
    "Full Stack Development",
    "Web Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Laravel",
    "PHP",
    "MySQL",
    "REST APIs",
    "RBAC",
    "Technical SEO",
    "Google Ads",
    "Meta Ads",
    "Conversion Rate Optimization",
  ],

  sameAs: SOCIAL_PROFILES,
};

/* =========================================================
   WEBSITE STRUCTURED DATA
========================================================= */

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  name: `${SITE_NAME} — Portfolio`,

  url: SITE_URL,

  description: SITE_DESCRIPTION,

  publisher: {
    "@id": `${SITE_URL}/#person`,
  },

  inLanguage: SITE_LOCALE,
};

/* =========================================================
   PROFILE PAGE STRUCTURED DATA
========================================================= */

const profilePageSchema = {
  "@context": "https://schema.org",

  "@type": "ProfilePage",

  "@id": `${SITE_URL}/#profile`,

  url: SITE_URL,

  name: `${SITE_NAME} — Software Development Engineer`,

  description: SITE_DESCRIPTION,

  mainEntity: {
    "@id": `${SITE_URL}/#person`,
  },

  inLanguage: SITE_LOCALE,
};

/* =========================================================
   STRUCTURED DATA GRAPH
========================================================= */

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    personSchema,
    websiteSchema,
    profilePageSchema,
  ],
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className="
          min-h-screen
          bg-[#080808]
          font-sans
          text-white
          antialiased
          selection:bg-white/20
          selection:text-white
        "
      >
        {/* =================================================
            STRUCTURED DATA
        ================================================= */}

        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* =================================================
            APPLICATION
        ================================================= */}
        <LuxuryCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}