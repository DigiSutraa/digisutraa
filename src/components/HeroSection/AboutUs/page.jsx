"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import aboutus1 from "@/components/assets/aboutus1.webp";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white py-32 px-4 relative overflow-hidden" id="about">
      {/* Subtle background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={staggerChildren} className="space-y-10">
            <motion.h2 
              variants={fadeIn} 
              className="text-5xl font-light text-gray-900 tracking-tight"
            >
              About <span className="font-semibold">Us</span>
            </motion.h2>
            
            <motion.div variants={staggerChildren} className="space-y-6">
              <motion.p variants={fadeIn} className="text-lg text-gray-600 leading-relaxed">
                We are a team of passionate individuals committed to delivering the best solutions to our clients. Our focus is on innovation, quality, and customer satisfaction.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-gray-600 leading-relaxed">
                With expertise in web development, mobile app development, and digital marketing, we strive to help businesses grow and achieve their goals in the competitive digital world.
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ y: -2, backgroundColor: "#333" }}
                whileTap={{ y: 0 }}
                className="px-8 py-4 bg-black text-white text-sm uppercase tracking-wider transition-colors duration-300 group"
              >
                <motion.span 
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  Learn More
                </motion.span>
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="px-8 py-4 border-2 border-black text-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <motion.span 
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  Our Services
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="relative aspect-square"
          >
            <motion.div
              className="absolute inset-0 bg-black/5 backdrop-blur-sm z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            <motion.div
              className="relative h-full transform group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image 
                src={aboutus1} 
                alt="About us" 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                fill
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Contact Icons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
        <motion.a
          href="tel:9999079568"
          whileHover={{ x: -4, backgroundColor: "#333" }}
          className="bg-black text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaPhone size={20} />
        </motion.a>
        <motion.a
          href="https://wa.me/9999079568"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: -4, backgroundColor: "#333" }}
          className="bg-black text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaWhatsapp size={20} />
        </motion.a>
      </div>
    </div>
  );
};

export default AboutUs;