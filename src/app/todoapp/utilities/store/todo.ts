import { create } from "zustand"

export interface Todo {
  id: string
  text: string
  completed: boolean
}

export interface TodoStore {
  todos: Todo[]
  value: string
  setValue: (value: string) => void
  addTodo: (todo: Todo) => void
  removeTodo: ({ id }: Pick<Todo, "id">) => void
  changeCompleted: ({ id }: { id: string }) => void
}

const initialState: Todo[] = [
  { id: "1", text: "Learn React", completed: true },
  { id: "2", text: "Learn React Native", completed: false },
  { id: "3", text: "Learn Zustand", completed: false },
]

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: initialState,
  value: "",
  setValue: (value) => set({ value }),
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
