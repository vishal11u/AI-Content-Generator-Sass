"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gray-50 text-gray-900">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6 md:px-16 py-4">
        <a
          href="/"
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
        >
          AI ContentGen
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/features"
            className="relative font-medium hover:text-indigo-600 cursor-pointer after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-indigo-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Features
          </a>
          <a
            href="/pricing"
            className="relative font-medium hover:text-indigo-600 cursor-pointer after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-indigo-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Pricing
          </a>
          <a
            href="/aboutus"
            className="relative font-medium hover:text-indigo-600 cursor-pointer after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-indigo-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            About
          </a>
          <a
            href="/contactus"
            className="relative font-medium hover:text-indigo-600 cursor-pointer after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-indigo-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Contact
          </a>
        </div>

        <a
          href="/dashboard"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer hidden md:block"
        >
          Get Dashboard
        </a>
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
          <a
            href="/dashboard"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
          >
            Get Dashboard
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
