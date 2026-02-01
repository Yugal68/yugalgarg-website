"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 100vh)
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Check if we're past the hero
      if (scrollY > heroHeight * 0.8) {
        setIsHeroVisible(false);
        setIsVisible(true);
      } else {
        setIsHeroVisible(true);
        setIsVisible(false);
      }

      // Hide when near the contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const contactTop = contactSection.getBoundingClientRect().top;
        if (contactTop < window.innerHeight * 0.5) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && !isHeroVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link href="#contact" className="group relative block">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

            {/* Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-black px-6 py-3 rounded-full font-semibold shadow-lg shadow-[#00FFFF]/30 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Get Quote
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
