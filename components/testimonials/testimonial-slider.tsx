"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonialsData } from "../data/testimonials2";
import { Quote } from "lucide-react";

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center justify-center bg-gradient-to-r relative ">
      {/* Background particle animation */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 lg:px-20 relative z-10">
        
        {/* Left Side (Text) */}
        <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start space-y-6">
          <h2 className="text-4xl font-bold text-white leading-tight tracking-wide">
            A smile <br className="hidden lg:block" /> is an inexpensive way to change your looks
          </h2>
          <p className="text-lg text-gray-200">Goals are just dreams with a deadline.</p>
          
 
        </div>

        {/* Right Side (Slider) */}
        <motion.div
          className="relative max-w-xl mx-auto lg:ml-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="swiper-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: -50 }} // Move from slightly above instead of left
                animate={{ opacity: 1, y: 0 }}  // Move to normal position smoothly
                exit={{ opacity: 0, y: 50 }}    // Move slightly down when changing
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white/5 p-8 backdrop-blur-lg w-full"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
                <Quote className="absolute right-8 top-8 h-12 w-12 text-blue-500/20" />

                <div className="flex flex-col items-center text-center">
                  <p className="text-md text-gray-300  ">
                    {testimonialsData[currentIndex].content}
                  </p>

                  <div className="mt-8">
                    <Image
                      src={testimonialsData[currentIndex].image}
                      alt={testimonialsData[currentIndex].author}
                      width={60}
                      height={60}
                      className="mx-auto rounded-full"
                    />
                    <div className="mt-4">
                      <h4 className="font-semibold text-white">
                        {testimonialsData[currentIndex].author}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonialsData[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
