"use client"
import { searchMovies } from "@/services/fetchMovies";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

enum MovieEnum {
  Movie = "movie",
  Series = "series",
  Episode = "episode",
}
export interface MovieType {
  title: string;
  year: string;
  imdbID: string;
  type: MovieEnum;
  poster: string;
}

interface MoviesContextType {
  query: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  movies: MovieType[];
}

const MoviesContext = createContext<MoviesContextType>({} as MoviesContextType)

function MoviesProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState<MovieType[]>([])
  // handlesubmit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuery(e.target.query.value)
  };

  useEffect(() => {
    if (query !== "") {
      searchMovies({ query })
        .then((m) => {
          setMovies([...m])
        })
        .catch((err) => {
          console.log({ err })
        })
    }
  }, [query])

  return (
    <MoviesContext.Provider value={{ query, movies, handleSubmit }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default function useMovies() {
  const { query, movies, handleSubmit } =
    useContext<MoviesContextType>(MoviesContext)
  return { query, movies, handleSubmit }
}
export { MoviesProvider, MoviesContext }
