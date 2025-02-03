"use client"

import { Button } from "@/design-system/Button/Button"

export function Test() {
  return (
    <Button
      type="button"
      // variant="outlined"
      // contentStyle="narrow"
      onClick={() => console.log(">>>> CLOSE")}
    >
      TEST
    </Button>
  )
}
