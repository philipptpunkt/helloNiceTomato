import React from "react"
import { Card as CardUI } from "@/design-system/Card"

export interface CardsProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardsProps) => {
  return <CardUI>{children}</CardUI>
}
