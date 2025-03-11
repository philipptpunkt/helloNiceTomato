"use client"

import QRCodeStyling, { Options } from "qr-code-styling"
import { useEffect, useMemo, useRef, useState } from "react"

export const useQrCode = (initialOptions: Options) => {
  const ref = useRef<HTMLDivElement>(null)
  const qrCode = useMemo(
    () => new QRCodeStyling(initialOptions),
    [initialOptions]
  )

  const [options, setOptions] = useState(initialOptions)

  useEffect(() => {
    if (ref.current) {
      qrCode?.append(ref.current)
    }
  }, [qrCode, ref])

  useEffect(() => {
    if (!qrCode) return
    qrCode.update(options)
  }, [qrCode, options])

  function updateOptions(newOptions: Partial<Options>) {
    setOptions((prev) => ({ ...prev, ...newOptions }))
  }

  return { ref, qrCode, updateOptions }
}
