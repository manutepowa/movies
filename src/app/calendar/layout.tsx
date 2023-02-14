import AsideContainer from "@/components/containers/AsideContainer"
import MainContainer from "@/components/containers/MainContainer"
import SecondNav from "@/components/NavBar/SecondNav/SecondNav"
import { ReactElement } from "react"

export default function CalendarLayou({
  children,
}: {
  children: ReactElement
}) {
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      <MainContainer>{children}</MainContainer>
      <AsideContainer>
        <SecondNav />
      </AsideContainer>
    </div>
  )
}
