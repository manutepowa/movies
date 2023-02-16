import { getNews, NewsType } from "@/services/news"
import React from "react"

import NewsLink from "./NewsLink"

export default async function NewsNav(): Promise<JSX.Element> {
  const news: NewsType[] = await getNews()

  return (
    <ul>
      {news.map((newsItem: NewsType, index: number) => {
        const link = newsItem.view_node.split("/").slice(-1)[0]
        return (
          <li key={index}>
            <NewsLink link={link} title={newsItem.title} />
          </li>
        )
      })}
    </ul>
  )
}
