interface BurgerMenuProps {
  isOpen: boolean
  onClick: () => void
}

export function BurgerMenu({ isOpen, onClick }: BurgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className="relative p-2 hover:bg-primary-50 rounded-full"
      aria-label="Toggle menu"
    >
      <div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300">
        <span
          className={`bg-foreground h-0.5 w-full transform transition-all duration-300 origin-left ${
            isOpen ? "rotate-45 translate-x-px" : ""
          }`}
        />
        <span
          className={`bg-foreground h-0.5 w-full transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-foreground h-0.5 w-full transform transition-all duration-300 origin-left ${
            isOpen ? "-rotate-45 -translate-x-px" : ""
          }`}
        />
      </div>
    </button>
  )
}
