import React from "react"
import { Heading as HeadingUI, HeadingType } from "@/design-system/Typography"

export interface HeadingProps {
  as?: HeadingType
  size?: "normal" | "reduced"
  type: "default" | "highlight"
  text: string
  defaultText: string
  highlightText: string
}

export const Heading = ({
  as,
  size = "normal",
  type = "default",
  text,
  defaultText,
  highlightText,
}: HeadingProps) => {
  if (type === "default") {
    return <HeadingUI type={type} size={size} text={text} />
  }
  return (
    <HeadingUI
      as={as}
      type={type}
      size={size}
      defaultText={defaultText}
      highlightText={highlightText}
    />
  )
}
