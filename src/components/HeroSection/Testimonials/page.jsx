"use client";
import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company A",
    content: "This service has been fantastic! I have seen a significant boost in engagement and performance.",
    rating: 5
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Manager, Company B",
    content: "Amazing team to work with! They transformed our digital presence completely.",
    rating: 5
  },
  {
    id: 3,
    name: "Sam Wilson",
    position: "CTO, Company C",
    content: "Their expertise in website design and social media handling is unparalleled.",
    rating: 5
  },
  {
    id: 4,
    name: "Alice Brown",
    position: "Founder, Startup X",
    content: "Their creative solutions have taken our branding to the next level.",
    rating: 5
  },
  {
    id: 5,
    name: "Michael Green",
    position: "Head of Operations, Company D",
    content: "Highly recommend! Their strategic approach to digital marketing has been impressive.",
    rating: 5
  },
  {
    id: 6,
    name: "Emma White",
    position: "Co-Founder, Company E",
    content: "They were instrumental in driving more traffic to our website and increasing sales.",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="w-full py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-slate-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <motion.div 
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Do not just take our word for it - hear from some of our satisfied clients!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white text-lg font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors duration-300">
            See More Reviews
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;