"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DesignAnalytics = () => {
  const containerRef = useRef(null);

  // Track scroll progress for this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Left section animations
  const leftSectionY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const leftImageY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Right section animations
  const rightSectionY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rightImageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <>
      <div
        className="responsive-container grid grid-cols-2 gap-6 mt-20"
        ref={containerRef}
      >
        <motion.div
          className="bg-[#f5f5f7] rounded-[40px] p-10 relative overflow-hidden h-[600px]"
          style={{ y: leftSectionY }}
        >
          <div>
            <h2 className="text-[40px] font-bold">Meet the design</h2>
            <h3 className="text-[22px] text-[#666666] font-medium">
              Design to be loved for all elements
            </h3>
          </div>

          <motion.div
            className="absolute -bottom-[90%]"
            style={{ y: leftImageY }}
          >
            <img
              src="/images/mockup3.png"
              alt="App Screen"
              className="h-[1000px] object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-[#f5f5f7] rounded-[40px] p-10 flex flex-col justify-between"
          style={{ y: rightSectionY }}
        >
          <motion.div>
            <h2 className="text-[40px] font-bold">Analytics</h2>
            <h3 className="text-[22px] text-[#666666] font-medium">
              Keep tracks all your transactions
            </h3>
          </motion.div>

          <motion.img
            src="/images/analytics.png"
            alt="App Screen"
            className="h-[350px] w-[350px] object-contain mx-auto"
            style={{ y: rightImageY }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default DesignAnalytics;
