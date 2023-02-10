import { MoviesProvider } from "@/context/MoviesContext"
import FormMovie from "@/components/FormMovie"
import ListOfMovies from "@/components/ListOfMovies"
import MainContainer from "@/components/containers/MainContainer"
import AsideContainer from "@/components/containers/AsideContainer"

export default function Example() {
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      <MainContainer>
        {/* movie app */}
        <MoviesProvider>
          <FormMovie />
          <ListOfMovies />
        </MoviesProvider>
        {/* end movie app */}
      </MainContainer>
      <AsideContainer>
        <h1>Contenido Dashboard</h1>
      </AsideContainer>
    </div>
  )
}
