"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import DSlogo from "../../assets/DStransparent.png";

const Page = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Clients", link: "#clients" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.div 
      className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 fixed top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="w-[90%] flex justify-between items-center mx-auto h-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={DSlogo}
            alt="Logo"
            className="h-[300px] w-[300px] object-contain"
          />
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative text-sm font-medium text-gray-600 cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={item.link} className="transition-all duration-300 hover:text-gray-900 py-2 px-1">
                  {item.name}
                </a>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: hoveredIndex === index ? 1 : 0,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-gray-500 to-gray-900 origin-left"
                />
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <motion.div 
          className="lg:hidden"
          whileTap={{ scale: 0.95 }}
        >
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            whileHover={{ backgroundColor: "rgb(243 244 246)" }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/80 backdrop-blur-md border-t border-gray-100"
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-full"
                >
                  <motion.a
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 block py-2 px-4 transition-colors duration-300 text-center"
                    whileHover={{ backgroundColor: "rgb(243 244 246)" }}
                  >
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Page;