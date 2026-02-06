"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Automation First",
    description: "I believe every repetitive task can be automated. My goal is to free up your time for what matters.",
    color: "#00FFFF",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Reliable Solutions",
    description: "Every solution I build is tested, documented, and designed to run smoothly without constant supervision.",
    color: "#FF00FF",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Quick Turnaround",
    description: "I understand time is money. I deliver quality work fast, with clear communication throughout.",
    color: "#8B5CF6",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-[#030303] relative overflow-hidden">
      {/* Background elements - Cyberpunk */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FFFF]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF00FF]/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/3 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Turning Complex Problems into{" "}
            <span className="bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Simple Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            I&apos;m Yugal Garg, an automation specialist with <span className="text-[#00FFFF] font-medium">6+ years of experience</span> helping businesses eliminate repetitive tasks and scale efficiently.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#8B5CF6] rounded-2xl blur opacity-20" />
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">My Mission</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I build systems that work tirelessly in the background, so you can focus on what truly matters—<span className="text-[#00FFFF]">growing your business</span>. From automating complex workflows to building custom solutions, I transform mundane processes into efficient, automated systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Work With Me - 3 Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider text-center mb-8">
            Why Work With Me
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                  style={{ backgroundColor: item.color }}
                />
                <div className="relative bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-2xl p-6 h-full transition-colors duration-300">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300 cursor-default"
              >
                <span className="text-lg">{skill.icon}</span>
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
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
