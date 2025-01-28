"use client"

import { useEffect } from "react"
import { Toast } from "./types"

const TOAST_DURATION = 2000 // 2 seconds

interface ToastMessageProps {
  toast: Toast
  onClose: () => void
}

export function ToastMessage({ toast, onClose }: ToastMessageProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, TOAST_DURATION)
    return () => clearTimeout(timer)
  }, [onClose])

  const typeClasses = {
    info: "bg-blue-50 text-blue-800 border-blue-200",
    success: "bg-green-50 text-green-800 border-green-200",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
    error: "bg-red-50 text-red-800 border-red-200",
  }

  return (
    <div
      className={`mb-4 p-4 rounded-lg border ${
        typeClasses[toast.type]
      } shadow-lg max-w-sm animate-fade-in`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{toast.title}</h3>
          {toast.description && (
            <p className="mt-1 text-sm opacity-90">{toast.description}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
    </div>
  )
}
