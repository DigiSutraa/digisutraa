"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import pngwing from "@/components/assets/pngwing.png";

const Services = () => {
  const colors = [
    '#3B0086', // Deep Purple
    '#FF6B6B', // Coral Red
    '#4CAF50', // Green
  ];

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
      color: colors[0],
      gradient: "from-purple-900 to-purple-600"
    },
    {
      title: "BRANDING & ADVERTISEMENT",
      description: "Let us manage your social media platforms to engage with your audience, build brand loyalty, and increase your online presence.",
      color: colors[1],
      gradient: "from-red-600 to-orange-400"
    },
    {
      title: "REELS & CONTENT CREATION",
      description: "Our team designs stunning content tailored to your business needs, ensuring they are engaging, trend-setting, and visually appealing.",
      color: colors[2],
      gradient: "from-green-600 to-emerald-400"
    }
  ];

  return (
    <div id="services" className="min-h-screen bg-gray-900 py-32 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`bg-element-${i}`}
            className="absolute rounded-full"
            style={{
              background: colors[i % colors.length],
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-800" />
      
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
            className="text-5xl font-light text-white tracking-tight mb-6"
          >
            What We <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Offer</span>
          </motion.h2>
          <motion.p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to elevate your brand and drive growth in the modern marketplace.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-xl transition-all duration-300 group-hover:from-white/10"
                style={{ zIndex: -1 }}
              />
              <div className="backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                <div className={`relative h-48 bg-gradient-to-br ${service.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
                  <Image
                    src={pngwing}
                    alt="Background Pattern"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-30"
                  />
                </div>
                <div className="p-8 bg-gray-900/50">
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  <motion.button
                    whileHover={{ x: 4 }}
                    whileTap={{ x: 0 }}
                    className="mt-8 text-white font-medium inline-flex items-center group"
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