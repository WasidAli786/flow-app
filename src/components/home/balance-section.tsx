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

  // Background section animation - starts lower and moves up
  const sectionY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Image parallax animation - starts lower and moves up more
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -150]);

  // Content animation - starts lower and moves up
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <>
      <div className="responsive-container" ref={containerRef}>
        <motion.h2 className="font-bold text-5xl" style={{ y: contentY }}>
          Grow <br />
          your balance
        </motion.h2>
        <div className="relative flex items-center justify-between bg-[#F5F5F7] rounded-[40px] px-[60px] py-[100px] overflow-hidden h-[450px] mt-14">
          <motion.div
            className="flex flex-col justify-center z-10"
            style={{ y: imageY }}
          >
            <div className="relative h-24 w-24">
              <NextImage src="/images/save-icon.png" alt="logo" />
            </div>
            <h6 className="text-4xl font-bold mt-4 leading-tight">
              Save it and <br />
              Earn interest.
            </h6>
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-[0px] translate-y-[58%]"
            style={{ y: imageY }}
          >
            <img
              src="/images/mockup3.png"
              alt="App Screen"
              className="h-[1000px] w-[600px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BalanceSection;
