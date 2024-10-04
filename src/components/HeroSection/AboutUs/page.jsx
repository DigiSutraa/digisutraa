"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import aboutus1 from "@/components/assets/aboutus1.webp";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white py-24 px-4 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeIn} className="space-y-8">
            <h2 className="text-4xl font-light text-gray-900 tracking-tight">
              About <span className="font-semibold">Us</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a team of passionate individuals committed to delivering the best solutions to our clients. Our focus is on innovation, quality, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With expertise in web development, mobile app development, and digital marketing, we strive to help businesses grow and achieve their goals in the competitive digital world.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="px-6 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors duration-300"
              >
                Learn More
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="px-6 py-3 border border-black text-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
              >
                Our Services
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gray-100" />
            <motion.div
              className="relative h-full transform"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src={aboutus1} 
                alt="About us" 
                className="object-cover"
                fill
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimalist Contact Icons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
        <motion.a
          href="tel:9999079568"
          whileHover={{ x: -4 }}
          className="bg-black text-white p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <FaPhone size={20} />
        </motion.a>
        <motion.a
          href="https://wa.me/9999079568"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: -4 }}
          className="bg-black text-white p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <FaWhatsapp size={20} />
        </motion.a>
      </div>
    </div>
  );
};

export default AboutUs;