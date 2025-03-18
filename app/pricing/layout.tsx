import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing | AI-Content Generator",
  description:
    "Explore our flexible pricing plans for AI-powered content generation. Choose the plan that fits your needs!",
  keywords:
    "AI content generator pricing, AI writing tool plans, AI content subscription, affordable AI content creation",
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
    title: "Pricing | AI-Content Generator",
    description:
      "Find the best pricing plans for AI-powered content generation. Choose the right subscription for your needs.",
    url: "https://ai-content-generator-sass-1m7q.vercel.app/pricing",
    siteName: "AI-Content Generator",
    type: "website",
  },
  alternates: {
    canonical: "https://ai-content-generator-sass-1m7q.vercel.app/pricing",
  },
};

function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default PricingLayout;
