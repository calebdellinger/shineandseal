import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/app/providers";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  fallback: ["system-ui", "arial"],
});

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shineandseal.com"),
  title: {
    template: "%s | Shine & Seal",
    default: "Shine & Seal - Professional Pressure Washing & Sealing Services",
  },
  description:
    "The finest pressure washing and sealing services in the Pacific Northwest. Serving Bellevue, Kirkland, Seattle, and surrounding areas.",
  keywords: [
    "pressure washing",
    "sealing",
    "cleaning services",
    "Bellevue",
    "Kirkland",
    "Seattle",
    "Lake Stevens",
    "Snohomish",
    "driveway cleaning",
    "patio cleaning",
    "professional cleaning",
  ],
  authors: [{ name: "Shine & Seal" }],
  creator: "Shine & Seal",
  publisher: "Shine & Seal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shineandseal.com",
    siteName: "Shine & Seal",
    title: "Shine & Seal - Professional Pressure Washing & Sealing Services",
    description: "The finest pressure washing and sealing services in the Pacific Northwest.",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Shine & Seal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shine & Seal - Professional Pressure Washing & Sealing Services",
    description: "The finest pressure washing and sealing services in the Pacific Northwest.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
    other: {
      me: ["shineandseal.com"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={inter.variable}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://photos.smugmug.com" />
        <link rel="preconnect" href="https://photos.smugmug.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <header className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </header>
            <main className="flex-grow pt-16 sm:pt-20 lg:pt-24">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
