import React from 'react'
import { Metadata } from 'next'
import pagesData from '@/data/pagesData.json'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Kirkland Pressure Washing Services | Professional Exterior Cleaning',
  description: 'Premier pressure washing services for Kirkland\'s waterfront properties and urban homes. Expert cleaning of lakeside decks, patios, and walkways. We specialize in salt-water damage prevention and restoration for both residential and commercial properties.'
}

function Kirkland() {
  const pageData = pagesData.find(page => page.title === 'Kirkland')

  return (
    <div>
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://photos.smugmug.com/Shine-Seal-Web/i-RMvxXGq/0/NTDcJMLJW3rxhWk7zJXZJ22thzJtKGrW2djTVk83C/XL/kirkland-XL.jpg"
          alt="Kirkland City"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            Pressure Washing Services in {pageData?.title || 'Kirkland'}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-6">{pageData?.description}</p>
      </div>
    </div>
  )
}

export default Kirkland 