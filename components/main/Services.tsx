"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import AnimatedHeading from "../ui/animated-heading";
import { projects } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100]);
  
  // Animated background elements
  const bgElement1X = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgElement1Y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const bgElement2X = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const bgElement2Y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  // Text animation variants
  const headingWords = "Elevate Your Business with Our Premium Services".split(" ");
  
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + (i * 0.1),
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + (i * 0.1),
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }),
    hover: { 
      y: -15, 
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Icon animation variants
  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.3,
          ease: "easeOut"
        }
      }
    }
  };

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <motion.div 
      id="Services" 
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden px-4 sm:px-6"
      ref={containerRef}
      style={{ opacity, y }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-br from-orange-500/20 via-orange-400/10 to-transparent rounded-full blur-3xl"
          style={{ x: bgElement1X, y: bgElement1Y }}
          
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-[30rem] h-64 sm:h-80 md:h-[30rem] bg-gradient-to-tl from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
          style={{ x: bgElement2X, y: bgElement2Y }}
          
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header with animated text */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div 
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#7042f88b] bg-black/30 backdrop-blur-md mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <SparklesIcon className="text-[#b49bff] h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 animate-pulse" />
            <AnimatedHeading as="h3" className="text-sm sm:text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Innovative Solutions for Modern Businesses
            </AnimatedHeading>
          </motion.div>
          
          <div className="overflow-hidden">
            <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 mb-4 sm:mb-6">
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                  custom={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto px-2 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          >
            Discover our comprehensive suite of professional services designed to transform 
            your digital presence and accelerate your business growth in today's competitive landscape.
          </motion.p>
        </div>

        {/* Services Grid with enhanced animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((service, index) => (
            <motion.div
              key={service.title}
              className={`relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group cursor-pointer ${hoveredIndex === index ? 'z-10' : 'z-0'}`}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
              layoutId={`service-card-${index}`}
            >
              {/* Card inner content with enhanced animations */}
              <div className="p-6 sm:p-8 relative z-10">
                <motion.div 
                  className="mb-5 sm:mb-6 relative"
                  variants={iconVariants}
                >
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-70 blur-md"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative bg-gradient-to-br from-gray-900 to-black p-4 rounded-full border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    {service.icon}
                  </div>
                </motion.div>
                
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-orange-400 group-hover:to-orange-200 transition-all duration-300"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-sm sm:text-base text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.description}
                </motion.p>
                
                <motion.div 
                  className="mt-6 sm:mt-8 flex items-center text-orange-500 font-medium text-sm sm:text-base"
                  initial={{ opacity: 0.6, x: 0 }}
                  whileHover={{ opacity: 1, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
              
              {/* Enhanced hover effects */}
              <motion.div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-purple-600/10 to-blue-600/10" />
                <motion.div 
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,50,0.2),transparent_70%)]" 
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    transition: { duration: 4, repeat: Infinity }
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-500/20 to-transparent" />
              </motion.div>
              
              {/* Animated border glow */}
              <motion.div 
                className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-transparent [background:linear-gradient(to_right,#000_0%,#000_100%)_padding-box,linear-gradient(to_right,#ff8c32_0%,#a855f7_50%,#3b82f6_100%)_border-box] z-10" />
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Call to action */}
        <motion.div 
          className="mt-16 sm:mt-20 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <motion.button 
            className="relative px-8 sm:px-10 py-3 sm:py-4 text-white text-sm sm:text-base font-medium rounded-full overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Get Started Today</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700"
              animate={{
                background: [
                  'linear-gradient(to right, #f97316, #ea580c, #c2410c)',
                  'linear-gradient(to right, #c2410c, #f97316, #ea580c)',
                  'linear-gradient(to right, #ea580c, #c2410c, #f97316)'
                ],
                transition: { duration: 3, repeat: Infinity }
              }}
            />
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 blur-md" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for expanded service view */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden max-w-3xl w-full p-6 sm:p-8"
              layoutId={`service-card-${selectedService}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                <motion.div className="sm:w-1/3">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-white/10">
                    {projects[selectedService].icon}
                  </div>
                </motion.div>
                <div className="sm:w-2/3">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                    {projects[selectedService].title}
                  </h2>
                  <p className="text-neutral-300 mb-6">
                    {projects[selectedService].description}
                  </p>
                  <div className="space-y-4">
                    <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                      <h3 className="text-lg font-medium text-orange-400 mb-2">Key Benefits</h3>
                      <ul className="list-disc list-inside text-neutral-300 space-y-1">
                        <li>Enhanced user engagement and conversion rates</li>
                        <li>Professional and consistent brand representation</li>
                        <li>Cutting-edge solutions tailored to your needs</li>
                      </ul>
                    </div>
                    <motion.button 
                      className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request a Quote
                    </motion.button>
                  </div>
                </div>
              </div>
              <button 
                className="absolute top-4 right-4 text-white/80 hover:text-white"
                onClick={() => setSelectedService(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;
