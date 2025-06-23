import Gallery from "@/components/Gallery";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work Gallery | Shine & Seal',
  description: 'Browse through our portfolio of pressure washing and sealing projects. See the remarkable transformations we\'ve achieved for our clients.',
  // You can add more metadata here, like Open Graph tags for social sharing
  // openGraph: {
  //   title: 'Photo & Video Gallery | Rebiuld Construction',
  //   description: 'Explore Rebiuld Construction project gallery.',
  //   images: [
  //     {
  //       url: '/path/to/your/gallery-og-image.jpg', // Replace with an actual URL to an image
  //       width: 1200,
  //       height: 630,
  //       alt: 'Rebiuld Construction Gallery Preview',
  //     },
  //   ],
  // },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 mb-4 sm:mb-6">
            Welcome to the Showroom
          </h1>
        </div>
        <Gallery />
      </div>
    </div>
  );
} 