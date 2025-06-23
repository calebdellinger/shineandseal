import React from 'react'
import { Metadata } from 'next'
import pagesData from '@/data/pagesData.json'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Lake Stevens Pressure Washing Services | Professional Exterior Cleaning',
  description: 'Professional pressure washing services for Lake Stevens waterfront properties and residential areas. We excel in dock cleaning, lakeside deck restoration, and complete exterior home washing. Our treatments prevent water damage while maintaining your property\'s appeal.'
}

function LakeStevens() {
  const pageData = pagesData.find(page => page.title === 'Lake Stevens')

  return (
    <div>
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://photos.smugmug.com/Shine-Seal-Web/i-cbDS8nr/0/NdBZ2WN7DRC5SpSbrbVP6Wkx85gmGx4C7vHPjQ7nw/X5/lake-stevens-X5.jpg"
          alt="Lake Stevens City"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            Pressure Washing Services in {pageData?.title || 'Lake Stevens'}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-6">{pageData?.description}</p>
      </div>
    </div>
  )
}

export default LakeStevens
