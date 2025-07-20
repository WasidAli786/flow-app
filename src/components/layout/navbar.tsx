"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NextImage from "../ui/next-image";
import { AppleIcon, GooglePlayStoreIcon } from "../ui/icons";
import { Menu, MoveRight, X } from "lucide-react";
import { navItems } from "@/site";
import useScrollDirection from "@/hooks/use-scroll-direction";
import { knewave } from "@/site/fonts";

const Navbar = () => {
  const pathname = usePathname();
  const scrollDirection = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-transform duration-300 mt-5 ${
        scrollDirection === "down" ? "-translate-y-[200%]" : "translate-y-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <div
          className={`bg-[#f5f5f7de] rounded-[28px] border border-[#e8e8e8ab] shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "pb-6" : "pb-0"
          }`}
        >
          <div className="flex items-center justify-between p-5">
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

            <ul className="hidden lg:flex items-center gap-8">
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

            <button className="hidden lg:flex group relative bg-[#ffa727] overflow-hidden items-center h-14 rounded-full text-white px-8 transition-all duration-300 cursor-pointer">
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

            <button
              className="lg:hidden cursor-pointer p-2"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <X className="h-8 w-8 text-[#ffa727]" />
              ) : (
                <Menu className="h-8 w-8 text-[#ffa727]" />
              )}
            </button>
          </div>

          <div
            className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 space-y-1">
              <ul className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <li
                      key={item.name}
                      className={`transform transition-all duration-300 ${
                        menuOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                      }}
                    >
                      <Link
                        href={item.path}
                        className={`block py-3 px-4 rounded-lg transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "text-[#ffa727] bg-[#ffa727]/10"
                            : "hover:text-[#ffa727] hover:bg-[#ffa727]/5"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div
                className={`pt-4 transform transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: menuOpen
                    ? `${navItems.length * 50}ms`
                    : "0ms",
                }}
              >
                <button className="w-full group relative bg-[#ffa727] overflow-hidden flex items-center justify-center h-14 rounded-full text-white px-8 transition-all duration-300 cursor-pointer">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
