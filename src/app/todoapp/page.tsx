import TodoMVC from "@/app/todoapp/utilities/components/TodoMVC"

export default function TodoPage() {
  return (
    <main className="flex flex-col max-w-lg mx-auto items-center gap-y-4">
      <h1 className="text-2xl">TodoMVC TypeScript</h1>
      <TodoMVC />
    </main>
  )
}
