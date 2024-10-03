import React from 'react';
import './services.css'; // Import the CSS file
import aboutus1 from "@/components/assets/aboutus1.webp";
import Image from 'next/image';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Services</h1>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1 - Marketing */}
        <div className="relative card h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden" 
             style={{ backgroundImage: `url(${aboutus1.src})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-6 transition-opacity duration-300 hover:bg-opacity-70">
            <h3 className="text-2xl font-semibold text-white mb-4">Marketing</h3>
            <p className="text-white">
              We offer top-notch marketing services to help businesses reach their target audience and grow their brand with creative strategies.
            </p>
          </div>
        </div>

        {/* Card 2 - Social Media Handling */}
        <div className="relative card h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden" 
             style={{ backgroundImage: `url(${aboutus1.src})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-6 transition-opacity duration-300 hover:bg-opacity-70">
            <h3 className="text-2xl font-semibold text-white mb-4">Social Media Handling</h3>
            <p className="text-white">
              Let us manage your social media platforms to engage with your audience, build brand loyalty, and increase your online presence.
            </p>
          </div>
        </div>

        {/* Card 3 - Website Designing */}
        <div className="relative card h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden" 
             style={{ backgroundImage: `url(${aboutus1.src})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-6 transition-opacity duration-300 hover:bg-opacity-70">
            <h3 className="text-2xl font-semibold text-white mb-4">Website Designing</h3>
            <p className="text-white">
              Our team designs stunning websites tailored to your business needs, ensuring they are responsive, user-friendly, and visually appealing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
