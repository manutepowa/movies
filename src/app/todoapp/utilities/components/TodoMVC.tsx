import React from "react"
import NewTodo from "./NewTodo"
import TodoFooter from "./TodoFooter"
import TodoList from "./TodoList"

function TodoMVC() {
  return (
    <div className="todoapp">
      <NewTodo />
      <TodoList />
      <TodoFooter />
    </div>
  )
}

export default TodoMVC
