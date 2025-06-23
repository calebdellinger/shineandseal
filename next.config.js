/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photos.smugmug.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Netlify optimizations - removed static export to allow API routes
  distDir: 'out',
}

module.exports = nextConfig 