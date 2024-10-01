import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import './about.css';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 py-10 px-4">
      {/* About Us Section */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slideIn">About Us</h1>
        <p className="text-lg text-gray-600 mb-6 animate-fadeIn">
          We are a team of passionate individuals committed to delivering the best solutions to our clients. Our focus is on innovation, quality, and customer satisfaction. Over the years, we have built a strong reputation for delivering exceptional services and products in the tech industry.
        </p>
        <p className="text-lg text-gray-600 animate-fadeIn">
          With expertise in web development, mobile app development, and digital marketing, we strive to help businesses grow and achieve their goals. Our mission is to create lasting value and help our clients succeed in the competitive digital world.
        </p>
      </div>

      {/* Contact Icons (Fixed at the bottom of the page and scrollable) */}
      <div className="fixed bottom-5 flex w-full  justify-between items-center ">
        {/* Call Icon */}
        <a href="tel:9999079568" className="rounded-full bg-orange-500 p-3 shadow-md hover:bg-orange-600">
          <FaPhone size={24} className="text-white" />
        </a>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/9999079568"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 p-3 shadow-md hover:bg-green-600"
        >
          <FaWhatsapp size={24} className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
