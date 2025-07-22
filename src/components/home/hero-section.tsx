"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroFullScrollMockup() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const containerY = useTransform(scrollYProgress, [0, 0.15], ["14vh", "0vh"]);
  const rotateX = useTransform(scrollYProgress, [0, 0.15], [35, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1.3, 1]);
  const imageScrollY = useTransform(scrollYProgress, [0.15, 0.6], [0, -600]);

  return (
    <section
      ref={sectionRef}
      className="h-[200vh] relative bg-white pt-[116px]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 flex flex-col items-center text-center">
        <h1 className="font-extrabold gradient-text text-[8vw] sm:text-[64px] leading-tight">
          Powerful solutions
        </h1>
        <h1 className="font-extrabold gradient-text text-[8vw] sm:text-[64px] leading-tight">
          with seamless payment
        </h1>
        <p className="text-[5vw] sm:text-[22px] mt-6 max-w-3xl">
          Financial experience with Appflow, the platform for those who expect
          more from their money. Discover the smarter way to manage your
          finances today.
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
                src="/images/mockup1.jpg"
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
