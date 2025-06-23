"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Slider } from "@/components/BeforeAndAfter";
import { LiaPhoneSolid } from "react-icons/lia";
import { MdCheckCircle, MdStar, MdSchedule, MdShield } from "react-icons/md";

const benefits = [
  "Professional equipment and techniques",
  "Eco-friendly cleaning solutions",
  "Licensed and insured service",
  "Satisfaction guaranteed",
  "Free estimates available",
  "Local family-owned business"
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://photos.smugmug.com/Shine-Seal-Web/i-V8grhc5/0/KV8DRzW2TnnDxcNP5vBzP736fPH7BZG2299WWjwXG/X4/pressure_washing-X4.jpg"
          alt="Professional Cleaning Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-blue-400">Wash Away</span>
              <br />
              <span className="text-amber-400 italic">Seal the Day</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Professional pressure washing, soft washing, concrete sealing, and epoxy coating services
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:425-466-5919"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center text-lg border border-white/30"
            >
              <LiaPhoneSolid className="mr-2 text-xl" />
              Call 425-466-5919
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Shine & Seal?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're your trusted partner for all your cleaning and sealing needs. Our commitment to quality, professionalism, and customer satisfaction sets us apart.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <MdCheckCircle className="text-2xl text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Property?</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <MdSchedule className="text-xl" />
                    <span>Free estimates available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MdShield className="text-xl" />
                    <span>Licensed and insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MdStar className="text-xl" />
                    <span>Satisfaction guaranteed</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center w-full"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to See the Difference?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10">
              Join hundreds of satisfied customers who trust us with their property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center text-lg"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:425-466-5919"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center text-lg"
              >
                <LiaPhoneSolid className="mr-2 text-xl" />
                Call 425-466-5919
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-2xl">
              <Slider />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 