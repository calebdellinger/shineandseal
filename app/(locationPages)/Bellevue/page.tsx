import React from 'react'
import { Metadata } from 'next'
import pagesData from '@/data/pagesData.json'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Bellevue Pressure Washing Services | Professional Exterior Cleaning',
  description: 'High-end pressure washing services for Bellevue\'s luxury homes and commercial properties. From downtown high-rises to waterfront estates, we deliver superior cleaning results. Specialized in concrete cleaning, building exterior washing, and premium residential services.'
}

function Bellevue() {
  const pageData = pagesData.find(page => page.title === 'Bellevue')

  return (
    <div>
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://photos.smugmug.com/Shine-Seal-Web/i-bch8drT/0/MVF3Rr8j978QRKc5m2b5HTfBhxmBDBkQzjT9MrQ8g/X2/bellevue-X2.jpg"
          alt="Bellevue City"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            Pressure Washing Services in {pageData?.title || 'Bellevue'}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-6">{pageData?.description}</p>
      </div>
    </div>
  )
}

export default Bellevue