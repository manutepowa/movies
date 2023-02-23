import Speech from "../utilities/components/Speech"
import Text from "../utilities/components/Text"

export default function SpeechToTextPage() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="text-xl">Speech to text</h1>
      <Speech />
      <Text />
    </div>
  )
}
