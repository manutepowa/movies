// Esta opción es de next y tiene linter del propio next/linter
// export const revalidate = 10

import FormMovie from "@/components/FormMovie"
import ListOfMovies from "@/components/ListOfMovies"
import { MoviesProvider } from "@/context/MoviesContext"

export default function Home() {
  return (
    <div className="w-full">
      <MoviesProvider>
        <FormMovie />
        <ListOfMovies />
      </MoviesProvider>
    </div>
  )
}
