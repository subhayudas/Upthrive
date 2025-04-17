"use client";

import React from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";
import { SparklesIcon } from "@heroicons/react/24/solid";

const TerminalDemo = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div className="font-bold text-4xl pb-5 md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 bg-opacity-50 mb-10">
        <div className="Welcome-box py-[8px] px-[7px] sm:py-2 sm:px2 border border-[#7042f88b] opacity-[0.9] text-center mx-auto">
          <SparklesIcon className="text-[#b49bff] mr-[10px] sm:mr-1 h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-xs">
            Modern Solutions
          </h1>
        </div>
        Cutting-Edge Technology
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto mb-10">
        We leverage the latest technologies to deliver exceptional digital experiences for your business.
      </p>
      
      <div className="flex justify-center">
        <Terminal className="shadow-lg shadow-orange-500/20 border-orange-500/30">
          <AnimatedSpan delay={500} className="text-green-400">
            $ Welcome to Upthrive Digital Solutions
          </AnimatedSpan>
          
          <div className="flex">
            <span className="text-blue-400">$ </span>
            <TypingAnimation 
              delay={1000} 
              duration={40} 
              className="text-white"
            >
              We specialize in creating stunning websites and digital experiences
            </TypingAnimation>
          </div>
          
          <div className="flex">
            <span className="text-blue-400">$ </span>
            <TypingAnimation 
              delay={3500} 
              duration={40} 
              className="text-white"
            >
              Our services include web design, SEO, social media marketing, and more
            </TypingAnimation>
          </div>
          
          <div className="flex">
            <span className="text-blue-400">$ </span>
            <TypingAnimation 
              delay={6500} 
              duration={40} 
              className="text-white"
            >
              Let's transform your digital presence together!
            </TypingAnimation>
          </div>
          
          <AnimatedSpan delay={9500} className="text-yellow-400 mt-4">
            $ Ready to get started? Contact us today!
          </AnimatedSpan>
        </Terminal>
      </div>
    </div>
  );
};

export default TerminalDemo;