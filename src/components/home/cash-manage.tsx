"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NextImage from "../ui/next-image";
import { AppleIcon, GooglePlayStoreIcon } from "../ui/icons";
import { MoveRight } from "lucide-react";

const CashManage = () => {
  const containerRef = useRef(null);

  // Track scroll progress for this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Image parallax animation - starts lower and moves up more
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -120]);

  return (
    <>
      <div className="responsive-container " ref={containerRef}>
        <div className="relative grid md:grid-cols-12 smart-track-card rounded-[20px] md:rounded-[40px] p-5 md:p-10 md:pr-0 overflow-hidden h-[450px] bg-gradient-to-tr from-[#675DFE] via-[#7518ab] to-[#ee5dfe]">
          <div className="flex flex-col z-10 col-span-5">
            <h2 className="text-[4vw] lg:text-5xl font-bold text-white">
              Your Business. In Your Pocket.
            </h2>
            <h3 className="text-lg lg:text-[26px] lg:font-bold text-white md:mt-4">
              Download an app now and the various benefits you will get
              immediately.
            </h3>
            <button className="w-full group relative bg-black overflow-hidden flex items-center justify-center h-14 rounded-full text-white px-8 transition-all duration-300 cursor-pointer mt-6">
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

          <motion.div
            className="col-span-7 w-full flex justify-end"
            style={{ y: imageY }}
          >
            <img
              src="/images/mockup2.png"
              alt="App Screen"
              className="max-h-[800px] w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CashManage;
