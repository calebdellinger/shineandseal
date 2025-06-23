import React from 'react'
import { Metadata } from 'next'
import pagesData from '@/data/pagesData.json'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Seattle Pressure Washing Services | Professional Exterior Cleaning',
  description: 'Comprehensive pressure washing services throughout Seattle, from Capitol Hill to West Seattle. Expert cleaning for urban homes, condos, and commercial buildings. We tackle city grime, graffiti removal, and restore surfaces to their original beauty while using environmentally conscious methods.'
}

function Seattle() {
  const pageData = pagesData.find(page => page.title === 'Seattle')

  return (
    <div>
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://photos.smugmug.com/Shine-Seal-Web/i-z4sVHvW/0/KKhMVDHzvkVvqfQWHKzmjHkTPcXVxr9RPnGD6R32M/X4/seattle-X4.jpg"
          alt="Seattle City"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            Pressure Washing Services in {pageData?.title || 'Seattle'}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-6">{pageData?.description}</p>
      </div>
    </div>
  )
}

export default Seattle 