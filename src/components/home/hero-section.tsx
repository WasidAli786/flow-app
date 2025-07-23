"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroFullScrollMockup() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const containerY = useTransform(scrollYProgress, [0, 0.15], ["22vh", "0vh"]);
  const rotateX = useTransform(scrollYProgress, [0, 0.15], [35, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1.3, 1]);
  const imageScrollY = useTransform(scrollYProgress, [0.15, 0.6], [0, -600]);

  return (
    <section
      ref={sectionRef}
      className="h-[400vh] relative bg-white py-28"
    >
      <div className="relative z-50 bg-white max-w-6xl mx-auto px-4 pt-10 flex flex-col items-center text-center">
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#675DFE] via-[#7518ab] to-[#ee5dfe]">
            Discover Brokr — The{" "}
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#675DFE] via-[#7518ab] to-[#ee5dfe]">
            premier all-in-one
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#675DFE] via-[#7518ab] to-[#ee5dfe]">
            rental marketplace!
          </span>
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-black max-w-2xl mx-auto animate-fade-in-up opacity-0 pb-6"
          style={{ animationDelay: "0.4s" }}
        >
          A platform designed to help travelers and locals find the perfect
          rentals. Owners can easily manage and monetize their assets, while
          brokers can grow their inventory and business without needing to own.
        </p>
      </div>

      <motion.div className="sticky top-0 h-screen flex items-center justify-center z-20 pointer-events-none">
        <motion.div
          style={{ y: containerY }}
          className="flex justify-center items-end pb-10"
        >
          <motion.div
            style={{
              rotateX,
              scale,
              transformPerspective: "1000px",
              willChange: "transform",
            }}
            className="relative w-[320px] xs:w-[90vw] max-w-[600px] aspect-[6/8.5]"
          >
            <img
              src="/images/mockup-frame.png"
              alt="Phone Frame"
              className="absolute top-0 left-0 w-full h-full object-contain z-10 pointer-events-none"
            />

            <div className="absolute top-[5%] left-[20%] w-[60%] h-[88.8%] rounded-[6.5%] overflow-hidden z-0">
              <motion.img
                src="/images/hero.png"
                alt="App Screen"
                style={{ y: imageScrollY }}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
