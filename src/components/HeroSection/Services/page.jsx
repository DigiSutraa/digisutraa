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
        duration: 0.5,
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
        duration: 0.5
      }
    }
  };

  const services = [
    {
      title: "Marketing",
      description: "We offer top-notch marketing services to help businesses reach their target audience and grow their brand with creative strategies.",
      icon: "📈"
    },
    {
      title: "Social Media Handling",
      description: "Let us manage your social media platforms to engage with your audience, build brand loyalty, and increase your online presence.",
      icon: "💬"
    },
    {
      title: "Website Designing",
      description: "Our team designs stunning websites tailored to your business needs, ensuring they are responsive, user-friendly, and visually appealing.",
      icon: "🎨"
    }
  ];

  return (
    <div id="services" className="min-h-screen bg-gradient-to-br from-teal-500 to-emerald-600 py-20 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 
          className="text-5xl font-bold text-white text-center mb-16"
          variants={cardVariants}
        >
          Our Services
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-white/20"
            >
              <div className="relative h-48">
                <Image 
                  src={aboutus1} 
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-6xl">{service.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 leading-relaxed">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-2 bg-white text-emerald-600 rounded-full font-semibold hover:bg-opacity-90 transition-colors w-full"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;