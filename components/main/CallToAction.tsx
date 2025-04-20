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
      {/* Static background instead of animated */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <motion.div 
        style={{ scale, opacity, willChange: "transform, opacity" }}
        className="max-w-7xl mx-auto relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden shadow-2xl"
      >
        {/* Decorative elements - enhanced design */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-amber-500/10 rounded-full blur-xl"></div>
        
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="Welcome-box py-[8px] px-[7px] border border-[#f87042] opacity-[0.9] inline-flex items-center mb-4"
            >
              <SparklesIcon className="text-orange-400 mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px] font-medium">Ready to Transform?</h1>
            </motion.div>
            
            <AnimatedHeading as="h2" className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Create Something <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-600">Extraordinary</span> Together
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
                  href="https://cal.com/mralamin/30min"
                  target="_blank"
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
                  href="#contact"
                >
                  Learn More
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
              {/* Enhanced decorative elements */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/40 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-amber-500/20"></div>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/30 relative overflow-hidden">
                  {/* Professional person avatar */}
                  <div className="relative w-40 h-40 rounded-full overflow-hidden flex items-center justify-center">
                    <BusinessPersonAvatar className="w-36 h-36" />
                  </div>
                  {/* Inner glow */}
                  <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                  {/* Outer glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-md"></div>
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