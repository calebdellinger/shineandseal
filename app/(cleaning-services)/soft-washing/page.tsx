"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LiaPhoneSolid } from "react-icons/lia";
import { MdCheckCircle, MdSchedule, MdStar, MdWaterDrop } from "react-icons/md";

const features = [
  "Roof Cleaning & Treatment",
  "House Siding Washing",
  "Gutters & Downspouts",
  "Vinyl Fence Cleaning",
  "Stucco & Brick Cleaning",
  "Solar Panel Cleaning",
  "Awning & Canopy Cleaning",
  "Delicate Surface Care"
];

const benefits = [
  "Gentle cleaning that won't damage surfaces",
  "Removes algae, moss, and organic growth",
  "Long-lasting protection against regrowth",
  "Safe for all types of roofing materials",
  "Eco-friendly biodegradable solutions",
  "Extends the life of your surfaces"
];

export default function SoftWashing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="https://photos.smugmug.com/Shine-Seal-Web/i-LFVQSFs/0/MGpGF7ZgsQkFckkRzQr842t4gqLm5pJXfR5vLPNgb/X4/6F4A1031-X4.jpg"
          alt="Professional Soft Washing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4 sm:px-6 lg:px-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Gentle Soft Washing
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              Safe and effective cleaning for delicate surfaces that need special care
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:425-466-5919"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                <LiaPhoneSolid className="mr-2 text-xl" />
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Soft Washing */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
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
                What is Soft Washing?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Soft washing is a gentle cleaning method that uses low-pressure water combined with specialized cleaning solutions to safely remove dirt, algae, moss, and other organic growth from delicate surfaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MdWaterDrop className="text-2xl text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Low Pressure</h3>
                    <p className="text-gray-600">Uses gentle water pressure to avoid damage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdCheckCircle className="text-2xl text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Eco-Friendly Solutions</h3>
                    <p className="text-gray-600">Biodegradable cleaning agents that are safe for your family and pets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdStar className="text-2xl text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Long-Lasting Results</h3>
                    <p className="text-gray-600">Prevents regrowth and maintains clean appearance longer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Perfect For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Roofs (all types)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>House siding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Vinyl fences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Solar panels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Stucco surfaces</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Soft Washing Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional soft washing for all your delicate surfaces
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <MdWaterDrop className="text-2xl text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Benefits of Soft Washing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Why soft washing is the smart choice for delicate surfaces
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <MdStar className="text-2xl text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Soft Washing Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional and thorough soft washing procedure
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { step: "1", title: "Inspection", desc: "Assess surface type and condition" },
              { step: "2", title: "Preparation", desc: "Protect surrounding areas and plants" },
              { step: "3", title: "Application", desc: "Apply eco-friendly cleaning solution" },
              { step: "4", title: "Rinse & Dry", desc: "Gentle rinse and natural drying" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Protect Your Delicate Surfaces
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-8 sm:mb-10">
              Get a free estimate for professional soft washing services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:425-466-5919"
                className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                <LiaPhoneSolid className="mr-2 text-xl" />
                Call 425-466-5919
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}