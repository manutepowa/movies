interface RootObject {
  data: Datum[]
  meta: Meta
}

interface Meta {
  pagination: Pagination
}

interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

interface Datum {
  id: number
  attributes: Attributes
}

interface Attributes {
  titulo_es: string
  titulo_en: string
  subtitulo_es: string
  subtitulo_en: string
  descripcion_tecnologia: string
  aplicacion_tecnologia: string
  ventajas_aspectos: string
  proyectos_investigacion: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  justificacion_grado_desarrollo: string
  situacion_derechos_propiedad?: string
  modelo?: string
  corregido?: boolean
}

async function getUsers(): Promise<RootObject> {
  const response = await fetch(
    "https://apipatentes.fundacionumh.es/api/ofertas-tecnologicas",
    {
      cache: "no-cache",
    }
  )
  const users = response.json()
  return users
}
export default async function ListOfUsers(): Promise<JSX.Element> {
  const { data: users } = await getUsers()
  return (
    <div>
      {users &&
        users.map((user: Datum) => {
          return <div key={user.id}>{user.attributes.titulo_es}</div>
        })}
    </div>
  )
}
