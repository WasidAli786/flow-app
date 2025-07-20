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
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -150]);

  // Content animation - starts lower and moves up
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <>
      <div className="responsive-container" ref={containerRef}>
        <div className="relative flex items-center justify-between smart-track-card rounded-[40px] px-[60px] py-[100px] overflow-hidden h-[450px]">
          <div className="flex flex-col justify-center gap-6 z-10 w-1/3">
            <h2 className="text-5xl font-bold text-white">
              Manage your cash easily
            </h2>
            <h3 className="text-[26px] font-bold text-white">
              Download an app now and the various benefits you will get
              immediately.
            </h3>
            <button className="w-full group relative bg-black overflow-hidden flex items-center justify-center h-14 rounded-full text-white px-8 transition-all duration-300 cursor-pointer">
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
            className="absolute bottom-0 right-[0px] translate-y-[45%]"
            style={{ y: imageY }}
          >
            <img
              src="/images/mockup2.png"
              alt="App Screen"
              className="h-[800px] w-[500px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CashManage;
