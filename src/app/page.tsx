// Esta opción es de next y tiene linter del propio next/linter
// export const revalidate = 10

import FormMovie from "@/components/FormMovie"
import { MoviesProvider } from "@/context/MoviesContext"

export default function Home() {
  return (
    <div>
      <MoviesProvider>
        <FormMovie />
      </MoviesProvider>
    </div>
  )
}
