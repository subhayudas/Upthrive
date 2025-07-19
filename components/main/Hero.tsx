"use client";
import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="Hero">
      {/* Full-width background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          filter: 'brightness(0.8) contrast(1.1)',
        }}
        onLoadedData={(e) => {
          // Ensure video plays immediately when loaded
          e.currentTarget.play();
        }}
      >
        <source src="/herobackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Gradient overlay for better text readability and aesthetic appeal */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10"></div>
      
      {/* Additional subtle overlay for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10 z-15"></div>
      
      {/* Content overlay */}
      <div className="relative z-20 h-full">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
