import AsideContainer from "@/components/containers/AsideContainer"
import MainContainer from "@/components/containers/MainContainer"
import NewsNav from "@/components/News/NewsNav"
import { getNews } from "@/services/news"

interface NewsLayoutProps {
  children: JSX.Element
}

export default async function NewsLayout({ children }: NewsLayoutProps) {
  const news = await getNews()

  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      <MainContainer>{children}</MainContainer>
      <AsideContainer>
        <NewsNav news={news} />
      </AsideContainer>
    </div>
  )
}
