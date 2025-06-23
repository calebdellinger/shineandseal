"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#000000]/90">
          <Image
            src="https://photos.smugmug.com/Shine-Seal-Web/i-V8grhc5/0/KV8DRzW2TnnDxcNP5vBzP736fPH7BZG2299WWjwXG/X4/pressure_washing-X4.jpg"
            alt="Pressure washing in action"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>

        
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About Shine & Seal
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Transforming surfaces with excellence, one project at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Shine & Seal, we're more than just a pressure washing company. We're dedicated to 
            restoring and protecting your property's beauty while delivering an exceptional 
            customer experience that exceeds expectations.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            variants={fadeIn}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
            <p className="text-gray-600">
              We strive for perfection in every project, using state-of-the-art equipment and 
              proven techniques to deliver outstanding results.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customer-Centric</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority. We listen to your needs and work diligently to 
              exceed your expectations at every step.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We continuously invest in the latest technology and eco-friendly solutions to 
              provide the best possible service for your property.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          variants={fadeIn}
          className="bg-[#2563EB]/5 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Shine & Seal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Professional Expertise
                  </h3>
                  <p className="text-gray-600">
                    Our team is highly trained and experienced in handling all types of surfaces 
                    and cleaning challenges.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Timely Service
                  </h3>
                  <p className="text-gray-600">
                    We respect your time and always complete projects efficiently without 
                    compromising on quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Guaranteed Satisfaction
                  </h3>
                  <p className="text-gray-600">
                    We stand behind our work with a satisfaction guarantee, ensuring you're 
                    completely happy with the results.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Competitive Pricing
                  </h3>
                  <p className="text-gray-600">
                    We offer transparent, competitive pricing with no hidden fees, providing 
                    excellent value for our premium services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeIn}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience the Shine & Seal Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you restore and protect your property's surfaces with our 
            professional pressure washing and sealing services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#2563EB] hover:bg-blue-700 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
