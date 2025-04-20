"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    // Progress counter animation
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setProgress(count);
      if (count >= 100) {
        clearInterval(interval);
      }
    }, 30);

    // Glow animation
    const glowInterval = setInterval(() => {
      setGlowIntensity(prev => (prev + 0.1) % 1);
    }, 50);

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
          className="transition-all duration-[1450ms] ease-in-out fixed top-0 left-0 w-full h-full z-50 bg-gradient-to-b from-[#0b0b0b] to-[#121212] flex flex-col justify-center items-start md:items-start md:justify-start md:pt-[20vh] md:px-[6.5vw] overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          </div>

          {/* Progress counter with enhanced styling and layout */}
          <div className="line relative z-10" id="line1">
            <motion.div 
              id="progress"
              className="flex items-center mb-6 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-1">
                <motion.h5 
                  className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600"
                  animate={{ 
                    textShadow: [
                      '0 0 8px rgba(249, 115, 22, 0.5)',
                      '0 0 20px rgba(249, 115, 22, 0.7)',
                      '0 0 8px rgba(249, 115, 22, 0.5)'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {progress.toString().padStart(2, '0')}
                </motion.h5>
                <span className="text-orange-300/80 font-medium text-xl">/</span>
                <span className="text-orange-300/80 font-medium text-xl">100</span>
              </div>
              
              {/* Progress bar - enhanced */}
              <div className="ml-6 w-32 h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-orange-500/20">
                <motion.div 
                  className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"
                  style={{ width: `${progress}%` }}
                  initial={{ width: 0 }}
                  animate={{
                    boxShadow: [
                      '0 0 5px rgba(249, 115, 22, 0.5)',
                      '0 0 10px rgba(249, 115, 22, 0.7)',
                      '0 0 5px rgba(249, 115, 22, 0.5)'
                    ]
                  }}
                  transition={{ boxShadow: { duration: 1.5, repeat: Infinity } }}
                />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100 relative"
              style={{
                textShadow: `0 0 ${10 + glowIntensity * 15}px rgba(249, 115, 22, ${0.3 + glowIntensity * 0.3})`
              }}
            >
              You are
            </motion.h1>
          </div>
          
          <div className="line relative z-10" id="line2">
            <motion.h1 
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-orange-300 relative"
              style={{
                textShadow: `0 0 ${10 + glowIntensity * 15}px rgba(249, 115, 22, ${0.3 + glowIntensity * 0.3})`
              }}
            >
              One step away from
            </motion.h1>
          </div>
          
          <div className="line relative z-10" id="line3">
            <motion.h1 
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-5xl md:text-6xl font-bold relative"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500"
                style={{
                  textShadow: `0 0 ${10 + glowIntensity * 15}px rgba(249, 115, 22, ${0.3 + glowIntensity * 0.3})`
                }}
              >your </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600"
                style={{
                  textShadow: `0 0 ${10 + glowIntensity * 15}px rgba(249, 115, 22, ${0.3 + glowIntensity * 0.3})`
                }}
              >Dream br</span>
              <motion.span 
                id="flash" 
                className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(249, 115, 22, 0.7)',
                    '0 0 20px rgba(249, 115, 22, 0.9)',
                    '0 0 10px rgba(249, 115, 22, 0.7)'
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{
                  textShadow: `0 0 ${15 + glowIntensity * 20}px rgba(249, 115, 22, ${0.5 + glowIntensity * 0.4})`
                }}
              >and</motion.span>
            </motion.h1>
          </div>

          <motion.div 
            id="wait-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="w-full text-center mt-12 relative z-10"
          >
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
