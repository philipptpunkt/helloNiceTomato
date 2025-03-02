import React from "react"
import { Heading as HeadingUI } from "@/design-system/Typography"

export interface HeadingProps {
  size?: "normal" | "reduced"
  type: "default" | "highlight"
  text: string
  defaultText: string
  highlightText: string
}

export const Heading = ({
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
      type={type}
      size={size}
      defaultText={defaultText}
      highlightText={highlightText}
    />
  )
}
