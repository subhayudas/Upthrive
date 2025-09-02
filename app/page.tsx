import Hero from "@/components/main/Hero";
import BrandLogosMarquee from "@/components/main/BrandLogosMarquee";
import ImageTrailSection from "@/components/main/ImageTrailSection";
import Projects from "@/components/main/Projects";
import Services from "@/components/main/Services";
import Portfolio from "@/components/main/Portfolio";
import TestimonialSlider from "@/components/main/TestimonialSlider";
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

// Import the BookingForm component at the top of your file
import BookingForm from '@/components/main/BookingForm';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        {/* Hero section - no border needed as it's the first section */}
        <Hero />
        
        {/* Brand Logos Marquee with top border */}
        <div className="border-t border-white/20">
          <BrandLogosMarquee />
        </div>
        
        {/* Image Trail Section */}
        <div className="border-t border-white/20">
          <ImageTrailSection />
        </div>
        
        {/* Services Section */}
        <div className="border-t border-white/20">
          <Services />
        </div>
        
        {/* Testimonial Slider */}
        <div className="border-t border-white/20">
          <TestimonialSlider />
        </div>
        
        {/* Macbook Demo */}
        <div className="border-t border-white/20">
          <MacbookDemo />
        </div>
        
        {/* Approach Section */}
        <div className="border-t border-white/20">
          <Approach />
        </div>
        
        {/* Terminal Demo */}
        <div className="border-t border-white/20">
          <TerminalDemo />
        </div>
        
        {/* Statistics */}
        <div className="border-t border-white/20">
          <Statistics />
        </div>
        
        {/* Process Timeline */}
        <div className="border-t border-white/20">
          <ProcessTimeline />
        </div>
        
        {/* Team Section */}
        <div className="border-t border-white/20">
          <TeamSection />
        </div>
        
        {/* Call to Action */}
        <div className="border-t border-white/20">
          <CallToAction />
        </div>
        
        {/* Booking Form */}
        <div className="border-t border-white/20">
          <BookingForm />
        </div>
      </div>
    </main>
  );
}
