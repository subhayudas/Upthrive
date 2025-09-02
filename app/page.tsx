import Hero from "@/components/main/Hero";
import BrandLogosMarquee from "@/components/main/BrandLogosMarquee";
import ImageTrailSection from "@/components/main/ImageTrailSection";
import Projects from "@/components/main/Projects";
import Services from "@/components/main/Services";
import Portfolio from "@/components/main/Portfolio";
import TestimonialSlider from "@/components/main/TestimonialSlider";
import { ZoomParallax } from "@/components/main/ZoomParallax";
import FAQSection from "@/components/main/FAQSection";
import ContactForm from "@/components/main/ContactForm";
import AboutUs from "@/components/main/AboutUs";
import Approach from "@/components/main/Approach";
import ChooseUs from "@/components/main/ChooseUs";
import TerminalDemo from "@/components/main/TerminalDemo";
import MacbookDemo from "@/components/main/MacbookDemo";
import FeatureShowcase from "@/components/main/FeatureShowcase";
import Statistics from "@/components/main/Statistics";
import ProcessTimeline from "@/components/main/ProcessTimeline";
import TeamSection from "@/components/main/TeamSection";
import CallToAction from "@/components/main/CallToAction";
import ContentMarketingCards from "@/components/main/ContentMarketingCards";

// Import the BookingForm component at the top of your file
import BookingForm from '@/components/main/BookingForm';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        {/* Hero section - no border needed as it's the first section */}
        <Hero />
        
        {/* Brand Logos Marquee with top border */}
        <div className="border-t border-white">
          <BrandLogosMarquee />
        </div>
        
        {/* Image Trail Section */}
        <div className="border-t border-white">
          <ImageTrailSection />
        </div>
        
        {/* Services Section */}
        <div className="border-t border-white">
          <Services />
        </div>
        
        {/* Content Marketing Cards Section */}
        <div className="border-t border-white">
          <ContentMarketingCards />
        </div>
        
        {/* Testimonial Slider */}
        <div className="border-t border-white">
          <TestimonialSlider />
        </div>
        
        {/* Zoom Parallax Section */}
        <div className="border-t border-white">
          <ZoomParallax 
            images={[
              { src: "/imagezoom5.jpeg", alt: "Zoom Image 5" },
              { src: "/imagezoom2.jpeg", alt: "Zoom Image 2" },
              { src: "/imagezoom3.jpeg", alt: "Zoom Image 3" },
              { src: "/imagezoom4.jpeg", alt: "Zoom Image 4" },
              { src: "/imagezoom1.jpeg", alt: "Zoom Image 1" },
              { src: "/imagezoom6.jpeg", alt: "Zoom Image 6" },
              { src: "/imagezoom7.jpeg", alt: "Zoom Image 7" }
            ]} 
          />
        </div>
        
        {/* Macbook Demo */}
        <div className="border-t border-white">
          <MacbookDemo />
        </div>
        
        {/* Approach Section */}
        <div className="border-t border-white">
          <Approach />
        </div>
        
        {/* Terminal Demo */}
        <div className="border-t border-white">
          <TerminalDemo />
        </div>
        
        {/* Statistics */}
        <div className="border-t border-white">
          <Statistics />
        </div>
        
        {/* Process Timeline */}
        <div className="border-t border-white">
          <ProcessTimeline />
        </div>
        
        {/* Team Section */}
        <div className="border-t border-white">
          <TeamSection />
        </div>
        
        {/* Call to Action */}
        <div className="border-t border-white">
          <CallToAction />
        </div>
        
        {/* Booking Form */}
        <div className="border-t border-white">
          <BookingForm />
        </div>
      </div>
    </main>
  );
}
