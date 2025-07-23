"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import NextImage from "../ui/next-image";

const AmazingDesign = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const bottomValue = useTransform(scrollYProgress, [0.2, 0.5], [-384, -64]);

  const springBottom = useSpring(bottomValue, {
    stiffness: 500,
    damping: 60,
    mass: 1,
  });

  const walletIconBottom = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [-84, 236]
  ); // Center position relative to container
  const dollarIconBottom = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [-64, 356]
  ); // Slightly higher position

  const springWalletBottom = useSpring(walletIconBottom, {
    stiffness: 500,
    damping: 60,
    mass: 1,
  });

  const springDollarBottom = useSpring(dollarIconBottom, {
    stiffness: 500,
    damping: 60,
    mass: 1,
  });

  const rightImageY = useTransform(scrollYProgress, [0, 1], [50, -0]);

  return (
    <div ref={containerRef} className="responsive-container relative h-[155vh]">
      <h2 className="text-black font-bold text-[7vw] lg:text-[64px] lg:leading-20">
        Find. List. Earn.
      </h2>
      <motion.p
        style={{ opacity: textOpacity }}
        className="text-lg lg:text-[26px] mt-5 md:font-semibold z-50 block md:hidden"
      >
        From personalized recommendations to secure messaging and real-time
        availability, AI helps make every step faster, safer, and easier.
      </motion.p>

      <div className="bg-[#f5f5f7] rounded-[20px] mt-5 p-5 block md:hidden">
        <div className="flex flex-col justify-center">
          <div className="relative h-20 w-20">
            <NextImage
              src="/images/design-logo.png"
              alt="logo"
              className="rounded-2xl"
            />
          </div>
          <h6 className="text-[4vw] lg:text-5xl font-bold mt-4 leading-tight">
            Made for People <br />
            Who Move
          </h6>
        </div>
        <div className="relative h-[700px]">
          <motion.img
            src="/images/mockup2.png"
            alt="Phone Frame"
            className="w-full h-full object-cover"
            style={{ y: rightImageY }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <div className="relative mt-10 hidden md:block">
        <div className="grid grid-cols-2 relative">
          <div className="relative h-[710px] z-10">
            <img
              src="/images/mockup2.png"
              alt="Phone Frame"
              className="w-full h-full object-contain"
            />
          </div>

          <motion.p
            style={{ opacity: textOpacity }}
            className="text-[26px] mt-[40%] font-semibold z-50 hidden md:block"
          >
            From personalized recommendations to secure messaging and real-time
            availability, AI helps make every step faster, safer, and easier.
          </motion.p>
        </div>

        {/* Floating Icons - positioned outside background container */}
        <motion.div
          style={{ bottom: springWalletBottom }}
          className="absolute left-20 z-[60] rounded-[28px] p-5 shadow-lg w-fit bg-white flex items-center gap-2 animate-moveUpDown"
        >
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
        </motion.div>
        <motion.div
          style={{ bottom: springDollarBottom }}
          className="absolute right-[55%] z-[60] rounded-[28px] p-5 shadow-lg w-fit bg-white flex flex-col items-center gap-2 animate-moveUpDown"
        >
          <div className="rounded-full bg-[#FF6662] p-2">
            <img
              src="/images/dollar-icon.svg"
              alt="wallet-icon"
              className="h-7 w-7"
            />
          </div>
          <div className="w-28 animate-pulse flex flex-col items-center gap-2">
            <div className="h-2 bg-gray-300 rounded w-full"></div>
            <div className="h-2 bg-gray-300 rounded w-3/4"></div>
            <div className="h-2 bg-gray-300 rounded w-3/5"></div>
          </div>
        </motion.div>

        <motion.div
          style={{ bottom: springBottom }}
          className="bg-[#f5f5f7] grid grid-cols-2 gap-20 rounded-[40px] h-[600px] absolute w-full -z-50"
        >
          <div className="relative"></div>
          <div className="flex flex-col justify-center">
            <div className="relative h-24 w-24">
              <NextImage
                src="/images/design-logo.png"
                alt="logo"
                className="rounded-2xl"
              />
            </div>
            <h6 className="text-5xl font-bold mt-4 leading-tight">
              Made for People <br />
              Who Move
            </h6>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AmazingDesign;
