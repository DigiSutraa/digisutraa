"use client";
import React, { useState } from "react";
import { motion, px } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons
import Image from "next/image";
import DSlogo from "../../assets/DS.png"
const page = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const menuItems = ["Home", "About Us", "Services", "Clients", "Contact"];

  return (
    <>
      <div className="w-full">
        <div className="w-[90%] flex justify-between items-center mx-auto mt-6">
          <div>
          <Image src={DSlogo} alt="DSlogo"  style={{ width: '100px', height: '100px'  }} />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex">
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative text-lg font-semibold text-gray-800 cursor-pointer hover:text-blue-500"
                >
                  {item}
                  {/* Underline animation */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                    className="absolute left-0 bottom-0 h-[2px] bg-blue-500"
                    transition={{ duration: 0.3 }}
                  />
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.5 }}
          className={`sm:hidden overflow-hidden`}
        >
          <ul className="flex flex-col items-center space-y-4 mt-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-blue-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </>
  );
};

export default page;
