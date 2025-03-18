import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | AI-Content Generator",
  description:
    "AI-Content Generator is a cutting-edge platform designed to help individuals, businesses, and content creators generate high-quality AI-powered content effortlessly. Our AI-driven technology ensures that you get engaging, well-structured, and optimized content in seconds.",
  keywords:
    "AI content generator, AI writing tool, AI-powered content creation, automated content writing, AI text generator",
  authors: [
    {
      name: "Vishal Shitole",
      url: "https://vishal-shitole-portfolio.netlify.app/",
    },
  ],
  creator: "ai-content-generator",
  applicationName: "AI-Content Generator",
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  openGraph: {
    title: "About Us | AI-Content Generator",
    description:
      "Discover how AI-Content Generator helps businesses and individuals create high-quality AI-powered content effortlessly.",
    url: "https://ai-content-generator-sass-1m7q.vercel.app/aboutus",
    siteName: "AI-Content Generator",
    type: "website",
  },
  alternates: {
    canonical: "https://ai-content-generator-sass-1m7q.vercel.app/aboutus",
  },
};

function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default AboutUsLayout;
