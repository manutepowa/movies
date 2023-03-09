import React from "react"
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react"
import useGrammar from "../store/useGrammar"

export function GrammarlyEditor() {
  const { text, updateText } = useGrammar()
  return (
    <GrammarlyEditorPlugin
      className="w-full"
      clientId="client_AQnEdNEAUrDEPW5vZNvcPe"
      config={{ autocomplete: "on" }}
    >
      <textarea
        rows={6}
        className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={text}
        onChange={(e) => updateText(e.target.value)}
      ></textarea>
    </GrammarlyEditorPlugin>
  )
}
