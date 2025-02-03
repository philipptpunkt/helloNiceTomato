import type { Preview } from "@storybook/react"
import "../src/app/globals.css"
// import "./globals.css"

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        items: [
          { value: "light", title: "Light", icon: "circlehollow" },
          { value: "dark", title: "Dark", icon: "circle" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || "light"
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(theme)

      return story()
    },
  ],
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            selector: ":not(.ignore-check)",
          },
          {
            id: "heading-order",
            selector: ":not(.ignore-check)",
          },
          {
            id: "empty-heading",
            selector: ":not(.ignore-check)",
          },
        ],
      },
    },
  },
}

export default preview
