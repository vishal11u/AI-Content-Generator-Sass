"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesPage from "./features/page";
import BillingPage from "@/components/BillingPage";

const LandingPage = () => {
  const waveRefs = useRef<SVGPathElement[]>([]);
  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.7]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  useEffect(() => {
    if (waveRefs.current.length) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      waveRefs.current.forEach((wave, index) => {
        tl.to(
          wave,
          {
            x: index % 2 === 0 ? 60 : -60,
            y: index % 2 === 0 ? 25 : -25,
            duration: 2 + index * 0.1,
            ease: "sine.inOut",
          },
          "-=1.8"
        );
      });
    }

    gsap.fromTo(
      ".animated-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "easeOut",
        scrollTrigger: {
          trigger: ".animated-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-gray-200 relative overflow-hidden">
      <Navbar />
      <motion.section
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black text-gray-200"
      >
        <div className="absolute inset-0 pointer-events-none -mt-56">
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
                ref={(el) => {
                  if (el) waveRefs.current[i] = el;
                }}
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
      </motion.section>

      <section
        id="features"
        className="relative py-16 px-6 text-center bg-transparent overflow-hidden animated-section"
      >
        <motion.h2
          className="text-4xl font-bold neon-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Use AI ContentGen?
        </motion.h2>

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
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="relative overflow-hidden animated-section"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <BillingPage />
      </motion.section>

      <motion.section
        className="relative overflow-hidden animated-section"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <FeaturesPage />
      </motion.section>

      <Footer />
    </div>
  );
};

export default LandingPage;
