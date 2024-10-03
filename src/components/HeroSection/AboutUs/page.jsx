import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import aboutus1 from "@/components/assets/aboutus1.webp";
import './about.css';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
    
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-slideInLeft">About Us</h1>

    
      {/* About Us Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left - Text Section */}
        <div className="flex flex-col justify-center" data-aos="fade-right">
          
          <p className="text-lg text-gray-600 mb-4 animate-fadeInLeft">
            We are a team of passionate individuals committed to delivering the best solutions to our clients. Our focus is on innovation, quality, and customer satisfaction. Over the years, we have built a strong reputation for delivering exceptional services and products in the tech industry.
          </p>
          <p className="text-lg text-gray-600 animate-fadeInLeft">
            With expertise in web development, mobile app development, and digital marketing, we strive to help businesses grow and achieve their goals. Our mission is to create lasting value and help our clients succeed in the competitive digital world.
          </p>
        </div>

        {/* Right - Image Section */}
        <div className="flex justify-center md:justify-end" data-aos="fade-left">
          <Image src={aboutus1} alt="about us" className="w-full h-auto rounded-lg shadow-lg animate-slideInRight" />
        </div>
      </div>

      {/* Contact Icons (Fixed at the bottom of the page and scrollable) */}
      <div className="fixed bottom-5 left-5 right-5 flex justify-between items-center">
        {/* Call Icon */}
        <a href="tel:9999079568" className="rounded-full bg-orange-500 p-3 shadow-md hover:bg-orange-600 transition-transform transform hover:scale-110">
          <FaPhone size={24} className="text-white" />
        </a>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/9999079568"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 p-3 shadow-md hover:bg-green-600 transition-transform transform hover:scale-110"
        >
          <FaWhatsapp size={24} className="text-white" />
        </a>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
