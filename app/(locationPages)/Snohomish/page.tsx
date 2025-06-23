import React from 'react'
import { Metadata } from 'next'
import pagesData from '@/data/pagesData.json'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Snohomish Pressure Washing Services | Professional Exterior Cleaning',
  description: 'Professional pressure washing services in historic Snohomish, WA. Specializing in residential and commercial exterior cleaning, including Victorian-era homes, farmhouses, and downtown storefronts. Our expert pressure washing removes moss, algae, and grime while preserving your property\'s historic charm.'
}

function Snohomish() {
  const pageData = pagesData.find(page => page.title === 'Snohomish')

  return (
    <div>
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://photos.smugmug.com/Shine-Seal-Web/i-TdbzsK3/0/MrzwcG5Dzw2gjBQFxfVwtV7LMgFXZ4GGRdpWqCPMH/X3/snohomish-X3.jpg"
          alt="Snohomish City"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            Pressure Washing Services in {pageData?.title || 'Snohomish'}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-6">{pageData?.description}</p>
      </div>
    </div>
  )
}

export default Snohomish