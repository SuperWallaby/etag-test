/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*?)",
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
