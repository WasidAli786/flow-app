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
      className="h-[500vh] relative bg-white pt-[116px]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 flex flex-col items-center text-center">
        <h1 className="font-bold gradient-text text-[64px]">
          Powerful solutions
        </h1>
        <h1 className="font-bold gradient-text text-[64px]">
          with seamless payment
        </h1>
        <p className="text-[22px] mt-6">
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
            className="relative w-[600px] h-[850px]"
          >
            <img
              src="/images/mockup-frame.png"
              alt="Phone Frame"
              className="absolute top-0 left-0 w-full h-full object-contain z-10 pointer-events-none"
            />

            <div className="absolute top-[45px] left-[124px] w-[350px] h-[755px] rounded-[40px] overflow-hidden z-0">
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
