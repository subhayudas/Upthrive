"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import AnimatedHeading from "../ui/animated-heading";

interface PressArticle {
  id: number;
  title: string;
  excerpt: string;
  source: string;
  date: string;
  href: string;
  image: string;
}

const articles: PressArticle[] = [
  {
    id: 1,
    title:
      "How Upthrive helps D2C brands cut wasted ad spend",
    excerpt:
      "The Business Stories features Upthrive's embedded-team model and how it helps brands lower acquisition costs.",
    source: "The Business Stories · Dailyhunt",
    date: "2026",
    href: "https://m.dailyhunt.in/news/india/english/thebusinessstories-epaper-dhcac9158d64b443d4846bd81a66beca12/-newsid-dhcac9158d64b443d4846bd81a66beca12_df230872e17b41faab20e98aab6136a5?sm=Y",
    image: "/logo.png",
  },
  {
    id: 2,
    title:
      "Most Indian startups are paying ₹1,000 for customers worth ₹600. Then they call it growth.",
    excerpt:
      "A look at unprofitable customer acquisition across Indian D2C — citing Upthrive as a case of cutting CAC 30–40% by embedding inside client teams.",
    source: "The Business Stories · Dailyhunt",
    date: "2026",
    href: "https://m.dailyhunt.in/news/india/english/thebusinessstories-epaper-dhcac9158d64b443d4846bd81a66beca12/-newsid-dhcac9158d64b443d4846bd81a66beca12_ce5411b24a384774ad856b0ecd8fa845?sm=Y",
    image:
      "https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x225_75/fetchdata20/images/e7/be/e0/e7bee079fc12231e715c4284a04110cb29f9d15a33f80f7442e8df09a509922a.webp",
  },
  {
    id: 3,
    title:
      "You have three seconds. Indian brands are still making thirty-second ads.",
    excerpt:
      "Why short-form creative wins — featuring Upthrive's content-studio approach that delivers lower CPMs and faster CAC payback for clients.",
    source: "The Business Stories · Dailyhunt",
    date: "2026",
    href: "https://m.dailyhunt.in/news/india/english/thebusinessstories-epaper-dhcac9158d64b443d4846bd81a66beca12/-newsid-dhcac9158d64b443d4846bd81a66beca12_8de61059ae9f461d92a199a3f9dd94a2?sm=Y",
    image:
      "https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x225_75/fetchdata20/images/24/8a/af/248aaf55dff6d708c9849a5b9348df246aeb13a2cdb8545a4101262a2aa3bfee.webp",
  },
];

const FeaturedIn = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="FeaturedIn"
      className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] text-center mx-auto inline-flex items-center"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">In the News</h1>
          </motion.div>

          <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-bold">
            Featured In
          </AnimatedHeading>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Our work and results have been highlighted by the press. Here&apos;s
            what they&apos;re saying about Upthrive.
          </motion.p>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#ffffff20] bg-gradient-to-b from-[#ffffff08] to-transparent backdrop-blur-sm transition-colors duration-300 hover:border-orange-400/60"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className={
                    article.image.startsWith("/")
                      ? "absolute inset-0 h-full w-full object-contain p-8 opacity-80 transition-transform duration-500 group-hover:scale-105"
                      : "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/logo.png";
                    target.className =
                      "absolute inset-0 h-full w-full object-contain p-8 opacity-80";
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-orange-400">
                    Press
                  </span>
                  <ArrowUpRightIcon className="h-5 w-5 text-white/50 transition-all duration-300 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{article.source}</span>
                  <span className="text-xs text-white/70 group-hover:text-orange-400 transition-colors">
                    Read article →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
