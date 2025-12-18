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
      className="overflow-hidden w-full relative"
      ref={containerRef}
    >
      <motion.div
        variants={slideInFromBottom(0.4)}
        className="relative z-5"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <MacbookScroll
            title={
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
               
              </motion.div>
            }
            src="/macssdark.png"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}