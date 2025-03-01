import type { Meta, StoryObj } from "@storybook/react"

import { Colors } from "./Colors"

const meta: Meta = {
  title: "Design Tokens/Colors",
  component: Colors,
  parameters: {
    storyTopic: "Design Tokens",
    storyHeadline: "Colors",
    controls: { disable: true },
    a11y: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    chromatic: { disable: true },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Colors>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: "primary",
  },
}

export const Secondary: Story = {
  args: {
    type: "secondary",
  },
}
