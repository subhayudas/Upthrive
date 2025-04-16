import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full " id="Home">
      <div className="relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;

