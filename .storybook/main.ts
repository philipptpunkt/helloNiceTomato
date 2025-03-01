import type { StorybookConfig } from "@storybook/nextjs"
import type { RuleSetRule } from "webpack"

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/stories/design-system/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/design-tokens/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/ui-components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-highlight",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],

  webpackFinal: async (config) => {
    const fileLoaderRule = config.module?.rules?.find(
      (rule): rule is RuleSetRule =>
        typeof rule === "object" &&
        rule !== null &&
        "test" in rule &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    )

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/
    }

    // Add svg-sprite-loader
    config.module?.rules?.push({
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

export default config
