"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "E-Commerce Automation Suite",
    category: "Automation",
    description: "Automated inventory management, order processing, and customer notifications for an online store.",
    metrics: ["80% less manual work", "500+ orders/day processed", "Zero errors"],
    tags: ["Python", "APIs", "Automation"],
    color: "#00FFFF",
  },
  {
    title: "Sales Report Dashboard",
    category: "Excel Automation",
    description: "Automated Excel dashboard that pulls data from multiple sources and generates weekly sales reports.",
    metrics: ["Saves 10 hours/week", "One-click reports", "Real-time data"],
    tags: ["Excel VBA", "Power Query", "Charts"],
    color: "#FF00FF",
  },
  {
    title: "Video Content Pipeline",
    category: "Media Conversion",
    description: "System to automatically transcribe, translate, and generate subtitles for YouTube content.",
    metrics: ["100+ videos processed", "200+ hours saved", "99% accuracy"],
    tags: ["Python", "Whisper AI", "Automation"],
    color: "#8B5CF6",
  },
  {
    title: "WhatsApp Marketing Bot",
    category: "Marketing",
    description: "WhatsApp automation system for sending personalized offers and managing customer engagement.",
    metrics: ["10,000+ customers reached", "150% engagement increase", "Automated responses"],
    tags: ["Node.js", "WhatsApp API", "CRM"],
    color: "#00FFFF",
  },
  {
    title: "Shopify Store Launch",
    category: "Web Development",
    description: "Complete Shopify store with custom theme, payment integration, and inventory management.",
    metrics: ["₹5L+ monthly sales", "Mobile optimized", "SEO ready"],
    tags: ["Shopify", "Liquid", "E-commerce"],
    color: "#FF00FF",
  },
  {
    title: "HR Process Optimizer",
    category: "Automation",
    description: "Streamlined HR processes including onboarding, leave management, and payroll calculations.",
    metrics: ["90% faster onboarding", "Zero payroll errors", "Full compliance"],
    tags: ["Power Automate", "SharePoint", "APIs"],
    color: "#8B5CF6",
  },
];

const categories = ["All", "Automation", "Excel Automation", "Media Conversion", "Marketing", "Web Development"];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#030303] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00FFFF]/5 via-[#FF00FF]/5 to-[#8B5CF6]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Real results for real businesses. Here&apos;s what I&apos;ve built.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-black shadow-lg shadow-[#00FFFF]/25"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-[#00FFFF]/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                style={{ backgroundColor: project.color }}
              />

              <div className="relative h-full bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                {/* Top gradient bar */}
                <div
                  className="h-1"
                  style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}80)` }}
                />

                <div className="p-6">
                  {/* Category */}
                  <span
                    className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00FFFF] group-hover:to-[#FF00FF] group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-2 mb-4">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4" style={{ color: project.color }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust signal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02]">
            <svg className="w-5 h-5 text-[#00FFFF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-400 text-sm">Your data is secure • NDA available on request</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
