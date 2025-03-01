import type { Meta, StoryObj } from "@storybook/react"

import { InputStory } from "./Input"

const meta: Meta = {
  title: "Design System/Input",
  component: InputStory,
  parameters: {
    storyHeadline: "Input",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "primary", "secondary"],
    },
    type: {
      control: "radio",
      options: ["text", "email", "url", "number", "password", "search", "tel"],
    },
    label: {
      control: "text",
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
    disabled: false,
    type: "text",
    error: false,
  },
} satisfies Meta<typeof InputStory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
    placeholder: "your@email.address",
    disabled: false,
    type: "email",
    error: false,
  },
  parameters: {
    storyLabel: "Default input",
  },
}

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: "primary",
  },
  parameters: {
    storyLabel: "Primary input",
  },
}

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
  },
  parameters: {
    storyLabel: "Secondary input",
  },
}

export const DefaultWithLabel: Story = {
  args: {
    ...Default.args,
    label: "Please enter your email address",
  },
  parameters: {
    storyLabel: "Input with label",
  },
}

export const DefaultWithHelpText: Story = {
  args: {
    ...DefaultWithLabel.args,
    placeholder: "",
    type: "password",
    label: "Password",
    helpText: "Your password must be at least 8 characters long",
  },
  parameters: {
    storyLabel: "Input with label",
  },
}

export const DefaultWithError: Story = {
  args: {
    ...DefaultWithLabel.args,
    error: true,
  },
  parameters: {
    storyLabel: "Input with error",
  },
}

export const DefaultWithErrorText: Story = {
  args: {
    ...DefaultWithLabel.args,
    error: "Your email address is invalid",
  },
  parameters: {
    storyLabel: "Input with error text",
  },
}

export const DefaultDisabled: Story = {
  args: {
    ...DefaultWithLabel.args,
    disabled: true,
  },
  parameters: {
    storyLabel: "Input disabled",
  },
}
