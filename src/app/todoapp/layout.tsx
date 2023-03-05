import MainContainer from "@/components/containers/MainContainer"
import "./styles/todo.css"
interface CalendarLayoutProps {
  children: JSX.Element
}

export default function TodoLayout({ children }: CalendarLayoutProps) {
  return <MainContainer>{children}</MainContainer>
}
