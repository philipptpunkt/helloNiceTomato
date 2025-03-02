import React from "react"
import { Label as LabelUI } from "@/design-system/Typography"

export interface LabelProps {
  label: string
  uppercase?: boolean
}

export const Label = ({ label, uppercase }: LabelProps) => {
  return <LabelUI label={label} uppercase={uppercase} />
}
