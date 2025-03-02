import type { Meta, StoryContext, StoryObj } from "@storybook/react"
import { useChannel } from "@storybook/preview-api"
import { HIGHLIGHT, RESET_HIGHLIGHT } from "@storybook/addon-highlight"

import { Label } from "./Label"

const meta: Meta = {
  title: "Design System/Typography/Label",
  component: Label,
  parameters: {
    storyHeadline: "Label",
  },
  argTypes: {
    label: { control: "text" },
    uppercase: { control: "boolean" },
  },
  decorators: [
    (story, context: StoryContext) => {
      const emit = useChannel({})
      emit(RESET_HIGHLIGHT)

      if (context.globals.highlightMode) {
        emit(HIGHLIGHT, {
          elements: ["label"],
        })
      }
      return story()
    },
  ],
  tags: ["autodocs"],
  args: {
    label: "Label text",
    uppercase: false,
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Label text",
  },
  parameters: {
    storyLabel: "Default label",
  },
}

export const Uppercase: Story = {
  args: {
    label: "Label text",
    uppercase: true,
  },
  parameters: {
    storyLabel: "Uppercase text label",
  },
}
