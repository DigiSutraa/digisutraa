"use client";
import React, { useState } from 'react';
import './partners.css'; // Ensure this file has any required additional styles.

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

  return (
    <div id="clients" className="clients-section py-16 bg-gray-50 flex flex-col items-center px-4">
      <h2 className="text-5xl font-bold text-gray-800 mb-12">Our Clients</h2>
      
      {/* Stylish Toggle Button */}
      <div className="flex mb-8 space-x-6">
        <button
          className={`px-8 py-3 rounded-full font-semibold transition-colors duration-300 ease-in-out ${isDomestic ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-600 hover:bg-blue-400 hover:text-white'}`}
          onClick={() => setIsDomestic(true)}
        >
          Domestic Clients
        </button>
        <button
          className={`px-8 py-3 rounded-full font-semibold transition-colors duration-300 ease-in-out ${!isDomestic ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-600 hover:bg-blue-400 hover:text-white'}`}
          onClick={() => setIsDomestic(false)}
        >
          International Clients
        </button>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
        {isDomestic
          ? domesticClients.map((client, index) => (
              <div key={index} className="client-card bg-white p-8 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{client.name}</h3>
                <p className="text-gray-600">{client.description}</p>
              </div>
            ))
          : internationalClients.map((client, index) => (
              <div key={index} className="client-card bg-white p-8 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{client.name}</h3>
                <p className="text-gray-600">{client.description}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Clients;
