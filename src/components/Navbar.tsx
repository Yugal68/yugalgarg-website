"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030303]/90 backdrop-blur-xl border-b border-[#00FFFF]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Just Name */}
          <Link href="#home" className="group">
            <span className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00FFFF] transition-colors">
              Yugal Garg
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-gray-400 hover:text-[#00FFFF] transition-colors duration-200 text-sm font-medium group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] group-hover:w-1/2 transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 relative group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
              <span className="relative block bg-[#030303] text-white px-6 py-2.5 rounded-full text-sm font-medium group-hover:bg-transparent transition-all duration-300">
                Start Your Project
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 relative w-10 h-10"
          >
            <span className={`absolute left-2 w-6 h-0.5 bg-[#00FFFF] transition-all duration-300 ${isMobileMenuOpen ? 'top-[19px] rotate-45' : 'top-3'}`} />
            <span className={`absolute left-2 w-6 h-0.5 bg-[#FF00FF] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'top-[19px]'}`} />
            <span className={`absolute left-2 w-6 h-0.5 bg-[#00FFFF] transition-all duration-300 ${isMobileMenuOpen ? 'top-[19px] -rotate-45' : 'top-7'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030303]/95 backdrop-blur-xl border-b border-[#00FFFF]/10"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-[#00FFFF] transition-colors duration-200 py-3 text-lg"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-black px-5 py-3 rounded-full text-center font-medium"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
