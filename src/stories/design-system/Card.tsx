import React from "react"
import { StoryWrapper } from "../components/StoryWrapper"
import { Label } from "../components/Label"
import { Spacer } from "../components/Spacer"
import { Card as CardUI } from "@/design-system/Card"

export interface CardsProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardsProps) => {
  return (
    <StoryWrapper topic="Design System" headline="Card" padded>
      <Label text="Default" />
      <CardUI>{children}</CardUI>
      <Spacer />
    </StoryWrapper>
  )
}
