"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut" 
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    },
    exit: { 
      scale: 1.2, 
      opacity: 0,
      transition: { 
        duration: 0.5,
        ease: "easeInOut" 
      }
    }
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut" 
      }
    }
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: { 
      width: "100%",
      transition: { 
        duration: 2.5,
        ease: [0.43, 0.13, 0.23, 0.96] 
      }
    }
  };

  const particleCount = 20;
  const particles = Array.from({ length: particleCount });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    // Only access window in the browser
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-[#030014]"
          variants={containerVariants}
          initial="initial"
          exit="exit"
        >
          {/* Particles */}
          {particles.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-violet-500"
              initial={{
                opacity: 0,
                x: Math.random() * (windowSize.width || 1000),
                y: Math.random() * (windowSize.height || 800),
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, Math.random() * 3 + 1, 0],
                x: Math.random() * (windowSize.width || 1000),
                y: Math.random() * (windowSize.height || 800),
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Glowing circle behind logo */}
          <motion.div
            className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* Logo */}
          <motion.div
            className="relative z-10 mb-8"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-800 shadow-[0_0_30px_rgba(112,66,248,0.6)]">
              <span className="text-4xl md:text-5xl font-bold text-white">U</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="text-center"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-2xl md:text-3xl font-light mb-2 animated-gradient-text">
              UPTHRIVE
            </h1>
            <p className="text-sm md:text-base text-white/70 mb-8">
              Creating Culture-Driven Brands
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 md:w-80 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-600 to-indigo-600"
              variants={progressVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
