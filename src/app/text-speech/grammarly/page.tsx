"use client"
import { GrammarlyEditor } from "../utilities/components/GrammarlyEditor"

export default function GrammarlyPage() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="text-xl">Write text</h1>
      <GrammarlyEditor />
    </div>
  )
}
