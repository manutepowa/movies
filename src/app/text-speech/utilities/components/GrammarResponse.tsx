"use client"
import useGrammar from "../store/useGrammar"

export default function GrammarResponse() {
  const grammar = useGrammar().checkedText
  return (
    <div>
      <h1 className="text-xl">Grammar corrections</h1>
    </div>
  )
}
