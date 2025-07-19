"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import NextImage from "../ui/next-image";

const mockups = [
  "/images/mockup2.png",
  "/images/mockup3.png",
  "/images/mockup2.png",
];
const icons = [
  "/images/story1.png",
  "/images/story2.png",
  "/images/story3.png",
];
const texts = [
  "Design to be loved for all elements",
  "Integrate a secure payment gateway such as Stripe or PayPal",
  "Created by Human & Powered with DayFlow",
];

const FullStory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.95],
    [0, 0, -1600]
  );
  const smoothTranslateY = useSpring(translateY, {
    stiffness: 50,
    damping: 20,
  });

  const clampedIndex = useTransform(scrollYProgress, (val) => {
    if (val < 0.15) return 0;
    const progress = (val - 0.15) / (0.95 - 0.15);
    return Math.min(Math.floor(progress * 3), 2);
  });

  return (
    <div
      ref={containerRef}
      className="responsive-container relative h-[350vh]x mt-20"
    >
      <h2 className="font-bold text-5xl">
        Explore <br />
        the full story.
      </h2>
      <div className="sticky top-0 h-screen flex items-start">
        <div className="w-full flex justify-between items-start">
          <div className="relative h-[800px] overflow-hidden">
            <motion.div
              style={{ y: smoothTranslateY }}
              className="flex flex-col"
            >
              {texts.map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 h-[800px] pb-8"
                >
                  <div className="relative h-20 w-20 flex-shrink-0">
                    <NextImage src={icons[index]} alt={`story${index}`} />
                  </div>
                  <h2 className="text-[32px] font-bold max-w-[400px]">
                    {text}
                  </h2>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative h-[900px] w-[500px]">
            {mockups.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`mockup-${index}`}
                className="absolute top-0 left-0 w-full h-full object-contain"
                style={{
                  opacity: useTransform(clampedIndex, (val) =>
                    val === index ? 1 : 0
                  ),
                  transition: "opacity 0.4s ease-in-out",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStory;
