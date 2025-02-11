"use client";
import React from "react";
import { motion } from "framer-motion";
import { galleryImages } from "@/components/data/gallery";

export const GallerySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-white">
          Life at SaibonSoft
        </h2>
       

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Image with Hover Effect */}
              <motion.img
                src={image.url}
                alt={image.caption}
                className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Overlay with Caption */}
              <motion.div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="backdrop-blur-md bg-white/20 p-3 rounded-lg">
                  <p className="text-white font-semibold">{image.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
