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
        

      <motion.h1 
        variants={slideInFromLeft(0.5)} 
        className="relative z-10 mx-auto max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6"
        style={{ letterSpacing: "-0.02em" }}
      >
        <span className="block mb-3 animated-gradient-text">CREATING</span>
        <span className="block animated-gradient-text"> Culture-Driven BRANDS</span>
      </motion.h1>

      <motion.p 
        variants={slideInFromRight(0.7)} 
        className="relative z-10 mx-auto mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed font-light"
      >
        We craft digital experiences that captivate audiences, drive conversions, and elevate your brand story. Partner with us to transform your vision into digital reality.
      </motion.p>

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
