"use client"
import { ChangeEvent } from "react"
import { useTodoStore } from "../store/todo"

export default function NewTodo() {
  const { value, setValue, addTodo } = useTodoStore()

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo({
      id: window.crypto.randomUUID(),
      text: value,
      completed: false,
    })
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        type="text"
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}
