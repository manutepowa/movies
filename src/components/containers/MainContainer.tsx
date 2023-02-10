export default function MainContainer({ children }: { children: JSX.Element }) {
  return (
    <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
      {/* Start main area*/}
      <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
        <div className="h-full rounded-lg border-2 border-dashed border-gray-200 p-4">
          {children}
        </div>
      </div>
      {/* End main area */}
    </main>
  )
}
