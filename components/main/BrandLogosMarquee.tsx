"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import AnimatedHeading from "../ui/animated-heading";
import { slideInFromBottom } from "@/utils/motion";
import { Highlighter } from "../magicui/highlighter";

const BrandLogos = {
  bombayShaving: () => (
    <div className="relative h-20 w-48 flex items-center justify-center group">
      <Image
        src="/Bombay Shaving Company.png"
        alt="Bombay Shaving Company"
        width={200}
        height={80}
        className="h-auto w-auto max-h-20 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  ),
  domina: () => (
    <div className="relative h-20 w-32 flex items-center justify-center group">
      <Image
        src="/DOMINA logo.png"
        alt="DOMINA"
        width={128}
        height={80}
        className="h-auto w-auto max-h-20 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  ),
  philips: () => (
    <div className="relative h-20 w-32 flex items-center justify-center group">
      <Image
        src="/Philips.png"
        alt="Philips"
        width={128}
        height={80}
        className="h-auto w-auto max-h-20 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  ),
  vka: () => (
    <div className="relative h-20 w-32 flex items-center justify-center group">
      <Image
        src="/VKA logo.png"
        alt="VKA"
        width={128}
        height={80}
        className="h-auto w-auto max-h-20 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  ),
};

export default function BrandLogosMarquee() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const logos = [BrandLogos.bombayShaving, BrandLogos.domina, BrandLogos.philips, BrandLogos.vka];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] text-center mx-auto inline-flex items-center"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Our Partners</h1>
          </motion.div>
          
          
          
          
        </div>

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Background gradient for marquee */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent rounded-2xl"></div>
          
          <Marquee className="py-8" pauseOnHover={true}>
            {logos.map((Logo, index) => (
              <div
                key={index}
                className="relative h-full w-fit mx-12 flex items-center justify-center"
              >
                <Logo />
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
