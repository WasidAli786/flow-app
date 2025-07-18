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

  return (
    <div ref={containerRef} className="responsive-container relative h-[120vh]">
      <h2 className="text-[#cccccc] font-bold text-[80px]">
        Meet the <br />
        New Design
      </h2>

      <div className="relative mt-10">
        <div className="grid grid-cols-2 z-50 relative">
          <div className="relative h-[710px] z-50">
            <img
              src="/images/mockup2.png"
              alt="Phone Frame"
              className="w-full h-full object-contain relative z-50"
            />
          </div>

          <motion.p
            style={{ opacity: textOpacity }}
            className="text-[26px] mt-[40%] font-semibold z-50"
          >
            With AppFlow, we completely reinvented the credit card. Your
            information lives on your app, beautifully laid out and easy to
            understand.
          </motion.p>
        </div>

        <motion.div
          style={{ bottom: springBottom }}
          className="bg-[#f5f5f7] grid grid-cols-2 gap-20 rounded-[40px] h-[600px] absolute w-full z-40"
        >
          <div></div>
          <div className="flex flex-col justify-center">
            <div className="relative h-24 w-24">
              <NextImage
                src="/images/design-logo.png"
                alt="logo"
                className="rounded-2xl"
              />
            </div>
            <h6 className="text-5xl font-bold mt-4 leading-tight">
              Design <br />
              Amazing <br />
              Interfaces
            </h6>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AmazingDesign;
