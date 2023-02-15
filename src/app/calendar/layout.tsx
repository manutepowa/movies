import AsideContainer from "@/components/containers/AsideContainer"
import MainContainer from "@/components/containers/MainContainer"
import SecondNav from "@/components/NavBar/SecondNav/SecondNav"

interface CalendarLayoutProps {
  children: JSX.Element
}

export default function CalendarLayout({ children }: CalendarLayoutProps) {
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      <MainContainer>{children}</MainContainer>
      <AsideContainer>
        <SecondNav />
      </AsideContainer>
    </div>
  )
}
