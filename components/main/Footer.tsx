"use client";

import React, { useRef } from "react";
import AnimatedHeading from "../ui/animated-heading";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const isFooterInView = useInView(footerRef, { once: true, amount: 0.2 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.6 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5, transition: { type: "spring", stiffness: 400 } },
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 5, transition: { type: "spring", stiffness: 400 } },
  };

  const waveVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <footer ref={footerRef} className="relative bg-gray-900 overflow-hidden pt-10 sm:pt-16">
      {/* Animated wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <motion.div
          variants={waveVariants}
          animate="animate"
          className="absolute top-0 left-0 w-[200%]"
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-10 sm:h-16 w-full text-gray-900"
            fill="currentColor"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </motion.div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isFormInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-md bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-5 sm:p-8 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-sm"
        >
          <AnimatedHeading as="h2" className="block text-center text-xl sm:text-2xl md:text-[30px] font-semibold mb-4 sm:mb-6">
            Join Our Newsletter
          </AnimatedHeading>

          <p className="text-gray-300 text-center text-sm sm:text-base mb-4 sm:mb-6">
            Stay updated with our latest news, tips, and special offers.
          </p>

          <form className="mt-4 sm:mt-6">
            <div className="relative">
              <input
                className="w-full rounded-full border border-gray-700 bg-gray-800/50 p-3 sm:p-4 pe-24 sm:pe-32 text-xs sm:text-sm font-medium text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                id="email"
                type="email"
                placeholder="example@gmail.com"
              />

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
              >
                Subscribe
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isFooterInView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16"
        >
          {/* Logo and Social Links */}
          <motion.div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isFooterInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Link href="#Home" className="inline-block">
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="mr-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg sm:text-xl">U</span>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-300">
                      Upthrive
                    </span>
                  </div>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-4 max-w-md text-center mx-auto lg:text-left lg:mx-0 text-sm sm:text-base text-gray-300"
              >
                We create stunning digital experiences that make your business stand out. Our team of experts is dedicated to your success.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-6 flex justify-center lg:justify-start space-x-4"
              >
                <motion.li variants={socialIconVariants} whileHover="hover" initial="initial">
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-300 transition hover:text-orange-500"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </motion.li>

                <motion.li variants={socialIconVariants} whileHover="hover" initial="initial">
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-300 transition hover:text-orange-500"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </motion.li>

                <motion.li variants={socialIconVariants} whileHover="hover" initial="initial">
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-300 transition hover:text-orange-500"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </motion.li>

                <motion.li variants={socialIconVariants} whileHover="hover" initial="initial">
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-300 transition hover:text-orange-500"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2 lg:grid-cols-3 text-center sm:text-left mt-8 sm:mt-0">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isFooterInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 relative inline-block">
                    Services
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
                  </h3>
                </motion.div>

                <motion.ul variants={containerVariants} className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  {[
                    { name: "Web Design", href: "/" },
                    { name: "SEO", href: "/" },
                    { name: "Social Media", href: "/" },
                    { name: "Content Creation", href: "/" },
                  ].map((item, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      <motion.div variants={linkVariants} initial="initial" whileHover="hover">
                        <Link
                          className="group flex items-center justify-center sm:justify-start text-gray-300 transition hover:text-orange-500 text-sm sm:text-base"
                          href={item.href}
                        >
                          <motion.span 
                            className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                          ></motion.span>
                          {item.name}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isFooterInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 relative inline-block">
                    Company
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
                  </h3>
                </motion.div>

                <motion.ul variants={containerVariants} className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  {[
                    { name: "About", href: "#aboutus" },
                    { name: "Careers", href: "/" },
                    { name: "History", href: "/" },
                    { name: "Our Team", href: "#aboutus" },
                  ].map((item, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      <motion.div variants={linkVariants} initial="initial" whileHover="hover">
                        <Link
                          className="group flex items-center justify-center sm:justify-start text-gray-300 transition hover:text-orange-500 text-sm sm:text-base"
                          href={item.href}
                        >
                          <motion.span 
                            className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                          ></motion.span>
                          {item.name}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isFooterInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 relative inline-block">
                    Support
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
                  </h3>
                </motion.div>

                <motion.ul variants={containerVariants} className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  {[
                    { name: "FAQs", href: "#FAQSection" },
                    { name: "Contact", href: "#form" },
                    { name: "Book a Call", href: "https://cal.com/mralamin/30min", external: true },
                  ].map((item, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      <motion.div variants={linkVariants} initial="initial" whileHover="hover">
                        <Link
                          className="group flex items-center justify-center sm:justify-start text-gray-300 transition hover:text-orange-500 text-sm sm:text-base"
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noreferrer" : undefined}
                        >
                          <motion.span 
                            className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                          ></motion.span>
                          {item.name}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 sm:mt-16 border-t border-gray-800 pt-6 sm:pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs sm:text-sm text-gray-400">
              &copy; Upthrive Agency {new Date().getFullYear()}. All rights reserved.
            </p>
            
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
