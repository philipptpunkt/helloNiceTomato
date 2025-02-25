import type { Meta, StoryObj } from "@storybook/react"

import { Icons } from "./Icons"

const meta: Meta = {
  title: "Design System/Icons",
  component: Icons,
  argTypes: {
    iconSize: {
      control: "radio",
      default: "md",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      control: "radio",
      default: "default",
      options: ["default", "primary", "secondary"],
    },
    strokeWidth: {
      control: "radio",
      default: "regular",
      options: ["thin", "light", "regular", "bold"],
    },
  },
  tags: ["autodocs"],
  args: {
    iconSize: "md",
    color: "default",
    strokeWidth: "regular",
  },
} satisfies Meta<typeof Icons>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    iconSize: "md",
    color: "default",
    strokeWidth: "regular",
  },
}
