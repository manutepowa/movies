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
  onFetchMovies: () => void;
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
  const onFetchMovies = () => {
    setMovies([])
  }

  useEffect(() => {
    if (query !== "") {
      searchMovies({ query })
        .then((res) => {
          console.log("asfasfsd")
          setMovies(res.Search)
        })
        .catch((err) => {
          console.log({ err })
        })
    }
  }, [query])

  return (
    <MoviesContext.Provider value={{ query, onFetchMovies, movies, handleSubmit }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default function useMovies() {
  const { query, onFetchMovies, movies, handleSubmit } =
    useContext<MoviesContextType>(MoviesContext)
  return { query, onFetchMovies, movies, handleSubmit }
}
export { MoviesProvider, MoviesContext }
