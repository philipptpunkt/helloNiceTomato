import { ErrorMessage } from "./_components/ErrorMessage"
import { Suspense } from "react"

export default function VerifyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorMessage />
      </Suspense>
    </div>
  )
}
