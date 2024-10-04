"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import aboutus1 from "@/components/assets/aboutus1.webp";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const services = [
    {
      title: "SOCIAL MEDIA MARKETING",
      description: "We offer top-notch marketing services to help businesses reach their target audience and grow their brand with creative strategies.",
      // icon: "📈"
    },
    {
      title: "BRANDING & ADVERTISEMENT",
      description: "Let us manage your social media platforms to engage with your audience, build brand loyalty, and increase your online presence.",
      // icon: "💬"
    },
    {
      title: "REELS & CONTENT CREATION",
      description: "Our team designs stunning websites tailored to your business needs, ensuring they are responsive, user-friendly, and visually appealing.",
      // icon: "🎨"
    }
  ];

  return (
    <div id="services" className="min-h-screen bg-white py-32 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Enhanced Heading Section */}
        <motion.div 
          variants={cardVariants}
          className="text-center mb-24"
        >
          <motion.h2 
            className="text-5xl font-light text-gray-900 tracking-tight mb-6"
          >
            What We <span className="font-semibold">Offer</span>
          </motion.h2>
          <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to elevate your brand and drive growth in the modern marketplace.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <motion.div 
                className="absolute inset-0 bg-black/5 rounded-xl transition-all duration-300 group-hover:bg-black/0"
                style={{ zIndex: -1 }}
              />
              <div className="bg-white border border-black/5 rounded-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image 
                    src={aboutus1} 
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/40">
                    <span className="text-6xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <motion.button
                    whileHover={{ x: 4 }}
                    whileTap={{ x: 0 }}
                    className="mt-8 text-black font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;