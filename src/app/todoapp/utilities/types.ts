export interface Todo {
  id: string
  text: string
  completed: boolean
}

export type TodoID = Pick<Todo, "id">

export enum FILTER_TODO {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}

export type FilterTodo = keyof typeof FILTER_TODO
