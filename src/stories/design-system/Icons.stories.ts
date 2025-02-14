import type { Meta, StoryObj } from "@storybook/react"

import { Icons } from "./Icons"

const meta: Meta = {
  title: "Design System/Icons",
  component: Icons,
  argTypes: {
    iconSize: { control: "radio", options: ["xs", "sm", "md", "lg", "xl"] },
    color: {
      control: { type: "color", presetColors: ["red", "green"] },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icons>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    iconSize: "md",
  },
}
