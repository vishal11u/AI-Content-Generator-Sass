"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-indigo-600">AI ContentGen</div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <button onClick={() => router.push("/dashboard")} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Get Started
          </button>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center space-y-6 pt-20">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Get Started
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-6xl font-bold">AI-Powered Content Creation</h1>
        <p className="text-xl mt-4 max-w-2xl">Generate high-quality blog posts, ads, and copy in seconds.</p>
        <button className="mt-6 px-8 py-4 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
          Start Creating
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold">Why Use AI ContentGen?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">AI-Driven Creativity</h3>
            <p className="mt-2">Instantly generate fresh, engaging content.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">SEO Optimized</h3>
            <p className="mt-2">AI ensures high-ranking, keyword-rich content.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Time-Saving</h3>
            <p className="mt-2">Create content 10x faster than traditional methods.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold">Choose Your Plan</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Basic</h3>
            <p className="mt-2 text-lg">Free</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Pro</h3>
            <p className="mt-2 text-lg">$9.99/month</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <h2 className="text-4xl font-bold">Start Creating Now</h2>
        <p className="mt-4 text-lg">Join thousands of creators using AI for content generation.</p>
        <button className="mt-6 px-8 py-4 bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-gray-200">
          Try for Free
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2024 AI ContentGen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
