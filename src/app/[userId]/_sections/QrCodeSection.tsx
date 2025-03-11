"use client"

import { useQrCode } from "@/components/qrCode/useQrCode"
import { Button } from "@/design-system/Button"
import { CardWithHeading } from "@/design-system/Card"
import { Select } from "@/design-system/Input"
import { Options, FileExtension } from "qr-code-styling"
import { ChangeEvent, useEffect, useState } from "react"
import { SkeletonQrCode } from "../_components/SkeletonQrCode"
import { Modal } from "@/design-system/Modal"

const defaultOptions = {
  width: 750,
  height: 750,
  type: "canvas",
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

export function QrCodeSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted)
    return <SkeletonQrCode screenReaderInfoText="Loading QR Code" />
  return <QrCodeUI />
}

function QrCodeUI() {
  const [showModal, setShowModal] = useState(false)
  const [fileExt, setFileExt] = useState<FileExtension>("jpeg")
  const { ref, qrCode } = useQrCode(defaultOptions)

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
    <>
      <CardWithHeading
        heading={<h2 className="text-xl font-semibold mb-4">Your QR Code</h2>}
      >
        <div className="flex flex-col md:flex-row md:justify-evenly py-8">
          <div className="flex justify-center w-full">
            <div className="qr-code" ref={ref} />
          </div>
          <div className="flex justify-center items-center w-full mt-8 md:mt-0">
            <div className="flex-grow w-full max-w-[300px] space-y-4">
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
                onClick={() => setShowModal(true)}
              >
                Edit QR Code
              </Button>
            </div>
          </div>
        </div>
      </CardWithHeading>
      {showModal ? (
        <QrCodeEditModal onClose={() => setShowModal(false)} />
      ) : null}
    </>
  )
}

function QrCodeEditModal({ onClose }: { onClose: () => void }) {
  return <Modal onClose={onClose}>Test Modal</Modal>
}
