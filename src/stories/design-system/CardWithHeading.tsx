import React from "react"
import { CardWithHeading as CardUI } from "@/design-system/Card"
import { Heading } from "@/design-system/Typography"

export interface CardsProps {
  heading: React.ReactNode
  children: React.ReactNode
}

export const CardWithHeading = ({ heading, children }: CardsProps) => {
  return (
    <CardUI
      heading={
        <Heading type="default" size="reduced" text={heading as string} />
      }
    >
      {children}
    </CardUI>
  )
}
