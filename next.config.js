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
            value: "undefined"
          },
          {
            "key" : "If-None-Match",
            value: "undefined"
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
