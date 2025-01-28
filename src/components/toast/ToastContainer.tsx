"use client"

import { Toast } from "./types"
import { ToastMessage } from "./ToastMessage"

interface ToastContainerProps {
  toasts: Toast[]
  removeToast: (id: string) => void
}

export function ToastContainer({ toasts, removeToast }: ToastContainerProps) {
  return (
    <>
      {Object.entries(
        toasts.reduce((acc, toast) => {
          const key = `${toast.position}-${toast.alignment}`
          return { ...acc, [key]: [...(acc[key] || []), toast] }
        }, {} as Record<string, Toast[]>)
      ).map(([position, positionToasts]) => (
        <div
          key={position}
          className={`fixed z-50 ${getPositionClasses(position)}`}
        >
          {positionToasts.map((toast) => (
            <ToastMessage
              key={toast.id}
              toast={toast}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      ))}
    </>
  )
}

function getPositionClasses(position: string): string {
  const [vertical, horizontal] = position.split("-")
  const positions = {
    top: "top-4",
    bottom: "bottom-4",
    left: "left-4",
    center: "left-1/2 -translate-x-1/2",
    right: "right-4",
  }
  return `${positions[vertical as keyof typeof positions]} ${
    positions[horizontal as keyof typeof positions]
  }`
}
