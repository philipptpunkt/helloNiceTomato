import { IconName } from "./IconNames"

import icCheckCircle from "./svgs/ic-check-circle.svg"
import icMoon from "./svgs/ic-moon.svg"
import icPencilSimple from "./svgs/ic-pencil-simple.svg"
import icSignOut from "./svgs/ic-sign-out.svg"
import icSun from "./svgs/ic-sun.svg"

export interface Svg {
  src: string
  id: string
}

export const iconSymbols = {
  icCheckCircle,
  icMoon,
  icPencilSimple,
  icSignOut,
  icSun,
} satisfies Record<IconName, Svg>
