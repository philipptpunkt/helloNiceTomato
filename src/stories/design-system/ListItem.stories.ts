import type { Meta, StoryContext, StoryObj } from "@storybook/react"
import { useChannel } from "@storybook/preview-api"
import { HIGHLIGHT, RESET_HIGHLIGHT } from "@storybook/addon-highlight"

import { ListItem } from "./ListItem"
import { IconName } from "@/design-system/Icon"

const icons = Object.values(IconName)

const meta: Meta = {
  title: "Design System/List/ListItem",
  component: ListItem,
  parameters: {
    storyHeadline: "List item",
  },
  argTypes: {
    label: { control: "text" },
    iconName: {
      control: { type: "select" },
      options: icons,
    },
    children: { control: "text" },
    horizontalPadding: { control: "boolean" },
    verticalPadding: { control: "boolean" },
  },
  decorators: [
    (story, context: StoryContext) => {
      const emit = useChannel({})
      emit(RESET_HIGHLIGHT)

      if (context.globals.highlightMode) {
        emit(HIGHLIGHT, {
          elements: ["li"],
        })
      }
      return story()
    },
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    horizontalPadding: false,
    verticalPadding: false,
  },
  parameters: {
    storyLabel: "List item default",
  },
}

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: "Label",
  },
  parameters: {
    storyLabel: "List item with label",
  },
}

export const WithIcon: Story = {
  args: {
    ...Default.args,
    iconName: IconName.icPencilSimple,
  },
  parameters: {
    storyLabel: "List item with icon",
  },
}

export const WithLabelAndIcon: Story = {
  args: {
    ...Default.args,
    label: "Label",
    iconName: IconName.icPencilSimple,
  },
  parameters: {
    storyLabel: "List item with label and icon",
  },
}
