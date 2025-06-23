import React from 'react'
import { Metadata } from 'next'
import pagesData from '@/data/pagesData.json'
import Image from 'next/image'
import WoodinvilleImg from '@/public/citys/woodinville.jpg'

export const metadata: Metadata = {
  title: 'Woodinville Pressure Washing Services | Professional Exterior Cleaning',
  description: 'Premium pressure washing solutions for Woodinville\'s wine country estates and residential properties. We provide specialized cleaning for wineries, tasting rooms, patios, and luxury homes. Our eco-friendly pressure washing services protect your property while maintaining its pristine appearance.'
}

function Woodinville() {
  const pageData = pagesData.find(page => page.title === 'Woodinville')

  return (
    <div>
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://photos.smugmug.com/Shine-Seal-Web/i-JxGMHtX/0/KQFgP6jJzmXmxwQ8mPjcCff3GBHgWfZFdGJHW7KtQ/XL/woodinville-XL.jpg"
          alt="Woodinville City"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            Pressure Washing Services in {pageData?.title || 'Woodinville'}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-6">{pageData?.description}</p>
      </div>
    </div>
  )
}

export default Woodinville
