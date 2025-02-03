import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/stories/design-system/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    // "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    // {
    //   name: "@storybook/addon-styling",
    //   options: {
    //     postCss: true,
    //   },
    // },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
}
export default config
