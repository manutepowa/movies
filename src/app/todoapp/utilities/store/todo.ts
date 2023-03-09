import { create } from "zustand"
import type { Todo, TodoID } from "../types"
import { FILTER_TODO, FilterTodo } from "../types"

export interface TodoStore {
  todos: Todo[]
  value: string
  setValue: (value: string) => void
  filterTodo: FilterTodo
  setFilterTodo: ({ filterValue }: { filterValue: FilterTodo }) => void
  addTodo: (todo: Todo) => void
  removeTodo: ({ id }: TodoID) => void
  changeCompleted: ({ id }: { id: string }) => void
}

const initialState: Todo[] = [
  { id: "1", text: "Learn React", completed: true },
  { id: "2", text: "Learn React Native", completed: false },
  { id: "3", text: "Learn Zustand", completed: false },
]

export const useTodoStore = create<TodoStore>((set) => ({
  todos: initialState,
  value: "",
  setValue: (value) => set({ value }),
  filterTodo: FILTER_TODO.ALL,
  setFilterTodo: ({ filterValue }: { filterValue: FilterTodo }) =>
    set({ filterTodo: filterValue }),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: ({ id }) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
  changeCompleted: ({ id }) =>
    set((state) => {
      const todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo
        }
      })
      return { todos }
    }),
}))
