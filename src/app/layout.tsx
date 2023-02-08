import "@/styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex bg-slate-700 text-white h-screen w-full justify-center p-12">
          {children}
        </div>
      </body>
    </html>
  )
}
