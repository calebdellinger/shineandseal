"use client";

import React from "react";
import Image from "next/image";

interface Image {
  id: string;
  src: string;
  alt: string;
}

interface GalleryImageProps {
  image: Image;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ image }) => {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        placeholder="blur"
        blurDataURL="/placeholder-image.jpg"
      />
    </div>
  );
};

export default GalleryImage;
