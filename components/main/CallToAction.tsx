"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import BusinessPersonAvatar from "../ui/BusinessPersonAvatar";
import AnimatedHeading from "../ui/animated-heading";
import AnimatedButton from "../ui/animated-button";

const CallToAction = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect values
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  // Animation variants properly typed
  const floatingAnimation: Variants = {
    hidden: { y: 0 },
    visible: {
      y: [0, -10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={containerRef}>
      {/* Background elements removed for performance */}

      <motion.div
        style={{ scale, opacity, willChange: "transform, opacity" }}
        className="max-w-7xl mx-auto relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden shadow-2xl"
      >
        {/* Decorative elements simplified for performance */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200"></div>

        <div className="p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="Welcome-box py-[8px] px-[7px] border border-[#f87042] opacity-[0.9] inline-flex items-center mb-4"
            >
              <SparklesIcon className="text-gray-400 mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px] font-medium">Ready to Transform?</h1>
            </motion.div>

            <AnimatedHeading as="h2" className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Create Something <span className="text-gradient bg-gradient-to-r from-gray-400 to-gray-300">Extraordinary</span> Together
            </AnimatedHeading>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8"
            >
              Join the ranks of businesses that have transformed their digital presence and achieved remarkable growth with our expert team. The journey to digital excellence starts with a conversation.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ willChange: "transform" }}
              >
                <AnimatedButton
                  href="#BookingForm"
                >
                  Book a Free Consultation
                </AnimatedButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ willChange: "transform" }}
              >
                <AnimatedButton
                  href="https://api.whatsapp.com/send?phone=919810724697&text=Hey"
                >
                  Text Us
                </AnimatedButton>
              </motion.div>
            </div>
          </div>

          <motion.div
            style={{ y: y2, willChange: "transform" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-72 h-72">
              {/* Simplified decorative elements for performance */}

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-600 to-gray-400 flex items-center justify-center relative">
                  {/* Professional person avatar */}
                  <div className="relative w-40 h-40 rounded-full overflow-hidden flex items-center justify-center">
                    <BusinessPersonAvatar className="w-36 h-36" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;