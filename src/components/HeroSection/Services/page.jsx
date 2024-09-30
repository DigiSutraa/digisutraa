import React from 'react';
import './services.css'; // Import the CSS file

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Services</h1>
      <div className="services-grid max-w-6xl w-full">
        <div className="card">
          <h3>Marketing</h3>
          <p>
            We offer top-notch marketing services to help businesses reach their target audience and grow their brand with creative strategies.
          </p>
        </div>
        <div className="card">
          <h3>Social Media Handling</h3>
          <p>
            Let us manage your social media platforms to engage with your audience, build brand loyalty, and increase your online presence.
          </p>
        </div>
        <div className="card">
          <h3>Website Designing</h3>
          <p>
            Our team designs stunning websites tailored to your business needs, ensuring they are responsive, user-friendly, and visually appealing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
