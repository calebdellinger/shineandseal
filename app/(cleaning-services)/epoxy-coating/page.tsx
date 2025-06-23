"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LiaPhoneSolid } from "react-icons/lia";
import { MdCheckCircle, MdSchedule, MdStar, MdBuild, MdShield } from "react-icons/md";

const features = [
  "Garage Floor Coating",
  "Commercial Floor Coating",
  "Basement Floor Coating",
  "Warehouse Floor Coating",
  "Showroom Floor Coating",
  "Industrial Floor Coating",
  "Retail Floor Coating",
  "Workshop Floor Coating"
];

const benefits = [
  "Extremely durable and long-lasting protection",
  "Resistant to chemicals, oil, and grease stains",
  "Easy to clean and maintain",
  "Slip-resistant surface for safety",
  "Customizable colors and patterns",
  "Increases property value significantly"
];

const epoxyTypes = [
  {
    name: "100% Solid Epoxy",
    description: "Premium coating for maximum durability",
    features: ["Thick film build", "Chemical resistant", "Long-lasting", "Professional finish"]
  },
  {
    name: "Water-Based Epoxy",
    description: "Eco-friendly option with low VOCs",
    features: ["Low odor", "Quick drying", "Easy cleanup", "Environmentally friendly"]
  },
  {
    name: "Metallic Epoxy",
    description: "Decorative coating with stunning effects",
    features: ["Unique appearance", "Customizable", "High-end look", "Durable finish"]
  }
];

export default function EpoxyCoating() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="https://photos.smugmug.com/Shine-Seal-Web/i-qSvK4xW/0/KSRW2LCdzm9cVp3HnS6hjTxkGLmR5L8PqtrNrPk9x/X5/IMG_7799-X5.jpg"
          alt="Professional Epoxy Coating"
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
              Epoxy Floor Coating
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              Transform your floors with durable, beautiful epoxy coatings
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center"
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

      {/* What is Epoxy */}
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
                What is Epoxy Coating?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Epoxy coating is a durable, protective layer applied to concrete floors that creates a seamless, chemical-resistant surface. It's perfect for garages, commercial spaces, and industrial facilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MdBuild className="text-2xl text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Durability</h3>
                    <p className="text-gray-600">Withstands heavy traffic and impact</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdShield className="text-2xl text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Protection</h3>
                    <p className="text-gray-600">Resistant to chemicals, oil, and stains</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdStar className="text-2xl text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Aesthetics</h3>
                    <p className="text-gray-600">Beautiful, customizable finishes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Perfect For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Garage floors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Commercial buildings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Warehouses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Industrial facilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Retail spaces</span>
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
              Epoxy Coating Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional epoxy coating for all types of floors
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
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <MdBuild className="text-2xl text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Epoxy Types */}
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
              Types of Epoxy Coatings
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right epoxy coating for your specific needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {epoxyTypes.map((epoxy, index) => (
              <motion.div
                key={epoxy.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{epoxy.name}</h3>
                <p className="text-gray-600 mb-4">{epoxy.description}</p>
                <ul className="space-y-2">
                  {epoxy.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <MdCheckCircle className="text-purple-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Epoxy Coating
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your floors with professional epoxy coating
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
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <MdStar className="text-2xl text-purple-600" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Epoxy Coating Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional epoxy coating installation procedure
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
              { step: "1", title: "Preparation", desc: "Clean and repair concrete surface" },
              { step: "2", title: "Priming", desc: "Apply epoxy primer for adhesion" },
              { step: "3", title: "Coating", desc: "Apply epoxy coating layers" },
              { step: "4", title: "Curing", desc: "Allow proper curing time" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Transform Your Floors Today
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 mb-8 sm:mb-10">
              Get a free estimate for professional epoxy coating services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:425-466-5919"
                className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center"
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