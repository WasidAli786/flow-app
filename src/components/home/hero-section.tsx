"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroFullScrollMockup() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Phase 1: move mockup from bottom to center
  const containerY = useTransform(scrollYProgress, [0, 0.2], ["30vh", "0vh"]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [35, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1.5, 1]);

  // Phase 2: scroll image inside
  const imageScrollY = useTransform(scrollYProgress, [0.2, 0.6], [0, -470]);

  return (
    <section ref={sectionRef} className="h-[500vh] relative bg-white">
      {/* Sticky title */}
      <div className="sticky top-0 z-30 text-center py-10 bg-white">
        <h1 className="text-4xl font-bold mb-2">Your App Title</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Scroll to preview the app inside the phone.
        </p>
      </div>

      {/* Moving and transforming mockup */}
      <motion.div
        style={{
          y: containerY,
        }}
        className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10"
      >
        <motion.div
          style={{
            rotateX,
            scale,
            transformPerspective: "500px",
            willChange: "transform",
          }}
          className="relative w-[320px] h-[640px]"
        >
          {/* Phone Frame */}
          <img
            src="/images/mockup-frame.png"
            alt="Phone Frame"
            className="absolute top-0 left-0 w-full h-full object-contain z-10 pointer-events-none"
          />

          {/* Scrollable content */}
          <div className="absolute top-[85px] left-[30px] w-[260px] h-[510px] overflow-hidden rounded-4xl z-0">
            <motion.img
              src="/images/mockup1.jpg"
              alt="App Screen"
              style={{ y: imageScrollY }}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
