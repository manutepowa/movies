"use client"
import { MoviesContext, MovieType, QueryState } from "@/context/MoviesContext"
import { useContext } from "react"
import Loading from "./Loading"

export default function ListOfMovies() {
  const { movies, query, state } = useContext(MoviesContext)
  console.log({ state })
  return (
    <div className="mt-8">
      {(state === QueryState.INITIAL || query === "") && (
        <h1>Escribe para buscar</h1>
      )}
      {state === QueryState.LOADING && <Loading />}
      {state === QueryState.SUCCESS && (
        <div>
          <ul className="grid grid-cols-3 gap-4">
            {movies.length > 0 ? (
              movies.map((movie: MovieType) => (
                <li key={movie.imdbID}>
                  <h3>{movie.title}</h3>
                  <div>{movie.year}</div>
                  <img src={movie.poster} alt={movie.title} />
                </li>
              ))
            ) : (
              <div>No hay movies</div>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
