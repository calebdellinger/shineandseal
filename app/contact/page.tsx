"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { LiaPhoneSolid } from "react-icons/lia";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

// Define the shape of the form data
interface FormData {
  fullName: string;
  email: string;
  description: string;
}

// Contact tile component
const ContactTile = ({ 
  icon: Icon, 
  title, 
  value, 
  href, 
  color, 
  delay 
}: { 
  icon: any; 
  title: string; 
  value: string; 
  href?: string; 
  color: string; 
  delay: number;
}) => {
  const TileContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`relative group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${color}`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-xl ${color.replace('border-l-', 'bg-').replace('-500', '-100')} group-hover:scale-110 transition-transform duration-200`}>
          <Icon className="text-2xl text-gray-700" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{value}</p>
        </div>
      </div>
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color.replace('border-l-', 'from-').replace('-500', '-500/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <TileContent />
      </a>
    );
  }

  return <TileContent />;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Check for honeypot field
      const botField = formData.get('bot-field');
      if (botField) {
        // This is a bot, don't submit
        console.log('Bot detected, form not submitted');
        return;
      }

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setMessage("Message sent successfully! We'll get back to you soon.");
        setFormData({ fullName: "", email: "", description: "" });
        form.reset();
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-5xl font-extrabold text-gray-900 mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Ready to transform your property? Let's discuss your pressure washing and sealing needs.
          </motion.p>
        </div>

        {/* Contact Tiles Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <ContactTile
            icon={LiaPhoneSolid}
            title="Call Us"
            value="425-466-5919"
            href="tel:425-466-5919"
            color="border-l-blue-500"
            delay={0.1}
          />
          <ContactTile
            icon={MdEmail}
            title="Email Us"
            value="info@shineandseal.com"
            href="mailto:info@shineandseal.com"
            color="border-l-green-500"
            delay={0.2}
          />
          <ContactTile
            icon={FaFacebook}
            title="Facebook"
            value="@shineandseal"
            href="https://facebook.com/shineandseal"
            color="border-l-indigo-500"
            delay={0.3}
          />
          <ContactTile
            icon={FaInstagram}
            title="Instagram"
            value="@shineandseal"
            href="https://instagram.com/shineandseal"
            color="border-l-pink-500"
            delay={0.4}
          />
        </motion.div>

        {/* Form Section */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a message</h2>
              
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-4 sm:space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field to prevent spam */}
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
                    Project Details
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us about your project, property type, and any specific requirements..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.form>

              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 sm:p-4 rounded-xl text-sm sm:text-base ${
                    message.includes("successfully")
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "bg-red-50 border border-red-200 text-red-700"
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
