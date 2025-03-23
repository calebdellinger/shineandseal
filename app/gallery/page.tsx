import Gallery from "@/components/Gallery";
import { StaticImageData } from "next/image";
import closeupDriveway from "@/public/gallery_images/closeup+driveway.jpg";
import cloesup from "@/public/gallery_images/closeup.jpg";
import driveway from "@/public/gallery_images/driveway.jpg";
import frontPorch from "@/public/gallery_images/frontPorch.jpg";
import roundcorner from "@/public/gallery_images/roundcorner.jpg";

interface Image {
  id: string;
  src: StaticImageData;
  alt: string;
}
const images: Image[] = [
  { id: "1", src: closeupDriveway, alt: "Closeup driveway" },
  { id: "2", src: cloesup, alt: "Closeup image" },
  { id: "3", src: driveway, alt: "Driveway view" },
  { id: "4", src: frontPorch, alt: "Front porch" },
  { id: "5", src: roundcorner, alt: "Round corner view" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
        <Gallery images={images} />
      </div>
    </main>
  );
}
