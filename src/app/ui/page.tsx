"use client"
import { useState } from "react"
import NavBarDesktop from "@/components/NavBar/NavBar"
import NavToggle from "@/components/NavBar/NavToggle"
import { MoviesProvider } from "@/context/MoviesContext"
import FormMovie from "@/components/FormMovie"
import ListOfMovies from "@/components/ListOfMovies"

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  return (
    <>
      <div className="flex h-full">
        <NavBarDesktop
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
        />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <NavToggle toggleNav={setSidebarOpen} />
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
              {/* Start main area*/}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <MoviesProvider>
                  <FormMovie />
                  <ListOfMovies />
                </MoviesProvider>
              </div>
              {/* End main area */}
            </main>
            <aside className="relative hidden w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
              {/* Start secondary column (hidden on smaller screens) */}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="h-full rounded-lg border-2 border-dashed border-gray-200" />
              </div>
              {/* End secondary column */}
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
