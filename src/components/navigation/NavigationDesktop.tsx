import Link from "next/link"
import { topNavigationRoutes as routes } from "./routes"

export function NavigationDesktop() {
  return (
    <ul className="list-none flex">
      {routes.map((route) => {
        return (
          <li key={route.id} className="mr-8 last:mr-0">
            <Link href={route.href}>{route.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
