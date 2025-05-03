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

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
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
      y: 0,
      rotate: 0,
      scale: 1,
      x: 0,
      transition: {
        duration: 0,
      }
    }
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: { 
        duration: 0.15,
        ease: "easeOut"
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  // Mobile menu item animation variants
  const menuItemVariants = {
    closed: { 
      opacity: 0,
      y: -5,
      transition: { duration: 0.1 }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 top-0 px-3 sm:px-4 md:px-10 transition-all duration-300 ${scrolled ? "py-1 sm:py-2" : "py-2 sm:py-4"}`}
    >
      <div className="max-w-screen-xl mx-auto">
        <div 
          className={`${scrolled ? "py-2" : "py-3"} 
          px-4 sm:px-4 md:px-6 rounded-2xl 
          bg-gradient-to-r from-[#03001417] via-[#03001440] to-[#03001417] 
          backdrop-blur-xl border border-[#ffffff30] 
          shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_8px_10px_rgba(0,0,0,0.2)] 
          transition-all duration-300 ease-in-out 
          transform hover:scale-[1.01]
          hover:border-[#ffffff40]
          flex items-center justify-between
          before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-[#ffffff20] before:to-transparent before:opacity-50 before:pointer-events-none
          relative touch-manipulation`}
        >
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0.5, scale: 1 }}
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5], 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 5px 2px rgba(249, 115, 22, 0.4)', 
                      '0 0 15px 5px rgba(249, 115, 22, 0.6)', 
                      '0 0 5px 2px rgba(249, 115, 22, 0.4)'
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 rounded-full bg-orange-500/20"
                />
                <Link href="#Home">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className="cursor-pointer relative z-10 sm:w-[50px] sm:h-[50px] rounded-full border-2 border-orange-400/30"
                  />
                </Link>
              </motion.div>

            <motion.span 
                className="self-center text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-300 to-orange-500 bg-size-200"
                >
                  Upthrive
                </motion.span>
              </motion.span>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-lg touch-manipulation active:scale-95 transition-transform"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <motion.div
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  className="absolute h-0.5 w-6 bg-white rounded-full"
                  style={{ top: "25%" }}
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="absolute h-0.5 w-6 bg-white rounded-full"
                  style={{ top: "50%" }}
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  className="absolute h-0.5 w-6 bg-white rounded-full"
                  style={{ top: "75%" }}
                ></motion.span>
              </motion.div>
            </button>
          </div>

          {/* Desktop Navigation - Removed navlinks, kept socials */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="flex items-center space-x-5">
             
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </motion.svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </motion.svg>
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </motion.svg>
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
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
                className="relative text-white group-hover:text-white z-10 flex items-center text-base font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Contact Us
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1.5" 
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
          </div>
        </div>
      </div>

      {/* Mobile Menu (Overlay) - Simplified to only show socials and contact */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-[calc(4rem)] left-3 right-3 bg-gradient-to-r from-[#03001417] via-[#03001450] to-[#03001417] backdrop-blur-lg border border-[#ffffff20] rounded-xl shadow-xl p-4 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto touch-manipulation"
          >
            <div className="flex flex-col space-y-5">
              <motion.div 
                className="flex justify-center space-x-6 py-3"
                variants={menuItemVariants}
              >
                
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </motion.a>
              </motion.div>
              
              <motion.div variants={menuItemVariants} className="pt-2">
                <Link
                  href="#ContactForm"
                  onClick={handleLinkClick}
                  className="block w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-3 px-4 rounded-xl text-center hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;