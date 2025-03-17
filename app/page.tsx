import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import SubscriptionPage from "./dashboard/billing/page";
import FeaturesPage from "./features/page";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 text-white">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/SPhgJMqkXnw?autoplay=1&mute=1&loop=1&playlist=SPhgJMqkXnw"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative z-10">
          <h1 className="text-6xl font-bold">AI-Powered Content Creation</h1>
          <p className="text-xl mt-4 max-w-2xl">
            Generate high-quality blog posts, ads, and copy in seconds.
          </p>
          <button className="mt-6 px-8 py-4 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
            Start Creating
          </button>
        </div>
      </section>

      <section id="features" className="py-16 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold">Why Use AI ContentGen?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">AI-Driven Creativity</h3>
            <p className="mt-2">Instantly generate fresh, engaging content.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">SEO Optimized</h3>
            <p className="mt-2">
              AI ensures high-ranking, keyword-rich content.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Time-Saving</h3>
            <p className="mt-2">
              Create content 10x faster than traditional methods.
            </p>
          </div>
        </div>
      </section>

      <SubscriptionPage />

      <section className="py-16 text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <h2 className="text-4xl font-bold">Start Creating Now</h2>
        <p className="mt-4 text-lg">
          Join thousands of creators using AI for content generation.
        </p>
        <button className="mt-6 px-8 py-4 bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-gray-200">
          Try for Free
        </button>
      </section>

      <FeaturesPage />

      <Footer />
    </div>
  );
};

export default LandingPage;
