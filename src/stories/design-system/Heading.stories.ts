import type { Meta, StoryContext, StoryObj } from "@storybook/react"
import { useChannel } from "@storybook/preview-api"
import { HIGHLIGHT, RESET_HIGHLIGHT } from "@storybook/addon-highlight"

import { Heading } from "./Heading"

const meta: Meta = {
  title: "Design System/Typography/Heading",
  component: Heading,
  parameters: {
    storyHeadline: "Heading",
  },
  argTypes: {
    as: {
      control: "radio",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
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
  decorators: [
    (story, context: StoryContext) => {
      const emit = useChannel({})
      emit(RESET_HIGHLIGHT)

      if (context.globals.highlightMode) {
        emit(HIGHLIGHT, {
          elements: ["h1", "h2", "h3", "h4", "h5", "h6"],
        })
      }
      return story()
    },
  ],
  tags: ["autodocs"],
  args: {
    as: "h1",
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
    as: "h1",
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
    as: "h1",
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
    as: "h1",
    type: "highlight",
    defaultText: "Highlight",
    highlightText: "heading",
    size: "reduced",
  },
  parameters: {
    storyLabel: "Reduced Highlight Heading",
  },
}
