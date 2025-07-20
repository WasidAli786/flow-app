import { Knewave, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const knewave = Knewave({
  subsets: ["latin"],
  weight: ["400"],
});
