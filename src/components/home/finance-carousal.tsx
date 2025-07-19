"use client";

import React, { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { div } from "framer-motion/client";

const cards = [
  {
    image: "/images/dollar.png",
    title: "Track Expenses",
    description: "Monitor your daily spending easily.",
  },
  {
    image: "/images/dollar.png",
    title: "Smart Savings",
    description: "Save automatically as you spend.",
  },
  {
    image: "/images/dollar.png",
    title: "All-in-One Wallet",
    description: "Manage all accounts in one place.",
  },
  {
    image: "/images/dollar.png",
    title: "Zero Fees",
    description: "No hidden charges ever.",
  },
];

// Repeat multiple times to avoid blank gap on looping
const duplicatedCards = [...cards, ...cards, ...cards];

const FinanceCarousal = () => {
  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current || !wrapperRef.current) return;

    x.current -= 0.05 * delta;

    const totalWidth = containerRef.current.offsetWidth / 3;

    // Reset scroll position without visual jump
    if (-x.current >= totalWidth) {
      x.current = 0;
    }

    wrapperRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div>
      <div className="responsive-container mt-10">
        <h2 className="font-bold text-5xl">
          More for <br />
          your finances.
        </h2>
      </div>
      <div className="overflow-hidden w-full py-10">
        <div ref={containerRef} className="w-max relative flex gap-6">
          <div ref={wrapperRef} className="flex gap-6 will-change-transform">
            {duplicatedCards.map((card, index) => (
              <div
                key={index}
                className="min-w-[250px] rounded-[28px] p-[30px] bg-white shadow flex-shrink-0"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-12 h-12 mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                <p className="text-sm opacity-80">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCarousal;
