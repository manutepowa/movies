"use client"
import { useTodoStore } from "../store/todo"
import { FILTER_TODO, FilterTodo } from "../types"

export default function TodoFooter(): JSX.Element {
  const { todosCount, filterTodo, setFilterTodo } = useTodoStore((state) => ({
    todosCount: state.todos.length,
    filterTodo: state.filterTodo,
    setFilterTodo: state.setFilterTodo,
  }))
  console.log({ ff: filterTodo })
  const applyFilter = ({ filterValue }: { filterValue: FilterTodo }) => {
    setFilterTodo({ filterValue })
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todosCount}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <button
            type="button"
            onClick={() => applyFilter({ filterValue: FILTER_TODO.ALL })}
            className={`${filterTodo === FILTER_TODO.ALL ? "selected" : ""}`}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => applyFilter({ filterValue: FILTER_TODO.ACTIVE })}
            className={`${filterTodo === FILTER_TODO.ACTIVE ? "selected" : ""}`}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => applyFilter({ filterValue: FILTER_TODO.COMPLETED })}
            className={`${
              filterTodo === FILTER_TODO.COMPLETED ? "selected" : ""
            }`}
          >
            Completed
          </button>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}
