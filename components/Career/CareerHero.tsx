import React from "react";

export const CareerHero = () => {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1E3A8A] to-[#2563EB]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title with Better Gradient */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent mb-6">
          Join Our Innovation Journey
        </h1>
        {/* Subtitle Text */}
        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Be part of a team that's shaping the future of digital transformation.
          We're looking for passionate innovators.
        </p>
        {/* CTA Button */}
        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300">
          View Open Positions
        </button>
      </div>
    </div>
  );
};
