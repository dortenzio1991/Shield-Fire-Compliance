import type { Metadata } from "next";
import { ExpoWelcome } from "@/components/sections/ExpoWelcome";

export const metadata: Metadata = {
  title: "Welcome — Cooperator Expo",
  // Keep this page out of search engines (QR-only expo landing page).
  robots: { index: false, follow: false },
};

export default function ExpoBPage() {
  return <ExpoWelcome />;
}
