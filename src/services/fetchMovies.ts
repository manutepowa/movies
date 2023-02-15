import { MovieType } from "@/context/MoviesContext"

export const URL = "http://www.omdbapi.com/?apikey=a0bb207a"

interface MovieAPI {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const searchMovies = async ({
  query,
}: {
  query: string
}): Promise<MovieType[]> => {
  try {
    const response = await fetch(`${URL}&s=${query}`)
    const json = await response.json()

    if (json.Response === "False") {
      return []
    }

    const movies: MovieType[] = json.Search.map((movie: MovieAPI) => ({
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster,
    }))

    return movies
  } catch (error) {
    return error as any
  }
}
