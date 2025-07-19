import React from "react";
import AnimatedHeading from "../ui/animated-heading";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="bg-transprent text-white px-8 py-16 md:px-20  "
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <AnimatedHeading as="h1" className="text-4xl font-bold leading-tight mb-6">
            We Are Fullstack Marketing Agency From South Asia
          </AnimatedHeading>
          <div>
            <video
              width="95%"
              height="auto"
              playsInline
              loop
              muted
              autoPlay
              controls
              src="https://blue-official-newt-770.mypinata.cloud/ipfs/QmTcYu6JBKtxJeZMgE2eEc7Ts9cwC1DcpPfLLwtRhZgM2K/aboutvideo.mp4"
              preload="auto"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <AnimatedHeading as="h2" className="text-3xl font-bold mb-4">
            Professional Fullstack Marketing Agency to provide solutions
          </AnimatedHeading>
          <p className="mb-4">
            Welcome to Upthrive Agency, where innovation meets impact in the
            digital realm. As a Full-stack Marketing Agency, we transcend
            conventional boundaries, sculpting unique narratives that captivate
            audiences
          </p>
          <p className="mb-4">
            Our fusion of strategic prowess and technological finesse ensures
            your brand not only stands out but excels in the ever-evolving
            digital landscape. At Upthrive Agency, we are not just
            trend-followers; we are trendsetters, reshaping the marketing
            landscape with a commitment to unparalleled creativity and
            measurable results.
          </p>
          <p className="mb-6">
            Join us on a journey where your brands story becomes an immersive
            experience, leaving an indelible mark on the digital canvas. Welcome
            to Upthrive Agency, where your success is not just a goal but our
            driving force.
          </p>
          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-400 mr-2"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Digital Creative Agency</span>
          </div>
          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-400 mr-2"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Professional Problem Solutions</span>
          </div>
          <div className="flex items-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-400 mr-2"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Web Design &amp; Development</span>
          </div>
          <div className="flex justify-between items-center">
                            <div className="text-gray-500 text-6xl font-bold font-playfair">230+</div>
            <div>
              <a
                href="https://cal.com/mralamin/30min"
                target="_blank"
                                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-600 hover:bg-gray-800 h-10 px-4 py-2 bg-gray-600 text-white"
              >
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
