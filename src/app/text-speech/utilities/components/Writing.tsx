"use client"

import useGrammar from "../store/useGrammar"

export default function Writing() {
  // const textRef = useRef<HTMLTextAreaElement>(null)
  const { text, updateText, handleSubmit } = useGrammar()

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[600px] justify-start"
    >
      <textarea
        rows={6}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="The speech text appears here"
        value={text}
        onChange={(e) => updateText(e.target.value)}
      ></textarea>
      <div className="my-4 flex gap-x-4 justify-end">
        <button
          type="reset"
          // onClick={reset}
        >
          Reset
        </button>
        <button
          type="submit"
          className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        >
          Check grammar
        </button>
      </div>
    </form>
  )
}
