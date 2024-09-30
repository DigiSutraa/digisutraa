"use client"
import React, { useState } from 'react';
import './clients.css'; // Import the CSS file

const Clients = () => {
  const [isDomestic, setIsDomestic] = useState(true);

  const domesticClients = [
    { name: 'ABC Corp', description: 'Leading tech provider in India' },
    { name: 'XYZ Pvt Ltd', description: 'Top marketing agency' },
    { name: 'Innovate Solutions', description: 'Renowned web development firm' },
  ];

  const internationalClients = [
    { name: 'Global Ventures', description: 'Tech conglomerate in the US' },
    { name: 'Creative Minds', description: 'UK-based design agency' },
    { name: 'Nova Enterprises', description: 'Innovative company in Australia' },
  ];

  return (
    <div className="clients-section">
      <h2 className="section-title">Our Clients</h2>
      
      <button
        className="toggle-button"
        onClick={() => setIsDomestic(!isDomestic)}
      >
        {isDomestic ? 'View International Clients' : 'View Domestic Clients'}
      </button>

      <div className="clients-grid">
        {isDomestic
          ? domesticClients.map((client, index) => (
              <div key={index} className="client-card">
                <h3 className="client-name">{client.name}</h3>
                <p className="client-description">{client.description}</p>
              </div>
            ))
          : internationalClients.map((client, index) => (
              <div key={index} className="client-card">
                <h3 className="client-name">{client.name}</h3>
                <p className="client-description">{client.description}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Clients;
