"use client"

import { useQrCode } from "@/components/qrCode/useQrCode"
import { Button } from "@/design-system/Button"
import { CardWithHeading } from "@/design-system/Card"
import { Select } from "@/design-system/Input"
import { Spacer } from "@/design-system/Layout"
import { Options, FileExtension } from "qr-code-styling"
import { ChangeEvent, useEffect, useState } from "react"
import { SkeletonQrCode } from "./SkeletonQrCode"

const defaultOptions = {
  width: 750,
  height: 750,
  type: "svg",
  data: "https://example.com",
  // image:
  //   "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  margin: 16,
  qrOptions: {
    typeNumber: 0,
    mode: "Byte",
    errorCorrectionLevel: "Q",
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 20,
    crossOrigin: "anonymous",
    saveAsBlob: true,
  },
  dotsOptions: {
    color: "#fff",
  },
  backgroundOptions: {
    color: "#5fb306",
  },
} satisfies Options

export function QrCodeEditor() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted)
    return <SkeletonQrCode screenReaderInfoText="Loading QR Code" />
  return <QrCodeEditorUI />
}

function QrCodeEditorUI() {
  const { ref, qrCode } = useQrCode(defaultOptions)
  const [fileExt, setFileExt] = useState<FileExtension>("jpeg")

  const onExtensionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFileExt(event.target.value as FileExtension)
  }

  const onDownloadClick = () => {
    if (!qrCode) return
    qrCode.download({
      extension: fileExt,
    })
  }

  return (
    <CardWithHeading
      heading={<h2 className="text-xl font-semibold mb-4">Your QR Code</h2>}
    >
      <div className="flex flex-col md:flex-row md:justify-evenly py-8">
        <div className="inline-flex justify-center">
          <div className="w-full max-w-[300px] max-h-[300px]">
            <div
              className="flex items-center max-w-[300px] max-h-[300px] z-0"
              ref={ref}
            />
          </div>
        </div>
        <Spacer size="xl" />
        <div className="flex justify-center items-center w-full md:w-1/2">
          <div className="flex-grow max-w-[300px] space-y-4">
            <Select
              onChange={onExtensionChange}
              value={fileExt}
              variant="default"
            >
              <option value="svg">SVG</option>
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="webp">WEBP</option>
            </Select>
            <Button
              type="button"
              secondary
              contentStyle="full"
              onClick={onDownloadClick}
            >
              Download
            </Button>
            <Button
              type="button"
              variant="outlined"
              secondary
              contentStyle="full"
            >
              Edit QR Code
            </Button>
          </div>
        </div>
      </div>
    </CardWithHeading>
  )
}
