import React from "react";
import NextImage from "../ui/next-image";
import Link from "next/link";
import { knewave } from "@/site/fonts";

const socialItems = [
  {
    icon: "/images/fb.svg",
    url: "https://www.facebook.com/",
  },
  {
    icon: "/images/insta.svg",
    url: "https://www.instagram.com/",
  },
  {
    icon: "/images/dribble.svg",
    url: "https://dribbble.com/",
  },
  {
    icon: "/images/twitter.svg",
    url: "https://x.com/",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="responsive-container divide-y divide-gray-300 space-y-4 mt-10 mb-6">
        <div className="flex items-center justify-between !pb-4">
          <div className="flex items-center gap-2">
            <div className="relative h-14 w-14 rounded-full">
              <NextImage
                src="/images/logo.png"
                alt="logo"
                className="rounded-full"
              />
            </div>
            <h2 className={`text-2xl font-bold ${knewave.className}`}>
              AppFlow
            </h2>
          </div>
          <ul className="flex items-center gap-6">
            {socialItems.map((items) => (
              <Link key={items.url} href={items.url}>
                <img
                  src={items.icon}
                  alt={items.url}
                  className="w-4 h-4 object-contain"
                />
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#666666]">
            All rights reserved. © 2024 by Tin Kolza
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-[#666666]">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-[#666666]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
