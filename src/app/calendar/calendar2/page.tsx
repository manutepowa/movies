import ListOfUsers from "@/components/ListOfUsers"
import { ReactNode, Suspense } from "react"

export const dynamic = "force-dynamic"

export default function Calendar2(): ReactNode {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center">Probando suspense</h1>
      <ul className="my-4">
        <li>
          Este texto se verá en la pantalla mientras que el contenido del
          componente que está cargando, se verá en loading
        </li>
      </ul>
      <Suspense fallback={<p className="p-8 bg-yellow-700">Loading........</p>}>
        {/* @ts-expect-error Server Component */}
        <ListOfUsers />
      </Suspense>
    </div>
  )
}
