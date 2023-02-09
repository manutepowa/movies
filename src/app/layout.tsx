import "@/styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full bg-white">
      <head />
      <body>
        <div className="h-screen overflow-hidden">{children}</div>
      </body>
    </html>
  )
}
