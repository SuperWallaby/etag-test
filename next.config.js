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
            value: "*"
          },
          {
            "key" : "If-None-Match",
            value: "*"
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
