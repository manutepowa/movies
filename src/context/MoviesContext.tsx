"use client"
import { searchMovies } from "@/services/fetchMovies"
import { createContext, useCallback, useContext, useState } from "react"
import debounce from "just-debounce-it"

enum MovieEnum {
  Movie = "movie",
  Series = "series",
  Episode = "episode",
}
export interface MovieType {
  title: string
  year: string
  imdbID: string
  type: MovieEnum
  poster: string
}

interface MoviesContextType {
  query: string
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  movies: MovieType[]
  updateQuery: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MoviesContext = createContext<MoviesContextType>({} as MoviesContextType)

function MoviesProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState<MovieType[]>([])
  // handlesubmit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { searchQuery } = e.target as typeof e.target & {
      searchQuery: { value: string }
    }
    setQuery(searchQuery.value)
    onSearchMovies(searchQuery.value)
  }

  const onSearchMovies = useCallback(
    debounce(async (query: string) => {
      searchMovies({ query })
        .then((m) => {
          setMovies([...m])
        })
        .catch((err) => {
          console.log({ err })
        })
    }, 500),
    []
  )
  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    console.log({ value })
    setQuery(value)
    onSearchMovies(value)
  }

  return (
    <MoviesContext.Provider
      value={{ query, movies, handleSubmit, updateQuery }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export default function useMovies() {
  const { query, movies, handleSubmit, updateQuery } =
    useContext<MoviesContextType>(MoviesContext)
  return { query, movies, handleSubmit, updateQuery }
}
export { MoviesProvider, MoviesContext }
