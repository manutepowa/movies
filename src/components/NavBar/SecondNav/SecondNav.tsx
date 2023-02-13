"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { classNames } from "../utils"

export default function SecondNav() {
  const pathname = usePathname()
  const actualSimplePath = pathname?.split("/").slice(-2)[1]
  return (
    <ul>
      <li>
        <Link
          className={classNames(
            actualSimplePath === "calendar1"
              ? "bg-gray-200 text-gray-900"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
          )}
          href="/calendar/calendar1"
        >
          Calendar 1
        </Link>
      </li>
      <li>
        <Link
          className={classNames(
            actualSimplePath === "calendar2"
              ? "bg-gray-200 text-gray-900"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
          )}
          href="/calendar/calendar2"
        >
          Calendar 2
        </Link>
      </li>
    </ul>
  )
}
