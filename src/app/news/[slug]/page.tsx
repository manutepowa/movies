import { getNews, NewsType } from "@/services/news"
import { ReactNode } from "react"

export async function generateStaticParams() {
  const response = await fetch(
    "https://www.parquecientificoumh.es/es/movil/api/noticias",
    {
      cache: "no-cache",
    }
  )
  const news = await response.json()

  return news.map((singleNew: NewsType) => {
    return {
      slug: singleNew.view_node.split("/").slice(-1)[0],
    }
  })
}
export default async function New({
  params,
}: {
  params: any
}): Promise<ReactNode> {
  const { slug } = params
  const news: NewsType[] = await getNews()
  const renderedPage: NewsType | undefined = news.find((singleNew) => {
    return singleNew.view_node.split("/").slice(-1)[0] === slug
  })

  return (
    <div>
      <div>{renderedPage?.title}</div>
      {/* Create banner with styles inline with a text and link */}
    </div>
  )
}
