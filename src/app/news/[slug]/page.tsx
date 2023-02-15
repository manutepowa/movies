import { getNews, NewsType } from "@/services/news"
import { ReactNode } from "react"

export async function generateStaticParams() {
  const response = await fetch(
    "https://www.parquecientificoumh.es/es/movil/api/noticias",
    {
      cache: "default",
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
  const renderedPage: NewsType = news.filter((singleNew) => {
    return singleNew.view_node.split("/").slice(-1)[0] === slug
  })

  return <div>{renderedPage.title}</div>
}
