"use client";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import AnimatedHeading from "../ui/animated-heading";
import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialCard = ({ name, role, content, image }: TestimonialProps) => {
  return (
    <div
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6 mx-2",
        // Dark theme styling for Upthrive
        "border-gray-800 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300",
        "backdrop-blur-sm shadow-lg hover:shadow-xl"
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-4">
        <img 
          className="w-12 h-12 rounded-full border-2 border-gray-700 object-cover" 
          src={image} 
          alt={name} 
        />
        <div className="flex flex-col">
          <AnimatedHeading as="h3" className="text-lg font-semibold text-white">
            {name}
          </AnimatedHeading>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <blockquote className="text-gray-300 text-sm leading-relaxed">
        "{content}"
      </blockquote>
    </div>
  );
};

const TestimonialSlider = () => {
  // Testimonial data extracted from the previous implementation
  const testimonials = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Medical Director",
      content: "Upthrive has transformed our clinic's online presence with their exceptional Content Marketing services. Our brand now speaks volumes, thanks to their strategic approach and creative content!",
      image: "https://pbs.twimg.com/profile_images/1608505649662681088/Zj3txNWo_400x400.jpg"
    },
    {
      name: "Vikram Mehta",
      role: "CEO of TechVista Solutions",
      content: "Web Development excellence at its best! Upthrive delivered a website that not only looks stunning but also functions flawlessly. Their expertise in creating user-friendly interfaces is truly commendable.",
      image: "https://pbs.twimg.com/profile_images/1721809225423454208/A8u6cEtT_400x400.jpg"
    },
    {
      name: "Priya Patel",
      role: "Founder of Spice Delight",
      content: "Upthrive's Graphic Design team turned our ideas into visually stunning realities. The creativity and professionalism they brought to our marketing collateral were beyond our expectations.",
      image: "https://pbs.twimg.com/profile_images/1754745467387232256/MsY_M5wL_400x400.jpg"
    },
    {
      name: "Arjun Reddy",
      role: "CEO of Zenith Innovations",
      content: "Upthrive's Web Development expertise is unparalleled. They not only built a website that reflects our brand identity but also ensured it is responsive and user-friendly. A top-notch service!",
      image: "https://pbs.twimg.com/profile_images/1670905743619268609/pYItlWat_400x400.jpg"
    },
    {
      name: "Ravi Agrawal",
      role: "Owner of Spice Junction",
      content: "Choosing Upthrive for Content Marketing was a game-changer for our restaurant. Their strategic approach and engaging content helped us build a strong online presence and connect with our target audience effectively.",
      image: "https://pbs.twimg.com/profile_images/1669663135417110528/p8fRLHNR_400x400.jpg"
    },
    {
      name: "Anand Verma",
      role: "Director of Bharat Textiles",
      content: "Upthrive's Graphic Design team has the Midas touch! Our marketing materials now have a modern and polished look, thanks to their creativity and attention to detail. Highly recommended!",
      image: "https://pbs.twimg.com/profile_images/1733406256105177088/VboDuWfl_400x400.jpg"
    },
    {
      name: "Neha Kapoor",
      role: "Owner of Fashion Bazaar",
      content: "Upthrive's Video Editing added dynamism to our campaigns, creating compelling stories that resonated with our audience. Our sales have increased significantly since working with them.",
      image: "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
    },
    {
      name: "Suresh Malhotra",
      role: "Director at Skyline Properties",
      content: "Upthrive's Web Development team built us a top-notch website - modern, responsive, and user-friendly. Our property listings have never looked better!",
      image: "https://pbs.twimg.com/profile_images/1724687865471455232/-rc2ShfE_400x400.jpg"
    },
    {
      name: "Amit Joshi",
      role: "Founder of Fintech Solutions",
      content: "Upthrive delivered awesome work for our financial services platform. Their attention to detail and technical expertise is unmatched in the industry.",
      image: "https://pbs.twimg.com/profile_images/1689012008472195072/lSKb0P7X_400x400.jpg"
    },
    {
      name: "Deepak Gupta",
      role: "CEO of DigiMarket Agency",
      content: "Upthrive's Graphic Design team turned our ideas into visually stunning realities. The creativity and professionalism they brought to our marketing collateral were beyond our expectations.",
      image: "https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
    },
    {
      name: "Meera Singhania",
      role: "Director of Lotus Innovations",
      content: "Upthrive's Content Marketing services are strategic, engaging, and effective. Our online presence has never been stronger, and we're seeing real business results.",
      image: "https://pbs.twimg.com/profile_images/1250275834444701704/9L7QwQCq_400x400.jpg"
    },
    {
      name: "Rahul Khanna",
      role: "CTO of Bharat Digital",
      content: "Super work by the Upthrive team! I'm thoroughly satisfied with their attention to detail and commitment to excellence. Would recommend to anyone looking for digital services.",
      image: "https://pbs.twimg.com/profile_images/1259558245/vala_300dpi_400x400.jpg"
    }
  ];

  // Split testimonials into two rows for more dynamic display
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section id="testimonial" className="bg-transparent py-20">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 md:mb-16 text-center">
            <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] text-center mx-auto inline-flex items-center">
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <AnimatedHeading as="h1" className="Welcome-text text-[13px]">Words from Others</AnimatedHeading>
            </div>
            <AnimatedHeading as="h1" className="mb-5 text-5xl font-semibold text-center md:text-5xl">
              It&apos;s not just us.
            </AnimatedHeading>
            <p className="text-xl text-gray-100 text-center md:text-2xl max-w-3xl mx-auto">
              Here&apos;s what others have to say about us.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Testimonials */}
      <div className="relative flex flex-col gap-6 overflow-hidden">
        {/* First row - moving right to left */}
        <Marquee 
          pauseOnHover 
          className="[--duration:60s]"
        >
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={`first-${index}`} {...testimonial} />
          ))}
        </Marquee>
        
        {/* Second row - moving left to right */}
        <Marquee 
          reverse 
          pauseOnHover 
          className="[--duration:50s]"
        >
          {secondRow.map((testimonial, index) => (
            <TestimonialCard key={`second-${index}`} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialSlider;
