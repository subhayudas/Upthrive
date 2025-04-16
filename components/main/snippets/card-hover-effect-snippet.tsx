import { HoverEffect } from "@/components/sub/card-hover-effect";
import { PiChartLineUp, PiImage, PiVideoCamera, PiMagnifyingGlass, PiCode, PiLightbulb } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-2">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiCode className="w-8 h-8 text-orange-600" /></div>,
    title: "Website Design",
    description: "Crafting visually stunning and highly functional websites tailored to your brand. We ensure seamless responsiveness across all devices to captivate your audience and drive conversion.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiChartLineUp className="w-8 h-8 text-orange-600" /></div>,
    title: "Social Media Marketing",
    description: "Empower your brand's online presence with our comprehensive social media marketing strategies. From niche boutiques to expansive e-commerce platforms, we optimize your digital footprint to foster growth and engagement.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiImage className="w-8 h-8 text-orange-600" /></div>,
    title: "Graphics Design",
    description: "Elevate your brand identity with captivating graphic designs. From logos to visual content, we blend creativity with strategy to leave a lasting impression on your audience.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMagnifyingGlass className="w-8 h-8 text-orange-600" /></div>,
    title: "SEO",
    description: "Enhance your online visibility and drive organic traffic with our comprehensive SEO solutions. We optimize your digital assets to ensure maximum discoverability and sustainable growth.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full">< PiVideoCamera className="w-8 h-8 text-orange-600" /></div>,
    title: "Video Editing",
    description: "Transform your raw footage into captivating visual narratives with our expert video editing services. We blend creativity with technical prowess to deliver videos that resonate with your audience.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiLightbulb className="w-8 h-8 text-orange-600" /></div>,
    title: "Content Marketing",
    description: "Fuel your brand's growth with compelling content marketing strategies. From blog posts to multimedia campaigns, we craft engaging narratives that resonate with your audience and drive action.",
  },
  
];