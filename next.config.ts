import type { NextConfig } from "next"
import type { RuleSetRule } from "webpack"

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
    // config.module.rules = config.module.rules.filter(
    //   (rule: RuleSetRule) =>
    //     !(rule.test instanceof RegExp && rule.test.test(".svg"))
    // )

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
