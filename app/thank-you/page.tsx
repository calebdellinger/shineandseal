"use client";

import React from "react";
import { motion } from "framer-motion";
import { LiaPhoneSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8"
        >
          <svg
            className="w-12 h-12 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        {/* Thank You Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Thank You!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Your message has been sent successfully. We'll get back to you within 24 hours to discuss your pressure washing and sealing needs.
        </motion.p>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-md mx-auto"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Need immediate assistance?
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <LiaPhoneSolid className="text-2xl text-blue-600" />
              <a
                href="tel:425-466-5919"
                className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
              >
                425-466-5919
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MdEmail className="text-2xl text-green-600" />
              <a
                href="mailto:info@shineandseal.com"
                className="text-lg text-gray-700 hover:text-green-600 transition-colors"
              >
                info@shineandseal.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Back to Home
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-sm text-gray-500"
        >
          <p>
            While you wait, feel free to explore our{" "}
            <Link href="/gallery" className="text-blue-600 hover:underline">
              gallery
            </Link>{" "}
            to see examples of our work, or check out our{" "}
            <Link href="/about" className="text-blue-600 hover:underline">
              services
            </Link>{" "}
            to learn more about what we offer.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
} 