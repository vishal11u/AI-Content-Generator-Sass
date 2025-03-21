"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedWaves = () => {
  const waveRefs = useRef<SVGPathElement[]>([]);

  // Detect screen size for responsiveness
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (waveRefs.current.length) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      waveRefs.current.forEach((wave, index) => {
        tl.to(
          wave,
          {
            x: index % 2 === 0 ? (isMobile ? 30 : 50) : isMobile ? -30 : -50,
            y: index % 2 === 0 ? (isMobile ? -10 : -20) : isMobile ? 10 : 20,
            duration: 2.5 + index * 0.2,
            ease: "sine.inOut",
          },
          "-=2.2"
        );
      });
    }
  }, [isMobile]);

  return (
    <svg
      className="absolute w-full h-full"
      viewBox={isMobile ? "0 0 768 500" : "0 0 1440 800"}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff0000" />
          <stop offset="16%" stopColor="#ff7f00" />
          <stop offset="33%" stopColor="#ffff00" />
          <stop offset="50%" stopColor="#00ff00" />
          <stop offset="66%" stopColor="#0000ff" />
          <stop offset="83%" stopColor="#4b0082" />
          <stop offset="100%" stopColor="#9400d3" />
        </linearGradient>
      </defs>

      {[...Array(10)].map((_, i) => {
        const wavePath = isMobile
          ? `M0,${450 - i * 20} Q150,${380 - i * 20} 300,${450 - i * 20} T600,${
              450 - i * 20
            } T900,${450 - i * 20}`
          : `M0,${600 - i * 30} Q180,${450 - i * 30} 360,${600 - i * 30} T720,${
              600 - i * 30
            } T1080,${600 - i * 30} T1440,${600 - i * 30}`;

        return (
          <path
            key={i}
            ref={(el) => {
              if (el) waveRefs.current[i] = el;
            }}
            fill="none"
            stroke="url(#rainbowGradient)"
            strokeWidth={isMobile ? 1 + i * 0.2 : 1.5 + i * 0.3}
            opacity={isMobile ? 0.2 + i * 0.05 : 0.3 + i * 0.07}
            d={wavePath}
          />
        );
      })}
    </svg>
  );
};

export default AnimatedWaves;
