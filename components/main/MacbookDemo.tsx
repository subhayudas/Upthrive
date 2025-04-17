import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function MacbookDemo() {
  return (
    // Reduced top margin from my-32 to mt-16
    <div className="overflow-hidden w-full mt-16 mb-32"> 
      <div className="font-bold text-4xl pb-5 md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 bg-opacity-50 mb-10">
        <div className="Welcome-box py-[8px] px-[7px] sm:py-2 sm:px2 border border-[#7042f88b] opacity-[0.9] text-center mx-auto">
          <SparklesIcon className="text-[#b49bff] mr-[10px] sm:mr-1 h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-xs">
            Crafting Digital Excellence
          </h1>
        </div>
        See Our Work In Action
      </div>
      
      <MacbookScroll
        title={
          // Added text-orange-500 class to change the color
          <span className="text-center text-3xl font-bold text-orange-500">
            Stunning websites that drive results <br /> Built with modern technologies
          </span>
        }
        src="/macss.png"
        showGradient={true}
      />
    </div>
  );
}