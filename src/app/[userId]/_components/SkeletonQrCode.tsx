import { Spacer } from "@/design-system/Layout"
import { Rect } from "@/design-system/Skeleton"
export function SkeletonQrCode({
  screenReaderInfoText,
}: {
  screenReaderInfoText: string
}) {
  return (
    <div
      className="px-16 py-4"
      role="status"
      aria-label="Loading content"
      aria-busy="true"
    >
      <div aria-hidden="true">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <Rect width={300} height={300} />

          <div className="flex flex-col justify-center items-center px-12 my-8 md:mt-0">
            <Rect width={320} height={36} borderRadius="full" />
            <Spacer size="md" />
            <Rect width={320} height={36} borderRadius="full" />
            <Spacer size="md" />
            <Rect width={320} height={36} borderRadius="full" />
          </div>
        </div>
      </div>
      <span className="sr-only">{screenReaderInfoText}</span>
    </div>
  )
}
