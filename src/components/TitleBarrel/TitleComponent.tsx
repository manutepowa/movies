import { TitleProp } from "./types"

const TitleComponent = ({ title }: TitleProp) => {
  return <h1 className="text-2xl text-white">{title}</h1>
}

export default TitleComponent
