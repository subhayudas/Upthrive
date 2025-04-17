import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function MacbookDemo() {
  return (
    <div className="overflow-hidden w-full mt-16 mb-32"> 
      <div className="text-center">
        <div className="Welcome-box py-[8px] px-[7px] sm:py-2 sm:px2 border border-[#7042f88b] opacity-[0.9] text-center mx-auto mb-3">
          <SparklesIcon className="text-[#b49bff] mr-[10px] sm:mr-1 h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-xs">
            Crafting Digital Excellence
          </h1>
        </div>
        <h2 className="font-bold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 mb-1">
          See Our Work In Action
        </h2>
      </div>
      
      <MacbookScroll
        title={
          <div className="flex flex-col items-center gap-1">
            <span className="text-center text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Stunning websites that drive results
            </span>
            <span className="text-center text-xl text-gray-300">
              Built with modern technologies for exceptional user experience
            </span>
          </div>
        }
        src="/macss.png"
        showGradient={true}
      />
    </div>
  );
}