import { getNews, NewsType } from "@/services/news"
import { ReactNode } from "react"

export async function generateStaticParams() {
  const response = await fetch(
    "https://www.parquecientificoumh.es/es/movil/api/noticias",
    {
      cache: "default",
      next: {
        revalidate: 60,
      },
    }
  )
  const news = await response.json()

  return news.splice(0, 10).map((singleNew: NewsType) => {
    return {
      slug: singleNew.view_node.split("/").slice(-1)[0],
    }
  })
}

const url = "https://www.parquecientificoumh.es"

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
  // console.log(renderedPage)
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <h1 className="text-2xl">{renderedPage?.title}</h1>
      <img src={url + renderedPage?.field_image} alt={renderedPage?.nid} />
      {/* Create banner with styles inline with a text and link */}
    </div>
  )
}
