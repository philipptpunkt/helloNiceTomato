import type { Meta, StoryObj } from "@storybook/react"
import { Heading } from "./Heading"

const meta: Meta = {
  title: "Design System/Typography/Heading",
  component: Heading,
  parameters: {
    storyHeadline: "Heading",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["normal", "reduced"],
      description: "Overwrites the default font size of the heading",
    },
    type: {
      control: "radio",
      options: ["default", "highlight"],
      description: "Offers a two-color hightlighted heading",
    },
    text: { if: { arg: "type", eq: "default" }, control: "text" },
    defaultText: {
      if: { arg: "type", eq: "highlight" },
      control: "text",
      description: "The unstyled part of the heading",
    },
    highlightText: {
      if: { arg: "type", eq: "highlight" },
      control: "text",
      description: "The primary color part of the heading",
    },
  },
  tags: ["autodocs"],
  args: {
    type: "default",
    size: "normal",
    text: "Heading",
    defaultText: "Highlight",
    highlightText: "heading",
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: "default",
    text: "Heading",
    size: "normal",
  },
  parameters: {
    storyLabel: "Default Heading",
  },
}

export const Highlight: Story = {
  args: {
    type: "highlight",
    defaultText: "Highlight",
    highlightText: "heading",
    size: "normal",
  },
  parameters: {
    storyLabel: "Highlight Heading",
  },
}

export const Reduced: Story = {
  args: {
    type: "default",
    text: "Heading",
    size: "reduced",
  },
  parameters: {
    storyLabel: "Reduced Heading",
  },
}

export const ReducedHighlight: Story = {
  args: {
    type: "highlight",
    defaultText: "Highlight",
    highlightText: "heading",
    size: "reduced",
  },
  parameters: {
    storyLabel: "Reduced Highlight Heading",
  },
}
