import type { Metadata } from "next";
import NotFoundClient from "@/components/not-found/NotFoundClient";

/* Server component — metadata export works here */
export const metadata: Metadata = {
  title:       "404 — Page Not Found",
  description: "The page you're looking for doesn't exist. Return to Rajeev Kumar's portfolio.",
  robots: {
    index:  false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
