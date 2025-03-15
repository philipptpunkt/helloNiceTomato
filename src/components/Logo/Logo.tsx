import { cn } from "@/utils/cn"
import TomatoLogo from "./assets/hello_nice_tomato_logo.svg"

export function Logo() {
  return (
    <div className="flex items-center">
      <svg
        className={cn(
          "h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12",
          "ml-[-0.5rem] mr-2"
        )}
      >
        <use href={`#${TomatoLogo.id}`} />
      </svg>
      <span className="font-bold text-xl lg:text-3xl">Hello Nice&nbsp;</span>
      <span className="font-black text-primary text-xl lg:text-3xl">
        Tomato
      </span>
    </div>
  )
}
