import { topNavigationRoutes as routes } from "./routes"
import { LinkItem } from "./LinkItem"

export function NavigationDesktop() {
  return (
    <ul className="list-none flex">
      {routes.map((route) => {
        return (
          <li key={route.id} className="mr-8 last:mr-0">
            <LinkItem {...route} />
          </li>
        )
      })}
    </ul>
  )
}
