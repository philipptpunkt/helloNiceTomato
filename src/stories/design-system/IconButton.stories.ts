import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { IconButton } from "./IconButton"
import { IconName } from "@/design-system/Icon"

const icons = Object.values(IconName)

const meta: Meta<typeof IconButton> = {
  title: "Design System/IconButton",
  component: IconButton,
  argTypes: {
    iconName: {
      control: { type: "select" },
      options: icons,
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      control: "radio",
      options: ["default", "primary", "secondary"],
    },
    background: {
      control: "radio",
      options: ["transparent", "light", "primary", "secondary"],
    },
    strokeWidth: {
      control: "radio",
      options: ["thin", "light", "regular", "bold"],
    },
  },
  tags: ["autodocs"],
  args: {
    iconName: IconName.icButterfly,
    size: "md",
    color: "default",
    background: "transparent",
    strokeWidth: "regular",
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    iconName: IconName.icButterfly,
    size: "md",
    color: "default",
    background: "transparent",
    strokeWidth: "regular",
  },
}
