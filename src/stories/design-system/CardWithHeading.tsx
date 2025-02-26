import React from "react"
import { StoryWrapper } from "../components/StoryWrapper"
import { Label } from "../components/Label"
import { Spacer } from "../components/Spacer"
import { CardWithHeading as CardUI } from "@/design-system/Card"
import { Heading } from "@/design-system/Typography"

export interface CardsProps {
  heading: React.ReactNode
  children: React.ReactNode
}

export const CardWithHeading = ({ heading, children }: CardsProps) => {
  return (
    <StoryWrapper topic="Design System" headline="Card with heading" padded>
      <Label text="Default" />
      <CardUI
        heading={
          <Heading type="default" size="reduced" text={heading as string} />
        }
      >
        {children}
      </CardUI>
      <Spacer />
    </StoryWrapper>
  )
}
