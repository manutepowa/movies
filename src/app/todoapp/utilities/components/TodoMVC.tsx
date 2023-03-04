import React from "react"
import TodoList from "./TodoList"

function TodoMVC() {
  return (
    <div className="bg-gray-300 w-full p-4">
      <TodoList />
      <footer className="flex bg-gray-300 w-full">
        <span className="todo-count">
          <strong>0</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">
              All
            </a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  )
}

export default TodoMVC
