"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import NextImage from "../ui/next-image";

const SmartTrack = () => {
  const sectionRef = useRef(null);

  // Scroll progress for section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Shared scroll animation for cards
  const cardY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const smoothCardY = useSpring(cardY, { stiffness: 60, damping: 20 });

  // Image scroll animation inside card
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const smoothImageY = useSpring(imageY, { stiffness: 50, damping: 15 });

  return (
    <div ref={sectionRef} className="responsive-container mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="smart-track-card rounded-[40px] p-10 flex flex-col justify-center text-center"
          style={{ y: smoothCardY }}
        >
          <h2 className="text-[40px] font-bold text-white">Smart Track</h2>
          <h3 className="text-[26px] font-semibold text-white">
            Daily expense
          </h3>
          <motion.div
            style={{ y: smoothImageY }}
            className="relative h-[250px] w-full mt-10"
          >
            <NextImage
              src="/images/total-balance.png"
              alt="total-balance"
              className="object-contain"
              fill
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE CARDS */}
        <div className="flex flex-col justify-between gap-6">
          <motion.div
            style={{ y: smoothCardY }}
            className="noFee-card rounded-[40px] p-10"
          >
            <h2 className="text-[40px] font-bold text-white leading-12">
              No Fee
            </h2>
            <h2 className="text-[40px] font-bold text-white opacity-60 leading-12">
              Not even
            </h2>
            <h2 className="text-[40px] font-bold text-white opacity-60 leading-12">
              Hidden once
            </h2>
          </motion.div>
          <motion.div
            style={{ y: smoothCardY }}
            className="daily-cash-card rounded-[40px] p-10"
          >
            <h2 className="text-[40px] font-bold text-white leading-12">
              Daily Cash
            </h2>
            <h2 className="text-[40px] font-bold text-white opacity-60 leading-12">
              Save and
            </h2>
            <h2 className="text-[40px] font-bold text-white opacity-60 leading-12">
              Earn interest
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SmartTrack;
