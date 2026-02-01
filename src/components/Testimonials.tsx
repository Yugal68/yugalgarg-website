"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    company: "TechStart India",
    content: "Yugal automated our entire inventory management system. What used to take us 4 hours daily now happens automatically. Absolute game-changer for our business!",
    avatar: "RS",
    color: "#00FFFF",
  },
  {
    name: "Priya Patel",
    role: "Marketing Manager",
    company: "Digital Solutions",
    content: "The WhatsApp marketing automation Yugal built for us increased our customer engagement by 150%. His understanding of both tech and business is impressive.",
    avatar: "PP",
    color: "#FF00FF",
  },
  {
    name: "Amit Kumar",
    role: "Content Creator",
    company: "YouTube Channel",
    content: "Got all my videos transcribed and subtitled in record time. The quality was excellent and it saved me weeks of manual work. Highly recommend!",
    avatar: "AK",
    color: "#8B5CF6",
  },
  {
    name: "Sneha Verma",
    role: "Founder",
    company: "E-commerce Store",
    content: "Yugal built our Shopify store from scratch. Beautiful design, smooth functionality, and great support throughout. Exceeded all expectations!",
    avatar: "SV",
    color: "#00FFFF",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background decoration - Cyberpunk */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00FFFF]/5 via-[#FF00FF]/5 to-[#8B5CF6]/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF00FF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Clients{" "}
            <span className="bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what people say about working with me.
          </p>
        </motion.div>

        {/* Testimonials - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500"
                style={{ backgroundColor: testimonial.color }}
              />

              <div className="relative h-full bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
                {/* Quote icon */}
                <svg className="w-8 h-8 mb-4 opacity-30" style={{ color: testimonial.color }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Content */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}80)`,
                      boxShadow: `0 0 20px ${testimonial.color}30`,
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials - Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-15 blur-xl"
              style={{ backgroundColor: testimonials[currentIndex].color }}
            />

            <div className="relative bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 p-6">
              <svg className="w-8 h-8 mb-4 opacity-30" style={{ color: testimonials[currentIndex].color }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-gray-400 leading-relaxed mb-6">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    background: `linear-gradient(135deg, ${testimonials[currentIndex].color}, ${testimonials[currentIndex].color}80)`,
                  }}
                >
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <div className="text-white font-medium">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-500 text-sm">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] w-8"
                    : "bg-white/20 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
