import React from "react";
import Templates from "@/app/(data)/Templates";
 import Image from "next/image";
import { TEMPLATE } from "@/types/main-types";

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-28">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Explore Our Features
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Discover a range of AI-powered tools designed to help you with content
          creation, automation, and efficiency.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Templates?.map((data: TEMPLATE, i: number) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <div className="bg-blue-100 p-4 rounded-full">
                <Image
                  src={data.icon || ""}
                  alt="icon"
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="font-semibold text-lg text-gray-800 mt-4">
                {data.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesPage;
