import React from "react";

const AboutUs = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://internetfolks.com/wp-content/uploads/best-AI-content-generator.png')",
        }}
      >
        <div className="bg-indigo-600 w-[50%] opacity-70 p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-lg md:text-xl mt-2">AI-Driven Solutions 🚀</p>
        </div>
      </section>

      {/* About Me - ZigZag Layout */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://cdn140.picsart.com/45456389314876384666.png?type=webp&r=640&to=min"
            alt="Vishal Shitole"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg border-4 border-blue-500 object-cover"
          />
        </div>

        {/* About Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            I'm Vishal Shitole
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            A passionate frontend developer and AI enthusiast, building
            intuitive and scalable web applications. I specialize in **React,
            Next.js, and AI-driven solutions**, always striving for performance
            and user-friendly design.
          </p>
        </div>
      </section>

      {/* YouTube Video - ZigZag Layout */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Video Description */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">
              Watch Me in Action
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Check out my latest work and insights on AI-powered development.
            </p>
          </div>

          {/* Video Embed */}
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-60 md:h-80 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/2p0gKHoRbGQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Let's Build Something Amazing</h2>
          <p className="mt-4 text-lg">
            Connect with me and explore AI-driven content creation.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            Contact Me
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
