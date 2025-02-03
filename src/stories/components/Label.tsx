export function Label({ text }: { text: string }) {
  return (
    <h2 className="text-slate-400 dark:text-slate-300 text-lg font-normal uppercase py-4 tracking-wider ignore-check">
      {text}
    </h2>
  )
}
