import type { Meta, StoryContext, StoryObj } from "@storybook/react"
import { useChannel } from "@storybook/preview-api"
import { HIGHLIGHT, RESET_HIGHLIGHT } from "@storybook/addon-highlight"
import { fn } from "@storybook/test"

import { Button } from "./Button"

const meta: Meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    storyHeadline: "Button",
  },
  argTypes: {
    onClick: { action: "clicked", description: "OnClick handler" },
    label: { control: "text", description: "Button label" },
    variant: {
      description: "Base variant selection",
      control: "radio",
      options: ["contained", "outlined", "text"],
    },
    contentStyle: {
      description: "Defines the horizontal spacing around the button label",
      control: "radio",
      options: ["wide", "narrow", "snug", "full"],
    },
    secondary: {
      description: "Enables the secondary color option",
      control: "boolean",
    },
    disabled: {
      description: "Disabled state of the button",
      control: "boolean",
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
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    variant: "contained",
    contentStyle: "wide",
    secondary: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Contained: Story = {
  args: {
    variant: "contained",
    contentStyle: "wide",
    label: "Click Me",
    secondary: false,
    disabled: false,
  },
  parameters: {
    storyLabel: "Contained Button",
  },
}

export const Outlined: Story = {
  args: {
    ...Contained.args,
    variant: "outlined",
  },
  parameters: {
    storyLabel: "Outlined Button",
  },
}

export const Text: Story = {
  args: {
    ...Contained.args,
    variant: "text",
  },
  parameters: {
    storyLabel: "Text Button",
  },
}
