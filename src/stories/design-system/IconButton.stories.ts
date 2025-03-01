import type { Meta, StoryContext, StoryObj } from "@storybook/react"
import { useChannel } from "@storybook/preview-api"
import { HIGHLIGHT, RESET_HIGHLIGHT } from "@storybook/addon-highlight"
import { fn } from "@storybook/test"

import { IconButton } from "./IconButton"
import { IconName } from "@/design-system/Icon"

const icons = Object.values(IconName)

const meta: Meta = {
  title: "Design System/IconButton",
  component: IconButton,
  parameters: {
    storyHeadline: "Icon Button",
  },
  argTypes: {
    onClick: {
      action: "clicked",
    },
    iconName: {
      description: "Enum value from IconName",
      control: { type: "select" },
      options: icons,
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      description: "Stroke color of icon",
      control: "radio",
      options: ["default", "primary", "secondary"],
    },
    background: {
      description: "Background color theme of button",
      control: "radio",
      options: ["transparent", "light", "primary", "secondary"],
    },
    strokeWidth: {
      control: "radio",
      options: ["thin", "light", "regular", "bold"],
    },
  },
  decorators: [
    (story, context: StoryContext) => {
      const emit = useChannel({})
      emit(RESET_HIGHLIGHT)

      if (context.globals.highlightMode) {
        emit(HIGHLIGHT, {
          elements: ["button"],
        })
      }
      return story()
    },
  ],
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    iconName: IconName.icButterfly,
    size: "md",
    color: "default",
    background: "transparent",
    strokeWidth: "regular",
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onClick: fn(),
    iconName: IconName.icButterfly,
    size: "md",
    color: "default",
    background: "transparent",
    strokeWidth: "regular",
  },
}
