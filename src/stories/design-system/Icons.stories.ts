import type { Meta, StoryObj } from "@storybook/react"

import { Icons } from "./Icons"

const meta: Meta = {
  title: "Design System/Icons",
  component: Icons,
  argTypes: {
    iconSize: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      control: "radio",
      options: ["default", "primary", "secondary"],
    },
    strokeWidth: {
      control: "radio",
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
