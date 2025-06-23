// netlify.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/api/:path*',
          destination: '/.netlify/functions/:path*',
          permanent: true,
        },
      ]
    },
  } 