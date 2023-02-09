"use client"

import useMovies from "@/context/MoviesContext"

export default function FormMovie() {
  const { handleSubmit, updateQuery } = useMovies()

  return (
    <div className="w-[500px] mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            id="searchQuery"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
            name="searchQuery"
            onChange={updateQuery}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}
