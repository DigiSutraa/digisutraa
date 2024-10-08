"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Clients = () => {
  const [isDomestic, setIsDomestic] = useState(true);

  const colors = {
    primary: '#3B0086', // Deep Purple
    secondary: '#FF6B6B', // Coral Red
    accent: '#4CAF50', // Green
  };

  const domesticClients = [
    { name: 'ABC Corp', description: 'Leading tech provider in India', color: colors.primary },
    { name: 'XYZ Pvt Ltd', description: 'Top marketing agency', color: colors.secondary },
    { name: 'Innovate Solutions', description: 'Renowned web development firm', color: colors.accent },
    { name: 'Tech Matrix', description: 'Software solutions in Bangalore', color: colors.primary },
    { name: 'Digital Nexus', description: 'Digital marketing specialists', color: colors.secondary },
    { name: 'Bright Future Tech', description: 'AI solutions provider', color: colors.accent },
  ];

  const internationalClients = [
    { name: 'Global Ventures', description: 'Tech conglomerate in the US', color: colors.primary },
    { name: 'Creative Minds', description: 'UK-based design agency', color: colors.secondary },
    { name: 'Nova Enterprises', description: 'Innovative company in Australia', color: colors.accent },
    { name: 'Visionary Solutions', description: 'Next-gen tech firm in Germany', color: colors.primary },
    { name: 'Oceanic Innovations', description: 'Tech consultancy in Japan', color: colors.secondary },
    { name: 'FutureWorks', description: 'Futuristic tech in Canada', color: colors.accent },
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
    <section id="clients" className="py-32 px-4 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Dynamic background elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: Object.values(colors)[i % 3],
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            borderRadius: Math.random() > 0.5 ? ['50%', '0%', '50%'] : ['0%', '50%', '0%'],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-black/95" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-white tracking-tight mb-6">
            Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by businesses worldwide, from local innovators to global enterprises.
          </p>
        </motion.div>

        {/* Enhanced Toggle Button */}
        <div className="flex justify-center mb-16">
          <motion.div 
            className="inline-flex rounded-full p-1 bg-white/10 backdrop-blur-sm border border-white/20"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.button
              onClick={() => setIsDomestic(true)}
              className={`relative px-8 py-4 rounded-full text-sm font-medium transition-all ${isDomestic ? 'text-gray-900' : 'text-white hover:text-gray-200'}`}
              whileHover={{ scale: isDomestic ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDomestic && (
                <motion.div
                  className="absolute inset-0 bg-white rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Domestic Clients</span>
            </motion.button>
            <motion.button
              onClick={() => setIsDomestic(false)}
              className={`relative px-8 py-4 rounded-full text-sm font-medium transition-all ${!isDomestic ? 'text-gray-900' : 'text-white hover:text-gray-200'}`}
              whileHover={{ scale: !isDomestic ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {!isDomestic && (
                <motion.div
                  className="absolute inset-0 bg-white rounded-full"
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
            {(isDomestic ? domesticClients : internationalClients).map((client, index) => (
              <motion.div
                key={client.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-xl transition-all duration-300 group-hover:from-white/10"
                  style={{ zIndex: -1 }}
                />
                <div className="backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                  <div className="p-8 relative">
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 opacity-10"
                      style={{ background: client.color }}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {client.name}
                    </h3>
                    <p className="text-gray-300">
                      {client.description}
                    </p>
                    <motion.div
                      className="mt-6 inline-flex items-center text-sm font-medium text-white group"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
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