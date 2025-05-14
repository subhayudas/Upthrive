"use client";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromBottom
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import AnimatedButton from "../ui/animated-button";
import dynamic from 'next/dynamic';
import { Card } from "../ui/card";

// Import SplineScene with dynamic import and no SSR to prevent server-side rendering
const SplineScene = dynamic(
  () => import("@/components/ui/splite").then((mod) => mod.SplineScene),
  { 
    ssr: false, 
    loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse flex space-x-2">
        <div className="h-3 w-3 bg-violet-400 rounded-full"></div>
        <div className="h-3 w-3 bg-violet-400 rounded-full"></div>
        <div className="h-3 w-3 bg-violet-400 rounded-full"></div>
      </div>
    </div>
  ) }
);

const HeroContent = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-4 py-8 sm:py-16 lg:py-24 min-h-[100svh] relative overflow-hidden"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      {/* Removed background overlay to make main background visible */}
      
      <Card className="w-full max-w-7xl mx-auto bg-transparent relative overflow-hidden rounded-xl border border-white/10 shadow-[0_0_25px_rgba(112,66,248,0.15)]" style={{ minHeight: 'auto' }}>
        {/* Optional subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-0"></div>
       
        
        <div className="flex flex-col md:flex-row h-full">
          {/* Left content */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 relative z-10 flex flex-col justify-center text-left">
            <motion.div 
              variants={slideInFromTop}
              className="Welcome-box py-2 px-4 border border-[#7042f88b] bg-[#7042f80d] rounded-full opacity-90 text-center inline-flex items-center mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(112,66,248,0.15)] w-fit"
            >
              <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5 animate-pulse" />
              <h1 className="Welcome-text text-sm font-medium tracking-wide animated-gradient-text">
                Fullstack Digital Agency
              </h1>
            </motion.div>

            <motion.h1 
              variants={slideInFromLeft(0.5)} 
              className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 sm:mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span className="block mb-3 hero-violet-gradient">CREATING</span>
              <span className="block"><span className="animated-gradient-text">Culture-Driven</span> <span className="hero-violet-gradient">BRANDS</span></span>
            </motion.h1>

            <motion.p 
              variants={slideInFromRight(0.7)} 
              className="relative z-10 mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed font-light"
            >
              We craft digital experiences that captivate audiences, drive conversions, and elevate your brand story. Partner with us to transform your vision into digital reality.
            </motion.p>

            <motion.div variants={slideInFromBottom(0.6)} className="relative z-10 mt-10">
              <AnimatedButton 
                href="#BookingForm"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm"
              >
                Book A Call
              </AnimatedButton>
            </motion.div>
          </div>

          {/* Right content - 3D Model */}
          <motion.div 
            variants={slideInFromRight(0.5)}
            className="hidden md:block w-full md:w-1/2 relative"
          >
            <div className="absolute inset-0 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] -bottom-[50px] sm:-bottom-[75px] md:-bottom-[100px]">
            <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.94/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/RhRh3ZZVHM3nlu5z/scene.splinecode"></spline-viewer>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

// Simple error boundary component to handle 3D model loading failures
class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Spline component failed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default HeroContent;
