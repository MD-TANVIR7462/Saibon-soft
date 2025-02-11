"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { LucideIcon, ShieldCheck } from "lucide-react";

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  icon?: LucideIcon;
  onClick: () => void;
}

export const ServiceCard = ({ title, shortDescription, icon: Icon }: ServiceCardProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  // Using intersection observer logic in framer-motion
  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 10 });
      }
    }
  };

  // Trigger the scroll event on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className="group p-8 transition-all duration-700 card-hover bg-blue-400/10 cursor-pointer backdrop-blur-lg border-primary/10 rounded-sm"
    >
      <div className="absolute inset-x-0 -bottom-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/0 rounded-full blur opacity-30" />
        {Icon ? <Icon className="h-6 w-6 text-blue-600" /> : <ShieldCheck className="h-8 w-8" />}
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-md text-white/70">{shortDescription}</p>
    </motion.div>
  );
};
