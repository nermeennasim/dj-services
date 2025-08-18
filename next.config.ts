/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable development indicators
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  // Or completely disable in development
  ...(process.env.NODE_ENV === 'development' && {
    devIndicators: {
      buildActivity: false,
    }
  })
}

module.exports = nextConfig