"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company A",
    content:
      "This service has been fantastic! I have seen a significant boost in engagement and performance.",
    avatar: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Manager, Company B",
    content:
      "Amazing team to work with! They transformed our digital presence completely.",
    avatar: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Sam Wilson",
    position: "CTO, Company C",
    content:
      "Their expertise in website design and social media handling is unparalleled.",
    avatar: "https://via.placeholder.com/100", // Replace with actual image URL
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full flex justify-center items-center py-16 bg-gray-100">
      <div className="w-[90%] md:w-[60%] mx-auto relative">
        {/* Carousel Content */}
        <motion.div
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg p-8 rounded-lg text-center"
        >
          <div className="flex justify-center mb-4">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            {testimonials[currentIndex].name}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            {testimonials[currentIndex].position}
          </p>
          <p className="text-gray-600">{testimonials[currentIndex].content}</p>
        </motion.div>

        {/* Carousel Controls */}
        <div className="absolute top-[50%] -translate-y-1/2 left-0">
          <button
            onClick={handlePrev}
            className="p-3 bg-blue-500 text-white rounded-full"
          >
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute top-[50%] -translate-y-1/2 right-0">
          <button
            onClick={handleNext}
            className="p-3 bg-blue-500 text-white rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
