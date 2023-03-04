import MainContainer from "@/components/containers/MainContainer"

interface CalendarLayoutProps {
  children: JSX.Element
}

export default function TodoLayout({ children }: CalendarLayoutProps) {
  return <MainContainer>{children}</MainContainer>
}
