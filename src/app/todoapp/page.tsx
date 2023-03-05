import TodoMVC from "@/app/todoapp/utilities/components/TodoMVC"

export default function TodoPage() {
  return (
    <main className="flex flex-col w-[550px] mx-auto">
      <h1 className="text-2xl text-center">TodoMVC TypeScript</h1>
      <TodoMVC />
    </main>
  )
}
