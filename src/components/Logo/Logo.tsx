import { cn } from "@/utils/cn"
import TomatoLogo from "./assets/hello_nice_tomato_logo.svg"

export function Logo({ withVersion = false }: { withVersion?: boolean }) {
  return (
    <div className="flex items-center">
      <svg className={cn(["h-8 md:h-10 lg:h-12", "w-8 md:w-10 lg:w-12"])}>
        <use href={`#${TomatoLogo.id}`} />
      </svg>
      <span className="font-bold text-xl lg:text-3xl ml-2">
        Hello Nice&nbsp;
      </span>
      <span className="font-black text-primary text-xl lg:text-3xl">
        Tomato
      </span>
      {withVersion ? (
        <span
          className={cn([
            "px-1",
            "ml-2",
            "border-2 border-neutral-300 dark:border-neutral-400",
            "rounded-md",
            "text-neutral-400",
            "text-xs",
            "uppercase",
          ])}
        >
          Beta
        </span>
      ) : null}
    </div>
  )
}
