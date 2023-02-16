import AsideContainer from "@/components/containers/AsideContainer"
import MainContainer from "@/components/containers/MainContainer"
import NewsNav from "@/components/News/NewsNav"
import { Suspense } from "react"
// export const dynamic = "force-dynamic"
interface NewsLayoutProps {
  children: JSX.Element
}

export default function NewsLayout({ children }: NewsLayoutProps): JSX.Element {
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      <MainContainer>{children}</MainContainer>
      <AsideContainer>
        <Suspense fallback={<div>Cargando menú...</div>}>
          <NewsNav />
        </Suspense>
      </AsideContainer>
    </div>
  )
}
