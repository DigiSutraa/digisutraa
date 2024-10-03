"use client";
import React, { useState, useEffect } from "react";
import './testimonials.css'; // External CSS for animation

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company A",
    content:
      "This service has been fantastic! I have seen a significant boost in engagement and performance.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Manager, Company B",
    content:
      "Amazing team to work with! They transformed our digital presence completely.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Sam Wilson",
    position: "CTO, Company C",
    content:
      "Their expertise in website design and social media handling is unparalleled.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Alice Brown",
    position: "Founder, Startup X",
    content: "Their creative solutions have taken our branding to the next level.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "Michael Green",
    position: "Head of Operations, Company D",
    content:
      "Highly recommend! Their strategic approach to digital marketing has been impressive.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Emma White",
    position: "Co-Founder, Company E",
    content:
      "They were instrumental in driving more traffic to our website and increasing sales.",
    avatar: "https://via.placeholder.com/100",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="w-full flex justify-center items-center py-16 bg-gray-100">
      <div className="carousel-container">
        <div className="carousel-track">
          {testimonials.concat(testimonials).map((testimonial) => (
            <div
              key={testimonial.id}
              className="carousel-item"
            >
              <div className="bg-white shadow-lg p-6 rounded-lg text-center mx-2">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {testimonial.position}
                </p>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
