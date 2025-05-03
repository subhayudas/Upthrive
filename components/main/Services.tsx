"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import AnimatedHeading from "../ui/animated-heading";
import { projects } from "./snippets/card-hover-effect-snippet";
import Image from "next/image";

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

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
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

        {/* Services Grid with enhanced animations and images */}
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
              {/* Service Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  variants={imageVariants}
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </motion.div>
              </div>

              {/* Card inner content with enhanced animations */}
              <div className="p-6 sm:p-8 relative z-10">
                <motion.div 
                  className="mb-5 sm:mb-6 relative -mt-12"
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
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-sm sm:text-base text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.description}
                </motion.p>
                
                <motion.div 
                  className="mt-6 sm:mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-flex items-center text-sm font-medium text-orange-400 group-hover:text-orange-300">
                    Learn more
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.div>
              </div>
              
              {/* Animated gradient border on hover */}
              <motion.div 
                className="absolute inset-0 border-2 border-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1,
                  background: "linear-gradient(to right, rgba(249, 115, 22, 0.2), rgba(168, 85, 247, 0.2)) border-box",
                  borderColor: "transparent"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Expanded service view when selected */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              layoutId={`service-card-${selectedService}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
              />
              
              <motion.div 
                className="relative bg-gradient-to-br from-gray-900 to-black/95 border border-white/10 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Service Image in modal */}
                <div className="relative w-full h-64 sm:h-80">
                  <Image
                    src={projects[selectedService].imageUrl}
                    alt={projects[selectedService].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                  
                  <button 
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(null);
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-white/10 mr-4">
                      {projects[selectedService].icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {projects[selectedService].title}
                    </h3>
                  </div>
                  
                  <p className="text-base sm:text-lg text-neutral-300 mb-6">
                    {projects[selectedService].description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-white">What we offer:</h4>
                    <ul className="space-y-3 text-neutral-300">
                      {[...Array(4)].map((_, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>
                            {i === 0 && "Custom tailored solutions designed specifically for your business needs"}
                            {i === 1 && "Expert team with years of industry experience and proven results"}
                            {i === 2 && "Ongoing support and maintenance to ensure lasting success"}
                            {i === 3 && "Competitive pricing with flexible packages to fit your budget"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <button className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                      Get Started
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Services;
