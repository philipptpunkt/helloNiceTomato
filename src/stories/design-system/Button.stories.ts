import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { Button } from "./Button"

const meta: Meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    storyHeadline: "Button",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["contained", "outlined", "text"],
    },
    contentStyle: {
      control: "radio",
      options: ["wide", "narrow", "snug", "full"],
    },
    secondary: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
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
