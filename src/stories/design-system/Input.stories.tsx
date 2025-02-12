import type { Meta, StoryObj } from "@storybook/react"

import { InputStory } from "./Input"

const meta: Meta = {
  title: "Design System/Input",
  component: InputStory,
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "primary", "secondary"],
    },
    type: {
      control: "radio",
      options: ["text", "email", "url", "number", "password", "search", "tel"],
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
  args: {
    variant: "default",
    placeholder: "your@email.address",
    label: "Label",
    disabled: false,
    type: "text",
    error: false,
  },
} satisfies Meta<typeof InputStory>

export default meta
type Story = StoryObj<typeof meta>

export const InputFieldDefault: Story = {
  args: {
    variant: "default",
    placeholder: "your@email.address",
    label: "Input Field",
    disabled: false,
    type: "text",
    error: false,
  },
}

export const InputFieldPrimary: Story = {
  args: {
    variant: "primary",
    placeholder: "your@email.address",
    label: "Input Field",
    disabled: false,
    type: "text",
    error: false,
  },
}

export const InputFieldSecondary: Story = {
  args: {
    variant: "secondary",
    placeholder: "your@email.address",
    label: "Input Field",
    disabled: false,
    type: "text",
    error: false,
  },
}
