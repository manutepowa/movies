"use client"
import React, { useEffect, useRef, useState } from "react"
interface Props {
  word: string
  match: any
}

function useHover() {
  const [value, setValue] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)
  useEffect(
    () => {
      const node = ref.current
      if (node) {
        node.addEventListener("mouseover", handleMouseOver)
        node.addEventListener("mouseout", handleMouseOut)
        return () => {
          node.removeEventListener("mouseover", handleMouseOver)
          node.removeEventListener("mouseout", handleMouseOut)
        }
      }
    },
    [ref.current] // Recall only if ref changes
  )
  return [ref, value]
}

export default function Word({ word, match }: Props) {
  console.log(match)
  const [hoverRef, isHovered] = useHover()
  return (
    <span
      ref={hoverRef}
      className="bg-red-200 py-1 px-2 rounded-sm relative cursor-pointer break-words"
    >
      {word}
      {isHovered && (
        <div className="absolute bottom-0 inline-block w-64 px-4 py-3 mb-10 -ml-32 bg-indigo-100 rounded-lg shadow-sm">
          <ul className="mb-2">
            <li className="text-sm text-gray-600">
              <span className="font-bold">Message: </span>
              {match.message}
            </li>
            <li className="text-sm text-gray-600">
              <span className="font-bold">Suggested correction: </span>
              <ol type="1">
                {match.replacements
                  .splice(0, 4)
                  .map((replacement: string, index: number) => (
                    <li key={index}>
                      {index + 1}. {replacement.value}
                    </li>
                  ))}
              </ol>
            </li>
          </ul>
          <span
            className="absolute bottom-0 right-0 w-5 h-5 -mb-1 transform rotate-45 bg-indigo-100"
            style={{ left: "40%" }}
          ></span>
        </div>
      )}
    </span>
  )
}
