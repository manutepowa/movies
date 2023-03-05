"use client"

import { useTodoStore } from "../store/todo"

function TodoList() {
  const { todos, changeCompleted, removeTodo } = useTodoStore()

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
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
