"use client"
import React from "react"
import { useTodoStore } from "../store/todo"
import NewTodo from "./NewTodo"
import TodoList from "./TodoList"

function TodoMVC() {
  const todosCount = useTodoStore((state) => state.todos.length)

  return (
    <div className="todoapp">
      <NewTodo />
      <TodoList />
      <footer className="footer">
        <span className="todo-count">
          <strong>{todosCount}</strong> item left
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
