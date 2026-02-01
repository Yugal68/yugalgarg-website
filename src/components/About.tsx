"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { number: "50+", label: "Projects Completed", color: "#00FFFF" },
  { number: "30+", label: "Happy Clients", color: "#FF00FF" },
  { number: "6+", label: "Years Experience", color: "#8B5CF6" },
  { number: "<24h", label: "Response Time", color: "#00FFFF" },
];

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Excel VBA", icon: "📊" },
  { name: "Power Automate", icon: "⚙️" },
  { name: "Zapier", icon: "🔗" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Shopify", icon: "🛒" },
  { name: "Node.js", icon: "💚" },
  { name: "APIs", icon: "🔌" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-[#030303] relative overflow-hidden">
      {/* Background elements - Cyberpunk */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FFFF]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF00FF]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Photo */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Photo container with cyberpunk border */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#8B5CF6] rounded-3xl blur-lg opacity-50" />

              {/* Photo */}
              <div className="relative bg-[#0a0a0a] rounded-3xl p-2 border border-[#00FFFF]/20">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/yugal.jpg"
                    alt="Yugal Garg"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
                </div>

                {/* Info card overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#030303]/90 backdrop-blur-xl rounded-xl p-4 border border-[#00FFFF]/20">
                    <h3 className="text-xl font-bold text-white mb-1">Yugal Garg</h3>
                    <p className="text-[#00FFFF] text-sm mb-3">Automation Expert</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-2 h-2 bg-[#00FF00] rounded-full animate-pulse" />
                      Available for new projects
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-[#030303] border border-[#FF00FF]/30 rounded-xl px-4 py-2"
              >
                <span className="text-[#FF00FF] font-bold">6+</span>
                <span className="text-gray-400 text-sm ml-1">Years</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-[#030303] border border-[#00FFFF]/30 rounded-xl px-4 py-2"
              >
                <span className="text-[#00FFFF] font-bold">50+</span>
                <span className="text-gray-400 text-sm ml-1">Projects</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Turning Complex Problems into{" "}
              <span className="bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#8B5CF6] bg-clip-text text-transparent">
                Simple Solutions
              </span>
            </h2>

            <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
              <p>
                I&apos;m Yugal Garg, an automation specialist with <span className="text-[#00FFFF] font-medium">6+ years of experience</span> helping businesses eliminate repetitive tasks and scale efficiently.
              </p>
              <p>
                I build systems that work tirelessly in the background, so you can focus on what truly matters—growing your business. From automating complex workflows to building custom solutions, I transform mundane processes into efficient, automated systems.
              </p>
              <p className="text-white font-medium border-l-2 border-[#FF00FF] pl-4">
                My mission: help businesses scale by eliminating the boring, repetitive work that slows them down.
              </p>
            </div>

            {/* Skills with icons */}
            <div className="mt-10">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Technologies I Work With
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300 cursor-default"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                style={{ backgroundColor: stat.color }}
              />
              <div className="relative text-center p-6 md:p-8 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300">
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
