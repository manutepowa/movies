import ListOfUsers from "@/components/ListOfUsers"
import Loading from "@/components/Loading"
import { Suspense } from "react"

export default function Calendar2(): JSX.Element {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center">Probando suspense</h1>
      <ul className="my-4">
        <li>
          Este texto se verá en la pantalla mientras que el contenido del
          componente que está cargando, se verá en loading
        </li>
      </ul>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <ListOfUsers />
      </Suspense>
    </div>
  )
}
