import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/stories/design-system/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/design-tokens/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/ui-components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    // "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
}
export default config
