import React from "react"
import type { Preview } from "@storybook/react"
import "../src/app/globals.css"
import { StoryWrapper } from "./components/StoryWrapper"
import { Label } from "./components/Label"

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
    (Story, context) => {
      const theme = context.globals.theme || "light"
      document.documentElement.removeAttribute("data-theme")
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark")
      }

      let label = context.parameters.storyLabel
      if (context.viewMode === "docs") {
        label = ""
      }

      const topic = context.parameters.storyTopic ?? "Design System"

      return (
        <StoryWrapper
          topic={topic}
          headline={context.parameters.storyHeadline}
          padded
        >
          <Label text={label} />
          <Story />
        </StoryWrapper>
      )
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
