"use client"
import { NewsType } from "@/services/news"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { classNames } from "../NavBar/utils"

interface Props {
  news: NewsType[]
}

export default function NewsNav({ news }: Props) {
  const pathname = usePathname()
  const actualSimplePath = pathname?.split("/").slice(-2)[1]
  return (
    <ul>
      {news.map((newsItem: NewsType, index: number) => {
        const link = newsItem.view_node.split("/").slice(-1)[0]
        console.log({ link, pathname })
        return (
          <li key={index}>
            <Link
              className={classNames(
                actualSimplePath === newsItem.nid
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
              )}
              href={`/news/${link}`}
            >
              {newsItem.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
