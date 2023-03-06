"use client"

import { useMemo } from "react"
import { useTodoStore } from "../store/todo"
import { FILTER_TODO } from "../types"

function TodoList() {
  const { todos, filterTodo, changeCompleted, removeTodo } = useTodoStore()

  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) => {
        if (filterTodo === FILTER_TODO.ACTIVE) {
          return !todo.completed
        }
        if (filterTodo === FILTER_TODO.COMPLETED) {
          return todo.completed
        }
        return true
      }),
    [filterTodo, todos]
  )

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <li className={`${todo.completed && "completed"}`} key={todo.id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={() => changeCompleted({ id: todo.id })}
            />
            <label>{todo.text}</label>
            <button
              className="destroy"
              onClick={() => removeTodo({ id: todo.id })}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
