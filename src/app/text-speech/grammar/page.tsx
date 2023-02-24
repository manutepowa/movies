import GrammarResponse from "../utilities/components/GrammarResponse"
import Writing from "../utilities/components/Writing"

export default function GrammarPage() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="text-xl">Write text</h1>
      <Writing />

      <h1 className="text-xl">Grammar corrections</h1>
      <GrammarResponse />
    </div>
  )
}
