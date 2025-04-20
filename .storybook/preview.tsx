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
          { value: "light", title: "Light Theme", icon: "circlehollow" },
          { value: "dark", title: "Dark Theme", icon: "circle" },
        ],
        dynamicTitle: true,
      },
    },
    highlightMode: {
      description: "Toggle element highlighting",
      defaultValue: false,
      toolbar: {
        title: "Highlight",
        icon: "button",
        items: [
          { value: true, title: "Highlight ON", icon: "eye" },
          { value: false, title: "Highlight OFF", icon: "eyeclose" },
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

      // ✅ Update data-theme attribute
      document.documentElement.removeAttribute("data-theme")
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark")
      }

      // ✅ Handle background switch only if default
      const background = context.globals.backgrounds?.value
      const isDefaultBackground =
        background === undefined ||
        background === "light" ||
        background === "dark"

      if (isDefaultBackground) {
        const bgColor = theme === "dark" ? "#1a1a1a" : "#ffffff"
        document.body.style.backgroundColor = bgColor
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
    backgrounds: {
      default: "light",
      values: [
        { name: "White", value: "#ffffff" },
        { name: "Black", value: "#1a1a1a" },
        { name: "Pink", value: "#ff0090" },
        { name: "Blue", value: "#0066cc" },
      ],
    },
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
          { id: "color-contrast", selector: ":not(.ignore-check)" },
          { id: "heading-order", selector: ":not(.ignore-check)" },
          { id: "empty-heading", selector: ":not(.ignore-check)" },
        ],
      },
    },
  },
}

export default preview
