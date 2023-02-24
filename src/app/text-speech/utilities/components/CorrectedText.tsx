import Word from "./Word"

interface Props {
  text: string
  matches: any
}
export default function CorrectedText({ text, matches }: Props) {
  function prepareErrorText() {
    const errorText = text
    const arrayOfComponents = []
    let textIndex = 0
    matches?.forEach((match: any, i: number) => {
      const { offset, length } = match
      if (offset === textIndex) {
        const initial = errorText.substring(offset, offset + length)
        arrayOfComponents.push(<Word word={initial} match={match} />)
        textIndex = offset + length
      } else {
        const initial = errorText.substring(textIndex, offset)
        const component = errorText.substring(offset, offset + length)

        arrayOfComponents.push(<span className="py-1">{initial}</span>)
        arrayOfComponents.push(<Word word={component} match={match} />)
        textIndex = offset + length
      }
    })

    if (textIndex < text.length) {
      const final = errorText.substring(textIndex, text.length)
      arrayOfComponents.push(<span className="py-1">{final}</span>)
    }

    return arrayOfComponents
  }

  return (
    <div className="bg-gray-50 shadow-md p-4 rounded-sm">
      {prepareErrorText()}
    </div>
  )
}
