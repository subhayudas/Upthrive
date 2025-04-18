"use client";
import React, { useRef } from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from "@/utils/motion";

export default function MacbookDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="overflow-hidden w-full py-24 relative" 
      ref={containerRef}
    > 
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent opacity-50 pointer-events-none"></div>
      
      <motion.div 
        variants={slideInFromTop}
        className="text-center mb-12 px-4"
      >
        <motion.div 
          variants={slideInFromTop}
          className="Welcome-box py-2 px-4 border border-[#7042f88b] bg-[#7042f80d] rounded-full opacity-90 text-center inline-flex items-center mx-auto mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(112,66,248,0.15)]"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-sm font-medium tracking-wide animated-gradient-text">
            Crafting Digital Excellence
          </h1>
        </motion.div>
        
        <motion.h2 
          variants={slideInFromBottom(0.2)}
          className="font-bold text-4xl md:text-6xl animated-gradient-text mb-3 tracking-tight"
        >
          See Our Work In Action
        </motion.h2>
        
        <motion.p
          variants={slideInFromBottom(0.3)}
          className="max-w-2xl mx-auto text-gray-400 text-lg mb-8 animated-gradient-text"
        >
          Explore our portfolio of stunning digital experiences that combine beautiful design with powerful functionality
        </motion.p>
      </motion.div>
      
      <motion.div
        variants={slideInFromBottom(0.4)}
        className="relative z-10"
      >
        <MacbookScroll
          title={
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-center text-3xl font-bold animated-gradient-text">
                Stunning websites that drive results
              </span>
              <span className="text-center text-xl animated-gradient-text max-w-2xl">
                Built with modern technologies for exceptional user experience
              </span>
            </motion.div>
          }
          src="/macssdark.png"
          showGradient={true}
        />
      </motion.div>
    </motion.div>
  );
}