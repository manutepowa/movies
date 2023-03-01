const url = "https://www.parquecientificoumh.es/es/movil/api/noticias"

export interface NewsType {
  title: string
  field_alineacion_imagen_noticia: string
  delta: string
  body: string | null
  comment: string
  field_landing_page: string
  field_destacada_portada: string
  field_tags: string
  field_evento: string
  field_idioma_temporal: string
  field_subtitulo_entradilla: string
  field_tamano_imagen_noticia: string
  field_image_thumbnail: string
  field_image: string
  nid: string
  created: string
  langcode: string
  view_node: string
}

export async function getNews() {
  const response = await fetch(url)
  const news = await response.json()
  return news
}
