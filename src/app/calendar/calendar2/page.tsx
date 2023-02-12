import ListOfUsers from "@/components/ListOfUsers"
import { ReactNode, Suspense } from "react"

export default function Calendar2(): ReactNode {
  return (
    <div>
      <h1>Probando suspense</h1>
      <ul>
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
