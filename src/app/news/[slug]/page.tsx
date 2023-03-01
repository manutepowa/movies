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
    <div className="flex flex-col max-w-4xl mx-auto items-center justify-center gap-y-4">
      <h1 className="text-2xl">{renderedPage?.title}</h1>
      <div className="flex max-w-[500px]">
        <img src={url + renderedPage?.field_image} alt={renderedPage?.nid} />
      </div>
      <div>
        {renderedPage?.field_tags.split(", ").map((tag, index) => {
          return (
            <span
              key={index}
              className="flex-nowrap bg-indigo-100 inline-block text-gray-700 text-xs font-semibold rounded-full px-2 py-1 mr-2"
            >
              {tag}
            </span>
          )
        })}
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: renderedPage?.body || "",
        }}
      />

      {/* Create banner with styles inline with a text and link */}
    </div>
  )
}
