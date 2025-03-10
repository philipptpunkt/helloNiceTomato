import { Spacer } from "@/design-system/Layout"
import { Rect } from "@/design-system/Skeleton"
export function Skeleton({
  screenReaderInfoText,
}: {
  screenReaderInfoText: string
}) {
  return (
    <div
      className="px-6 py-4"
      role="status"
      aria-label="Loading content"
      aria-busy="true"
    >
      <div aria-hidden="true">
        <Rect width="full" height={32} />
        <Spacer size="lg" />
        <Rect width="full" height={16} />
        <Spacer size="xs" />
        <Rect width="full" height={24} />
        <Spacer size="md" />
        <Rect width="full" height={16} />
        <Spacer size="xs" />
        <Rect width="full" height={24} />
        <Spacer size="md" />
        <Rect width="full" height={16} />
        <Spacer size="xs" />
        <Rect width="full" height={24} />
      </div>
      <span className="sr-only">{screenReaderInfoText}</span>
    </div>
  )
}
