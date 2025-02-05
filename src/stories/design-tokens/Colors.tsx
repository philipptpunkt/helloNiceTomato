import { Label } from "../components/Label"
import { StoryWrapper } from "../components/StoryWrapper"
import { Spacer } from "../components/Spacer"
import { cn } from "@/utils/cn"

const colorsPrimary = [
  {
    label: 50,
    class: "bg-primary-50",
  },
  {
    label: 100,
    class: "bg-primary-100",
  },
  {
    label: 200,
    class: "bg-primary-200",
  },
  {
    label: 300,
    class: "bg-primary-300",
  },
  {
    label: 400,
    class: "bg-primary-400",
  },
  {
    label: 500,
    class: "bg-primary-500",
  },
  {
    label: 600,
    class: "bg-primary-600",
  },
  {
    label: 700,
    class: "bg-primary-700",
  },
  {
    label: 800,
    class: "bg-primary-800",
  },
  {
    label: 900,
    class: "bg-primary-900",
  },
  {
    label: 950,
    class: "bg-primary-950",
  },
]

const colorsSecondary = [
  {
    label: 50,
    class: "bg-secondary-50",
  },
  {
    label: 100,
    class: "bg-secondary-100",
  },
  {
    label: 200,
    class: "bg-secondary-200",
  },
  {
    label: 300,
    class: "bg-secondary-300",
  },
  {
    label: 400,
    class: "bg-secondary-400",
  },
  {
    label: 500,
    class: "bg-secondary-500",
  },
  {
    label: 600,
    class: "bg-secondary-600",
  },
  {
    label: 700,
    class: "bg-secondary-700",
  },
  {
    label: 800,
    class: "bg-secondary-800",
  },
  {
    label: 900,
    class: "bg-secondary-900",
  },
  {
    label: 950,
    class: "bg-secondary-950",
  },
]

export function Colors({ type }: { type: "primary" | "secondary" }) {
  const isPrimary = type === "primary"

  const colorValues = isPrimary ? colorsPrimary : colorsSecondary

  return (
    <StoryWrapper topic="Design Tokens" headline="Color Palette" padded>
      <div>
        <Label text={isPrimary ? "Primary Color" : "Secondary Color"} />
        <div
          className={cn("w-36 h-20 rounded-lg", {
            "bg-primary": isPrimary,
            "bg-secondary": !isPrimary,
          })}
        ></div>
      </div>
      <Spacer />
      <div className="">
        <Label text="Primary Color Palette" />
        <div className="flex gap-2">
          {colorValues.map((item, index) => {
            return (
              <div className="flex flex-col items-center" key={index}>
                <div className={cn("w-16 h-16 rounded-full", item.class)}></div>
                <p className="text-center">{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </StoryWrapper>
  )
}
