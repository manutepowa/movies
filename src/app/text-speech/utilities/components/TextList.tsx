import { CheckIcon } from "@heroicons/react/24/outline"

interface TextListProps {
  textList: string[]
}

export default function TextList({ textList }: TextListProps) {
  return (
    <div className="flex flex-col items-center gap-y-4 w-full">
      <h1 className="text-xl">Text list</h1>
      <ul className="mb-8 space-y-4 text-left text-gray-500 rounded-lg border-solid border-2 border-gray-100 p-2">
        {textList.length === 0 && <p>There is no text</p>}
        {textList.map((text, index) => (
          <li key={index} className="flex items-center space-x-3">
            <CheckIcon className="h-5 w-5 text-green-500" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
