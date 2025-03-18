"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeaturesPage from "./features/page";
import BillingPage from "@/components/BillingPage";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const LandingPage = () => {
  const waveRefs = useRef([]);

  useEffect(() => {
    if (waveRefs.current.length) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      waveRefs.current.forEach((wave, index) => {
        tl.to(
          wave,
          {
            x: index % 2 === 0 ? 30 : -30,
            y: index % 2 === 0 ? 10 : -10,
            duration: 4 + index * 0.2,
            ease: "sine.inOut",
          },
          "-=3.5"
        );
      });
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-gray-200 relative overflow-hidden">
      <Navbar />
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black text-gray-200">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 800">
            <defs>
              <linearGradient
                id="rainbowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ff0000" />
                <stop offset="16%" stopColor="#ff7f00" />
                <stop offset="33%" stopColor="#ffff00" />
                <stop offset="50%" stopColor="#00ff00" />
                <stop offset="66%" stopColor="#0000ff" />
                <stop offset="83%" stopColor="#4b0082" />
                <stop offset="100%" stopColor="#9400d3" />
              </linearGradient>
            </defs>
            {[...Array(9)].map((_, i) => (
              <path
                key={i}
                ref={(el) => (waveRefs.current[i] = el )}
                fill="none"
                stroke="url(#rainbowGradient)"
                strokeWidth={1.5 + i * 0.3}
                opacity={0.3 + i * 0.05}
                d={`M0,${600 - i * 20} Q180,${450 - i * 20} 360,${
                  600 - i * 20
                } T720,${600 - i * 20} T1080,${600 - i * 20} T1440,${
                  600 - i * 20
                }`}
              />
            ))}
          </svg>
        </div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold text-white tracking-wide neon-text">
            AI-Powered Content Generation
          </h1>
          <p className="text-xl mt-4 text-gray-300">
            Generate high-quality blog posts, ads, and copy in seconds.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-xl hover:shadow-neon transition-all"
          >
            Start Creating
          </motion.button>
        </motion.div>
      </section>
      <section
        id="features"
        className="relative py-16 px-6 text-center bg-transparent overflow-hidden"
      >
        <h2 className="text-4xl font-bold neon-text">Why Use AI ContentGen?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Driven Creativity",
              desc: "Generate engaging content instantly.",
            },
            {
              title: "SEO Optimized",
              desc: "High-ranking, keyword-rich content.",
            },
            {
              title: "Time-Saving",
              desc: "Create content 10x faster than before.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 text-white rounded-lg shadow-xl neon-border"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <BillingPage />
      <FeaturesPage />
      <Footer />
    </div>
  );
};

export default LandingPage;
