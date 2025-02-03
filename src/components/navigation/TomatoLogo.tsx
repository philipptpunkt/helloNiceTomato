export function TomatoLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        className="fill-red-600"
      />
      <path
        d="M12 2C11 2 10.5 3 10.5 4C10.5 5 11.5 5.5 12 5.5"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 2C15 2 15.5 3 15.5 4C15.5 5 14.5 5.5 14 5.5"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
