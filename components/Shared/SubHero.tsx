"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SubHero = ({
  heroTittle,
  subHeroTittle,
}: {
  heroTittle?: string;
  subHeroTittle?: string;
}) => {
  return (
    <section className="relative sm:min-h-[40vh] overflow-hidden bg-gray-900">
      {/* Particle Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="bg-gradient-to-r from-[#007BFF] via-[#00AEEF] to-[#007BFF] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
            {heroTittle ? heroTittle : ""}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            {subHeroTittle ? subHeroTittle : ""}
          </p>
          <div className="mt-8">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-8 py-3 text-white backdrop-blur-lg transition-all hover:bg-white/20 bg-gradient-to-r from-blue-500 to-cyan-400  hover:opacity-90  shadow-lg shadow-blue-500/20  group">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default SubHero;
