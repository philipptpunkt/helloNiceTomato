import type { Meta, StoryObj } from "@storybook/react"

import { Typography as TypographyUI } from "./Typography"

const meta: Meta = {
  title: "Design Tokens/Typography",
  component: TypographyUI,
  tags: ["autodocs"],
  parameters: {
    controls: { disable: true },
    // a11y: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    chromatic: { disable: true },
  },
} satisfies Meta<typeof TypographyUI>

export default meta
type Story = StoryObj<typeof meta>

export const Typography: Story = {}
