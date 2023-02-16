"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { classNames } from "../NavBar/utils"

interface NewsLinkProps {
  link: string
  title: string
}

export default function NewsLink({ link, title }: NewsLinkProps): JSX.Element {
  const pathname = usePathname()
  const actualSimplePath = pathname?.split("/").slice(-2)[1]
  return (
    <Link
      className={classNames(
        actualSimplePath === link
          ? "bg-gray-200 text-gray-900"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
      )}
      href={`/news/${link}`}
    >
      {title}
    </Link>
  )
}
