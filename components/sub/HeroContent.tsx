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
        className="relative z-10 text-sm mb-6 px-4 py-2 border border-white/20 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center mx-auto"
      >
        <SparklesIcon className="text-white/70 mr-2 h-4 w-4" />
        <span className="text-white/90 text-xs font-light tracking-widest uppercase">Fullstack Digital Agency</span>
      </motion.div>

      <motion.h1 
        variants={slideInFromLeft(0.5)} 
        className="relative z-10 mx-auto max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6"
        style={{ letterSpacing: "-0.02em" }}
      >
        <span className="block mb-2 animated-gradient-text">We're digital force</span>
        <span className="block animated-gradient-text">behind ambitious brands</span>
      </motion.h1>

      <motion.p 
        variants={slideInFromRight(0.7)} 
        className="relative z-10 mx-auto mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed font-light"
      >
        We craft digital experiences that captivate audiences, drive conversions, and elevate your brand story. Partner with us to transform your vision into digital reality.
      </motion.p>

      <motion.a
        variants={slideInFromBottom(0.6)}
        className="relative z-10 mt-10 px-8 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-white font-light rounded-sm hover:bg-white/20 transition-colors"
        href="https://cal.com/mralamin/30min"
        target="_blank"
      >
        Book A Call
      </motion.a>

      <motion.div variants={slideInFromBottom(0.9)} className="w-full pt-20 relative z-10">
        {/* Glowing arc at the bottom - matching the reference image */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-[95%] h-[1px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80"></div>
        </div>
        
        {/* Main glowing arc - curved side at the top */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-[95%] h-[200px] overflow-hidden">
          <div 
            className="w-full h-[400px] rounded-[50%] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-15 blur-[15px]"
            style={{
              transform: "translateY(50%)"
            }}
          ></div>
        </div>
        
        {/* Secondary glow for enhanced effect */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto w-[90%] h-[160px] overflow-hidden">
          <div 
            className="w-full h-[320px] rounded-[50%] bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-10 blur-[8px]"
            style={{
              transform: "translateY(50%)"
            }}
          ></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
