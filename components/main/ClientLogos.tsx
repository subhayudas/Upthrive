"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import AnimatedHeading from "../ui/animated-heading";
import AnimatedButton from "../ui/animated-button";
import Image from "next/image";

const ClientLogos = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  
  // Mock client logos - in a real implementation, you would use actual logo images
  const clientLogosRow1 = [
    { id: 1, name: "Google", logo: "G" },
    { id: 2, name: "Microsoft", logo: "M" },
    { id: 3, name: "Apple", logo: "A" },
    { id: 4, name: "Amazon", logo: "A" },
    { id: 5, name: "Facebook", logo: "F" },
    { id: 6, name: "Netflix", logo: "N" },
  ];
  
  const clientLogosRow2 = [
    { id: 7, name: "Spotify", logo: "S" },
    { id: 8, name: "Twitter", logo: "T" },
    { id: 9, name: "Uber", logo: "U" },
    { id: 10, name: "Airbnb", logo: "A" },
    { id: 11, name: "Tesla", logo: "T" },
    { id: 12, name: "Adobe", logo: "A" },
  ];
  
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] text-center mx-auto inline-flex items-center"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Trusted By</h1>
          </motion.div>
          
          <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-bold">
            Companies That Trust Us
          </AnimatedHeading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Join the growing list of industry leaders who rely on our expertise to drive their digital success.
          </motion.p>
        </div>
        
        {/* First row of logos - moves slightly up on scroll */}
        <motion.div 
          style={{ y: y1, opacity }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {clientLogosRow1.map((client) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: client.id * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="w-32 h-32 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {client.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Second row of logos - moves slightly down on scroll */}
        <motion.div 
          style={{ y: y2, opacity }}
          className="flex flex-wrap justify-center gap-8"
        >
          {clientLogosRow2.map((client) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: (client.id - 6) * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="w-32 h-32 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {client.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Ready to join these leading companies?</p>
          <AnimatedButton 
            href="#contact"
          >
            Get Started Today
          </AnimatedButton>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientLogos;
