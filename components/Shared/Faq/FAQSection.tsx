"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Tittle from "../Tittle";

const FAQSection = ({ path }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your development process?",
      answer:
        "We follow an agile methodology with iterative cycles, ensuring transparency and efficiency in development.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "Through rigorous code reviews, automated testing, CI/CD pipelines, and industry best practices.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We excel in React, Node.js, Python, AWS, and other modern tech stacks to build scalable solutions.",
    },
    {
      question: "How do you handle project maintenance?",
      answer:
        "We provide regular updates, security patches, and performance monitoring to keep systems running smoothly.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing is flexible, offering fixed-price projects, time-based contracts, and dedicated team setups.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Tittle tittle="FAQs" />
            <p className="text-gray-400">Answers to your most common questions</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="border border-blue-500/20 rounded-lg p-5 bg-gray-900/50 backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-lg font-medium">{faq.question}</h3>
                  {openIndex === index ? <ChevronUp className="text-blue-400" /> : <ChevronDown className="text-blue-400" />}
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-gray-300 mt-3"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
