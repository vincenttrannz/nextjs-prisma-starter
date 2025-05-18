/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 300000,
  output: 'standalone',
  images: {
    loader: "default",
    domains: ["nextjs-prisma-starter.localhost", "localhost", "0.0.0.0"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
}

export default nextConfig
