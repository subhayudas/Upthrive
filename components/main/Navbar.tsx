"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navbar variants for animation
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  // Link hover animation variants
  const linkVariants = {
    initial: { y: 0, scale: 1, rotateX: 0 },
    hover: { 
      y: -5, 
      scale: 1.05,
      rotateX: 10,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  // Enhanced floating animation for navbar
  const floatingNavVariants = {
    initial: { y: 0, rotate: 0, scale: 1, x: 0 },
    animate: {
      y: [-5, 5, -5],
      rotate: [-1, 1, -1],
      scale: [0.985, 1.015, 0.985],
      x: [-3, 3, -3],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate={["visible", "animate"]}
      variants={{
        ...navVariants,
        ...floatingNavVariants
      }}
      className={`fixed w-full z-50 top-0 px-4 md:px-10 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="max-w-screen-xl mx-auto">
        <div 
          className={`${scrolled ? "py-2" : "py-3"} 
          px-4 md:px-6 rounded-2xl 
          bg-gradient-to-r from-[#03001417] via-[#03001428] to-[#03001417] 
          backdrop-blur-md border border-[#ffffff20] 
          shadow-[0_0_15px_rgba(255,165,0,0.3)] 
          transition-all duration-300 ease-in-out 
          transform hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(255,165,0,0.5)]
          hover:border-orange-500/30 
          flex flex-wrap items-center justify-between`}
        >
          <div className="flex items-center space-x-3">
            <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="relative"
              >
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 opacity-0 blur-md"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Link href="#Home">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="cursor-pointer relative z-10"
                  />
                </Link>
              </motion.div>

            <motion.span 
                className="self-center text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-300 to-orange-500 bg-size-200"
                >
                  Upthrive
                </motion.span>
              </motion.span>
          </div>

          <div className="md:hidden">
            <motion.button
              type="button"
              className="text-gray-200 focus:outline-none"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </div>

          <AnimatePresence>
            <motion.div
              className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={isMenuOpen ? { opacity: 1, height: "auto", y: 0 } : { opacity: 0, height: 0, y: -10 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            >
              <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
                {[
                  { name: "Home", href: "#Home", highlight: true },
                  { name: "Services", href: "#Services" },
                  { name: "Testimonial", href: "#testimonial" },
                  { name: "Projects", href: "#projects" },
                  { name: "About Us", href: "#aboutus" },
                  { name: "Contact Us", href: "#ContactForm", mobileOnly: true }
                ].map((item, index) => (
                  !item.mobileOnly || (item.mobileOnly && isMenuOpen) ? (
                    <motion.li key={index}
                      initial="initial"
                      whileHover="hover"
                      variants={linkVariants}
                      custom={index}
                    >
                      <Link
                        href={item.href}
                        className={`block py-2 px-3 rounded-lg 
                        ${item.highlight ? "text-yellow-400 font-bold" : "text-gray-200"} 
                        relative overflow-hidden group`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <motion.span 
                          className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-orange-600 to-amber-500 -z-10 group-hover:h-full transition-all duration-300"
                          initial={{ height: 0, opacity: 0.8 }}
                          whileHover={{ height: "100%", opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.li>
                  ) : null
                ))}
                
                {/* Social Media Icons for Mobile */}
                {isMenuOpen && (
                  <motion.div 
                    className="flex justify-center space-x-6 mt-6 md:hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {/* GitHub */}
                    <motion.a
                      href="https://github.com/Upthrive"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-200 hover:text-orange-500 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                    
                    {/* LinkedIn */}
                    <motion.a
                      href="https://www.linkedin.com/company/Upthrive"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-200 hover:text-orange-500 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                      </svg>
                    </motion.a>
                    
                    {/* Twitter */}
                    <motion.a
                      href="https://twitter.com/Upthrive"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-200 hover:text-orange-500 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </motion.a>
                  </motion.div>
                )}
              </ul>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Social Media Icons */}
            <div className="flex space-x-3 mr-2">
              {/* GitHub */}
              <motion.a
                href="https://github.com/Upthrive"
                target="_blank"
                rel="noreferrer"
                className="text-gray-200 hover:text-orange-500 transition-colors"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </motion.svg>
              </motion.a>
              
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/company/Upthrive"
                target="_blank"
                rel="noreferrer"
                className="text-gray-200 hover:text-orange-500 transition-colors"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 0.2 }}
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </motion.svg>
              </motion.a>
              
              {/* Twitter */}
              <motion.a
                href="https://twitter.com/Upthrive"
                target="_blank"
                rel="noreferrer"
                className="text-gray-200 hover:text-orange-500 transition-colors"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 0.4 }}
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </motion.svg>
              </motion.a>
            </div>
            
            <Link
                href="#ContactForm"
                className="relative inline-flex h-12 overflow-hidden items-center justify-center rounded-xl px-6 font-medium group"
              >
                <motion.span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    transition: { duration: 1.5, ease: "easeInOut" }
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                ></motion.span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white opacity-10 rounded-xl"></span>
                <motion.span 
                  className="absolute bg-white rounded-full opacity-5"
                  initial={{ width: 0, height: 0, x: "50%", y: "50%" }}
                  whileHover={{ 
                    width: 200, 
                    height: 200, 
                    x: 0, 
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" } 
                  }}
                ></motion.span>
                <motion.span 
                  className="relative text-white group-hover:text-white z-10 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Contact Us
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0, opacity: 0.5 }}
                    animate={{ x: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.span>
              </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;