"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const expertise = [
  "Workflow Automation",
  "Excel & Python",
  "Business Solutions",
  "Tech Training",
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "6+", label: "Years Experience" },
  { value: "80%", label: "Time Saved" },
];

export default function Hero() {
  const [currentExpertise, setCurrentExpertise] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const text = expertise[currentExpertise];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < text.length) {
            setDisplayText(text.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(text.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentExpertise((prev) => (prev + 1) % expertise.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentExpertise]);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] pt-24 md:pt-28"
    >
      {/* Strong visual background - Cyberpunk gradient */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00FFFF]/15 via-[#FF00FF]/5 to-transparent" />
        {/* Accent blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00FFFF]/12 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FF00FF]/12 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/8 rounded-full blur-[150px]" />
        {/* Mouse tracking glow */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-25 blur-[100px] transition-all duration-700 ease-out pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #00FFFF 0%, #FF00FF 50%, transparent 70%)',
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />
      </div>

      {/* Grid lines - Cyberpunk */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#00FFFF]/30 bg-[#00FFFF]/5"
            >
              <span className="w-2 h-2 bg-[#00FF00] rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">Based in Delhi, India • Available for projects</span>
            </motion.div>

            {/* Main Value Proposition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* SOLVING WHAT - The main headline */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black mb-6 tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-white">I Help Businesses</span>
                <br />
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#8B5CF6] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Save Hours Every Week
                </span>
                <br />
                <span className="text-white">Through Automation</span>
              </motion.h1>

              {/* WHO - Name and expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-6"
              >
                <p className="text-lg sm:text-xl text-gray-300 mb-2">
                  Hi, I&apos;m <span className="text-[#00FFFF] font-semibold">Yugal Garg</span>
                </p>
                <div className="text-base sm:text-lg md:text-xl text-gray-400 h-8 font-light">
                  <span className="text-[#FF00FF]">{displayText}</span>
                  <span className="cursor text-[#00FFFF] ml-1">|</span>
                </div>
              </motion.div>

              {/* FOR WHOM - Target audience */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-base sm:text-lg text-gray-500 mb-8 max-w-xl lg:max-w-none"
              >
                Turning repetitive tasks into automated workflows for businesses and professionals who value their time.
              </motion.p>

              {/* Social Proof Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-10 mb-8"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className={`text-3xl md:text-4xl font-bold ${index === 0 ? 'text-[#00FFFF]' : index === 1 ? 'text-[#FF00FF]' : 'text-[#8B5CF6]'}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
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

          {/* Right side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full blur-3xl opacity-30" />
              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#00FFFF]/30 shadow-2xl shadow-[#00FFFF]/20">
                <Image
                  src="/yugal-photo.jpg"
                  alt="Yugal Garg"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-[#FF00FF]/20 animate-pulse" />
              <div className="absolute -inset-4 rounded-full border border-[#00FFFF]/10" />
            </div>
          </motion.div>
        </div>
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
