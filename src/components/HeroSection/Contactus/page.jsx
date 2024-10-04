"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Creating the Gmail URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=digisutraa07@gmail.com&su=Contact Form Submission from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    // Redirect to Gmail
    window.open(gmailUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focused: { scale: 0.98 }
  };

  return (
    <div id="contact" className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <motion.div 
        className="bg-white backdrop-blur-sm bg-opacity-70 p-10 rounded-2xl shadow-2xl w-[90%] max-w-2xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mb-8">We had love to hear from you. Send us a message!</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <motion.div whileFocus="focused" variants={inputVariants}>
            <label className="block text-lg font-medium mb-2 text-gray-700" htmlFor="name">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-500" />
                Name
              </div>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white bg-opacity-50 backdrop-blur-sm"
              placeholder="John Doe"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div whileFocus="focused" variants={inputVariants}>
            <label className="block text-lg font-medium mb-2 text-gray-700" htmlFor="email">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-500" />
                Email
              </div>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white bg-opacity-50 backdrop-blur-sm"
              placeholder="john@example.com"
            />
          </motion.div>

          {/* Message Input */}
          <motion.div whileFocus="focused" variants={inputVariants}>
            <label className="block text-lg font-medium mb-2 text-gray-700" htmlFor="message">
              <div className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
                Message
              </div>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 h-40 bg-white bg-opacity-50 backdrop-blur-sm resize-none"
              placeholder="Your message here..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 flex items-center justify-center space-x-2 w-full md:w-auto md:mx-auto"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;