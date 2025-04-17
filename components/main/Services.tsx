"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import AnimatedHeading from "../ui/animated-heading";
import { projects } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div 
      id="Services" 
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden px-4 sm:px-6"
      ref={containerRef}
      style={{ opacity, y }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-orange-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.div 
            className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full border border-[#7042f88b] bg-black/20 backdrop-blur-sm mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <SparklesIcon className="text-[#b49bff] h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
            <AnimatedHeading as="h3" className="text-xs sm:text-sm font-medium">
              Think Better With Us
            </AnimatedHeading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedHeading as="h1" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Streamline your business with our services
            </AnimatedHeading>
          </motion.div>
          
          <motion.p
            className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            From website design to social media management, we offer a wide range of services 
            to help you grow your business and achieve your goals.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden group hover:border-orange-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                scale: 1.02
              }}
            >
              <div className="p-4 sm:p-6">
                <motion.div 
                  className="mb-3 sm:mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  {service.description}
                </p>
                
                <motion.div 
                  className="mt-4 sm:mt-6 flex items-center text-orange-500 font-medium text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, x: 5 }}
                >
                  Learn more
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
              
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-600/20 via-purple-600/20 to-blue-600/20 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-10 sm:mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button 
            className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white text-sm sm:text-base font-medium rounded-full hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
