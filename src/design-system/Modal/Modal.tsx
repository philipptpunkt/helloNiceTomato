import { cn } from "@/utils/cn"
import { IconButton, IconName } from "../Icon"

interface ModalProps {
  onClose: () => void
  children?: React.ReactNode
}

export function Modal({ onClose, children }: ModalProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-30 w-screen h-screen flex justify-center items-center bg-neutral-950/30 dark:bg-neutral-700/40 backdrop-blur"
      )}
    >
      <div
        className={cn(
          "relative w-full md:w-auto max-w-[90%] bg-background p-4 md:p-8 rounded-xl"
        )}
      >
        <div className="absolute right-[-1rem] top-[-1rem]">
          <IconButton
            iconName={IconName.icX}
            onClick={onClose}
            background="light"
          />
        </div>
        {children}
      </div>
    </div>
  )
}
