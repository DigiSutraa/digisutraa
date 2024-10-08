"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import aboutus1 from "@/components/assets/aboutus1.webp";

const AboutUs = () => {
  const colors = [
    '#FFA07A', // Light Salmon
    '#98FB98', // Pale Green
    '#87CEFA', // Light Sky Blue
    '#DDA0DD', // Plum
    '#F0E68C', // Khaki
  ];

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-32 px-4 relative overflow-hidden" id="about">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full opacity-30"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: colors[i % colors.length],
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Gradient waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute w-full h-[120%] opacity-30"
            style={{
              background: `linear-gradient(${90 + i * 45}deg, transparent, ${colors[i]}, transparent)`,
              top: `${i * 30}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Rotating geometric shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute opacity-20"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: colors[i],
              clipPath: i % 2 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Backdrop blur */}
      <motion.div 
        className="absolute inset-0 backdrop-blur-[100px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={staggerChildren} className="space-y-10">
            <motion.div 
              variants={fadeInLeft}
              className="inline-block bg-white/50 backdrop-blur-sm p-2 rounded-lg"
            >
              <h2 className="text-5xl font-light text-gray-900 tracking-tight">
                About <span className="font-semibold">Us</span>
              </h2>
            </motion.div>
            
            <motion.div variants={staggerChildren} className="space-y-6">
              <motion.p 
                variants={fadeInLeft} 
                className="text-lg text-gray-800 leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-lg"
              >
                We are a team of passionate individuals committed to delivering the best solutions to our clients. Our focus is on innovation, quality, and customer satisfaction.
              </motion.p>
              <motion.p 
                variants={fadeInLeft} 
                className="text-lg text-gray-800 leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-lg"
              >
                With expertise in web development, mobile app development, and digital marketing, we strive to help businesses grow and achieve their goals in the competitive digital world.
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={fadeInLeft}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white text-sm uppercase tracking-wider transition-colors duration-300 rounded-lg shadow-lg"
              >
                Learn More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-black text-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
              >
                Our Services
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="relative aspect-square"
          >
            <motion.div
              className="absolute inset-0 bg-white/10 backdrop-blur-sm z-10 rounded-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            <motion.div
              className="relative h-full transform group rounded-2xl overflow-hidden"
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
        {[
          { Icon: FaPhone, href: "tel:9999079568", color: colors[0] },
          { Icon: FaWhatsapp, href: "https://wa.me/9999079568", color: colors[2] }
        ].map(({ Icon, href, color }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, x: -8 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: color }}
          >
            <Icon size={20} className="text-white" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;