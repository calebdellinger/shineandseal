"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LiaPhoneSolid } from "react-icons/lia";
import { MdCheckCircle, MdSchedule, MdStar, MdShield } from "react-icons/md";

const features = [
  "Driveway Sealing",
  "Patio & Walkway Sealing",
  "Garage Floor Sealing",
  "Commercial Floor Sealing",
  "Pool Deck Sealing",
  "Sidewalk Sealing",
  "Parking Lot Sealing",
  "Foundation Sealing"
];

const benefits = [
  "Protects against water damage and freeze-thaw cycles",
  "Prevents oil, grease, and chemical stains",
  "Enhances appearance with rich, deep color",
  "Extends concrete life by 3-5 years",
  "Reduces maintenance and cleaning needs",
  "Increases property value and curb appeal"
];

const sealantTypes = [
  {
    name: "Acrylic Sealer",
    description: "Most popular choice for residential applications",
    features: ["Water-based", "Easy application", "UV resistant", "Breathable"]
  },
  {
    name: "Epoxy Sealer",
    description: "Heavy-duty protection for high-traffic areas",
    features: ["Chemical resistant", "High durability", "Glossy finish", "Long-lasting"]
  },
  {
    name: "Penetrating Sealer",
    description: "Invisible protection that soaks into concrete",
    features: ["Invisible finish", "Deep penetration", "Natural look", "Low maintenance"]
  }
];

export default function ConcreteSealing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="https://photos.smugmug.com/Shine-Seal-Web/i-S6zbkmX/0/LtPG3nBtx6Q8DgkQvptcBjqx85JsDHP73SBgqPvHq/X3/IMG_1848-X3.jpg"
          alt="Professional Concrete Sealing"
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
              Concrete Sealing
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              Protect and enhance your concrete surfaces with professional sealing
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center"
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

      {/* Why Seal Concrete */}
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
                Why Seal Your Concrete?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Concrete sealing is essential for protecting your investment. Unsealed concrete is porous and vulnerable to damage from water, chemicals, and weather elements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MdShield className="text-2xl text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Protection</h3>
                    <p className="text-gray-600">Shields against water, oil, and chemical damage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdStar className="text-2xl text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Enhancement</h3>
                    <p className="text-gray-600">Brings out the natural beauty and color of concrete</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdCheckCircle className="text-2xl text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Longevity</h3>
                    <p className="text-gray-600">Extends the life of your concrete surfaces</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-slate-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Sealing Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Prevents water penetration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Resists oil and grease stains</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Protects against freeze-thaw damage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Reduces maintenance needs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MdCheckCircle className="text-xl" />
                    <span>Increases property value</span>
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
              Concrete Sealing Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional sealing for all types of concrete surfaces
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
                className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <MdShield className="text-2xl text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sealant Types */}
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
              Types of Sealants
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We offer different types of sealants to meet your specific needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {sealantTypes.map((sealant, index) => (
              <motion.div
                key={sealant.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sealant.name}</h3>
                <p className="text-gray-600 mb-4">{sealant.description}</p>
                <ul className="space-y-2">
                  {sealant.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <MdCheckCircle className="text-green-600" />
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
              Benefits of Concrete Sealing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your investment and enhance your property
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
                className="flex items-start space-x-4"
              >
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MdStar className="text-sm text-green-600" />
                </div>
                <p className="text-gray-700">{benefit}</p>
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
              Our Sealing Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional concrete sealing procedure for lasting results
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
              { step: "2", title: "Drying", desc: "Ensure surface is completely dry" },
              { step: "3", title: "Application", desc: "Apply sealant with professional tools" },
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
                <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Protect Your Concrete Investment
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10">
              Get a free estimate for professional concrete sealing services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:425-466-5919"
                className="bg-gray-600 hover:bg-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center"
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