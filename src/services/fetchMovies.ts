import { MovieType } from "@/context/MoviesContext"

export const URL = "http://www.omdbapi.com/?apikey=4287ad07"

export const searchMovies = async ({ query }: { query: string }) => {
  try {
    const response = await fetch(`${URL}&s=${query}`)
    const json = await response.json()

    if (json.Response === "False") {
      return []
    }

    const movies: MovieType[] = json.Search.map((movie: any) => ({
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster,
    }))

    return movies
  } catch (error) {
    return error
  }
}
