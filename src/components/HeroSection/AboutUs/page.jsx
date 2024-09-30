import React from 'react';
import "./about.css";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-4">
      <div
        className="text-center max-w-4xl"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slideIn">About Us</h1>
        <p className="text-lg text-gray-600 mb-6 animate-fadeIn">
          We are a team of passionate individuals committed to delivering the best solutions to our clients. Our focus is on innovation, quality, and customer satisfaction. Over the years, we have built a strong reputation for delivering exceptional services and products in the tech industry.
        </p>
        <p className="text-lg text-gray-600 animate-fadeIn">
          With expertise in web development, mobile app development, and digital marketing, we strive to help businesses grow and achieve their goals. Our mission is to create lasting value and help our clients succeed in the competitive digital world.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
