"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NextImage from "../ui/next-image";
import { AppleIcon, GooglePlayStoreIcon } from "../ui/icons";
import { MoveRight } from "lucide-react";
import { navItems } from "@/site";
import useScrollDirection from "@/hooks/use-scroll-direction";

const Navbar = () => {
  const pathname = usePathname();
  const scrollDirection = useScrollDirection();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 mt-5 ${
        scrollDirection === "down" ? "-translate-y-[200%]" : "translate-y-0"
      }`}
    >
      <div className="max-w-6xl mx-auto bg-[#f5f5f7de] p-5 rounded-[28px] flex items-center justify-between border border-[#e8e8e8ab] shadow-md">
        <div className="flex items-center gap-2">
          <div className="relative h-14 w-14 rounded-full">
            <NextImage
              src="/images/logo.png"
              alt="logo"
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold">AppFlow</h2>
        </div>

        <ul className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`transition-colors duration-200 cursor-pointer ${
                    isActive ? "text-[#ffa727]" : "hover:text-[#ffa727]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <button className="group relative bg-[#ffa727] overflow-hidden flex items-center h-14 rounded-full text-white px-8 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-2 transform transition-transform duration-300 group-hover:-translate-x-4">
            <span className="flex items-center gap-1">
              <AppleIcon className="text-4xl" />
              <GooglePlayStoreIcon className="text-3xl" />
            </span>
            Download App
          </div>
          <span className="absolute right-4 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <MoveRight className="ml-2" />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
