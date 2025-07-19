"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    // Progress counter animation - optimized for smoother performance
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setProgress(count);
      if (count >= 100) {
        clearInterval(interval);
      }
    }, 40); // Slightly slower for smoother animation

    // Glow animation - reduced frequency for better performance
    const glowInterval = setInterval(() => {
      setGlowIntensity(prev => (prev + 0.05) % 1);
    }, 100);

    // Preloader animations timeline
    const timer3 = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => {
      clearInterval(interval);
      clearInterval(glowInterval);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: [1, 0.98, 0.9],
            y: -60,
            filter: "blur(10px)",
            transition: {
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              scale: {
                times: [0, 0.3, 1],
                ease: "easeInOut"
              }
            }
          }}
          className="transition-all duration-[1450ms] ease-in-out fixed top-0 left-0 w-full h-full z-50 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] flex flex-col justify-center items-start md:items-start md:justify-start md:pt-[20vh] md:px-[6.5vw] overflow-hidden"
          style={{ fontFamily: 'Comfortaa, sans-serif' }}
        >
          {/* Progress counter with silver/grey styling */}
          <div className="line relative z-10" id="line1">
            <motion.div 
              id="progress"
              className="flex items-center mb-6 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-1">
                <motion.h5 
                  className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-500"
                  animate={{ 
                    textShadow: [
                      '0 0 8px rgba(203, 213, 225, 0.4)',
                      '0 0 16px rgba(203, 213, 225, 0.6)',
                      '0 0 8px rgba(203, 213, 225, 0.4)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {progress.toString().padStart(2, '0')}
                </motion.h5>
                <span className="text-slate-400 font-medium text-xl">/</span>
                <span className="text-slate-400 font-medium text-xl">100</span>
              </div>
              
              {/* Progress bar - silver theme */}
              <div className="ml-6 w-32 h-3 bg-slate-800/30 rounded-full overflow-hidden backdrop-blur-sm border border-slate-600/30">
                <motion.div 
                  className="h-full bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400"
                  style={{ width: `${progress}%` }}
                  initial={{ width: 0 }}
                  animate={{
                    boxShadow: [
                      '0 0 4px rgba(203, 213, 225, 0.5)',
                      '0 0 8px rgba(203, 213, 225, 0.7)',
                      '0 0 4px rgba(203, 213, 225, 0.5)'
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    width: { duration: 0.3, ease: "easeOut" }
                  }}
                />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-200 relative font-playfair"
              style={{
                textShadow: `0 0 ${8 + glowIntensity * 12}px rgba(203, 213, 225, ${0.3 + glowIntensity * 0.2})`,
                fontFamily: 'Comfortaa, sans-serif',
                fontWeight: '600'
              }}
            >
              You are
            </motion.h1>
          </div>
          
          <div className="line relative z-10" id="line2">
            <motion.h1 
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-300 relative font-playfair"
              style={{
                textShadow: `0 0 ${8 + glowIntensity * 12}px rgba(203, 213, 225, ${0.3 + glowIntensity * 0.2})`,
                fontFamily: 'Comfortaa, sans-serif',
                fontWeight: '600'
              }}
            >
              One step away from
            </motion.h1>
          </div>
          
          <div className="line relative z-10" id="line3">
            <motion.h1 
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl md:text-6xl font-bold relative font-playfair"
              style={{ fontFamily: 'Comfortaa, sans-serif', fontWeight: '600' }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400"
                style={{
                  textShadow: `0 0 ${8 + glowIntensity * 12}px rgba(203, 213, 225, ${0.3 + glowIntensity * 0.2})`
                }}
              >your </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-500"
                style={{
                  textShadow: `0 0 ${8 + glowIntensity * 12}px rgba(203, 213, 225, ${0.3 + glowIntensity * 0.2})`
                }}
              >Dream br</span>
              <motion.span 
                id="flash" 
                className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-white"
                animate={{ 
                  textShadow: [
                    '0 0 8px rgba(255, 255, 255, 0.6)',
                    '0 0 16px rgba(255, 255, 255, 0.8)',
                    '0 0 8px rgba(255, 255, 255, 0.6)'
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  textShadow: `0 0 ${12 + glowIntensity * 15}px rgba(255, 255, 255, ${0.4 + glowIntensity * 0.3})`
                }}
              >and</motion.span>
            </motion.h1>
          </div>

          <motion.div 
            id="wait-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
            className="w-full text-center mt-12 relative z-10"
          >
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
