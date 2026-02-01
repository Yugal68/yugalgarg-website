"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const roles = [
  "Automation Expert",
  "Excel Wizard",
  "Web Developer",
  "Problem Solver",
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "6+", label: "Years Experience" },
  { value: "80%", label: "Time Saved" },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Cyberpunk gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF00FF]/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00FFFF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF00FF]/10 rounded-full blur-[150px]" />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] transition-all duration-700 ease-out pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #00FFFF 0%, #FF00FF 50%, transparent 70%)',
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />
      </div>

      {/* Grid lines - Cyberpunk */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#00FFFF]/30 bg-[#00FFFF]/5"
        >
          <span className="w-2 h-2 bg-[#00FF00] rounded-full animate-pulse" />
          <span className="text-sm text-gray-400">Based in Delhi, India (IST) • Available for projects</span>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing name - Cyberpunk */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
            <motion.span
              className="inline-block text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Yugal
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#8B5CF6] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ textShadow: '0 0 80px rgba(0, 255, 255, 0.5)' }}
            >
              Garg
            </motion.span>
          </h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-4 h-10 font-light"
          >
            {displayText}
            <span className="cursor text-[#00FFFF] ml-1">|</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-500 mb-8 max-w-2xl mx-auto font-light"
          >
            Code That Works While You Sleep.
          </motion.p>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className={`text-2xl md:text-3xl font-bold ${index === 0 ? 'text-[#00FFFF]' : index === 1 ? 'text-[#FF00FF]' : 'text-[#8B5CF6]'}`}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons - Different text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#contact"
              className="group relative"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                Get Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="#portfolio"
              className="group relative border border-[#00FFFF]/50 text-[#00FFFF] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#00FFFF]/10 hover:border-[#00FFFF]"
            >
              View My Work
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-12 border-2 border-[#00FFFF]/30 rounded-full flex justify-center pt-2 group-hover:border-[#00FFFF] transition-colors">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gradient-to-b from-[#00FFFF] to-[#FF00FF] rounded-full"
            />
          </div>
        </motion.a>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent" />
    </section>
  );
}
