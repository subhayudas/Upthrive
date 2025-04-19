"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromBottom
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import AnimatedButton from "../ui/animated-button";

const HeroContent = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 lg:py-24 min-h-screen relative"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      {/* Frosted glass background effect */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0"></div>
      
      <motion.div 
          variants={slideInFromTop}
          className="Welcome-box py-2 px-4 border border-[#7042f88b] bg-[#7042f80d] rounded-full opacity-90 text-center inline-flex items-center mx-auto mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(112,66,248,0.15)]"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-sm font-medium tracking-wide animated-gradient-text">
            Fullstack Digital Agency
          </h1>
        </motion.div>
        

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container with grid lines for reference (invisible in production) */}
        <div className="absolute inset-0 grid grid-cols-3 gap-0 pointer-events-none opacity-0">
          <div className="border-r border-gray-500"></div>
          <div className="border-r border-gray-500"></div>
          <div></div>
        </div>

        {/* First heading block - CREATING */}
        <motion.h1 
          variants={slideInFromLeft(0.3)} 
          className="text-left text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight animated-gradient-text z-10 absolute left-4 sm:left-6 lg:left-8 top-0"
          style={{ letterSpacing: "-0.02em" }}
        >
          CREATING
        </motion.h1>
        
        {/* Paragraph positioned to the right of first heading */}
        <motion.p 
          variants={slideInFromRight(0.5)} 
          className="text-white/70 text-base sm:text-lg leading-relaxed font-light z-20 absolute left-4 sm:left-6 lg:left-8 top-36 sm:top-40 lg:top-44"
          style={{ 
            maxWidth: "400px",
          }}
        >
          We craft digital experiences that captivate audiences, drive conversions, and elevate your brand story. Partner with us to transform your vision into digital reality.
        </motion.p>
        
        {/* Second heading block - CULTURE-DRIVE */}
        <motion.h1 
          variants={slideInFromRight(0.4)} 
          className="text-left text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight animated-gradient-text z-10 absolute left-[33%] top-[180px] sm:top-[200px] lg:top-[220px]"
          style={{ letterSpacing: "-0.02em" }}
        >
          CULTURE-DRIVE
        </motion.h1>
        
        {/* Third heading block - BRANDS */}
        <motion.h1 
          variants={slideInFromLeft(0.5)} 
          className="text-left text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight animated-gradient-text z-10 absolute right-4 sm:right-6 lg:right-8 top-[360px] sm:top-[400px] lg:top-[440px]"
          style={{ letterSpacing: "-0.02em" }}
        >
          BRANDS
        </motion.h1>
      </div>
      
      {/* Spacer div to ensure proper container height */}
      <div className="h-[500px] sm:h-[550px] lg:h-[600px] w-full"></div>

      <motion.div variants={slideInFromBottom(0.6)} className="relative z-10 mt-10">
        <AnimatedButton 
          href="https://cal.com/mralamin/30min"
          target="_blank"
          className="relative z-10"
        >
          Book A Call
        </AnimatedButton>
      </motion.div>

    </motion.div>
  );
};

export default HeroContent;
