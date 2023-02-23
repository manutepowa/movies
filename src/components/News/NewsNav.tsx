import { getNews, NewsType } from "@/services/news"

import NewsLink from "./NewsLink"

export default async function NewsNav() {
  const news: NewsType[] = await getNews()

  return (
    <ul>
      {news.splice(0, 10).map((newsItem: NewsType, index: number) => {
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
