import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.bsky.app",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "svg-sprite-loader",
          options: {
            symbolId: "[name]_[hash]",
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig
