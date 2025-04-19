import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Services from "@/components/main/Services";
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
import CallToAction from "@/components/main/CallToAction";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Services />
        <TestimonialSlider />
        <MacbookDemo />
        <Approach />
        <TerminalDemo />
        
        <Statistics />
        <ProcessTimeline />
        <CallToAction />
      </div>
    </main>
  );
}
