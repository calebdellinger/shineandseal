"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.jpg";

export default function Navbar() {
  return (
    <div className="w-full px-[15%] h-[90px] flex items-center justify-between bg-white mb-7">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-[#2563EB]">
          <Image src={logo} alt="Fernweh & Co" width={100} height={100} />
        </Link>
      </div>

      {/* Navigation Menu on the right */}
      <div className="space-x-10">
        <Link
          href="/cleaning-services"
          className="text-md px-4 py-2 rounded-md text-[#2563EB] hover:bg-amber-100"
        >
          Services
        </Link>
        <Link
          href="/about"
          className="text-md px-4 py-2 rounded-md text-[#2563EB] hover:bg-amber-100"
        >
          About
        </Link>
        <Link
          href="/gallery"
          className="text-md px-4 py-2 rounded-md text-[#2563EB] hover:bg-amber-100"
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className="text-md text-white bg-[#2563EB] px-4 py-2 rounded-md hover:bg-white hover:text-[#2563EB] hover:border-2 transition-colors duration-300"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
