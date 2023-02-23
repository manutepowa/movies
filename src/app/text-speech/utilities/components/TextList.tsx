import Phrase from "./Phrase"

interface TextListProps {
  textList: string[]
}

export default function TextList({ textList }: TextListProps) {
  return (
    <div className="flex flex-col items-center gap-y-4 w-full mt-8">
      <h1 className="text-lg">All phrases</h1>
      <div className="flex flex-col mb-8 space-y-4 text-left text-gray-500 rounded-lg border-solid border-2 border-gray-100 p-2">
        {textList.length === 0 && <p>There is no text</p>}
        {textList.map((text, index) => (
          <Phrase key={index} phrase={text} />
        ))}
      </div>
    </div>
  )
}
