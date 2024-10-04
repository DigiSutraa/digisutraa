"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company A",
    content: "This service has been fantastic! I have seen a significant boost in engagement and performance.",
    rating: 5,
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Manager, Company B",
    content: "Amazing team to work with! They transformed our digital presence completely.",
    rating: 5,
    bgColor: "bg-purple-50"
  },
  {
    id: 3,
    name: "Sam Wilson",
    position: "CTO, Company C",
    content: "Their expertise in website design and social media handling is unparalleled.",
    rating: 5,
    bgColor: "bg-green-50"
  },
  {
    id: 4,
    name: "Alice Brown",
    position: "Founder, Startup X",
    content: "Their creative solutions have taken our branding to the next level.",
    rating: 5,
    bgColor: "bg-yellow-50"
  },
  {
    id: 5,
    name: "Michael Green",
    position: "Head of Operations, Company D",
    content: "Highly recommend! Their strategic approach to digital marketing has been impressive.",
    rating: 5,
    bgColor: "bg-pink-50"
  },
  {
    id: 6,
    name: "Emma White",
    position: "Co-Founder, Company E",
    content: "They were instrumental in driving more traffic to our website and increasing sales.",
    rating: 5,
    bgColor: "bg-indigo-50"
  }
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className={`${testimonial.bgColor} rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative`}
  >
    <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-300" />
    <div className="flex items-center mb-6">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 mb-6 text-lg leading-relaxed italic relative z-10">
      {testimonial.content}
    </p>
    <div className="flex items-center">
      <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xl font-semibold shadow-lg">
        {testimonial.name.charAt(0)}
      </div>
      <div className="ml-4">
        <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
        <p className="text-gray-600">{testimonial.position}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialCarousel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <div className="w-full py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
            What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Do not just take our word for it — hear from some of our satisfied clients!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-20 text-center"
        >
          {/* <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            See More Success Stories
          </button> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;