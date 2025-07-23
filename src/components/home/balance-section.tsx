"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NextImage from "../ui/next-image";

const BalanceSection = () => {
  const containerRef = useRef(null);

  // Track scroll progress for this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Image parallax animation - starts lower and moves up more
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Content animation - starts lower and moves up
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <>
      <div className="responsive-container mt-60" ref={containerRef}>
        <motion.h2
          className="font-bold text-[5vw] md:text-5xl"
          style={{ y: contentY }}
        >
          Grow <br />
          your earnings
        </motion.h2>
        <div className="relative grid md:grid-cols-2 bg-[#F5F5F7] rounded-[20px] md:rounded-[40px] p-5 md:px-[60px] md:py-[100px] overflow-hidden h-[450px] mt-14">
          <motion.div className="flex flex-col z-10" style={{ y: imageY }}>
            <div className="relative h-18 md:h-24 w-18 md:w-24">
              <NextImage src="/images/save-icon.png" alt="logo" />
            </div>
            <h6 className="text-[4vw] md:text-4xl font-bold mt-4 leading-tight">
              Rent smarter. <br />
              Earn faster.
            </h6>
          </motion.div>

          <motion.div className="translate-y-0 relative" style={{ y: imageY }}>
            <img
              src="/images/mockup3.png"
              alt="App Screen"
              className="h-[800px] w-full object-contain"
            />

            <div className="absolute top-[10%] left-[10%] z-20 rounded-[28px] p-5 shadow-lg w-fit bg-white hidden md:flex items-center gap-2 animate-moveUpDown">
              <div className="rounded-full bg-[#FFA728] p-2">
                <img
                  src="/images/wallet-icon.svg"
                  alt="wallet-icon"
                  className="h-7 w-7"
                />
              </div>
              <div className="w-20 animate-pulse space-y-2">
                <div className="h-2 bg-gray-300 rounded w-full"></div>
                <div className="h-2 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
            <div className="absolute top-[20%] right-[10%] z-20 rounded-[28px] p-5 shadow-lg w-fit bg-white hidden md:flex items-center gap-2 animate-moveUpDown">
              <div className="rounded-full bg-[#FF6662] p-2">
                <img
                  src="/images/wallet-icon.svg"
                  alt="wallet-icon"
                  className="h-7 w-7"
                />
              </div>
              <div className="w-20 animate-pulse space-y-2">
                <div className="h-2 bg-gray-300 rounded w-full"></div>
                <div className="h-2 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BalanceSection;
