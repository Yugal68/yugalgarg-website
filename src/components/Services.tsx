"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Automation",
    description: "Eliminate repetitive tasks with custom automation solutions. From Excel macros to full business workflow automation.",
    features: ["Business Process Automation", "Excel & Spreadsheet Automation", "Custom Scripts & Bots", "Workflow Optimization"],
    color: "#00FFFF",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Media Conversion",
    description: "Transform your video content into accessible formats. Get accurate transcriptions or extract audio quickly.",
    features: ["Video Transcription", "Video to Audio Extraction", "Subtitle Generation", "Bulk Processing"],
    color: "#FF00FF",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "WhatsApp Marketing",
    description: "Reach your customers where they are. Set up automated WhatsApp campaigns and bulk messaging.",
    features: ["Bulk Message Campaigns", "Automated Responses", "Customer Segmentation", "Analytics & Tracking"],
    color: "#8B5CF6",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Web Development",
    description: "Get a stunning online presence that converts. From custom websites to Shopify stores.",
    features: ["Custom Websites", "Shopify Stores", "Landing Pages", "E-commerce Solutions"],
    color: "#00FFFF",
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "Free consultation call" },
  { step: "02", title: "Proposal", desc: "Custom quote & timeline" },
  { step: "03", title: "Build", desc: "Development & testing" },
  { step: "04", title: "Deliver", desc: "Launch & support" },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background decoration - Cyberpunk */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF00FF]/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FFFF]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Services That{" "}
            <span className="bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Scale
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            From automation to web development, I offer end-to-end solutions to help your business run smarter.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            How We Work Together
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-center p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-[#00FFFF]/30 transition-all duration-300">
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: index % 2 === 0 ? '#00FFFF' : '#FF00FF' }}
                  >
                    {item.step}
                  </div>
                  <div className="text-white font-medium mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                style={{ backgroundColor: service.color }}
              />

              <div className="relative h-full bg-gradient-to-br from-white/[0.05] to-transparent rounded-3xl border border-white/10 p-8 md:p-10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Decorative corner */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-2xl"
                  style={{ backgroundColor: service.color }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  style={{
                    backgroundColor: `${service.color}20`,
                    color: service.color,
                    boxShadow: `0 0 30px ${service.color}30`,
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:transition-colors duration-300"
                  style={{ ['--hover-color' as string]: service.color }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                      <div
                        className="w-1.5 h-1.5 rounded-full mr-3"
                        style={{ backgroundColor: service.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow indicator */}
                <div
                  className="absolute bottom-8 right-8 w-10 h-10 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  style={{ borderColor: `${service.color}50` }}
                >
                  <svg className="w-4 h-4" style={{ color: service.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Need something custom? Let&apos;s discuss your requirements.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00FFFF]/50 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group"
          >
            Get a Custom Quote
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00FFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
