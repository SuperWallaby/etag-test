/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        "headers" : [
          {
            "key" : "ETag"
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
