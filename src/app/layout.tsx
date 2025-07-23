import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { inter } from "@/site/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brokr - All-in-One Rental Marketplace | List, rent, resell, earn.",
  description:
    "Brokr is the ultimate marketplace to share and profit from your valuable assets like boats, cars, and homes. List and rent them easily and for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
