"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full bg-gray-50 text-gray-900">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6 py-4">
        <a
          href="/"
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
        >
          AI ContentGen
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="/features" className="hover:text-indigo-600 cursor-pointer">
            Features
          </a>
          <a href="/pricing" className="hover:text-indigo-600 cursor-pointer">
            Pricing
          </a>
          <a href="/aboutus" className="hover:text-indigo-600 cursor-pointer">
            About
          </a>
          <a href="/contactus" className="hover:text-indigo-600 cursor-pointer">
            Contact
          </a>
          <button
            onClick={() => router.push("/dashboard")}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
          >
            Get Started
          </button>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center space-y-6 pt-20">
          <a href="/features" className="hover:text-indigo-600 cursor-pointer">
            Features
          </a>
          <a href="/pricing" className="hover:text-indigo-600 cursor-pointer">
            Pricing
          </a>
          <a href="/aboutus" className="hover:text-indigo-600 cursor-pointer">
            About
          </a>
          <a href="/contactus" className="hover:text-indigo-600 cursor-pointer">
            Contact
          </a>
          <button
            onClick={() => router.push("/dashboard")}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
