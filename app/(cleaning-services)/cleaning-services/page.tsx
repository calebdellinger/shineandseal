"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// components/ServiceCard.tsx
interface ServiceCardProps {
  title: string;
  image: StaticImageData | string;
  href: string;
  description: string;
}

const ServiceCard = ({ title, image, href, description }: ServiceCardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Link href={href} className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative w-full aspect-[4/3]">
            {/* Background Image */}
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            {/* Title */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {title}
              </h2>
              <p className="text-gray-200 text-xs sm:text-sm opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      title: "Pressure Washing",
      image: "https://photos.smugmug.com/Shine-Seal-Web/i-V8grhc5/0/KV8DRzW2TnnDxcNP5vBzP736fPH7BZG2299WWjwXG/X4/pressure_washing-X4.jpg",
      href: "/pressure-washing",
      description: "Professional pressure washing for driveways, decks, and exterior surfaces.",
    },
    {
      title: "Soft Washing",
      image: "https://photos.smugmug.com/Shine-Seal-Web/i-LFVQSFs/0/MGpGF7ZgsQkFckkRzQr842t4gqLm5pJXfR5vLPNgb/X4/6F4A1031-X4.jpg",
      href: "/soft-washing",
      description: "Gentle cleaning solution for delicate surfaces like roofs and siding.",
    },
    {
      title: "Concrete Sealing",
      image: "https://photos.smugmug.com/Shine-Seal-Web/i-S6zbkmX/0/LtPG3nBtx6Q8DgkQvptcBjqx85JsDHP73SBgqPvHq/X3/IMG_1848-X3.jpg",
      href: "/concrete-sealing",
      description: "Protect and enhance your concrete surfaces with professional sealing.",
    },
    {
      title: "Epoxy Coating",
      image: "https://photos.smugmug.com/Shine-Seal-Web/i-qSvK4xW/0/KSRW2LCdzm9cVp3HnS6hjTxkGLmR5L8PqtrNrPk9x/X5/IMG_7799-X5.jpg",
      href: "/epoxy-coating",
      description: "Transform your garage or commercial floor with durable epoxy coating.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2563EB] mb-3 sm:mb-4">
              Our Services
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Professional cleaning and sealing solutions for your property
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                href={service.href}
                description={service.description}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
