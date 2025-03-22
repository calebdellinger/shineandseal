import Image, { StaticImageData } from "next/image";
import pressure_washing from "@/public/pressure_washing.jpg"; // Add your actual image paths
import before from "@/public/before.jpg";
import logo from "@/public/logo.jpg";
import Link from "next/link";

// components/ServiceCard.jsx
interface ServiceCardProps {
  title: string;
  index: number;
  image: StaticImageData; // Add image to the interface
  href: string;
}

const ServiceCard = ({ title, index, image, href }: ServiceCardProps) => {
  const isLeft = index % 2 === 0;

  return (
    <Link href={href}>
      <div
        className={`flex flex-col md:flex-row ${
          isLeft ? "" : "md:flex-row-reverse"
        } mb-12`}
      >
        <div className="md:w-1/2 p-6 flex items-center justify-center">
          <h2 className="text-3xl font-extralight text-[#ebbd25] text-center">
            {title}
          </h2>
        </div>
        <div className="md:w-1/2 p-6">
          <div className="relative h-64 w-full">
            <Image
              src={image} // Use the passed image prop
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Services() {
  const services = [
    {
      title: "Pressure Washing",
      image: pressure_washing,
      href: "/pressure-washing",
    },
    {
      title: "Soft Washing",
      image: before,
      href: "/soft-washing",
    },
    {
      title: "Concrete Sealing",
      image: logo,
      href: "/concrete-sealing",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#2563EB] italic text-center mb-12">
        Our Services
      </h1>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          index={index}
          image={service.image} // Pass the image to the component
          href={service.href}
        />
      ))}
    </div>
  );
}
