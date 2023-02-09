import Link from "next/link"
import { NavLinkType } from "./types"
import { classNames } from "./utils"

export default function NavLink({ item }: { item: NavLinkType }) {
  return (
    <Link
      key={item.name}
      href={item.href}
      className={classNames(
        item.current
          ? "bg-gray-100 text-gray-900"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
      )}
    >
      <item.icon
        className={classNames(
          item.current
            ? "text-gray-500"
            : "text-gray-400 group-hover:text-gray-500",
          "mr-4 h-6 w-6"
        )}
        aria-hidden="true"
      />
      {item.name}
    </Link>
  )
}