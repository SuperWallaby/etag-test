/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        "headers" : [
          {
            "key" : "ETag",
            value: undefined
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
