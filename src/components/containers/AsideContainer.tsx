export default function AsideContainer({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <aside className="relative hidden w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
      {/* Start secondary column (hidden on smaller screens) */}
      <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
        <div className="h-full rounded-lg border-2 border-dashed border-gray-200 p-4">
          {children}
        </div>
      </div>
      {/* End secondary column */}
    </aside>
  )
}
