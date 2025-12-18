"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { ShimmerButton } from "../ui/shimmer-button";

const CallToAction = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  const handleBookCall = () => {
    const bookingSection = document.getElementById('BookingForm');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactUs = () => {
    const contactSection = document.getElementById('ContactForm');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-24 overflow-hidden" ref={containerRef}>
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          filter: 'brightness(0.3) contrast(1.2)',
        }}
      >
        <source src="/herobackground.mp4" type="video/mp4" />
      </video>
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 via-transparent to-amber-900/20 z-15"></div>
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center py-2 px-4 border border-white/20 bg-black/20 backdrop-blur-md rounded-full mb-8 shadow-lg"
          >
            <SparklesIcon className="text-amber-400 mr-2 h-4 w-4" />
            <span className="text-xs font-medium tracking-wider text-white/90 uppercase font-questrial">
              Ready to Transform?
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={scaleVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white mb-8 font-helvetica-neue tracking-tight"
          >
            <span className="block font-light">LET'S BUILD</span>
            <span className="block">
              <span className="font-medium italic text-amber-400">Something</span>
              <span className="font-light"> EXTRAORDINARY</span>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12 font-questrial"
          >
            Ready to elevate your digital presence? Join the ranks of successful businesses 
            who have transformed their growth trajectory with our innovative solutions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShimmerButton
                onClick={handleBookCall}
                background="linear-gradient(45deg, #f59e0b, #d97706)"
                shimmerColor="#ffffff"
                borderRadius="50px"
                shimmerDuration="2s"
                className="text-white font-medium text-base px-8 py-4 shadow-xl hover:shadow-amber-500/25 transition-all duration-300 font-questrial"
              >
                <span className="flex items-center">
                  Book Your Free Strategy Call
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </ShimmerButton>
            </motion.div>

            {/* Secondary CTA */}
            <motion.button
              onClick={handleContactUs}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-full backdrop-blur-md hover:border-amber-400/50 transition-all duration-300 font-questrial"
            >
              View Our Portfolio
            </motion.button>
          </motion.div>

          {/* Trust Indicators removed as per design request */}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;