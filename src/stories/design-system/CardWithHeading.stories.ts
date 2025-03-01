import type { Meta, StoryObj } from "@storybook/react"

import { CardWithHeading } from "./CardWithHeading"

const meta: Meta = {
  title: "Design System/Cards/CardWithHeading",
  component: CardWithHeading,
  parameters: {
    storyHeadline: "Card with heading",
  },
  argTypes: {
    heading: { control: "text" },
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardWithHeading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: "Heading",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
}
