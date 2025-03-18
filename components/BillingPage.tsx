"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BillingPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-700 bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Upgrade With Monthly Plan
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
        {/* Free Plan */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-8 flex flex-col relative">
          <div className="absolute top-0 right-0">
            <div className="bg-gray-500 text-white px-3 sm:px-4 py-1 rounded-tr-lg rounded-bl-lg text-xs sm:text-lg">
              Free
            </div>
          </div>
          <div className="text-center mb-4 sm:mb-6 text-gray-700">
            <div className="mt-2 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                0$
              </span>
              <span className="text-gray-500 ml-1 text-sm sm:text-base">
                /month
              </span>
            </div>
          </div>

          <div className="flex-grow space-y-3 sm:space-y-4">
            <Feature text="10,000 Words/Month" />
            <Feature text="50+ Content Templates" />
            <Feature text="Unlimited Download & Copy" />
            <Feature text="1 Month of History" />
          </div>

          <button className="mt-6 sm:mt-8 w-full py-2 sm:py-3 px-4 sm:px-6 rounded-md bg-gray-600 text-white font-medium hover:bg-gray-700 transition-colors text-sm sm:text-base">
            Currently Active Plan
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-8 flex flex-col relative">
          <div className="absolute top-0 right-0">
            <div className="bg-blue-400 text-white px-3 sm:px-4 py-1 rounded-tr-lg rounded-bl-lg text-xs sm:text-lg">
              Monthly
            </div>
          </div>

          <div className="text-center mb-4 sm:mb-6">
            <div className="mt-2 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                9.99$
              </span>
              <span className="text-gray-500 ml-1 text-sm sm:text-base">
                /month
              </span>
            </div>
          </div>

          <div className="flex-grow space-y-3 sm:space-y-4">
            <Feature text="1,000,000 Words/Month" />
            <Feature text="50+ Template Access" />
            <Feature text="Unlimited Download & Copy" />
            <Feature text="1 Year of History" />
          </div>

          <a
            href="/dashboard"
            className={`mt-6 sm:mt-8 w-full py-2 sm:py-3 px-4 sm:px-6 rounded-md font-medium flex items-center justify-center text-sm sm:text-base transition-colors bg-white border border-blue-500 text-blue-500 hover:bg-blue-50`}
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

const Feature: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start">
    <svg
      className="h-5 w-5 flex-shrink-0 text-green-500 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
    <span className="text-sm sm:text-base">{text}</span>
  </div>
);

export default BillingPage;
