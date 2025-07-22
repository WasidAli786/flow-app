"use client";

import React, { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

const cards = [
  {
    image: "/images/finance-carousal1.png",
    title: "One App for Everything",
    description:
      "It simplifies the digital experience by combining multiple services into a single platform.",
  },
  {
    image: "/images/finance-carousal2.png",
    title: "Track income & expense",
    description:
      "Tracking income and expenses is crucial for managing personal finances effectively.",
  },
  {
    image: "/images/finance-carousal3.png",
    title: "Save it & Earn interest",
    description:
      "Saving money is a smart move, and finding the right place to save it can make all the difference.",
  },
  {
    image: "/images/finance-carousal4.png",
    title: "Design to be loved by everyone",
    description:
      "Creating a design that resonates with everyone and experiences that are common to all.",
  },
  {
    image: "/images/finance-carousal5.png",
    title: "Integrate a secure payment",
    description:
      "It encrypts and securely transmits customer payment information.",
  },
];

// Duplicate cards to allow infinite scroll effect
const duplicatedCards = [...cards, ...cards, ...cards];

const FinanceCarousal = () => {
  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current || !wrapperRef.current) return;

    x.current -= 0.05 * delta;

    const totalWidth = wrapperRef.current.scrollWidth / 3;
    if (-x.current >= totalWidth) {
      x.current = 0;
    }

    wrapperRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div>
      <div className="responsive-container mt-10 px-4">
        <h2 className="font-bold text-4xl sm:text-5xl leading-tight">
          More for <br />
          your finances.
        </h2>
      </div>

      <div className="overflow-hidden w-full py-10">
        <div ref={containerRef} className="w-full relative">
          <div
            ref={wrapperRef}
            className="flex gap-4 sm:gap-6 will-change-transform"
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={index}
                className="
                  w-[80vw] 
                  sm:w-[calc(100%/2.5)] 
                  md:w-[calc(100%/3.5)] 
                  lg:w-[calc(100%/4.5)] 
                  bg-white shadow 
                  rounded-[20px] sm:rounded-[28px] 
                  p-5 sm:p-[30px] 
                  flex-shrink-0
                "
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 mb-4 object-contain"
                />
                <h3 className="text-lg sm:text-[22px] font-semibold mb-1">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-lg text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCarousal;
