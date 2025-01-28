"use client"

import { useToast } from "@/components/toast/ToastContext"
import { ToastType } from "./types"

export function ToastTest() {
  const { addToast } = useToast()

  const handleClick = (type: ToastType) => {
    addToast({
      type,
      title: "Profile updated",
      description: "Your profile has been successfully updated",
      position: "top",
      alignment: "center",
    })
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => handleClick("info")}>
        Info
      </button>
      <button onClick={() => handleClick("success")}>Succee</button>
      <button onClick={() => handleClick("warning")}>Warning</button>
      <button onClick={() => handleClick("error")}>Error</button>
    </div>
  )
}
