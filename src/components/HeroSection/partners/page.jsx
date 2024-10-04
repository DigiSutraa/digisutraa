"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Clients = () => {
  const [isDomestic, setIsDomestic] = useState(true);

  const domesticClients = [
    { name: 'ABC Corp', description: 'Leading tech provider in India' },
    { name: 'XYZ Pvt Ltd', description: 'Top marketing agency' },
    { name: 'Innovate Solutions', description: 'Renowned web development firm' },
    { name: 'Tech Matrix', description: 'Software solutions in Bangalore' },
    { name: 'Digital Nexus', description: 'Digital marketing specialists' },
    { name: 'Bright Future Tech', description: 'AI solutions provider' },
  ];

  const internationalClients = [
    { name: 'Global Ventures', description: 'Tech conglomerate in the US' },
    { name: 'Creative Minds', description: 'UK-based design agency' },
    { name: 'Nova Enterprises', description: 'Innovative company in Australia' },
    { name: 'Visionary Solutions', description: 'Next-gen tech firm in Germany' },
    { name: 'Oceanic Innovations', description: 'Tech consultancy in Japan' },
    { name: 'FutureWorks', description: 'Futuristic tech in Canada' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="clients" className="py-32 px-4 bg-white relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"
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
        className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"
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
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-gray-900 tracking-tight mb-6">
            Our <span className="font-semibold">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide, from local innovators to global enterprises.
          </p>
        </motion.div>

        {/* Enhanced Toggle Button */}
        <div className="flex justify-center mb-16">
          <motion.div 
            className="inline-flex rounded-full p-1 bg-white border border-gray-200 shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.button
              onClick={() => setIsDomestic(true)}
              className={`relative px-8 py-4 rounded-full text-sm font-medium transition-all ${isDomestic ? 'text-white' : 'text-gray-600 hover:text-gray-900'}`}
              whileHover={{ scale: isDomestic ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDomestic && (
                <motion.div
                  className="absolute inset-0 bg-black rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Domestic Clients</span>
            </motion.button>
            <motion.button
              onClick={() => setIsDomestic(false)}
              className={`relative px-8 py-4 rounded-full text-sm font-medium transition-all ${!isDomestic ? 'text-white' : 'text-gray-600 hover:text-gray-900'}`}
              whileHover={{ scale: !isDomestic ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {!isDomestic && (
                <motion.div
                  className="absolute inset-0 bg-black rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">International Clients</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced Clients Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isDomestic ? 'domestic' : 'international'}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(isDomestic ? domesticClients : internationalClients).map((client) => (
              <motion.div
                key={client.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-black/[0.01] to-black/[0.075]"
                  initial={false}
                  animate={{ opacity: [null, 1, 0] }}
                  transition={{
                    times: [0, 0.5, 1],
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 5
                  }}
                />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {client.name}
                  </h3>
                  <p className="text-gray-600">
                    {client.description}
                  </p>
                  <motion.div
                    className="mt-6 inline-flex items-center text-sm font-medium text-gray-900"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Clients;