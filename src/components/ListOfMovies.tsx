"use client"
import { MoviesContext, MovieType } from "@/context/MoviesContext"
import { useContext } from "react"

export default function ListOfMovies() {
  const { movies, query } = useContext(MoviesContext)

  return (
    <div className="mt-8">
      {query === "" ? (
        <h1>Escribe para buscar</h1>
      ) : (
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
      )}
    </div>
  )
}
