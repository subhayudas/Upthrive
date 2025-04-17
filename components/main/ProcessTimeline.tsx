"use client";

import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import AnimatedHeading from "../ui/animated-heading";
import { Timeline } from "../ui/timeline";

const ProcessTimeline = () => {
  const processData = [
    {
      title: "Discovery",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-gray-300">
            We start by understanding your business goals, target audience, and current digital presence to create a tailored strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-blue-500 to-indigo-600 inline-block rounded-lg p-2 mb-3">
                🔍
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Research & Analysis</h4>
              <p className="text-gray-300 text-sm">Comprehensive analysis of your market position and digital footprint</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-blue-500 to-indigo-600 inline-block rounded-lg p-2 mb-3">
                👥
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Audience Mapping</h4>
              <p className="text-gray-300 text-sm">Identifying your ideal customers and their digital behaviors</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Strategy",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-gray-300">
            Our team develops a comprehensive digital strategy aligned with your business objectives and market opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-purple-500 to-violet-600 inline-block rounded-lg p-2 mb-3">
                📝
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Strategic Planning</h4>
              <p className="text-gray-300 text-sm">Developing actionable roadmaps for digital transformation</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-purple-500 to-violet-600 inline-block rounded-lg p-2 mb-3">
                🎯
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Goal Setting</h4>
              <p className="text-gray-300 text-sm">Establishing measurable objectives and KPIs for your digital presence</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Design",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-gray-300">
            We create stunning visuals and user experiences that captivate your audience and strengthen your brand identity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-pink-500 to-rose-600 inline-block rounded-lg p-2 mb-3">
                🎨
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Visual Design</h4>
              <p className="text-gray-300 text-sm">Creating compelling visuals that align with your brand identity</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-pink-500 to-rose-600 inline-block rounded-lg p-2 mb-3">
                📱
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">UX/UI Design</h4>
              <p className="text-gray-300 text-sm">Designing intuitive user interfaces for optimal user experience</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-gray-300">
            Our developers bring designs to life with clean, efficient code that ensures optimal performance across all devices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-green-500 to-emerald-600 inline-block rounded-lg p-2 mb-3">
                💻
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Frontend Development</h4>
              <p className="text-gray-300 text-sm">Building responsive, interactive user interfaces with modern technologies</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-green-500 to-emerald-600 inline-block rounded-lg p-2 mb-3">
                ⚙️
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Backend Development</h4>
              <p className="text-gray-300 text-sm">Creating robust server-side solutions for seamless functionality</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Launch",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-gray-300">
            We meticulously test and deploy your digital assets, ensuring a smooth and successful launch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-orange-500 to-amber-600 inline-block rounded-lg p-2 mb-3">
                🧪
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Testing & QA</h4>
              <p className="text-gray-300 text-sm">Comprehensive testing across devices and platforms to ensure flawless performance</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-orange-500 to-amber-600 inline-block rounded-lg p-2 mb-3">
                🚀
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Deployment</h4>
              <p className="text-gray-300 text-sm">Smooth deployment with minimal downtime and maximum impact</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Growth",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-gray-300">
            Post-launch, we continuously optimize your digital presence to drive sustained growth and maximize ROI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-cyan-500 to-blue-600 inline-block rounded-lg p-2 mb-3">
                📈
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Analytics & Optimization</h4>
              <p className="text-gray-300 text-sm">Data-driven improvements based on user behavior and performance metrics</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-3xl bg-gradient-to-br from-cyan-500 to-blue-600 inline-block rounded-lg p-2 mb-3">
                🔄
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Continuous Improvement</h4>
              <p className="text-gray-300 text-sm">Ongoing updates and enhancements to keep your digital presence ahead of the curve</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] text-center mx-auto inline-flex items-center">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Our Process</h1>
          </div>
          
          <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-bold">
            How We Deliver Excellence
          </AnimatedHeading>
          
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Our proven six-step process ensures consistent, high-quality results for every project.
          </p>
        </div>
        
        <div className="relative w-full overflow-clip">
          <Timeline data={processData} />
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
